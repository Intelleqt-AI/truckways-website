/**
 * One signature visual per feature page (critic R3: the feature pages felt templated). Each sits on an
 * ink band and draws one thing the product does, from the demo company's figures (content/demo-data.ts):
 *   Quoting    the N3 plaza by plaza, Johannesburg to Durban, class 4
 *   Invoicing  delivery to invoice, one load
 *   Debtors    the ageing bar
 *   Reports    net profit by month, 12 months
 * Server components; no client JS. One blue figure per band (styles: pages-b.css "signature").
 */
import type { ReactNode } from 'react';
import { TwoTone } from '../ui';
import { N3_PLAZAS, N3_TOTAL_EX, N3_TOTAL_INCL, INVOICE, BOOKED_QUOTE, AGEING, KPIS, OVER_60, REVENUE_VS_COSTS } from '../../content/demo-data';
import { rand, date, num } from '../../lib/format';

function Band({ id, a, b, line, children, label }: { id: string; a: string; b?: string; line: string; children: ReactNode; label: string }) {
  return (
    <section className="sec sec--ink sig" data-theme="dark" aria-labelledby={id}>
      <div className="wrap">
        <div className="sig__head reveal">
          <TwoTone id={id} a={a} b={b} />
          <p>{line}</p>
        </div>
        <figure className="sig__fig reveal" role="img" aria-label={label}>
          {children}
        </figure>
      </div>
    </section>
  );
}

/** Quoting: the N3 plaza by plaza. */
export function SigTolls() {
  return (
    <Band
      id="sig-h"
      a="Johannesburg to Durban."
      b="Five plazas, priced one by one."
      line="A superlink pays class 4. Each plaza is named on the quote, and the tolls go in excl. VAT because you claim the VAT back."
      label={`The N3 from Johannesburg to Durban for a class 4 vehicle: ${N3_PLAZAS.map((p) => `${p.name} ${rand(p.tariffIncl, { cents: true })}`).join(', ')}. ${rand(N3_TOTAL_INCL, { cents: true })} incl. VAT, ${rand(N3_TOTAL_EX, { cents: true })} excl. VAT into the quote.`}
    >
      <div className="sig-route" aria-hidden="true">
        <div className="sig-route__end">
          <b>Johannesburg</b>
          <span>City Deep</span>
        </div>
        <ol className="sig-route__plazas list-reset">
          {N3_PLAZAS.map((p, i) => (
            <li key={p.name} style={{ ['--i' as string]: i }}>
              <i className="sig-route__node" />
              <b>{p.name}</b>
              <span>{rand(p.tariffIncl, { cents: true })}</span>
              <span className="sig-route__ex">{rand(p.exVat, { cents: true })} excl.</span>
            </li>
          ))}
        </ol>
        <div className="sig-route__end sig-route__end--to">
          <b>Durban</b>
          <span>Prospecton</span>
        </div>
      </div>
      <div className="sig__total">
        <span className="sig__fig-blue">{rand(N3_TOTAL_EX, { cents: true })}</span>
        <span>excl. VAT into the quote, from {rand(N3_TOTAL_INCL, { cents: true })} at the plazas. SANRAL tariffs effective 1 March 2026.</span>
      </div>
    </Band>
  );
}

/** Invoicing: delivery to invoice, one load. */
export function SigDelivery() {
  const steps = [
    { k: 'Accepted', v: BOOKED_QUOTE.number, s: `${date(BOOKED_QUOTE.accepted)}, ${rand(BOOKED_QUOTE.amount, { cents: true })} excl. VAT` },
    { k: 'Delivered', v: INVOICE.load, s: `${date(INVOICE.delivered)}, POD attached` },
    { k: 'Invoice raised', v: INVOICE.number, s: `${date(INVOICE.issued)}, due ${date(INVOICE.due)}` },
  ];
  return (
    <Band
      id="sig-h"
      a="Delivered on the 24th."
      b="Invoiced on the 24th."
      line="Mark the load delivered, in TruckWys or from your TMS, and the invoice is raised the same moment, ready to send."
      label={`One load: quote ${BOOKED_QUOTE.number} accepted, ${INVOICE.load} delivered on ${date(INVOICE.delivered)} with the POD, and invoice ${INVOICE.number} raised the same day for ${rand(INVOICE.total, { cents: true })} incl. VAT, with the invoice number as the EFT reference.`}
    >
      <ol className="sig-flow list-reset" aria-hidden="true">
        {steps.map((s, i) => (
          <li key={s.k} style={{ ['--i' as string]: i }}>
            <span className="sig-flow__k">{s.k}</span>
            <b>{s.v}</b>
            <span className="sig-flow__s">{s.s}</span>
          </li>
        ))}
        <li className="sig-flow__out" style={{ ['--i' as string]: 3 }}>
          <span className="sig-flow__k">Ready to send</span>
          <b className="sig__fig-blue">{rand(INVOICE.total, { cents: true })}</b>
          <span className="sig-flow__s">
            incl. 15% VAT · EFT reference <span className="nowrap">{INVOICE.number}</span>
          </span>
        </li>
      </ol>
    </Band>
  );
}

/** Debtors: the ageing bar. */
export function SigAgeing() {
  const total = KPIS.owed;
  const tones = ['var(--chart-muted)', 'var(--heat-3)', 'var(--heat-4)', 'var(--heat-5)', 'var(--text-primary)'];
  return (
    <Band
      id="sig-h"
      a="Everything you are owed."
      b="By how late it is."
      line="Aged by due date, by customer or by invoice. The share over 60 days is the number to watch."
      label={`Debtors by age, ${rand(total)} owed: ${AGEING.map((a) => `${a.label} ${rand(a.amount)}`).join(', ')}. ${rand(OVER_60)} is over 60 days.`}
    >
      <div className="sig-age" aria-hidden="true">
        <div className="sig-age__top">
          <span className="sig__fig-blue">{rand(total)}</span>
          <span>owed to you · {rand(OVER_60)} over 60 days ({Math.round((OVER_60 / total) * 100)}%)</span>
        </div>
        <div className="sig-age__bar">
          {AGEING.map((a, i) => (
            <span key={a.label} style={{ width: `${(a.amount / total) * 100}%`, background: tones[i], ['--i' as string]: i }} />
          ))}
        </div>
        <ul className="sig-age__legend list-reset">
          {AGEING.map((a, i) => (
            <li key={a.label}>
              <i style={{ background: tones[i] }} />
              <span>{a.label === '90+' ? 'Over 90 days' : a.label === 'Current' ? 'Current' : `${a.label} days`}</span>
              <b>{rand(a.amount)}</b>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

/** Reports: net profit by month, 12 months (the Home chart's own table, excl. VAT, cash basis). */
export function SigPnl() {
  const rows = REVENUE_VS_COSTS.map((r) => ({ ...r, net: r.revenue - r.costs, margin: ((r.revenue - r.costs) / r.revenue) * 100 }));
  const max = Math.max(...rows.map((r) => r.net));
  return (
    <Band
      id="sig-h"
      a="Twelve months of profit."
      b="One bar per month."
      line="Net profit and margin by month, from your invoices, payments and approved expenses. Cash basis, excl. VAT."
      label={`Net profit by month, October 2025 to September 2026: ${rows.map((r) => `${r.m} ${rand(r.net * 1000)} (${num(r.margin, 1)}%)`).join(', ')}. Net margin over 12 months ${num(KPIS.netMargin12m, 1)}%.`}
    >
      <div className="sig-pnl" aria-hidden="true">
        <div className="sig-pnl__top">
          <span className="sig__fig-blue">{num(KPIS.netMargin12m, 1)}%</span>
          <span>net margin, last 12 months</span>
        </div>
        <ol className="sig-pnl__bars list-reset">
          {rows.map((r, i) => (
            <li key={r.m} style={{ ['--i' as string]: i }}>
              <span className="sig-pnl__pct">{num(r.margin, 1)}%</span>
              <span className="sig-pnl__track">
                <span className="sig-pnl__bar" style={{ height: `${(r.net / max) * 100}%` }} />
              </span>
              <span className="sig-pnl__val">R&nbsp;{r.net}k</span>
              <span className={`sig-pnl__m${i === rows.length - 1 ? ' is-now' : ''}`}>{r.m}</span>
            </li>
          ))}
        </ol>
      </div>
    </Band>
  );
}
