/**
 * Every product fact the site states comes from here. Page copy, JSON-LD and
 * llms.txt read these values so a number can never drift between surfaces.
 * Evidence for each row: scratchpad MARKETING.md §0 fact sheet.
 *
 * A null value means the owner has not confirmed it yet. scripts/check-copy.mjs
 * fails if a page renders copy that depends on a null value.
 */
export const FACTS = {
  price: {
    monthly: 4499,
    currency: 'ZAR',
    // VAT-1 answered by the owner (30 Sep 2026): the subscription is quoted
    // excl. VAT, matching Terms 5.5 ("All fees are exclusive of VAT").
    vatBasis: 'excl' as 'incl' | 'excl',
  },
  fee: {
    pct: 0.25,
    // Q2 answered by the owner: the fee is charged on the delivered load's
    // invoice total incl. VAT (truckwys-backend delivery_fee_billing.py uses
    // invoice.total_amount, which includes VAT).
    basis: 'delivered load invoice value, incl. VAT',
    onVatInclusiveTotal: true,
  },
  tollPlazas: 31,
  tollTariffEffective: '2026-03-01',
  tollGazette: ['GG 54087', 'GG 54088'],
  reports: 9,
  reportNames: [
    'Profit and loss',
    'Sales by month',
    'Cash movement',
    'Debtors age analysis',
    'Customer statement',
    'Revenue by customer',
    'Revenue by lane',
    'Expense report',
    'VAT report',
  ],
  roles: ['Admin', 'Manager', 'Operator', 'Dispatcher', 'Viewer', 'Driver'],
  comingSoon: ['Fast Pay', 'Insurance'],
  integrations: {
    cartrack: 'live',
    ctrlfleet: 'live',
    xero: null as null | 'live' /* TODO(owner) Q4 */,
    api: 'live',
    csv: 'live',
  },
  appStore: 'https://apps.apple.com/za/app/truckwys/id6796449044',
  android: 'coming-soon',
  vatRate: 0.15,
  company: {
    name: 'TruckWys (Pty) Ltd',
    reg: '2025/773091/07',
    street: '12 Keurboom Road',
    locality: 'Claremont',
    city: 'Cape Town',
    postcode: '7800',
    address: '12 Keurboom Road, Claremont, Cape Town, 7800',
    infoOfficer: 'Grant McEvoy',
  },
  hosting: null as null | string /* TODO(owner) Q5 */,
} as const;

/* Rendered strings. Keep all price wording here. The spaces inside money are
   non-breaking (U+00A0) so "R" never wraps away from its figure. */
const NB = '\u00a0';
export const PRICE = `R${NB}4${NB}499`;
/** "R 4 499 per month excl. VAT" (owner decision 30 Sep 2026, matches Terms 5.5). */
export const PRICE_LINE = `${PRICE} per month excl.${NB}VAT`;
export const FEE = '0,25%';
/** The fee is worked out on the invoice total including VAT (owner decision; matches the code). */
export const FEE_LINE = `0,25% of each delivered load's invoice value (incl.${NB}VAT)`;
export const PRICE_AND_FEE = `${PRICE_LINE}, plus ${FEE_LINE}.`;
/** Short form for tight spots (CTA bands, the phone menu). */
export const PRICE_SHORT = `${PRICE_LINE}, plus 0,25% per delivered load.`;
/** Owner is still deciding notice terms: say only this. Never point to the Terms for notice. */
export const CANCELLATION = 'Month to month. No long-term contract.';
