/**
 * Sample data for the rebuilt product fragments.
 *
 * Every figure here is copied from the seeded demo company behind "Open the
 * demo" ("Karoo Line Logistics (Pty) Ltd", fictional, customers included) and
 * matches the real screenshots in public/product. Source: the final capture's
 * FIGURES.json (one database, one session, Wed 30 Sep 2026 15:00 SAST; diesel
 * R 30,05/L 50ppm inland, FIASA, effective 2 Sep). The S-number next to a
 * block is the screenshot it matches.
 *
 * Numbers use the app's own formats: invoices INV-YYYYMMDD-NNNNN (the day's
 * sequence), quotes QT-YYYYMMDD-NNNN, loads LOAD-YYYYMMDD-NNNN, expenses
 * EXP-YYYYMMDD-NNNN. (The demo seed prints its own KL- prefixed numbers; each
 * one here is the same record renumbered in the production format.)
 */
import { addDays, daysBetween } from '../lib/format';

export const TODAY = '2026-09-30';
export const TODAY_LABEL = 'Wednesday, 30 Sep 2026';
export const COMPANY = 'Karoo Line Logistics';
export const COMPANY_INITIAL = 'K';

/** Fictional customers of the demo company (demo seed). */
export const CUSTOMERS = {
  kaapse: 'Kaapse Kombuis Wholesale',
  nyoni: 'Nyoni Cane & Agri Supplies',
  mzansi: 'Mzansi Glass & Aluminium',
  riverbend: 'Riverbend Dairy Distributors',
  ironbark: 'Ironbark Roofing & Steel',
  duinefontein: 'Duinefontein Paint Wholesalers',
  kraalspruit: 'Kraalspruit Feed Mills',
  seaview: 'Seaview Canned Foods Distribution',
  bayside: 'Bayside Tile & Sanitary',
  steelpoort: 'Steelpoort Conveyor Spares',
  waterberg: 'Waterberg Mining Consumables',
  matola: 'Matola Bay Freight Forwarders',
  imbali: 'Imbali Cash & Carry',
  rietspruit: 'Rietspruit Bricks & Blocks',
  kestrel: 'Kestrel Snacks & Confectionery',
} as const;

/* ---------------------------------------------------------------- N3 tolls */
/** Seeded N3 mainline plazas, Johannesburg to Durban, SANRAL class 4 (gazetted tariff, incl. VAT). */
export const N3_PLAZAS = [
  { name: 'De Hoek', road: 'N3', tariffIncl: 230.0 },
  { name: 'Wilge', road: 'N3', tariffIncl: 304.0 },
  { name: 'Tugela', road: 'N3', tariffIncl: 359.0 },
  { name: 'Mooi', road: 'N3', tariffIncl: 324.0 },
  { name: 'Mariannhill', road: 'N3', tariffIncl: 57.0 },
].map((p) => ({ ...p, exVat: Math.round((p.tariffIncl / 1.15) * 100) / 100 }));

export const N3_TOTAL_INCL = N3_PLAZAS.reduce((s, p) => s + p.tariffIncl, 0); // 1 274,00
export const N3_TOTAL_EX = Math.round(N3_PLAZAS.reduce((s, p) => s + p.exVat, 0) * 100) / 100; // 1 107,83

/* ------------------------------------------------ the quote being built (S3; F1, F2) */
/*
 * S3, exactly: a new quote for Bayside Tile & Sanitary, 28 t of palletised floor
 * tiles from City Deep to Prospecton on a Superlink Tautliner. The builder's
 * cost lines are fuel, SA tolls (excl. VAT, rounded to the rand), driver
 * allowance and the base rate per km; their sum is the price as built. The
 * builder then suggests a price from your past quotes; the fragment shows that
 * suggestion as the markup.
 */
const km = 570;
const dieselPerL = 30.05; // 50ppm inland, FIASA, effective 2 Sep 2026 (the demo DB's fuel row)
const fuel = 6388; // as the builder shows it: 37,3 L/100 km x 570 km x R 30,05, to the rand
const litres = Math.round((fuel / dieselPerL) * 100) / 100; // 212,58
const burn = Math.round((litres / km) * 1000) / 10; // 37,3 L/100 km
const tolls = Math.round(N3_TOTAL_EX); // R 1 108
const allowance = 480;
const ratePerKm = 24;
const base = km * ratePerKm; // 13 680
const costs = fuel + tolls + allowance + base; // 21 656
const quotePrice = 25_800; // "Suggested: R 25 800,00 (from your quotes)"
const markup = quotePrice - costs; // 4 144
const marginPct = Math.round((markup / quotePrice) * 100); // 16
const r2 = (n: number) => Math.round(n * 100) / 100;
const vat = r2(quotePrice * 0.15);
const totalIncl = r2(quotePrice + vat);

export const QUOTE = {
  number: 'New quote',
  customer: CUSTOMERS.bayside,
  from: 'Johannesburg',
  to: 'Durban',
  fromFull: 'City Deep, Johannesburg, GP',
  toFull: 'Prospecton, Durban, KZN',
  cargo: 'Palletised floor tiles',
  weightT: 28,
  vehicle: 'Superlink Tautliner',
  vehicleCap: '34 t',
  tollClass: 4,
  km,
  burn,
  dieselPerL,
  dieselNote: 'FIASA 50ppm inland, effective 2 Sep',
  litres,
  fuel,
  tolls,
  allowance,
  ratePerKm,
  base,
  costs,
  markup,
  marginPct,
  winPct: 62,
  quotePrice,
  vat,
  totalIncl,
  costFloor: costs,
  perKm: r2(quotePrice / km),
  validUntil: '2026-10-07',
  status: 'Draft',
};

/* ------------------------------------ one delivered load, quote to invoice (S4, S6) */
/** The accepted quote behind the invoice (S4 board, Accepted column: "View booking"). */
export const BOOKED_QUOTE = {
  number: 'QT-20260919-2537',
  customer: CUSTOMERS.kraalspruit,
  route: 'Johannesburg to Durban',
  amount: 24_094,
  accepted: '2026-09-19',
};

/** S6: the invoice raised on delivery of that load (status Sent). */
const invIssued = '2026-09-24';
export const INVOICE = {
  number: 'INV-20260924-00002',
  customer: CUSTOMERS.kraalspruit,
  load: 'LOAD-20260923-1387',
  route: 'Johannesburg to Durban',
  delivered: invIssued,
  issued: invIssued,
  due: addDays(invIssued, 30), // 24 Oct 2026
  lines: [
    { description: 'Linehaul Johannesburg to Durban - Bagged poultry feed', amount: 21_202.72 },
    { description: 'Fuel surcharge', amount: 2_891.28 },
  ],
  subtotal: 24_094,
  vat: 3_614.1,
  total: 27_708.1,
  status: 'Sent',
  pod: 'to LOAD-20260923-1387',
  bank: 'Demo Bank (fictional) · Karoo Line Logistics (Pty) Ltd · 000000123456',
};

/** 0,25% of the delivered load's invoice total incl. VAT (what the app charges). */
export const FEE_EXAMPLE = { invoice: INVOICE.total, fee: r2(INVOICE.total * 0.0025) }; // R 27 708,10 -> R 69,27

/* ------------------------------------------------------------ overdue invoices */
function overdue(number: string, customer: string, issued: string, amount: number, due = addDays(issued, 30)) {
  return { number, customer, issued, due, amount, daysLate: daysBetween(due, TODAY) };
}

/** Home "Needs you" (S1), in the app's order: three invoices to chase. */
export const NEEDS_YOU = [
  overdue('INV-20260828-00003', CUSTOMERS.ironbark, '2026-08-28', 26_747.85), // 3 days late
  overdue('INV-20260826-00001', CUSTOMERS.seaview, '2026-08-26', 16_060.9), // 5 days late
  overdue('INV-20260824-00003', CUSTOMERS.kraalspruit, '2026-08-24', 18_256.25), // 7 days late
];
export const NEEDS_YOU_OTHER = {
  openLoad: { title: '1 load left open', sub: 'Open since 14 Sep 2026 (16 days)' },
  idle: { title: '5 vehicles idle', sub: '4 with no load · 1 holds an order left open' },
};

/** The largest overdue invoices in the demo DB, largest first (38 invoices, R 599 361 in all). */
export const OVERDUE = [
  overdue('INV-20260815-00001', CUSTOMERS.kaapse, '2026-08-15', 61_469.8), // 16 days late
  overdue('INV-20260813-00001', CUSTOMERS.kaapse, '2026-08-13', 57_804.75), // 18 days late
  overdue('INV-20260820-00002', CUSTOMERS.kraalspruit, '2026-08-20', 28_012.85), // 11 days late
  NEEDS_YOU[0],
];
export const OVERDUE_COUNT = 38;

/* ------------------------------------------------------------- Home KPIs (S1, S2, S14) */
export const KPIS = {
  owed: 1_842_942,
  pastDue: 599_361,
  owedNote: 'R 599 361 past due',
  revenue12m: 19_651_738,
  netMargin12m: 14.0,
  netProfit12m: 2_391_759,
  netProfitIfApproved: 2_322_121,
  pendingCosts: 69_639,
  marginNote: 'R 2 322 121 if the R 69 639 pending is approved',
  activeLoads: 9,
  activeNote: '1 left open',
};

/** Revenue vs costs, excl. VAT, cash basis, R thousands, Oct 2025 to Sep 2026 (the Home chart's own table, S1). */
export const REVENUE_VS_COSTS = [
  { m: 'Oct', revenue: 1279, costs: 1159 },
  { m: 'Nov', revenue: 1356, costs: 1189 },
  { m: 'Dec', revenue: 1455, costs: 1336 },
  { m: 'Jan', revenue: 1253, costs: 1189 },
  { m: 'Feb', revenue: 1333, costs: 1237 },
  { m: 'Mar', revenue: 1327, costs: 1242 },
  { m: 'Apr', revenue: 1447, costs: 1152 },
  { m: 'May', revenue: 1405, costs: 1241 },
  { m: 'Jun', revenue: 1686, costs: 1329 },
  { m: 'Jul', revenue: 1557, costs: 1219 },
  { m: 'Aug', revenue: 1370, costs: 1083 },
  { m: 'Sep', revenue: 1620, costs: 1322 },
];

/** Debtors age (S8), incl. VAT, aged by due date. Sums to R 1 842 941,97; all but Current = R 599 361. */
export const AGEING = [
  { label: 'Current', amount: 1_243_581.25 },
  { label: '1 to 30', amount: 390_747.0 },
  { label: '31 to 60', amount: 52_944.85 },
  { label: '61 to 90', amount: 81_687.95 },
  { label: '90+', amount: 73_980.92 },
];
export const AGEING_TOTAL = 1_842_941.97;
export const OVER_60 = 155_669; // S8 "Over 60 days 8%, R 155 669 of the total"

/* ------------------------------------------------------- lanes (S12, S12b) */
/** Revenue per km by lane, delivered loads, last 12 months, excl. VAT. All 14 lanes, best first. */
export const LANES = [
  { lane: 'Mbombela to Maputo', perKm: 84.91, km: 210, trips: 52 },
  { lane: 'Midrand to Pretoria', perKm: 78.35, km: 45, trips: 44 },
  { lane: 'Kempton Park to Secunda', perKm: 61.22, km: 135, trips: 46 },
  { lane: 'Durban to Pietermaritzburg', perKm: 56.09, km: 80, trips: 42 },
  { lane: 'Johannesburg to eMalahleni', perKm: 55.56, km: 125, trips: 59 },
  { lane: 'Bothaville to Johannesburg', perKm: 47.79, km: 205, trips: 32 },
  { lane: 'Tzaneen to Johannesburg', perKm: 43.36, km: 420, trips: 40 },
  { lane: 'Johannesburg to Durban', perKm: 40.89, km: 570, trips: 125 },
  { lane: 'Johannesburg to Bloemfontein', perKm: 38.74, km: 400, trips: 54 },
  { lane: 'Durban to Johannesburg', perKm: 37.49, km: 570, trips: 55 },
  { lane: 'Johannesburg to Cape Town', perKm: 36.26, km: 1400, trips: 91 },
  { lane: 'Cape Town to Johannesburg', perKm: 33.49, km: 1400, trips: 81 },
  { lane: 'Durban to Gqeberha', perKm: 14.4, km: 915, trips: 46 },
  { lane: 'Johannesburg to Polokwane', perKm: 13.58, km: 320, trips: 48 },
];
export const FLEET_AVG_PER_KM = 36.29;
/** The JHB to DBN lane, for the "one load, one record" chain. */
export const LANE_JHB_DBN = LANES.find((l) => l.lane === 'Johannesburg to Durban')!;

/** Home "Latest work" (S1): the five most recent quotes. */
export const LATEST_QUOTES = [
  { number: 'QT-20260930-2560', customer: CUSTOMERS.steelpoort, route: 'Isando, Kempton to Secunda Industria', total: 9_350, status: 'Draft' },
  { number: 'QT-20260929-2561', customer: CUSTOMERS.steelpoort, route: 'City Deep to Ferrobank, eMalahleni', total: 8_959, status: 'Draft' },
  { number: 'QT-20260929-2563', customer: CUSTOMERS.waterberg, route: 'City Deep to Ladanna, Polokwane', total: 4_694, status: 'Sent' },
  { number: 'QT-20260928-2564', customer: CUSTOMERS.matola, route: 'Riverside Park to Porto de Maputo', total: 17_933, status: 'Sent' },
  { number: 'QT-20260928-2562', customer: CUSTOMERS.imbali, route: 'Prospecton, Durban to Willowton, Pietermaritzburg', total: 4_749, status: 'Draft' },
];
/** Home "Quote pipeline" (S1) and the quotes board (S4): all 768 quotes. */
export const PIPELINE = { all: 768, draft: 3, sent: 8, accepted: 292, onRoad: 7, declined: 388, expired: 77, winRate: 42 };

/* ---------------------------------------------------- Insights findings (Insights > Findings) */
/** Four of the seven findings the app ranks for the demo company, same values and words. */
export const FINDINGS = [
  {
    value: 177_114,
    title: `${CUSTOMERS.riverbend} stopped paying`,
    severity: 'High',
    area: 'Get paid',
    detail: 'Paid 19 invoices on time. Now 2 invoices up to 69 days late.',
    action: 'Call their accounts team',
    share: 1,
  },
  {
    value: 42_809,
    title: 'Overdue, no proof of delivery',
    severity: 'Medium',
    area: 'Get paid',
    detail: '2 overdue invoices without a POD. Customers ask for it first.',
    action: 'Attach PODs, largest first',
    share: 42_809 / 177_114,
  },
  {
    value: 25_778,
    title: 'Overdue, never chased',
    severity: 'Medium',
    area: 'Get paid',
    detail: '2 customers, up to 37 days past the due date. No reminder sent on any.',
    action: 'Send reminders',
    share: 25_778 / 177_114,
  },
  {
    value: 4_830,
    title: 'Invoiced, never sent',
    severity: 'Medium',
    area: 'Get paid',
    detail: '1 draft invoice, the oldest 7 days old. Customers have not seen them.',
    action: 'Review and send',
    share: 4_830 / 177_114,
  },
];

/* ------------------------------------------------------------ Copilot (S13) */
export const COPILOT = {
  question: 'Who owes me the most right now?',
  answerLead: `${CUSTOMERS.kaapse} owes you the most: R 296 963 across 5 open invoices.`,
  answerDetail: `The oldest is ${OVERDUE[1].number} (R 57 805), ${OVERDUE[1].daysLate} days past its due date.`,
  source: 'From your invoices, 30 Sep 2026',
};
