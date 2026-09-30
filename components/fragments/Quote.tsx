import { N3_PLAZAS, N3_TOTAL_EX, N3_TOTAL_INCL, QUOTE } from '../../content/demo-data';
import { rand, num, date } from '../../lib/format';

function CostLines() {
  const q = QUOTE;
  return (
    <>
      <div className="cost__row">
        <span>
          Fuel: {num(q.burn, 1)} L/100 km at {rand(q.dieselPerL, { cents: true })}/L
          <span className="cost__plazas">
            {num(q.litres, 0)} L over {num(q.km)} km, inland diesel
          </span>
        </span>
        <span>{rand(q.fuel, { cents: true })}</span>
      </div>
      <div className="cost__row">
        <span>
          Tolls (SA plazas)
          <span className="cost__plazas">
            {N3_PLAZAS.map((p) => p.name).join(', ')} · class {q.tollClass}, excl. VAT
          </span>
        </span>
        <span>{rand(q.tolls, { cents: true })}</span>
      </div>
      <div className="cost__row">
        <span>Driver allowance</span>
        <span>{rand(q.allowance, { cents: true })}</span>
      </div>
      <div className="cost__row">
        <span>
          Base rate ({q.vehicle} · {rand(q.ratePerKm, { cents: true })}/km)
        </span>
        <span>{rand(q.base, { cents: true })}</span>
      </div>
      <div className="cost__price">
        <span>Quote price, excl. VAT</span>
        <span>{rand(q.quotePrice, { cents: true })}</span>
      </div>
      <div className="cost__foot">
        VAT 15% {rand(q.vat, { cents: true })} · total {rand(q.totalIncl, { cents: true })} · above your costs of{' '}
        {rand(q.costFloor, { cents: true })}
      </div>
    </>
  );
}

/** F1: the quote builder's cost breakdown card (Johannesburg to Durban, class 4 interlink). */
export function CostBreakdown({ float, hidden }: { float?: boolean; hidden?: boolean }) {
  return (
    <div className={`frag tw-card${float ? ' frag--float' : ''}`} aria-hidden={hidden || undefined}>
      <div className="tw-card__head" style={{ marginBottom: 4 }}>
        <div>
          <div className="tw-card__title">Cost breakdown</div>
          <div className="tw-card__sub">
            {QUOTE.from} to {QUOTE.to} · {QUOTE.vehicle} · {num(QUOTE.km)} km one way
          </div>
        </div>
      </div>
      <CostLines />
    </div>
  );
}

/** F2: a sent-and-accepted quote with its cost lines (StepSwitcher panel 1). */
export function QuoteCard() {
  const q = QUOTE;
  return (
    <div className="frag tw-card cq">
      <div className="quote__head">
        <div>
          <div className="tw-card__title">{q.number}</div>
          <div className="tw-card__sub">{q.customer}</div>
        </div>
        <span className="tw-status tw-status--success">
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
            {q.vehicle}, class {q.tollClass}
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
export function N3Tolls() {
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
        {N3_PLAZAS.map((p, i) => (
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
      <div className="toll__total">
        <span>One way total, excl. VAT (goes into the quote)</span>
        <span>{rand(N3_TOTAL_EX, { cents: true })}</span>
      </div>
      <figcaption className="toll__src">
        Tariffs effective 1 Mar 2026 (GG 54087, GG 54088), {rand(N3_TOTAL_INCL, { cents: true })} incl. VAT. Mainline plazas
        only. Class 4 is SANRAL&apos;s class for combinations such as an interlink.
      </figcaption>
    </figure>
  );
}
