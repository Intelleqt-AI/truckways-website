/**
 * Sample data for the phase B product fragments (/product, the feature pages
 * and /integrations). Like content/demo-data.ts, every figure is copied from
 * the seeded demo company and matches the real screenshots (FIGURES.json of
 * the final capture, 30 Sep 2026). The S-number is the screen it mirrors.
 * Nothing here is a real company.
 */
import { AGEING, AGEING_TOTAL, CUSTOMERS, KPIS, LANES, FLEET_AVG_PER_KM as FLEET_AVG, OVER_60, PIPELINE, TODAY } from '../../content/demo-data';

/* ------------------------------------------------------------ quotes board (S4) */
export type BoardQuote = { number: string; customer: string; from: string; to: string; amount: number; date: string; booked?: boolean; note?: string };
type Col = { name: string; tone: 'neutral' | 'info' | 'success' | 'danger'; count: number; total: number; cards: BoardQuote[] };

const JHB = 'City Deep, Johannesburg, GP';
/** The first cards of each column, as on the board (S4). */
export const BOARD: Col[] = [
  {
    name: 'Draft',
    tone: 'neutral',
    count: PIPELINE.draft,
    total: 23_058,
    cards: [
      { number: 'QT-20260930-2560', customer: CUSTOMERS.steelpoort, from: 'Isando, Kempton Park, GP', to: 'Secunda Industria, Secunda, MP', amount: 9_350, date: '30 Sep' },
      { number: 'QT-20260929-2561', customer: CUSTOMERS.steelpoort, from: JHB, to: 'Ferrobank, eMalahleni, MP', amount: 8_959, date: '29 Sep' },
    ],
  },
  {
    name: 'Sent',
    tone: 'info',
    count: PIPELINE.sent,
    total: 188_374,
    cards: [
      { number: 'QT-20260929-2563', customer: CUSTOMERS.waterberg, from: JHB, to: 'Ladanna, Polokwane, LP', amount: 4_694, date: '29 Sep' },
      { number: 'QT-20260928-2564', customer: CUSTOMERS.matola, from: 'Riverside Park, Mbombela, MP', to: 'Porto de Maputo, Maputo, MZ', amount: 17_933, date: '28 Sep' },
      { number: 'QT-20260927-2565', customer: CUSTOMERS.rietspruit, from: JHB, to: 'Ferrobank, eMalahleni, MP', amount: 8_562, date: '27 Sep' },
    ],
  },
  {
    name: 'Accepted',
    tone: 'success',
    count: PIPELINE.accepted,
    total: 6_618_890,
    cards: [
      { number: 'QT-20260925-2555', customer: CUSTOMERS.kestrel, from: JHB, to: 'Hamilton, Bloemfontein, FS', amount: 15_657, date: '25 Sep', booked: true },
      { number: 'QT-20260923-2552', customer: CUSTOMERS.kraalspruit, from: JHB, to: 'Prospecton, Durban, KZN', amount: 23_326, date: '23 Sep', booked: true },
    ],
  },
  {
    name: 'Declined',
    tone: 'danger',
    count: PIPELINE.declined,
    total: 9_358_206,
    cards: [
      { number: 'QT-20260922-2554', customer: CUSTOMERS.kraalspruit, from: JHB, to: 'Hamilton, Bloemfontein, FS', amount: 16_468, date: '22 Sep' },
      { number: 'QT-20260921-2550', customer: CUSTOMERS.bayside, from: JHB, to: 'Prospecton, Durban, KZN', amount: 27_730, date: '21 Sep' },
    ],
  },
];
/** Every quote on the board, including the 77 expired ones (column not drawn). */
export const BOARD_COUNT = PIPELINE.all;

/* ------------------------------------------------------------ debtors age (S8) */
/** The six largest balances, by customer, as in the Debtors report (incl. VAT, aged by due date). */
export type DebtorRow = { customer: string; invoices: number; b: [number, number, number, number, number]; total: number };
export const DEBTORS: DebtorRow[] = [
  { customer: CUSTOMERS.kaapse, invoices: 5, b: [177_688.8, 119_274.55, 0, 0, 0], total: 296_963.35 },
  { customer: CUSTOMERS.nyoni, invoices: 13, b: [110_654.15, 25_497.8, 31_974.6, 25_885.35, 27_263.04], total: 221_274.94 },
  { customer: CUSTOMERS.mzansi, invoices: 3, b: [178_815.8, 0, 0, 0, 0], total: 178_815.8 },
  { customer: CUSTOMERS.riverbend, invoices: 7, b: [101_881.95, 24_751.45, 0, 50_480.4, 0], total: 177_113.8 },
  { customer: CUSTOMERS.ironbark, invoices: 5, b: [54_978.05, 63_292.55, 0, 0, 0], total: 118_270.6 },
  { customer: CUSTOMERS.duinefontein, invoices: 2, b: [112_161.8, 0, 0, 0, 0], total: 112_161.8 },
];
export const DEBTOR_CUSTOMERS = 24;
export const DEBTOR_INVOICES = 92;
export const DEBTORS_TOTAL = AGEING_TOTAL;
export const DEBTOR_STATS = {
  overduePct: 33,
  overdue: KPIS.pastDue,
  over60Pct: 8,
  over60: OVER_60,
  avgDaysLate: 52,
  topShare: 16,
  topName: CUSTOMERS.kaapse,
};
export { AGEING };

/* ------------------------------------------------------ customer statement (S17's customer) */
/** Kaapse Kombuis Wholesale: the last invoice paid, the five open invoices and the payment for the first, by date. Balance R 296 963,35 (S8, S13, S17). */
export const STATEMENT = {
  customer: CUSTOMERS.kaapse,
  asAt: TODAY,
  rows: [
    { date: '2026-07-25', ref: 'INV-20260725-00002', amount: 53_817.7 },
    { date: '2026-08-13', ref: 'INV-20260813-00001', amount: 57_804.75 },
    { date: '2026-08-15', ref: 'INV-20260815-00001', amount: 61_469.8 },
    { date: '2026-09-03', ref: 'INV-20260903-00001', amount: 59_392.9 },
    { date: '2026-09-10', ref: 'INV-20260910-00003', amount: 60_437.1 },
    { date: '2026-09-13', ref: 'INV-20260913-00001', amount: 57_858.8 },
    { date: '2026-09-27', ref: 'Payment, EFT, INV-20260725-00002', amount: -53_817.7 },
  ],
};
export const STATEMENT_BALANCE = Math.round(STATEMENT.rows.reduce((s, r) => s + r.amount, 0) * 100) / 100; // 296 963,35

/* ------------------------------------------------------------ P&L (S10) */
/** Cash basis, excl. VAT, whole rand, the report's own rows for the last three months. */
const PNL = [
  { m: 'Jul 2026', revenue: 1_557_382, fuel: 464_515, tolls: 60_676, driver: 0, maint: 46_503, direct: 571_694, gross: 985_688, overheads: 647_405, net: 338_283 },
  { m: 'Aug 2026', revenue: 1_369_654, fuel: 399_416, tolls: 55_232, driver: 0, maint: 20_924, direct: 475_571, gross: 894_083, overheads: 607_075, net: 287_008 },
  { m: 'Sep 2026', revenue: 1_619_512, fuel: 607_594, tolls: 69_430, driver: 0, maint: 11_784, direct: 688_809, gross: 930_703, overheads: 632_775, net: 297_928 },
];
export const PNL_MONTHS = PNL;
const sum3 = (k: keyof (typeof PNL)[number]) => PNL.reduce((s, m) => s + (m[k] as number), 0);
export const PNL_TOTAL = {
  m: 'Total',
  revenue: sum3('revenue'), fuel: sum3('fuel'), tolls: sum3('tolls'), driver: sum3('driver'), maint: sum3('maint'), direct: sum3('direct'),
  gross: sum3('gross'), overheads: sum3('overheads'), net: sum3('net'),
};

/* ------------------------------------------------------------ VAT report (S11) */
/** Output VAT, invoice basis, last three months. */
export const VAT_ROWS = [
  { m: 'Jul 2026', invoices: 73, ex: 1_428_037, vat: 214_205.55, incl: 1_642_242.55 },
  { m: 'Aug 2026', invoices: 68, ex: 1_327_695, vat: 199_154.25, incl: 1_526_849.25 },
  { m: 'Sep 2026', invoices: 68, ex: 1_382_660, vat: 207_399.0, incl: 1_590_059.0 },
];
const r2 = (n: number) => Math.round(n * 100) / 100;
export const VAT_TOTAL = {
  invoices: VAT_ROWS.reduce((s, r) => s + r.invoices, 0),
  ex: VAT_ROWS.reduce((s, r) => s + r.ex, 0),
  vat: r2(VAT_ROWS.reduce((s, r) => s + r.vat, 0)),
  incl: r2(VAT_ROWS.reduce((s, r) => s + r.incl, 0)),
};

/* ------------------------------------------------------------ Invoices page tiles (S5) */
export const INVOICE_TILES = {
  invoicedSep: 1_590_059,
  vsAug: '+4% vs August',
  collectedSep: 418_456,
  collectedShare: '26% of September invoiced',
  overdue: KPIS.pastDue,
  lateCount: 38,
  daysToPay: 38,
  paidCount: 793,
  chips: { all: 886, sent: 21, overdue: 38, paid: 793, draft: 1 },
};

/* ------------------------------------------------------------ reports index (S9) */
export const REPORTS_INDEX = [
  { name: 'Profit and loss', q: 'Did you make a profit, month by month?', fig: 2_391_759, note: 'Net profit, cash basis' },
  { name: 'Sales by month', q: 'How much you invoiced each month, and what is paid.', fig: 19_849_049, note: 'Invoiced incl. VAT' },
  { name: 'Cash movement', q: 'What money came in and went out?', fig: 4_955_029, note: 'Net movement' },
  { name: 'Debtors age analysis', q: 'Who owes you, and how late is it?', fig: KPIS.owed, note: 'Owed to you now' },
  { name: 'Customer statement', q: 'What one customer owes, invoice by invoice.', count: DEBTOR_CUSTOMERS, note: 'Customers owe you' },
  { name: 'Revenue by customer', q: 'Which customers bring in the revenue?', count: 31, note: 'Customers invoiced' },
  { name: 'Revenue by lane', q: 'Which routes earn the most, and per km?', fig: 17_260_043, note: 'Delivered, excl. VAT' },
  { name: 'Expense report', q: 'Where the money goes, by category and truck.', fig: 14_696_709, note: 'Approved costs' },
  { name: 'VAT report', q: 'How much output VAT you charged.', fig: 2_589_006, note: 'Output VAT, invoice basis' },
];

/* ------------------------------------------------------------ lanes scatter (S12) */
/** The lanes the chart labels (the others are unlabelled dots, as in the app). */
const LABELLED = new Set([
  'Mbombela to Maputo', 'Midrand to Pretoria', 'Kempton Park to Secunda', 'Johannesburg to eMalahleni', 'Tzaneen to Johannesburg',
  'Johannesburg to Durban', 'Durban to Johannesburg', 'Johannesburg to Polokwane', 'Durban to Gqeberha',
]);
export const LANE_POINTS = LANES.map((l) => ({ ...l, thin: false, label: LABELLED.has(l.lane) }));
export const FLEET_AVG_PER_KM = FLEET_AVG;
export const LANE_KM: Record<string, number> = Object.fromEntries(LANES.map((l) => [l.lane, l.km]));

/* ------------------------------------------------------------ expenses (S18) */
export const EXPENSES = {
  spentSep: 1_391_222,
  vsAug: 29,
  approved12m: 14_696_709,
  approvedCount: 688,
  toApprove: 69_639,
  toApproveCount: 5,
  allCount: 693,
  /** All 693 expenses, approved and pending, 12 months; share as the app rounds it. */
  categories: [
    { name: 'Fuel', amount: 5_562_010, pct: 38 },
    { name: 'Overhead', amount: 3_368_800, pct: 23 },
    { name: 'Driver cost', amount: 3_220_390, pct: 22 },
    { name: 'Insurance', amount: 1_080_000, pct: 7 },
    { name: 'Tolls', amount: 760_504, pct: 5 },
    { name: '2 other categories', amount: 774_643, pct: 5 },
  ],
  rows: [
    { date: '2026-09-30', title: '40k km service - oil, filters, brake check', ref: 'EXP-20260930-7026', cat: 'Maintenance', vehicle: 'CA 318-552', status: 'Pending', amount: 15_132.52 },
    { date: '2026-09-30', title: 'Fuel card statement - JT 42 KL GP - Sep 2026 (3129 L)', ref: 'EXP-20260930-7661', cat: 'Fuel', vehicle: 'JT 42 KL GP', status: 'Approved', amount: 94_052.6 },
    { date: '2026-09-30', title: 'e-tag toll statement - JT 42 KL GP - Sep 2026', ref: 'EXP-20260930-7662', cat: 'Tolls', vehicle: 'JT 42 KL GP', status: 'Approved', amount: 7_826 },
    { date: '2026-09-30', title: 'Fuel card statement - KB 18 WX GP - Sep 2026 (3262 L)', ref: 'EXP-20260930-7664', cat: 'Fuel', vehicle: 'KB 18 WX GP', status: 'Approved', amount: 98_039.92 },
    { date: '2026-09-30', title: 'e-tag toll statement - KB 18 WX GP - Sep 2026', ref: 'EXP-20260930-7665', cat: 'Tolls', vehicle: 'KB 18 WX GP', status: 'Approved', amount: 13_893.1 },
  ],
};
