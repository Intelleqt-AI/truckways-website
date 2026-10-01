import type React from 'react';
import { N3_PLAZAS, N3_TOTAL_EX, N3_TOTAL_INCL, QUOTE } from '../../content/demo-data';
import { rand, num, date } from '../../lib/format';

function CostLines({ compact }: { compact?: boolean }) {
  const q = QUOTE;
  const c = (n: number) => rand(n, { cents: true });
  // Compact (the hero float): the app's rows with their detail folded into one short label.
  const rows: [React.ReactNode, number][] = compact
    ? [
        [<>Fuel · {num(q.burn, 1)}&nbsp;L/100&nbsp;km at {c(q.dieselPerL)}/L</>, q.fuel],
        [<>Tolls · {N3_PLAZAS.length} N3 plazas, class {q.tollClass}</>, q.tolls],
        ['Driver allowance', q.allowance],
        [<>Base rate · {c(q.ratePerKm)}/km</>, q.base],
        ['Markup to the suggested price', q.markup],
      ]
    : [
        [
          <>
            Fuel: {num(q.burn, 1)} L/100 km at {c(q.dieselPerL)}/L
            <span className="cost__plazas">
              {q.dieselNote} · {num(q.litres, 0)} L over {num(q.km)} km
            </span>
          </>,
          q.fuel,
        ],
        [
          <>
            Tolls (SA plazas)
            <span className="cost__plazas">
              {N3_PLAZAS.map((p) => p.name).join(', ')} · class {q.tollClass}, excl. VAT
            </span>
          </>,
          q.tolls,
        ],
        ['Driver allowance', q.allowance],
        [
          <>
            Base rate ({q.vehicle} · {c(q.ratePerKm)}/km)
            <span className="cost__plazas">Your running cost per km: finance, tyres, maintenance, wages</span>
          </>,
          q.base,
        ],
        [
          <>
            Markup
            <span className="cost__plazas">To the suggested price, from your past quotes to this client</span>
          </>,
          q.markup,
        ],
      ];
  return (
    <>
      {rows.map(([l, v], i) => (
        <div className="cost__row" key={i}>
          <span>{l}</span>
          <span>{c(v)}</span>
        </div>
      ))}
      <div className="cost__price">
        <span>Quote price, excl. VAT</span>
        <span>{c(q.quotePrice)}</span>
      </div>
      <div className="cost__foot">
        Costs {c(q.costs)} · margin {q.marginPct}%
        {compact ? null : <> · win chance {q.winPct}%</>}
        {compact ? null : (
          <>
            {' '}· VAT 15% {c(q.vat)} · total {c(q.totalIncl)}
          </>
        )}
      </div>
    </>
  );
}

/** F1: the quote builder's cost breakdown card (S3: City Deep to Prospecton, Superlink Tautliner, class 4). */
export function CostBreakdown({ float, hidden, compact }: { float?: boolean; hidden?: boolean; compact?: boolean }) {
  return (
    <div className={`frag tw-card${float ? ' frag--float' : ''}${compact ? ' cost--compact' : ''}`} aria-hidden={hidden || undefined}>
      <div className="tw-card__head" style={{ marginBottom: 4 }}>
        <div>
          <div className="tw-card__title">Cost breakdown</div>
          <div className="tw-card__sub">
            {QUOTE.from} to {QUOTE.to} · {QUOTE.vehicle} · {num(QUOTE.km)}&nbsp;km{compact ? '' : ' one way'}
          </div>
        </div>
      </div>
      <CostLines compact={compact} />
    </div>
  );
}

/** F2: the new quote from S3 with its cost lines (StepSwitcher panel 1). */
export function QuoteCard() {
  const q = QUOTE;
  return (
    <div className="frag tw-card cq">
      <div className="quote__head">
        <div>
          <div className="tw-card__title">{q.number}</div>
          <div className="tw-card__sub">{q.customer}</div>
        </div>
        <span className={`tw-status tw-status--${q.status === 'Accepted' ? 'success' : q.status === 'Sent' ? 'info' : 'neutral'}`}>
          <span className="tw-status__dot" />
          {q.status}
        </span>
      </div>
      <div className="quote__meta">
        <div>
          <span>Route</span>
          <b>
            {q.from} to {q.to}
          </b>
        </div>
        <div>
          <span>Vehicle</span>
          <b>
            {q.vehicle}, <span className="nowrap">{q.weightT}&nbsp;t</span>, <span className="nowrap">class&nbsp;{q.tollClass}</span>
          </b>
        </div>
        <div>
          <span>Valid until</span>
          <b>{date(q.validUntil)}</b>
        </div>
      </div>
      <CostLines />
    </div>
  );
}

/** F1-N3: plaza-by-plaza tolls from the seeded 2026 SANRAL tariff table. */
/** `rows` shows only the first n plazas (Home), with a "see all" link (`more`) in place of the rest. */
export function N3Tolls({ rows, more }: { rows?: number; more?: { href: string; label: string } } = {}) {
  const shown = rows ? N3_PLAZAS.slice(0, rows) : N3_PLAZAS;
  const hidden = N3_PLAZAS.length - shown.length;
  return (
    <figure className="frag tw-card cq" style={{ padding: 24 }}>
      <div className="tw-card__head">
        <div>
          <div className="tw-card__title">Toll plazas on this route</div>
          <div className="tw-card__sub">N3, Johannesburg to Durban · SANRAL class 4 · one way</div>
        </div>
      </div>
      <div className="toll__cols" aria-hidden="true">
        <span />
        <span>Plaza</span>
        <span>Tariff</span>
        <span>Excl. VAT</span>
      </div>
      <ol className="list-reset">
        {shown.map((p, i) => (
          <li className="toll__row" key={p.name}>
            <span className="toll__i">{i + 1}</span>
            <span className="toll__name">
              {p.name} <span>({p.road})</span>
            </span>
            <span className="toll__incl">{rand(p.tariffIncl, { cents: true })}</span>
            <span className="toll__ex">{rand(p.exVat, { cents: true })}</span>
          </li>
        ))}
      </ol>
      {hidden > 0 || more ? (
        <div className="toll__more">
          <span>{hidden > 0 ? `${hidden} more ${hidden === 1 ? 'plaza' : 'plazas'} on this route` : null}</span>
          {more ? (
            <a className="tlink" href={more.href}>
              {more.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ) : null}
        </div>
      ) : null}
      <div className="toll__total">
        <span>One way total, excl. VAT (goes into the quote)</span>
        <span>{rand(N3_TOTAL_EX, { cents: true })}</span>
      </div>
      <figcaption className="toll__src">
        Tariffs effective 1 Mar 2026 (GG 54087, GG 54088), {rand(N3_TOTAL_INCL, { cents: true })} incl. VAT. Mainline plazas
        only. Class 4 is SANRAL&apos;s class for combinations such as a superlink.
      </figcaption>
    </figure>
  );
}
