#!/usr/bin/env node
/**
 * Copy and structured-data lint over the built HTML (run after `next build`):
 *   node scripts/check-copy.mjs
 * Fails on: em dashes in reader-facing text; banned words and wrong facts on
 * the rebuilt pages; a VAT suffix next to the price while FACTS.price.vatBasis
 * is null (owner question VAT-1); JSON-LD that is invalid, carries the wrong
 * price, or lists Fast Pay or Insurance as a feature or offer.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), '.next/server/app');
// Rebuilt pages (phase A): full copy rules. Legal pages: em dashes only
// (their content is owner-controlled legal text).
const REBUILT = ['index', 'pricing', 'contact', 'contact/sent', '_not-found'];
const LEGAL = ['privacy', 'terms', 'paia-manual', 'delete-account'];

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
  [/4\s?499[^.]{0,40}\b(incl|excl)\.?\s?VAT/i, 'VAT suffix on the price while VAT-1 is open'],
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

for (const page of [...REBUILT, ...LEGAL]) {
  const html = load(page);
  if (!html) continue;
  const text = visibleText(html);
  const rules = LEGAL.includes(page) ? BANNED.slice(0, 1) : BANNED;
  for (const [re, label] of rules) {
    const m = text.match(re);
    if (m) {
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
      if (n['@type'] === 'Offer' && 'valueAddedTaxIncluded' in n) fail(page, 'valueAddedTaxIncluded set while VAT-1 is open');
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
  console.error(`\n${failures} copy check failure(s).`);
  process.exit(1);
}
console.log('\nCopy checks passed.');
