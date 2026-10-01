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
    // VAT-2 decided by the owner: TruckWys is not registered for VAT, so no VAT is
    // charged on the subscription or the fee. R 4 499 is the full amount, which is
    // what billing charges (paystack.py MONTHLY_FEE, subscription_billing.py,
    // delivery_fee_billing.py). The Offer JSON-LD carries no VAT flag (see schema.ts).
    vatBasis: 'not-registered' as const,
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
  // Live on Google Play (verified by the owner, 1 Oct 2026).
  android: 'https://play.google.com/store/apps/details?id=za.co.truckwys.mobile',
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
  // Q5 decided by the owner: production runs on AWS in Cape Town.
  hosting: 'Amazon Web Services, Cape Town region (af-south-1)',
} as const;

/* Rendered strings. Keep all price wording here. The spaces inside money are
   non-breaking (U+00A0) so "R" never wraps away from its figure. */
const NB = '\u00a0';
export const PRICE = `R${NB}4${NB}499`;
/** "R 4 499 per month". The full amount: TruckWys is not registered for VAT (FACTS.price.vatBasis). */
export const PRICE_LINE = `${PRICE} per month`;
/** Answer to "Do you charge VAT?" (owner decision: not VAT registered). */
export const VAT_ANSWER =
  "TruckWys isn't registered for VAT yet, so there's no VAT on the subscription or the fee. If that changes, we'll tell you in writing before it applies.";
export const FEE = '0,25%';
/**
 * The fee is worked out on the invoice total, which includes the VAT on your customer's invoice (owner
 * decision; matches the code). Critic R3: "(incl. VAT)" after the line read as if it applied to R 4 499,
 * so the line says "invoice total" and the price line ends with NO_VAT.
 */
export const FEE_LINE = `0,25% of each delivered load's invoice total`;
/** Not VAT registered (owner decision), said as a plain fact after the price. */
export const NO_VAT = 'No VAT on our fees.';
export const PRICE_AND_FEE = `${PRICE_LINE}, plus ${FEE_LINE}. ${NO_VAT}`;
/** Short form for tight spots (CTA bands, the phone menu). */
export const PRICE_SHORT = `${PRICE_LINE}, plus 0,25% per delivered load.`;
/** Owner decision: Terms 6 stands (30 days' written notice). Use this wording wherever cancellation comes up. */
export const CANCELLATION = "Month to month. Cancel with 30\u00a0days' written notice.";
