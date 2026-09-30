#!/usr/bin/env node
/**
 * Copy and structured-data lint over the built HTML (run after `next build`):
 *   node scripts/check-copy.mjs
 * Lints EVERY built page (all .html under .next/server/app). Fails on: em
 * dashes in reader-facing text; banned words and wrong or overstated facts;
 * the price without its VAT basis (owner decision: R 4 499 per month excl.
 * VAT); JSON-LD that is invalid, carries the wrong price or VAT flag, or lists
 * Fast Pay or Insurance as a feature or offer.
 * Legal pages (owner-controlled wording) are checked for em dashes only.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), '.next/server/app');
const LEGAL = ['privacy', 'terms', 'paia-manual', 'delete-account'];
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, out);
    else if (e.name.endsWith('.html')) out.push(path.relative(ROOT, f).replace(/\.html$/, ''));
  }
  return out;
}
const PAGES = walk(ROOT).filter((p) => !p.startsWith('_') || p === '_not-found').sort();

const BANNED = [
  [/—/, 'em dash'],
  [/R\s?4[ ,.]?5\d\d\b/, 'old price R 4 500'],
  [/0\.25\s?%/, '0.25% (use 0,25%)'],
  [/48[\s-]?(hours|hrs|hour)/i, '48 hours claim'],
  [/FastPay/, 'FastPay (use Fast Pay, coming soon only)'],
  [/\bCapital\b/, 'Capital'],
  [/fleet finance/i, 'fleet finance'],
  [/\b(revolutionary|seamless|cutting-edge|game-changing|unlock|supercharge|effortless|autopilot|AI-powered|trusted by)\b/i, 'banned word'],
  [/\breal-time\b/i, 'real-time'],
  [/\bAI\b/, '"AI" label (describe Copilot as a language model)'],
  [/\bfree trial\b(?!\?)/i, 'free trial claim'],
  [/4\s?499[^.]{0,40}\bincl\.?\s?VAT/i, 'price marked incl. VAT (it is excl. VAT)'],
  [/4\s?499 (per|a) month(?!,? (is )?excl)/i, 'price without "excl. VAT"'],
  [/every SANRAL (mainline )?(toll )?plaza/i, 'overclaim: say "the 31 SANRAL mainline plazas"'],
  [/\blive diesel\b/i, 'live diesel (it is this month\'s FIASA diesel)'],
  [/Terms for notice/i, 'cancellation must say only "Month to month. No long-term contract."'],
  [/Cartrack login|with your login/i, 'Cartrack takes API credentials, not the normal login'],
];

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;| /g, ' ')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
}

let failures = 0;
const fail = (page, msg) => {
  failures++;
  console.error(`FAIL ${page}: ${msg}`);
};

function load(page) {
  const f = path.join(ROOT, `${page}.html`);
  if (!fs.existsSync(f)) {
    fail(page, `missing ${f}`);
    return null;
  }
  return fs.readFileSync(f, 'utf8');
}

const failedPages = new Set();
for (const page of PAGES) {
  const html = load(page);
  if (!html) continue;
  const text = visibleText(html);
  const rules = LEGAL.includes(page) ? BANNED.slice(0, 1) : BANNED;
  for (const [re, label] of rules) {
    const m = text.match(re);
    if (m) {
      failedPages.add(page);
      const i = m.index ?? 0;
      fail(page, `${label}: "...${text.slice(Math.max(0, i - 50), i + 50)}..."`);
    }
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const raw of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      fail(page, `invalid JSON-LD: ${e.message}`);
      continue;
    }
    const nodes = data['@graph'] ?? [data];
    for (const n of nodes) {
      if (n['@type'] === 'Offer' && n.price !== 4499) fail(page, `Offer price ${n.price}`);
      if (n['@type'] === 'Offer' && n.valueAddedTaxIncluded !== false) fail(page, 'Offer must carry valueAddedTaxIncluded: false (price is excl. VAT)');
      if (n['@type'] === 'SoftwareApplication') {
        const list = JSON.stringify(n.featureList ?? []) + JSON.stringify(n.offers ?? {});
        if (/fast ?pay|insurance/i.test(list)) fail(page, 'Fast Pay or Insurance in featureList/offers');
        if (n.aggregateRating) fail(page, 'aggregateRating present');
      }
    }
  }
  console.log(`ok   ${page} (${blocks.length} JSON-LD block${blocks.length === 1 ? '' : 's'})`);
}

if (failures) {
  console.error(`\n${failures} copy check failure(s) on ${failedPages.size} page(s): ${[...failedPages].join(', ')}`);
  process.exit(1);
}
console.log('\nCopy checks passed.');
