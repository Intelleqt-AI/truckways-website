#!/usr/bin/env node
/**
 * Copy and structured-data lint over the built HTML (run after `next build`):
 *   node scripts/check-copy.mjs
 * Lints EVERY built page (all .html under .next/server/app). Fails on: em
 * dashes in reader-facing text; banned words and wrong or overstated facts;
 * any statement that VAT is added to, or computed on, the TruckWys price
 * (owner decision: TruckWys is not VAT registered, so R 4 499 and the 0,25%
 * are the full amounts); cancellation wording other than 30 days' written
 * notice (owner decision: Terms 6 stands); JSON-LD that is invalid, carries
 * the wrong price, states a VAT flag on the Offer, or lists
 * Fast Pay or Insurance as a feature or offer; sample-data captions; the
 * company address or Information Officer outside the legal pages (owner R4).
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
  // Not VAT registered (owner decision): never say VAT is added to, or included in, the TruckWys price.
  [/4\s?499[^.]{0,40}\b(incl|excl)\.?\s?VAT/i, 'VAT basis on the TruckWys price (TruckWys is not VAT registered)'],
  [/VAT (at 15% )?is added|(15% )?VAT (is )?added to your|added to your (TruckWys|subscription) invoice/i, 'claims VAT is added to the TruckWys bill (TruckWys is not VAT registered)'],
  [/per month[^.]{0,20}incl\.?\s?VAT/i, 'TruckWys total incl. VAT (TruckWys is not VAT registered)'],
  [/subscription (is|and the load fees are) excl/i, 'subscription VAT basis (TruckWys is not VAT registered)'],
  [/one plan,? excl\.? VAT/i, 'price VAT basis (TruckWys is not VAT registered)'],
  [/everyone overdue|all overdue at once/i, 'bulk reminders: the app sends per invoice after a preview'],
  [/\bodometer\b/i, 'odometer: cartrack_sync stores location, speed, ignition, not odometer'],
  [/invoice goes out/i, 'the invoice is raised, ready to send (nothing is emailed automatically)'],
  [/Driver costs?\s+0\s+0\s+0/i, 'zero P&L row'],
  [/every SANRAL (mainline )?(toll )?plaza/i, 'overclaim: say "the 31 SANRAL mainline plazas"'],
  [/\blive diesel\b/i, 'live diesel (it is this month\'s FIASA diesel)'],
  [/Terms for notice/i, 'say the notice period on the page: "Cancel with 30 days\' written notice."'],
  [/pricing excludes VAT|excl(usive of|\.?) VAT where applicable/i, 'VAT note on the TruckWys price (TruckWys is not VAT registered)'],
  [/cancel (at )?any ?time|no notice (period|needed|required)|without notice/i, 'cancellation needs 30 days\' written notice (Terms 6)'],
  [/Cartrack login|with your login/i, 'Cartrack takes API credentials, not the normal login'],
  // Owner R4: no sample-data captions anywhere.
  [/Sample data from a fictional|Figures are illustrative/i, 'sample-data caption (owner R4: removed site-wide)'],
  // Owner R4: the address and the Information Officer live only in the Privacy policy and the PAIA manual
  // (the footer keeps one line: company name and registration number).
  [/Keurboom|Information Officer is\b/i, 'company address or Information Officer outside Privacy and PAIA (owner R4)'],
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

  // Critic R3: "R" and its amount are joined by a non-breaking space, so the symbol never wraps away.
  if (!LEGAL.includes(page)) {
    const body = html.replace(/^[\s\S]*?<body[^>]*>/i, '').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
    const m = body.match(/(?<![A-Za-z])R \d/);
    if (m) {
      failedPages.add(page);
      const i = m.index ?? 0;
      fail(page, `"R" and amount split by a normal space: "...${body.slice(Math.max(0, i - 40), i + 40)}..."`);
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
      if (n['@type'] === 'Offer' && 'valueAddedTaxIncluded' in n) fail(page, 'Offer must not state a VAT flag (not VAT registered: the price is the full amount)');
      if (n['@type'] === 'Offer' && n.priceSpecification && 'valueAddedTaxIncluded' in n.priceSpecification) fail(page, 'priceSpecification must not state a VAT flag (not VAT registered)');
      if (n['@type'] === 'SoftwareApplication') {
        const list = JSON.stringify(n.featureList ?? []) + JSON.stringify(n.offers ?? {});
        if (/fast ?pay|insurance/i.test(list)) fail(page, 'Fast Pay or Insurance in featureList/offers');
        if (n.aggregateRating) fail(page, 'aggregateRating present');
      }
    }
  }
  // Cancellation: wherever a page talks about the contract or cancelling the
  // subscription, it must give the 30-day notice wording (owner decision, Terms 6).
  if (!LEGAL.includes(page) && /long-term contract|month to month|Is there a contract|cancel (your|the) subscription/i.test(text) && !/30 days' written notice/i.test(text)) {
    failedPages.add(page);
    fail(page, "mentions the contract or cancelling but not \"Cancel with 30 days' written notice.\"");
  }
  console.log(`ok   ${page} (${blocks.length} JSON-LD block${blocks.length === 1 ? '' : 's'})`);
}

if (failures) {
  console.error(`\n${failures} copy check failure(s) on ${failedPages.size} page(s): ${[...failedPages].join(', ')}`);
  process.exit(1);
}
console.log('\nCopy checks passed.');
