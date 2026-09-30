/**
 * Extra sample data for the phase B product fragments (/product, the feature
 * pages and /integrations). Everything is DERIVED from content/demo-data.ts,
 * which stays the single source: the same fictional company (Karoo Line
 * Logistics), the same six customers, the same quoted and invoiced load, the
 * same overdue invoices, ageing buckets, pipeline counts, lanes and monthly
 * revenue and costs. Where a figure is new (a declined quote, an expense line)
 * it is chosen so every total still reconciles with demo-data.ts. Nothing here
 * is a real company.
 */
import {
  AGEING, CUSTOMERS, INVOICE, KPIS, LANES, LANE_THIN, LATEST_QUOTES, N3_TOTAL_INCL, OVERDUE, OVER_60, PIPELINE, QUOTE, REVENUE_VS_COSTS, TODAY,
} from '../../content/demo-data';

const r2 = (n: number) => Math.round(n * 100) / 100;

/* ------------------------------------------------------------ quotes board (S4) */
export type BoardQuote = { number: string; customer: string; from: string; to: string; amount: number; date: string; booked?: boolean };

/** Kilometres per trip for each lane (road distance, one way). */
export const LANE_KM: Record<string, number> = {
  'Johannesburg to Durban': QUOTE.km,
  'Johannesburg to Cape Town': 1_398,
  'Pretoria to Lebombo border': 470,
  'Durban to Richards Bay': 178,
  'Cape Town to Gqeberha': 760,
  'Johannesburg to Gaborone': 360,
};

/** A lane's typical price: its revenue per km times its distance, to the nearest rand. */
const lanePrice = (lane: string) => {
  const l = LANES.find((x) => x.lane === lane);
  return Math.round((l ? l.perKm : 40) * LANE_KM[lane]);
};
const latest = (status: string) => LATEST_QUOTES.find((q) => q.status === status)!;
const PROV: Record<string, string> = {
  Johannesburg: 'Johannesburg, GP', Durban: 'Durban, KZN', 'Cape Town': 'Cape Town, WC', 'Richards Bay': 'Richards Bay, KZN',
  Pretoria: 'Pretoria, GP', 'Lebombo border': 'Lebombo border, MP', Gqeberha: 'Gqeberha, EC', Gaborone: 'Gaborone, BW',
};
const fromLatest = (status: string, date: string): BoardQuote => {
  const q = latest(status);
  const [a, b] = q.route.split(' to ');
  return { number: q.number, customer: q.customer, from: PROV[a] ?? a, to: PROV[b] ?? b, amount: Math.round(q.total), date };
};

type Col = { name: string; tone: 'neutral' | 'info' | 'success' | 'danger'; count: number; cards: BoardQuote[]; hidden: number[] };
const COLS: Col[] = [
  {
    name: 'Draft',
    tone: 'neutral',
    count: PIPELINE.draft,
    cards: [
      fromLatest('Draft', '28 Sep'),
      { number: 'QT-20260930-4449', customer: CUSTOMERS.kwagga, from: 'Johannesburg, GP', to: 'Cape Town, WC', amount: lanePrice('Johannesburg to Cape Town'), date: '30 Sep' },
    ],
    hidden: [lanePrice('Pretoria to Lebombo border')],
  },
  {
    name: 'Sent',
    tone: 'info',
    count: PIPELINE.sent,
    cards: [
      fromLatest('Sent', '26 Sep'),
      { number: 'QT-20260929-4445', customer: CUSTOMERS.umhlaba, from: 'Pretoria, GP', to: 'Lebombo border, MP', amount: lanePrice('Pretoria to Lebombo border'), date: '29 Sep' },
      { number: 'QT-20260927-4440', customer: CUSTOMERS.vaalkop, from: 'Johannesburg, GP', to: 'Gaborone, BW', amount: 18_970, date: '27 Sep' },
    ],
    hidden: [lanePrice('Cape Town to Gqeberha'), lanePrice('Durban to Richards Bay')],
  },
  {
    name: 'Accepted',
    tone: 'success',
    count: PIPELINE.accepted,
    cards: [
      { number: QUOTE.number, customer: QUOTE.customer, from: 'Johannesburg, GP', to: 'Durban, KZN', amount: Math.round(QUOTE.quotePrice), date: '21 Sep', booked: true },
      { number: 'QT-20260918-4409', customer: CUSTOMERS.ridgeback, from: 'Durban, KZN', to: 'Richards Bay, KZN', amount: lanePrice('Durban to Richards Bay'), date: '18 Sep', booked: true },
    ],
    hidden: [61_650, 28_590, 28_590, 19_650, 27_060, 6_800, 6_800],
  },
  {
    name: 'Declined',
    tone: 'danger',
    count: 4,
    cards: [
      { number: 'QT-20260917-4405', customer: CUSTOMERS.kwagga, from: 'Johannesburg, GP', to: 'Durban, KZN', amount: 31_880, date: '17 Sep' },
      { number: 'QT-20260911-4392', customer: CUSTOMERS.umhlaba, from: 'Pretoria, GP', to: 'Lebombo border, MP', amount: 20_140, date: '11 Sep' },
    ],
    hidden: [7_450, 64_300],
  },
];
export const BOARD = COLS.map((c) => ({ ...c, total: c.cards.reduce((s, q) => s + q.amount, 0) + c.hidden.reduce((s, x) => s + x, 0) }));
export const BOARD_COUNT = BOARD.reduce((s, c) => s + c.count, 0);

/* ------------------------------------------------------------ debtors age (S8) */
/**
 * The six customers with the largest balances, out of the 30 who owe money.
 * Sandveld is the largest at R 86 410, the Copilot answer ("Who owes us the
 * most right now?"). Overdue amounts are the invoices in OVERDUE. The Total
 * row is every customer: it equals AGEING and KPIS.owed.
 */
const bucketOf = (daysLate: number) => (daysLate <= 0 ? 0 : daysLate <= 30 ? 1 : daysLate <= 60 ? 2 : daysLate <= 90 ? 3 : 4);
const CURRENT: [keyof typeof CUSTOMERS, number, number][] = [
  ['sandveld', 37_650, 3],
  ['suikerbos', r2(INVOICE.total + 30_000), 4],
  ['kwagga', 41_380, 3],
  ['umhlaba', 48_920, 4],
  ['ridgeback', 45_900, 5],
  ['vaalkop', 38_300, 3],
];
export type DebtorRow = { customer: string; invoices: number; b: [number, number, number, number, number]; total: number };
export const DEBTORS: DebtorRow[] = CURRENT.map(([k, cur, n]) => {
  const name = CUSTOMERS[k];
  const b: [number, number, number, number, number] = [cur, 0, 0, 0, 0];
  for (const o of OVERDUE.filter((x) => x.customer === name)) b[bucketOf(o.daysLate)] = r2(b[bucketOf(o.daysLate)] + o.amount);
  return { customer: name, invoices: n, b, total: r2(b.reduce((s, x) => s + x, 0)) };
}).sort((a, b) => b.total - a.total);
export const DEBTOR_CUSTOMERS = 30;
export const DEBTOR_INVOICES = 118;
export const DEBTORS_TOTAL = KPIS.owed;
export const DEBTOR_STATS = (() => {
  const weighted = OVERDUE.reduce((s, o) => s + o.amount * o.daysLate, 0) / OVERDUE.reduce((s, o) => s + o.amount, 0);
  const top = DEBTORS[0];
  return {
    overduePct: Math.round((KPIS.pastDue / KPIS.owed) * 100),
    overdue: KPIS.pastDue,
    over60Pct: Math.round((OVER_60 / KPIS.owed) * 100),
    over60: OVER_60,
    avgDaysLate: Math.round(weighted),
    topShare: Math.round((top.total / KPIS.owed) * 100),
    topName: top.customer,
  };
})();
export { AGEING };

/* ------------------------------------------------------ customer statement */
const sandveldOverdue = OVERDUE.find((o) => o.customer === CUSTOMERS.sandveld)!;
export const STATEMENT = {
  customer: CUSTOMERS.sandveld,
  asAt: TODAY,
  rows: [
    { date: '2026-06-04', ref: 'INV-20260604-0988', amount: 44_120 },
    { date: '2026-07-03', ref: 'Payment, EFT', amount: -44_120 },
    { date: sandveldOverdue.issued, ref: sandveldOverdue.number, amount: sandveldOverdue.amount },
    { date: '2026-09-11', ref: 'INV-20260911-1079', amount: 21_480 },
    { date: '2026-09-24', ref: 'INV-20260924-1085', amount: 16_170 },
  ],
};
export const STATEMENT_BALANCE = STATEMENT.rows.reduce((s, r) => s + r.amount, 0); // 86 410

/* ------------------------------------------------------------ P&L (S10) */
/** Monthly figures in whole rand. REVENUE_VS_COSTS is in R thousands; these round to it exactly. */
const JITTER = [184, 312, 97, 426, 251, 138];
export const PNL_MONTHS = REVENUE_VS_COSTS.map((m, i) => {
  const revenue = m.revenue * 1000 + JITTER[i % 6];
  const costs = m.costs * 1000 + JITTER[(i + 2) % 6];
  const fuel = Math.round(costs * 0.44);
  const tolls = Math.round(costs * 0.06);
  const driver = Math.round(costs * 0.16);
  const maint = Math.round(costs * 0.09);
  const direct = fuel + tolls + driver + maint;
  const insurance = Math.round(costs * 0.07);
  const admin = costs - direct - insurance;
  const year = ['Oct', 'Nov', 'Dec'].includes(m.m) ? 2025 : 2026;
  return { m: `${m.m} ${year}`, revenue, fuel, tolls, driver, maint, direct, gross: revenue - direct, insurance, admin, costs, net: revenue - costs };
});
const LAST3 = PNL_MONTHS.slice(-3);
const sum3 = (k: keyof (typeof PNL_MONTHS)[number]) => LAST3.reduce((s, m) => s + (m[k] as number), 0);
export const PNL_TOTAL = {
  m: 'Total',
  revenue: sum3('revenue'), fuel: sum3('fuel'), tolls: sum3('tolls'), driver: sum3('driver'), maint: sum3('maint'), direct: sum3('direct'),
  gross: sum3('gross'), insurance: sum3('insurance'), admin: sum3('admin'), costs: sum3('costs'), net: sum3('net'),
};
const sum12 = (k: 'revenue' | 'costs' | 'net') => PNL_MONTHS.reduce((s, m) => s + m[k], 0);

/* ------------------------------------------------------------ VAT report (S11) */
/** Output VAT, invoice basis, last three months. Invoiced excl. VAT runs a little ahead of cash received. */
export const VAT_ROWS = [
  { m: 'Jul 2026', invoices: 55, ex: 1_571_240 },
  { m: 'Aug 2026', invoices: 52, ex: 1_486_730 },
  { m: 'Sep 2026', invoices: 57, ex: 1_629_915 },
].map((r) => ({ ...r, vat: r2(r.ex * 0.15), incl: r2(r.ex * 1.15) }));
export const VAT_TOTAL = {
  invoices: VAT_ROWS.reduce((s, r) => s + r.invoices, 0),
  ex: VAT_ROWS.reduce((s, r) => s + r.ex, 0),
  vat: r2(VAT_ROWS.reduce((s, r) => s + r.vat, 0)),
  incl: r2(VAT_ROWS.reduce((s, r) => s + r.incl, 0)),
};

/* ------------------------------------------------------------ reports index (S9) */
const invoicedEx12 = Math.round(sum12('revenue') * 1.012);
export const REPORTS_INDEX = [
  { name: 'Profit and loss', q: 'Did you make a profit, month by month?', fig: sum12('net'), note: 'Net profit, cash basis' },
  { name: 'Sales by month', q: 'How much you invoiced each month, and what is paid.', fig: Math.round(invoicedEx12 * 1.15), note: 'Invoiced incl. VAT' },
  { name: 'Cash movement', q: 'What money came in and went out?', fig: Math.round(sum12('net') * 0.86), note: 'Net movement' },
  { name: 'Debtors age analysis', q: 'Who owes you, and how late is it?', fig: KPIS.owed, note: 'Owed to you now' },
  { name: 'Customer statement', q: 'What one customer owes, invoice by invoice.', count: DEBTOR_CUSTOMERS, note: 'Customers owe you' },
  { name: 'Revenue by customer', q: 'Which customers bring in the revenue?', count: 34, note: 'Customers invoiced' },
  { name: 'Revenue by lane', q: 'Which routes earn the most, and per km?', fig: invoicedEx12, note: 'Delivered, excl. VAT' },
  { name: 'Expense report', q: 'Where the money goes, by category and truck.', fig: sum12('costs'), note: 'Approved costs' },
  { name: 'VAT report', q: 'How much output VAT you charged.', fig: Math.round(invoicedEx12 * 0.15), note: 'Output VAT, invoice basis' },
];

/* ------------------------------------------------------------ lanes scatter (S12) */
export const LANE_POINTS = [
  ...LANES.map((l) => ({ lane: l.lane, perKm: l.perKm, km: LANE_KM[l.lane], trips: l.trips, thin: false })),
  { lane: LANE_THIN.lane, perKm: 47.9, km: LANE_KM[LANE_THIN.lane], trips: LANE_THIN.trips, thin: true },
];
/** Fleet average revenue per km, weighted by kilometres driven on ranked lanes. */
export const FLEET_AVG_PER_KM = (() => {
  const pts = LANE_POINTS.filter((p) => !p.thin);
  const rev = pts.reduce((s, p) => s + p.perKm * p.km * p.trips, 0);
  const km = pts.reduce((s, p) => s + p.km * p.trips, 0);
  return r2(rev / km);
})();

/* ------------------------------------------------------------ expenses (S18) */
const sep = PNL_MONTHS[PNL_MONTHS.length - 1];
const aug = PNL_MONTHS[PNL_MONTHS.length - 2];
const pending = [11_480, 7_175];
export const EXPENSES = {
  spentSep: sep.costs,
  vsAug: Math.round(((sep.costs - aug.costs) / aug.costs) * 100),
  toApprove: pending.reduce((s, x) => s + x, 0),
  toApproveCount: pending.length,
  categories: [
    { name: 'Fuel', amount: sep.fuel },
    { name: 'Overhead', amount: sep.admin },
    { name: 'Driver cost', amount: sep.driver },
    { name: 'Maintenance', amount: sep.maint },
    { name: 'Insurance', amount: sep.insurance },
    { name: 'Tolls', amount: sep.tolls },
  ],
  rows: [
    { date: '2026-09-29', title: `Diesel ${Math.round(QUOTE.litres)} L, Johannesburg to Durban (${INVOICE.load})`, ref: 'EXP-20260929-2214', cat: 'Fuel', vehicle: 'Interlink 07', status: 'Approved', amount: QUOTE.fuel },
    { date: '2026-09-29', title: `Tolls, N3 class 4 (${INVOICE.load})`, ref: 'EXP-20260929-2215', cat: 'Tolls', vehicle: 'Interlink 07', status: 'Approved', amount: N3_TOTAL_INCL },
    { date: '2026-09-29', title: 'Driver allowance, Johannesburg to Durban', ref: 'EXP-20260929-2216', cat: 'Driver cost', vehicle: 'Interlink 07', status: 'Approved', amount: QUOTE.allowance },
    { date: '2026-09-30', title: 'Tyres, two steer tyres replaced', ref: 'EXP-20260930-2221', cat: 'Maintenance', vehicle: 'Tri-axle 03', status: 'Pending', amount: pending[0] },
    { date: '2026-09-30', title: '60 000 km service, filters and brakes', ref: 'EXP-20260930-2222', cat: 'Maintenance', vehicle: 'Reefer 11', status: 'Pending', amount: pending[1] },
  ],
};
