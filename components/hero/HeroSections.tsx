import { QUOTE, OVERDUE, NEEDS_YOU, KPIS, OVERDUE_COUNT, LANES, FLEET_AVG_PER_KM } from '../../content/demo-data';
import { rand, num } from '../../lib/format';
import s from './PhotoHero.module.css';

/*
 * Three product cross-sections that rise over the photo hero's bottom edge.
 * One anatomy for all three so they read as a set: step label, title, context line,
 * three rows, one key figure. Equal heights, aligned tops. Fictional demo company data.
 */
type Row = { name: string; sub?: string; value: string };
type Cell = { step: string; title: string; context: string; rows: Row[]; keyLabel: string; keyValue: string };

const chase = [OVERDUE[0], OVERDUE[2], NEEDS_YOU[0]]; // one invoice per customer, no repeats

const CELLS: Cell[] = [
  {
    step: 'Price it',
    title: 'New quote',
    context: `${QUOTE.from} to ${QUOTE.to} · ${QUOTE.km} km`,
    rows: [
      { name: 'Diesel', sub: `${num(QUOTE.burn, 1)} L/100 km at ${rand(QUOTE.dieselPerL, { cents: true })}/L`, value: rand(QUOTE.fuel) },
      { name: 'Tolls', sub: `5 N3 plazas, class ${QUOTE.tollClass}`, value: rand(QUOTE.tolls) },
      { name: 'Driver allowance', sub: 'Per trip', value: rand(QUOTE.allowance) },
    ],
    keyLabel: 'Quote price, excl. VAT',
    keyValue: rand(QUOTE.quotePrice),
  },
  {
    step: 'Chase it',
    title: 'Overdue invoices',
    context: 'Who owes you, and how late',
    rows: chase.map((i) => ({
      name: i.customer,
      sub: `${i.daysLate} ${i.daysLate === 1 ? 'day' : 'days'} late`,
      value: rand(Math.round(i.amount)),
    })),
    keyLabel: `Past due, ${OVERDUE_COUNT} invoices`,
    keyValue: rand(KPIS.pastDue),
  },
  {
    step: 'Know it',
    title: 'Revenue per km',
    context: 'By lane, last 12 months, excl. VAT',
    rows: LANES.slice(0, 3).map((l) => ({ name: l.lane, sub: `${l.trips} trips`, value: rand(l.perKm, { cents: true }) })),
    keyLabel: 'Fleet average',
    keyValue: `${rand(FLEET_AVG_PER_KM, { cents: true })}/km`,
  },
];

export default function HeroSections() {
  return (
    <div className={s.sections} aria-label="TruckWys product views">
      {CELLS.map((c, n) => (
        <div className={s.cell} key={c.step} style={{ ['--i' as string]: n }} data-theme="light">
          <p className={s.step}>{c.step}</p>
          <p className={s.title}>{c.title}</p>
          <p className={s.context}>{c.context}</p>
          <ul className={s.rows}>
            {c.rows.map((r) => (
              <li key={r.name}>
                <span className={s.rowName}>
                  {r.name}
                  {r.sub ? <span className={s.rowSub}>{r.sub}</span> : null}
                </span>
                <span className={s.rowValue}>{r.value}</span>
              </li>
            ))}
          </ul>
          <p className={s.key}>
            <span>{c.keyLabel}</span>
            <span className={s.keyValue}>{c.keyValue}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
