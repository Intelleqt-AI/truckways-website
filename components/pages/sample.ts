/**
 * Extra sample data for the phase B product fragments (/product, the feature
 * pages and /integrations). Everything is DERIVED from content/demo-data.ts,
 * which stays the single source: the same fictional company (Karoo Line
 * Logistics), the same six customers, the same quoted and invoiced load, the
 * same overdue invoices, ageing buckets, lanes and monthly revenue and costs.
 * Where a figure is new (a draft quote, an expense line) it is chosen so every
 * total still reconciles with demo-data.ts. Nothing here is a real company.
 */
import {
  AGEING, CUSTOMERS, INVOICE, KPIS, LANES, LANE_THIN, N3_TOTAL_INCL, OVERDUE, OVERDUE_TOTAL, QUOTE, REVENUE_VS_COSTS, TODAY,
} from '../../content/demo-data';

const r2 = (n: number) => Math.round(n * 100) / 100;

/* ------------------------------------------------------------ quotes board (S4) */
export type BoardQuote = { number: string; customer: string; from: string; to: string; amount: number; date: string; booked?: boolean };

/** Kilometres per trip for each lane (road distance, one way). */
export const LANE_KM: Record<string, number> = {
  'Johannesburg to Durban': QUOTE.km,
  'Johannesburg to Cape Town': 1_400,
  'Pretoria to Lebombo border': 470,
  'Durban to Richards Bay': 180,
  'Cape Town to Gqeberha': 760,
  'Johannesburg to Gaborone': 360,
};

/** A lane's typical price: its revenue per km times its distance, to the nearest R 10. */
const lanePrice = (lane: string) => {
  const l = LANES.find((x) => x.lane === lane);
  const perKm = l ? l.perKm : 40;
  return Math.round((perKm * LANE_KM[lane]) / 10) * 10;
};

export const BOARD: { name: string; tone: 'neutral' | 'info' | 'success' | 'danger'; count: number; total: number; cards: BoardQuote[] }[] = [
  {
    name: 'Draft',
    tone: 'neutral',
    count: 2,
    total: 0,
    cards: [
      { number: 'QT-20260930-4431', customer: CUSTOMERS.kwagga, from: 'Johannesburg, GP', to: 'Cape Town, WC', amount: lanePrice('Johannesburg to Cape Town'), date: '30 Sep' },
      { number: 'QT-20260929-4429', customer: CUSTOMERS.ridgeback, from: 'Durban, KZN', to: 'Richards Bay, KZN', amount: lanePrice('Durban to Richards Bay'), date: '29 Sep' },
    ],
  },
  {
    name: 'Sent',
    tone: 'info',
    count: 3,
    total: 0,
    cards: [
      { number: 'QT-20260929-4427', customer: CUSTOMERS.umhlaba, from: 'Pretoria, GP', to: 'Lebombo border, MP', amount: lanePrice('Pretoria to Lebombo border'), date: '29 Sep' },
      { number: 'QT-20260928-4424', customer: CUSTOMERS.sandveld, from: 'Cape Town, WC', to: 'Gqeberha, EC', amount: lanePrice('Cape Town to Gqeberha'), date: '28 Sep' },
      { number: 'QT-20260926-4421', customer: CUSTOMERS.vaalkop, from: 'Johannesburg, GP', to: 'Gaborone, BW', amount: 21_640, date: '26 Sep' },
    ],
  },
  {
    name: 'Accepted',
    tone: 'success',
    count: 38,
    total: 1_146_820,
    cards: [
      { number: QUOTE.number, customer: QUOTE.customer, from: 'Johannesburg, GP', to: 'Durban, KZN', amount: Math.round(QUOTE.quotePrice), date: '21 Sep', booked: true },
      { number: 'QT-20260918-4409', customer: CUSTOMERS.ridgeback, from: 'Durban, KZN', to: 'Richards Bay, KZN', amount: 6_840, date: '18 Sep', booked: true },
    ],
  },
  {
    name: 'Declined',
    tone: 'danger',
    count: 21,
    total: 402_610,
    cards: [
      { number: 'QT-20260917-4405', customer: CUSTOMERS.kwagga, from: 'Johannesburg, GP', to: 'Durban, KZN', amount: 31_880, date: '17 Sep' },
      { number: 'QT-20260911-4392', customer: CUSTOMERS.umhlaba, from: 'Pretoria, GP', to: 'Lebombo border, MP', amount: 20_140, date: '11 Sep' },
    ],
  },
];
// Draft and Sent show every card, so their totals are the card sums.
for (const col of BOARD) if (!col.total) col.total = col.cards.reduce((s, c) => s + c.amount, 0);
export const BOARD_COUNT = BOARD.reduce((s, c) => s + c.count, 0);

/* ------------------------------------------------------------ debtors age (S8) */
const bucketOf = (daysLate: number) => (daysLate <= 0 ? 0 : daysLate <= 30 ? 1 : daysLate <= 60 ? 2 : daysLate <= 90 ? 3 : 4);

/** Current (not yet due) balance per customer. The last one takes the remainder so the column sums to AGEING[0]. */
const CURRENT_SPLIT: [keyof typeof CUSTOMERS, number][] = [
  ['suikerbos', r2(INVOICE.total + 58_400)],
  ['sandveld', 37_650], // with the overdue R 48 760: R 86 410, the Copilot answer
  ['kwagga', 41_380],
  ['umhlaba', 68_920],
  ['vaalkop', 55_300],
];

export type DebtorRow = { customer: string; invoices: number; b: [number, number, number, number, number]; total: number };

export const DEBTORS: DebtorRow[] = (() => {
  const keys = Object.keys(CUSTOMERS) as (keyof typeof CUSTOMERS)[];
  const current: Record<string, number> = {};
  let used = 0;
  for (const [k, v] of CURRENT_SPLIT) {
    current[k] = v;
    used += v;
  }
  current.ridgeback = r2(AGEING[0].amount - used);
  const invoiceCount: Record<string, number> = { suikerbos: 3, sandveld: 3, kwagga: 2, umhlaba: 4, vaalkop: 3, ridgeback: 6 };
  return keys
    .map((k) => {
      const name = CUSTOMERS[k];
      const b: [number, number, number, number, number] = [current[k], 0, 0, 0, 0];
      for (const o of OVERDUE.filter((x) => x.customer === name)) b[bucketOf(o.daysLate)] = r2(b[bucketOf(o.daysLate)] + o.amount);
      return { customer: name, invoices: invoiceCount[k], b, total: r2(b.reduce((s, x) => s + x, 0)) };
    })
    .sort((a, b) => b.total - a.total);
})();

export const DEBTORS_TOTAL = r2(DEBTORS.reduce((s, d) => s + d.total, 0)); // = KPIS.owed
export const DEBTOR_STATS = (() => {
  const over60 = OVERDUE.filter((o) => o.daysLate > 60).reduce((s, o) => s + o.amount, 0);
  const weighted = OVERDUE.reduce((s, o) => s + o.amount * o.daysLate, 0) / OVERDUE_TOTAL;
  const top = DEBTORS[0];
  return {
    overduePct: Math.round((OVERDUE_TOTAL / KPIS.owed) * 100),
    overdue: OVERDUE_TOTAL,
    over60Pct: Math.round((over60 / KPIS.owed) * 100),
    over60,
    avgDaysLate: Math.round(weighted),
    topShare: Math.round((top.total / KPIS.owed) * 100),
    topName: top.customer,
  };
})();

/* ------------------------------------------------------ customer statement (S17) */
const sandveldOverdue = OVERDUE.find((o) => o.customer === CUSTOMERS.sandveld)!;
export const STATEMENT = {
  customer: CUSTOMERS.sandveld,
  asAt: TODAY,
  terms: '30 days',
  rows: [
    { date: '2026-06-04', ref: 'INV-20260604-0988', kind: 'Invoice', amount: 44_120 },
    { date: '2026-07-03', ref: 'Payment, EFT', kind: 'Payment', amount: -44_120 },
    { date: sandveldOverdue.issued, ref: sandveldOverdue.number, kind: 'Invoice', amount: sandveldOverdue.amount },
    { date: '2026-09-11', ref: 'INV-20260911-1079', kind: 'Invoice', amount: 21_480 },
    { date: '2026-09-24', ref: 'INV-20260924-1085', kind: 'Invoice', amount: 16_170 },
  ],
};
export const STATEMENT_BALANCE = STATEMENT.rows.reduce((s, r) => s + r.amount, 0); // 86 410

/* ------------------------------------------------------------ P&L (S10) */
/** Monthly figures in whole rand. REVENUE_VS_COSTS is in R thousands; these round to it exactly. */
const JITTER = [184, 312, 97, 426, 251, 138];
export const PNL_MONTHS = REVENUE_VS_COSTS.map((m, i) => {
  const revenue = m.revenue * 1000 + JITTER[i];
  const costs = m.costs * 1000 + JITTER[(i + 2) % 6];
  const fuel = Math.round(costs * 0.44);
  const tolls = Math.round(costs * 0.06);
  const driver = Math.round(costs * 0.16);
  const maint = Math.round(costs * 0.09);
  const direct = fuel + tolls + driver + maint;
  const insurance = Math.round(costs * 0.07);
  const admin = costs - direct - insurance;
  return { m: `${m.m} 2026`, revenue, fuel, tolls, driver, maint, direct, gross: revenue - direct, insurance, admin, costs, net: revenue - costs };
});
const sum = (k: keyof (typeof PNL_MONTHS)[number]) => PNL_MONTHS.reduce((s, m) => s + (m[k] as number), 0);
export const PNL_TOTAL = {
  m: 'Total',
  revenue: sum('revenue'), fuel: sum('fuel'), tolls: sum('tolls'), driver: sum('driver'), maint: sum('maint'), direct: sum('direct'),
  gross: sum('gross'), insurance: sum('insurance'), admin: sum('admin'), costs: sum('costs'), net: sum('net'),
};

/* ------------------------------------------------------------ VAT report (S11) */
/** Output VAT, invoice basis, last three months. Invoiced excl. VAT runs a little ahead of cash received. */
export const VAT_ROWS = [
  { m: 'Jul 2026', invoices: 58, ex: 598_240 },
  { m: 'Aug 2026', invoices: 61, ex: 611_730 },
  { m: 'Sep 2026', invoices: 63, ex: 640_915 },
].map((r) => ({ ...r, vat: r2(r.ex * 0.15), incl: r2(r.ex * 1.15) }));
export const VAT_TOTAL = {
  invoices: VAT_ROWS.reduce((s, r) => s + r.invoices, 0),
  ex: VAT_ROWS.reduce((s, r) => s + r.ex, 0),
  vat: r2(VAT_ROWS.reduce((s, r) => s + r.vat, 0)),
  incl: r2(VAT_ROWS.reduce((s, r) => s + r.incl, 0)),
};

/* ------------------------------------------------------------ reports index (S9) */
const net12 = Math.round(KPIS.revenue12m * (KPIS.netMargin12m / 100));
const invoicedEx12 = 7_960_450;
export const REPORTS_INDEX = [
  { name: 'Profit and loss', q: 'Did you make a profit, month by month?', fig: net12, note: 'Net profit, cash basis' },
  { name: 'Sales by month', q: 'How much you invoiced each month, and what is paid.', fig: Math.round(invoicedEx12 * 1.15), note: 'Invoiced incl. VAT' },
  { name: 'Cash movement', q: 'What money came in and went out?', fig: 402_116, note: 'Net movement' },
  { name: 'Debtors age analysis', q: 'Who owes you, and how late is it?', fig: KPIS.owed, note: 'Owed to you now' },
  { name: 'Customer statement', q: 'What one customer owes, invoice by invoice.', count: DEBTORS.length, note: 'Customers owe you' },
  { name: 'Revenue by customer', q: 'Which customers bring in the revenue?', count: 12, note: 'Customers invoiced' },
  { name: 'Revenue by lane', q: 'Which routes earn the most, and per km?', fig: invoicedEx12, note: 'Delivered, excl. VAT' },
  { name: 'Expense report', q: 'Where the money goes, by category and truck.', fig: KPIS.revenue12m - net12, note: 'Approved costs' },
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
export const EXPENSES = {
  spentSep: sep.costs,
  vsAug: Math.round(((sep.costs - PNL_MONTHS[4].costs) / PNL_MONTHS[4].costs) * 100),
  toApprove: 18_655,
  toApproveCount: 2,
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
    { date: '2026-09-29', title: `Driver allowance, Johannesburg to Durban`, ref: 'EXP-20260929-2216', cat: 'Driver cost', vehicle: 'Interlink 07', status: 'Approved', amount: QUOTE.allowance },
    { date: '2026-09-30', title: 'Tyres, two steer tyres replaced', ref: 'EXP-20260930-2221', cat: 'Maintenance', vehicle: 'Tri-axle 03', status: 'Pending', amount: 11_480 },
    { date: '2026-09-30', title: '60 000 km service, filters and brakes', ref: 'EXP-20260930-2222', cat: 'Maintenance', vehicle: 'Reefer 11', status: 'Pending', amount: 7_175 },
  ],
};
