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
    // TODO(owner) VAT-1: is R 4 499 incl. or excl. VAT? Until answered the
    // site never writes "incl." or "excl." VAT next to the price.
    vatBasis: null as null | 'incl' | 'excl',
  },
  fee: {
    pct: 0.25,
    // VERIFY Q2: the code charges on the invoice total (incl. VAT). The site
    // says "invoice value" and states no basis until the owner confirms.
    basis: 'delivered load invoice value',
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

/* Rendered strings. Keep all price wording here. */
// TODO(owner) VAT-1: add "excl. VAT" or "incl. VAT" once confirmed.
export const PRICE = 'R 4 499';
export const PRICE_LINE = `${PRICE} per month`;
export const FEE = '0,25%';
export const FEE_LINE = "0,25% of each delivered load's invoice value";
export const PRICE_AND_FEE = `${PRICE_LINE}, plus ${FEE_LINE}.`;
export const CANCELLATION = 'Month to month. No long-term contract.';
