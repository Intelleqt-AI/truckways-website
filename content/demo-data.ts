/**
 * Sample data for the rebuilt product fragments.
 *
 * "Karoo Line Logistics" and every customer below are FICTIONAL. None is meant
 * to match a real company (owner question Q20 approves the final list). The
 * numbers are internally consistent: the load quoted in the cost breakdown is
 * the load invoiced in the invoice row, the overdue invoices in "Needs you"
 * are the ones Insights ranks, and the N3 toll amounts come from the seeded
 * SANRAL tariff table (truckwys-backend seed_toll_data.py, class 4,
 * tariff_class_5, tariffs effective 1 Mar 2026) divided by 1,15.
 *
 * When the demo company is seeded in the backend, replace these values with
 * an export of that seed so the site and the screenshots agree (brief §8.3).
 */
import { addDays, daysBetween } from '../lib/format';

export const TODAY = '2026-09-30';
export const TODAY_LABEL = 'Wednesday, 30 Sep 2026';
export const COMPANY = 'Karoo Line Logistics';
export const COMPANY_INITIAL = 'K';

export const CUSTOMERS = {
  suikerbos: 'Suikerbos Foods',
  sandveld: 'Sandveld Packaging',
  kwagga: 'Kwagga Crate and Pallet',
  umhlaba: 'Umhlaba Grain Traders',
  vaalkop: 'Vaalkop Steel Supply',
  ridgeback: 'Ridgeback Beverages',
} as const;

/* ---------------------------------------------------------------- N3 tolls */
/** Seeded N3 mainline plazas, Johannesburg to Durban, SANRAL class 4 (VAT-inclusive tariff). */
export const N3_PLAZAS = [
  { name: 'De Hoek', road: 'N3', tariffIncl: 230.0 },
  { name: 'Wilge', road: 'N3', tariffIncl: 304.0 },
  { name: 'Tugela', road: 'N3', tariffIncl: 359.0 },
  { name: 'Mooi', road: 'N3', tariffIncl: 324.0 },
  { name: 'Mariannhill', road: 'N3', tariffIncl: 57.0 },
].map((p) => ({ ...p, exVat: Math.round((p.tariffIncl / 1.15) * 100) / 100 }));

export const N3_TOTAL_INCL = N3_PLAZAS.reduce((s, p) => s + p.tariffIncl, 0); // 1 274,00
export const N3_TOTAL_EX = Math.round(N3_PLAZAS.reduce((s, p) => s + p.exVat, 0) * 100) / 100; // 1 107,83

/* ------------------------------------------------------ the quoted load (F1, F2) */
const km = 568;
const burn = 46.0; // L/100 km, interlink at this load's weight
const dieselPerL = 21.62; // sample price, not a live FIASA figure
const litres = Math.round(((km * burn) / 100) * 100) / 100; // 261,28
const fuel = Math.round(litres * dieselPerL * 100) / 100; // 5 648,87
const allowance = 850;
const ratePerKm = 39;
const base = km * ratePerKm; // 22 152
const quotePrice = Math.round((fuel + N3_TOTAL_EX + allowance + base) * 100) / 100; // 29 758,70
const vat = Math.round(quotePrice * 0.15 * 100) / 100;
const totalIncl = Math.round((quotePrice + vat) * 100) / 100;
const costFloor = Math.round((fuel + N3_TOTAL_EX + allowance) * 100) / 100;

export const QUOTE = {
  number: 'QT-20260921-4418',
  customer: CUSTOMERS.suikerbos,
  from: 'Johannesburg',
  to: 'Durban',
  vehicle: 'Interlink',
  tollClass: 4,
  km,
  burn,
  dieselPerL,
  litres,
  fuel,
  tolls: N3_TOTAL_EX,
  allowance,
  ratePerKm,
  base,
  quotePrice,
  vat,
  totalIncl,
  costFloor,
  validUntil: '2026-10-05',
  status: 'Accepted',
};

/* ------------------------------------------------------- the invoice (F3) */
const invIssued = '2026-09-29';
export const INVOICE = {
  number: 'INV-20260929-1087',
  customer: CUSTOMERS.suikerbos,
  load: 'LD-20260926-0312',
  route: 'Johannesburg to Durban',
  delivered: invIssued,
  issued: invIssued,
  due: addDays(invIssued, 30),
  subtotal: quotePrice,
  vat,
  total: totalIncl,
  status: 'Sent',
  pod: 'POD signed by T. Dlamini',
  bank: 'FNB · Karoo Line Logistics · 62** *** 4410',
};

/* ------------------------------------------------ overdue invoices (F4, F7) */
function overdue(number: string, customer: string, issued: string, amount: number) {
  const due = addDays(issued, 30);
  return { number, customer, issued, due, amount, daysLate: daysBetween(due, TODAY) };
}

export const OVERDUE = [
  overdue('INV-20260712-1041', CUSTOMERS.sandveld, '2026-07-12', 48_760),
  overdue('INV-20260724-1052', CUSTOMERS.kwagga, '2026-07-24', 31_215),
  overdue('INV-20260803-1063', CUSTOMERS.umhlaba, '2026-08-03', 20_505.65),
  overdue('INV-20260628-1033', CUSTOMERS.vaalkop, '2026-06-28', 18_430),
  overdue('INV-20260810-1070', CUSTOMERS.ridgeback, '2026-08-10', 17_842.4),
  overdue('INV-20260814-1074', CUSTOMERS.suikerbos, '2026-08-14', 12_166.95),
];
export const OVERDUE_TOTAL = Math.round(OVERDUE.reduce((s, i) => s + i.amount, 0) * 100) / 100; // 148 920,00
export const OVERDUE_OVER_60 = OVERDUE.filter((i) => i.daysLate > 60).reduce((s, i) => s + i.amount, 0);
export const OVERDUE_MAX_DAYS = Math.max(...OVERDUE.map((i) => i.daysLate));

/* ------------------------------------------------------------- Home KPIs */
export const KPIS = {
  owed: 612_480,
  owedNote: 'R 148 920 past due',
  revenue12m: 7_846_310,
  netMargin12m: 11.4,
  activeLoads: 14,
  activeNote: '3 delivering today',
};

/** Revenue vs costs, excl. VAT, cash basis, R thousands. Apr to Sep 2026. */
export const REVENUE_VS_COSTS = [
  { m: 'Apr', revenue: 512, costs: 441 },
  { m: 'May', revenue: 548, costs: 486 },
  { m: 'Jun', revenue: 531, costs: 472 },
  { m: 'Jul', revenue: 587, costs: 514 },
  { m: 'Aug', revenue: 604, costs: 529 },
  { m: 'Sep', revenue: 626, costs: 551 },
];

/** Debtors age strip (sums to KPIS.owed). */
export const AGEING = [
  { label: 'Current', amount: 463_560 },
  { label: '1 to 30', amount: 50_515 },
  { label: '31 to 60', amount: 79_975 },
  { label: '61 to 90', amount: 18_430 },
  { label: '90+', amount: 0 },
];

/* ------------------------------------------------------- lanes (F5) */
export const LANES = [
  { lane: 'Johannesburg to Durban', perKm: 52.39, trips: 46 },
  { lane: 'Johannesburg to Cape Town', perKm: 44.1, trips: 21 },
  { lane: 'Pretoria to Lebombo border', perKm: 41.8, trips: 17 },
  { lane: 'Durban to Richards Bay', perKm: 38.2, trips: 29 },
  { lane: 'Cape Town to Gqeberha', perKm: 35.6, trips: 12 },
];
export const LANE_THIN = { lane: 'Johannesburg to Gaborone', trips: 3 };

/* ---------------------------------------------------- Insights (F7, F8) */
const sandveld = OVERDUE[0];
export const FINDINGS = [
  {
    value: OVERDUE_TOTAL,
    title: 'Overdue, never chased',
    severity: 'High',
    area: 'Get paid',
    detail: `${OVERDUE.length} customers, up to ${OVERDUE_MAX_DAYS} days past the due date. No reminder sent on any.`,
    action: 'Send reminders',
    share: 1,
  },
  {
    value: 61_340,
    title: 'Invoiced, never sent',
    severity: 'High',
    area: 'Get paid',
    detail: '2 draft invoices, the oldest 9 days old. Customers have not seen them.',
    action: 'Review 2 drafts',
    share: 0.41,
  },
  {
    value: sandveld.amount,
    title: `${sandveld.customer.split(' ')[0]} stopped paying`,
    severity: 'Medium',
    area: 'Get paid',
    detail: `Paid 5 invoices on time, then skipped ${sandveld.number}. Now ${sandveld.daysLate} days late.`,
    action: 'Call about the skipped invoice',
    share: 0.33,
  },
  {
    value: 36_272.4,
    title: 'Overdue, no proof of delivery',
    severity: 'Medium',
    area: 'Get paid',
    detail: '2 overdue invoices without a POD. Customers ask for it first.',
    action: 'Attach PODs, largest first',
    share: 0.24,
  },
];

/* ------------------------------------------------------------ Copilot (F6) */
export const COPILOT = {
  question: 'Who owes us the most right now?',
  answerLead: `${CUSTOMERS.sandveld}: R 86 410 across 3 invoices.`,
  answerDetail: `R 48 760 of it is overdue on ${sandveld.number}, ${sandveld.daysLate} days past the due date. The other two are not due yet.`,
  source: 'From your invoices, 30 Sep 2026',
};
