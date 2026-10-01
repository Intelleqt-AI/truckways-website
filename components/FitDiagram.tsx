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
      <svg viewBox="0 0 12 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path pathLength={1} d="M6 39V2M1.5 6.5 6 2l4.5 4.5" />
      </svg>
    </div>
  );
}

export default function FitDiagram() {
  return (
    <figure className="fit reveal">
      <figcaption className="sr-only">
        How TruckWys fits: what you already run (your TMS, spreadsheets, Cartrack, CtrlFleet, Excel and CSV, API) feeds
        TruckWys, which quotes, invoices, collects and reports; what you get is invoices with VAT, debtors by age, and
        profit by lane with a VAT report.
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
          <img src="/brand/truckwys-logo.png" alt="TruckWys" width={92} height={18} loading="lazy" />
        </div>
        {[
          ['Quote.', 'Priced from diesel, tolls and your costs.'],
          ['Invoice.', 'Raised when the load delivers.'],
          ['Collect.', 'Debtors by age, reminders per invoice.'],
          ['Know.', 'Profit, margin and VAT from the same numbers.'],
        ].map(([t, d], i) => (
          <div className="fit__step" key={t}>
            <i>0{i + 1}</i>
            <b>{t}</b>
            <span>{d}</span>
          </div>
        ))}
      </div>
      <ArrowUp />
      <div className="fit__bottom">
        <span className="label">What you already run</span>
        <ul className="fit__run list-reset">
          {['Your TMS', 'Spreadsheets', 'Cartrack', 'CtrlFleet', 'Excel and CSV', 'API'].map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
