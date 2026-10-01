/**
 * "How it fits" (Home section 3, About): what you get on top, TruckWys in the middle, what you already run
 * underneath. Mini fragments use the demo company's figures (content/demo-data.ts).
 */
import { INVOICE, KPIS, AGEING, LANES } from '../content/demo-data';
import { rand } from '../lib/format';

function MiniInvoice() {
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0 }}>
        <span className="tw-12 tw-muted">{INVOICE.number}</span>
        <span className="tw-status" style={{ height: 20 }}>
          <span className="tw-status__dot" style={{ background: 'var(--status-info-dot)' }} />
          Sent
        </span>
      </div>
      <div className="tw-row">
        <span className="tw-13 tw-sec">VAT 15%</span>
        <span className="tw-13">{rand(INVOICE.vat, { cents: true })}</span>
      </div>
      <div className="tw-row" style={{ paddingBottom: 0 }}>
        <span className="tw-13 tw-600">Total</span>
        <span className="tw-13 tw-600">{rand(INVOICE.total, { cents: true })}</span>
      </div>
    </div>
  );
}
function MiniAge() {
  const tones = ['var(--chart-muted)', 'var(--chart-axis)', 'var(--chart-hatch)', 'var(--text-secondary)', 'var(--text-primary)'];
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0, borderBottom: 0 }}>
        <span className="tw-12 tw-muted">Owed to you</span>
        <span className="tw-13 tw-600">{rand(KPIS.owed)}</span>
      </div>
      <div className="age__bar" style={{ margin: '4px 0 8px' }}>
        {AGEING.map((a, i) => (
          <span key={a.label} style={{ width: `${(a.amount / KPIS.owed) * 100}%`, background: tones[i] }} />
        ))}
      </div>
      <div className="tw-12 tw-muted">Not due · 30 · 60 · 90 · 90+ days</div>
    </div>
  );
}
function MiniLanes() {
  const rows = LANES.slice(0, 3).map((l) => [l.lane, Math.round((l.perKm / LANES[0].perKm) * 100)] as const);
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      {rows.map(([l, w], i) => (
        <div key={l} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) 1fr', alignItems: 'center', gap: 10, padding: '4px 0' }}>
          <span className="tw-12 tw-sec">{l}</span>
          <span className="lane__track">
            <span className="lane__fill" style={{ display: 'block', width: `${w}%`, background: i === 0 ? 'var(--text-primary)' : undefined }} />
          </span>
        </div>
      ))}
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="fit__arrow" aria-hidden="true">
      <svg viewBox="0 0 12 44" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength={1} d="M6 43V2M1.5 6.5 6 2l4.5 4.5" />
      </svg>
    </div>
  );
}

const STEPS = [
  ['Price', 'Prices every load from this month’s diesel, the real tolls and your own costs.'],
  ['Invoice', 'Raises the invoice when the load delivers, with VAT and the POD attached.'],
  ['Collect', 'Follows every rand until it’s paid, and shows what each lane really earns.'],
];
const RUN = ['Your TMS', 'Cartrack', 'CtrlFleet', 'Excel', 'CSV', 'API'];

export default function FitDiagram() {
  return (
    <figure className="fit reveal">
      <figcaption className="sr-only">
        How TruckWys fits: what you already run (your TMS, Cartrack, CtrlFleet, Excel, CSV and the API) feeds TruckWys,
        which prices, invoices and collects; what you get is invoices with VAT, debtors by age, and profit by lane with a
        VAT report.
      </figcaption>
      <ul className="fit__top list-reset" aria-label="What you get">
        <li>
          <h3>Invoices with VAT</h3>
          <MiniInvoice />
        </li>
        <li>
          <h3>Debtors by age</h3>
          <MiniAge />
        </li>
        <li>
          <h3>Profit by lane and a VAT report</h3>
          <MiniLanes />
        </li>
      </ul>
      <ArrowUp />
      <div className="fit__layer" data-theme="dark">
        <div className="fit__brand">
          <img src="/brand/truckwys-logo.png" alt="TruckWys" width={133} height={26} loading="lazy" />
        </div>
        {STEPS.map(([t, d], i) => (
          <div className="fit__step" key={t}>
            <p className="fit__kicker">
              0{i + 1} <span aria-hidden="true">·</span> {t}
            </p>
            <p className="fit__say">{d}</p>
          </div>
        ))}
      </div>
      <ArrowUp />
      <div className="fit__bottom">
        <p className="fit__kicker fit__kicker--muted">What you already run</p>
        <ul className="fit__run list-reset">
          {RUN.map((n) => (
            <li key={n}>{n}</li>
          ))}
          <li aria-hidden="true">…</li>
        </ul>
      </div>
    </figure>
  );
}
