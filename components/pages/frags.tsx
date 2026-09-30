/**
 * Phase B product fragments: static HTML rebuilds of v3 dashboard screens at
 * product scale, drawn from the captures in the design scratchpad (S3, S4, S6,
 * S8, S9, S10, S11, S12, S15, S17, S18). Same anatomy and labels as the app;
 * sample data from content/demo-data.ts via ./sample.ts. Server components,
 * no client JS. Classes: tw-* are the shared product anatomy (styles/fragments.css),
 * b-* are local to these pages (./pages-b.css).
 */
import type { ReactNode } from 'react';
import { ChevronRight, ChevronDown, Download, Printer, Search, Info, Check, Mic, MessageCircle, Plus, KeyRound, Webhook, Calendar } from 'lucide-react';
import { COMPANY, INVOICE, KPIS, QUOTE, AGEING, TODAY, OVERDUE, OVERDUE_TOTAL } from '../../content/demo-data';
import { rand, date, num } from '../../lib/format';
import {
  BOARD, BOARD_COUNT, DEBTORS, DEBTOR_STATS, DEBTORS_TOTAL, DEBTOR_CUSTOMERS, DEBTOR_INVOICES, STATEMENT, STATEMENT_BALANCE, PNL_MONTHS, PNL_TOTAL, VAT_ROWS, VAT_TOTAL,
  REPORTS_INDEX, LANE_POINTS, FLEET_AVG_PER_KM, EXPENSES,
} from './sample';

const S = 1.75;
const R = (n: number) => rand(n, { cents: true });
const R0 = (n: number) => rand(Math.round(n));

function Status({ tone = 'neutral', children }: { tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger'; children: ReactNode }) {
  return (
    <span className={`tw-status tw-status--${tone}`}>
      <span className="tw-status__dot" />
      {children}
    </span>
  );
}

/** The app's page header (title, subtitle, optional back link, tabs and actions), at product scale. */
export function AppHead({ title, sub, back, tabs, active, actions, chip }: { title: string; sub?: ReactNode; back?: string; tabs?: string[]; active?: string; actions?: ReactNode; chip?: ReactNode }) {
  return (
    <div className="b-apphead">
      <div className="b-apphead__row">
        <div style={{ minWidth: 0 }}>
          <div className="b-apphead__title">
            {title}
            {chip}
          </div>
          {back ? (
            <div className="b-apphead__back">
              <ChevronRight strokeWidth={S} aria-hidden="true" style={{ transform: 'rotate(180deg)' }} />
              {back}
            </div>
          ) : null}
          {sub ? <div className="b-apphead__sub">{sub}</div> : null}
        </div>
        {actions ? <div className="b-apphead__actions">{actions}</div> : null}
      </div>
      {tabs ? (
        <div className="b-tabs">
          {tabs.map((t) => (
            <span key={t} className={t === active ? 'is-active' : undefined}>
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ================================================================ S4 quotes board */
export function QuotesBoard() {
  return (
    <div className="frag b-app cq">
      <AppHead
        title="Quotes and loads"
        sub="Draft, send and track quotes."
        tabs={['Quotes', 'Orders', 'History']}
        active="Quotes"
        actions={
          <span className="tw-btn tw-btn--primary">
            <Plus strokeWidth={S} aria-hidden="true" /> New quote
          </span>
        }
      />
      <div className="b-toolbar">
        <span className="b-search">
          <Search strokeWidth={S} aria-hidden="true" /> Search quotes, customers, routes
        </span>
        <span className="tw-seg">
          <span className="is-active">Board</span>
          <span>List</span>
        </span>
        <span className="b-toolbar__meta">Drag a card to change its status · {BOARD_COUNT} quotes</span>
      </div>
      <div className="b-board">
        {BOARD.map((col) => (
          <div className="b-board__col" key={col.name}>
            <div className="b-board__head">
              <span className={`b-dot b-dot--${col.tone}`} />
              <b>{col.name}</b>
              <span className="tw-muted">{col.count}</span>
              <span className="b-board__sum">{R0(col.total)}</span>
            </div>
            {col.cards.map((c) => (
              <div className="b-qcard" key={c.number}>
                <div className="tw-13 tw-muted">{c.number}</div>
                <div className="b-qcard__cust">{c.customer}</div>
                <div className="b-qcard__route">
                  {c.from} → {c.to}
                </div>
                <div className="b-qcard__foot">
                  <b>{R0(c.amount)}</b>
                  <span className="tw-13 tw-muted">{c.date}</span>
                </div>
                {c.booked ? <span className="tw-btn b-qcard__btn">View booking</span> : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ S3 quote builder, top of form */
export function QuoteForm() {
  const fields: [string, string, boolean?][] = [
    ['Client', QUOTE.customer, true],
    ['Weight (t)', '20', true],
    ['Collection', 'City Deep, Johannesburg, GP', true],
    ['Delivery', 'Prospecton, Durban, KZN', true],
    ['Pickup date', '28/09/2026'],
    ['Delivery date', '29/09/2026'],
    ['Valid until', '05/10/2026'],
    ['Vehicle type', `${QUOTE.vehicle} (34 t)`],
  ];
  return (
    <div className="frag b-app cq">
      <AppHead title="New quote" back="Quote · Auto-saves in this browser" />
      <div className="b-describe">
        <MessageCircle strokeWidth={S} aria-hidden="true" />
        <span className="b-describe__text">20 t packaged foods, JHB to Durban, interlink, Monday</span>
        <span className="b-describe__mic">
          <Mic strokeWidth={S} aria-hidden="true" />
        </span>
        <span className="tw-btn tw-btn--primary">Fill</span>
      </div>
      <div className="b-form">
        {fields.map(([l, v, req]) => (
          <div className="b-field" key={l}>
            <span className="b-field__label">
              {l}
              {req ? <i aria-hidden="true" /> : null}
            </span>
            <span className="b-field__input">
              {v}
              {l.includes('date') || l === 'Valid until' ? <Calendar strokeWidth={S} aria-hidden="true" /> : null}
              {l === 'Client' || l === 'Vehicle type' ? <ChevronDown strokeWidth={S} aria-hidden="true" /> : null}
            </span>
          </div>
        ))}
        <div className="b-field b-field--wide">
          <span className="b-field__label">Trip</span>
          <span className="tw-seg b-trip">
            <span className="is-active">One way</span>
            <span>Round</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S6 invoice detail */
export function InvoiceDetail() {
  const inv = INVOICE;
  return (
    <div className="frag b-app cq">
      <AppHead
        title={inv.number}
        chip={<Status tone="info">{inv.status}</Status>}
        back={`Invoices · ${inv.customer} · ${inv.load}`}
        actions={
          <>
            <span className="tw-btn tw-btn--primary">Send to customer</span>
            <span className="tw-btn b-more" aria-hidden="true">
              ···
            </span>
          </>
        }
      />
      <div className="b-inv">
        <div className="tw-card tw-card--flush b-inv__main">
          <div className="b-inv__meta">
            {[
              ['Bill to', inv.customer],
              ['Issued', date(inv.issued)],
              ['Due', date(inv.due)],
              ['Terms', '30 days'],
            ].map(([k, v]) => (
              <div key={k}>
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </div>
          <div className="b-inv__charges">
            <div className="tw-card__title">Charges</div>
            <div className="tw-card__sub">1 line, excl. VAT</div>
          </div>
          <div className="b-inv__th">
            <span>Description</span>
            <span>Quantity</span>
            <span>Unit price</span>
            <span>Total</span>
          </div>
          <div className="b-inv__tr">
            <span>
              Linehaul {inv.route}, {QUOTE.vehicle.toLowerCase()}
            </span>
            <span>1</span>
            <span>{R(inv.subtotal)}</span>
            <span>{R(inv.subtotal)}</span>
          </div>
          <div className="b-inv__sum">
            <div>
              <span>Subtotal</span>
              <span>{R(inv.subtotal)}</span>
            </div>
            <div>
              <span>VAT (15%)</span>
              <span>{R(inv.vat)}</span>
            </div>
            <div className="b-inv__total">
              <span>Total due</span>
              <span>{R(inv.total)}</span>
            </div>
          </div>
          <div className="b-inv__note">Note: Raised on delivery of {inv.load}</div>
        </div>
        <div className="tw-card b-inv__side">
          <div className="tw-card__title" style={{ marginBottom: 8 }}>
            Activity
          </div>
          {[
            ['Created', date(inv.issued)],
            ['Sent to customer', date(inv.issued)],
            ['Reminders', 'None sent'],
          ].map(([k, v]) => (
            <div className="tw-row" key={k}>
              <span className="tw-sec">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S7 public invoice (customer view) */
export function PublicInvoice() {
  const inv = INVOICE;
  return (
    <div className="frag b-pub cq">
      <div className="b-pub__top">
        <b>{COMPANY} (Pty) Ltd</b>
        <span>
          <span className="tw-12 tw-muted">Invoice</span>
          <br />
          <span className="tw-13">{inv.number}</span>
        </span>
      </div>
      <div className="tw-card tw-card--flush">
        <div className="b-pub__due">
          <div>
            <div className="tw-13 tw-sec">Amount due</div>
            <div className="b-pub__fig">{R(inv.total)}</div>
            <div className="tw-13 tw-sec">Due {date(inv.due)}</div>
          </div>
          <Status>Sent</Status>
        </div>
        <div className="b-pub__parties">
          <div>
            <span>From</span>
            <b>{COMPANY} (Pty) Ltd</b>
          </div>
          <div>
            <span>Billed to</span>
            <b>{inv.customer}</b>
          </div>
        </div>
        <div className="b-pub__sum">
          <div>
            <span>Subtotal</span>
            <span>{R(inv.subtotal)}</span>
          </div>
          <div>
            <span>VAT (15%)</span>
            <span>{R(inv.vat)}</span>
          </div>
          <div className="b-inv__total">
            <span>Total</span>
            <span>{R(inv.total)}</span>
          </div>
        </div>
        <div className="b-pub__pay">
          Pay by EFT and use <b>{inv.number}</b> as your payment reference.
          <br />
          {inv.bank}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S5 invoice list */
export function InvoiceList() {
  const rows = [
    { customer: INVOICE.customer, number: INVOICE.number, issued: INVOICE.issued, due: INVOICE.due, status: 'Sent', tone: 'info' as const, amount: INVOICE.total },
    ...OVERDUE.slice(0, 4).map((o) => ({ customer: o.customer, number: o.number, issued: o.issued, due: o.due, status: 'Overdue', tone: 'danger' as const, amount: o.amount })),
  ];
  return (
    <div className="frag b-app cq">
      <AppHead title="Finance" sub="Invoices, expenses and what you are owed" tabs={['Invoices', 'Expenses']} active="Invoices" actions={<span className="tw-btn tw-btn--primary">New invoice</span>} />
      <div className="b-tiles">
        {[
          ['Invoiced in September', R0(VAT_ROWS[2].incl), 'By issue date'],
          ['Overdue', R0(KPIS.pastDue), 'Past due, incl. VAT'],
          ['Owed to you', R0(KPIS.owed), 'Incl. VAT'],
          ['Time to get paid', '38,6 days', 'Paid invoices, 12 months'],
        ].map(([l, f, n], i) => (
          <div className="tw-card b-tile" key={l}>
            <span className="stat__label">{l}</span>
            <span className="b-tile__fig">{f}</span>
            <span className="stat__note" style={i === 1 ? { color: 'var(--status-danger-text)' } : undefined}>
              {n}
            </span>
          </div>
        ))}
      </div>
      <div className="tw-card tw-card--flush b-table b-il">
        <div className="b-il__tr b-th">
          <span>Customer</span>
          <span>Issued</span>
          <span>Due</span>
          <span>Status</span>
          <span>Amount incl. VAT</span>
        </div>
        {rows.map((r) => (
          <div className="b-il__tr" key={r.number}>
            <span style={{ minWidth: 0 }}>
              <span className="b-exl__title tw-500">{r.customer}</span>
              <span className="tw-12 tw-muted">{r.number}</span>
            </span>
            <span className="tw-sec">{date(r.issued)}</span>
            <span className="tw-sec">{date(r.due)}</span>
            <span>
              <Status tone={r.tone}>{r.status}</Status>
            </span>
            <span className="tw-500">{R(r.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ S8 debtors age analysis */
export function DebtorsAge({ rows = 6 }: { rows?: number }) {
  const st = DEBTOR_STATS;
  const tiles = [
    ['Overdue', `${st.overduePct}%`, `${R0(st.overdue)} of the total`],
    ['Over 60 days', `${st.over60Pct}%`, `${R0(st.over60)} of the total`],
    ['Average days late', `${st.avgDaysLate} days`, 'Weighted by balance'],
    ['Largest debtor share', `${st.topShare}%`, st.topName],
  ];
  return (
    <div className="frag b-app cq">
      <AppHead
        title="Debtors age analysis"
        back="Reports"
        actions={
          <>
            <span className="tw-btn">
              <Download strokeWidth={S} aria-hidden="true" /> Export CSV
            </span>
            <span className="tw-btn b-hide-sm">
              <Printer strokeWidth={S} aria-hidden="true" /> Print
            </span>
          </>
        }
      />
      <div className="b-toolbar">
        <span className="b-select">
          <span className="tw-muted">As at</span> {date(TODAY)} <ChevronDown strokeWidth={S} aria-hidden="true" />
        </span>
        <span className="tw-seg">
          <span className="is-active">By customer</span>
          <span>By invoice</span>
        </span>
      </div>
      <div className="b-basis">
        Incl. VAT, aged by due date <Info strokeWidth={S} aria-hidden="true" />
      </div>
      <div className="b-tiles">
        {tiles.map(([l, f, n]) => (
          <div className="tw-card b-tile" key={l}>
            <span className="stat__label">{l}</span>
            <span className="b-tile__fig">{f}</span>
            <span className="stat__note">{n}</span>
          </div>
        ))}
      </div>
      <div className="tw-card tw-card--flush b-table b-age">
        <div className="b-age__tr b-th">
          <span>Customer</span>
          <span>Invoices</span>
          {AGEING.map((a) => (
            <span key={a.label}>{a.label === 'Current' ? 'Current' : a.label === '90+' ? 'Over 90 days' : `${a.label} days`}</span>
          ))}
          <span>Total</span>
        </div>
        {DEBTORS.slice(0, rows).map((d) => (
          <div className="b-age__tr" key={d.customer}>
            <span className="b-age__cust">{d.customer}</span>
            <span>{d.invoices}</span>
            {d.b.map((v, i) => (
              <span key={i} className={v ? undefined : 'tw-muted'}>
                {R(v)}
              </span>
            ))}
            <span className="tw-500">{R(d.total)}</span>
          </div>
        ))}
        <div className="b-age__tr b-age__total">
          <span>Total, all customers</span>
          <span>{DEBTOR_INVOICES}</span>
          {AGEING.map((a) => (
            <span key={a.label}>{R(a.amount)}</span>
          ))}
          <span>{R(DEBTORS_TOTAL)}</span>
        </div>
        <div className="b-check">
          Showing the {rows} largest of {DEBTOR_CUSTOMERS} customers. Total is every customer.
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S17-style customer statement */
export function Statement() {
  let bal = 0;
  return (
    <div className="frag b-app cq">
      <AppHead
        title="Customer statement"
        back="Reports"
        actions={
          <span className="tw-btn">
            <Download strokeWidth={S} aria-hidden="true" /> Export CSV
          </span>
        }
      />
      <div className="b-toolbar">
        <span className="b-select">
          {STATEMENT.customer} <ChevronDown strokeWidth={S} aria-hidden="true" />
        </span>
        <span className="b-select">
          <span className="tw-muted">As at</span> {date(STATEMENT.asAt)} <ChevronDown strokeWidth={S} aria-hidden="true" />
        </span>
      </div>
      <div className="tw-card tw-card--flush b-table b-stmt">
        <div className="b-stmt__tr b-th">
          <span>Date</span>
          <span>Reference</span>
          <span>Invoiced</span>
          <span>Paid</span>
          <span className="b-stmt__amt">Amount</span>
          <span>Balance</span>
        </div>
        {STATEMENT.rows.map((r) => {
          bal += r.amount;
          return (
            <div className="b-stmt__tr" key={r.ref + r.date}>
              <span className="tw-sec">{date(r.date)}</span>
              <span className="b-ellipsis">{r.ref}</span>
              <span>{r.amount > 0 ? R(r.amount) : ''}</span>
              <span>{r.amount < 0 ? R(-r.amount) : ''}</span>
              <span className="b-stmt__amt">{r.amount < 0 ? `Paid ${R(-r.amount)}` : R(r.amount)}</span>
              <span className="tw-500">{R(bal)}</span>
            </div>
          );
        })}
        <div className="b-stmt__tr b-age__total">
          <span>Balance owing</span>
          <span />
          <span />
          <span />
          <span className="b-stmt__amt" />
          <span>{R(STATEMENT_BALANCE)}</span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S9 reports library */
export function ReportsIndex() {
  return (
    <div className="frag b-app cq">
      <AppHead title="Reports" sub="Reconciled to your invoices, payments and expenses" />
      <div className="tw-card tw-card--flush b-table b-rep">
        <div className="b-rep__tr b-th">
          <span>Report</span>
          <span>What it answers</span>
          <span>
            Last 12 months <Info strokeWidth={S} aria-hidden="true" />
          </span>
          <span>Latest entry</span>
          <span />
        </div>
        {REPORTS_INDEX.map((r) => (
          <div className="b-rep__tr" key={r.name}>
            <span className="tw-500">{r.name}</span>
            <span className="tw-sec">{r.q}</span>
            <span className="b-rep__fig">
              <b>{'fig' in r && r.fig !== undefined ? R0(r.fig) : r.count}</b>
              <small>{r.note}</small>
            </span>
            <span className="tw-sec">{date(TODAY)}</span>
            <ChevronRight strokeWidth={S} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ S10 profit and loss */
export function ProfitLoss() {
  const cols = [...PNL_MONTHS.slice(-3), PNL_TOTAL];
  const rows: [string, (m: (typeof cols)[number]) => ReactNode, string?][] = [
    ['Revenue', () => '', 'group'],
    ['Sales', (m) => num(m.revenue), 'sub'],
    ['Direct costs', () => '', 'group'],
    ['Fuel', (m) => num(m.fuel), 'sub'],
    ['Tolls', (m) => num(m.tolls), 'sub'],
    ['Driver costs', (m) => num(m.driver), 'sub'],
    ['Maintenance and repairs', (m) => num(m.maint), 'sub'],
    ['Gross profit', (m) => num(m.gross), 'bold'],
    ['Gross margin', (m) => `${num((m.gross / m.revenue) * 100, 1)}%`, 'muted'],
    ['Overheads', (m) => num(m.insurance + m.admin), 'sub'],
    ['Net profit', (m) => num(m.net), 'bold'],
    ['Net margin', (m) => `${num((m.net / m.revenue) * 100, 1)}%`, 'muted'],
  ];
  return (
    <div className="frag b-app cq">
      <div className="b-toolbar" style={{ marginTop: 0 }}>
        <span className="tw-seg">
          {['This month', '3 months', '6 months', '12 months'].map((t) => (
            <span key={t} className={t === '3 months' ? 'is-active' : undefined}>
              {t}
            </span>
          ))}
        </span>
        <span className="b-select">
          Cash basis <ChevronDown strokeWidth={S} aria-hidden="true" />
        </span>
      </div>
      <div className="b-basis">
        Jul 2026 to Sep 2026 · excl. VAT <Info strokeWidth={S} aria-hidden="true" />
      </div>
      <div className="tw-card tw-card--flush b-table b-pnl">
        <div className="b-pnl__tr b-th">
          <span>Account</span>
          {cols.map((c) => (
            <span key={c.m}>{c.m}</span>
          ))}
        </div>
        {rows.map(([label, fn, kind]) => (
          <div className={`b-pnl__tr${kind ? ` b-pnl--${kind}` : ''}`} key={label}>
            <span>{label}</span>
            {cols.map((c) => (
              <span key={c.m}>{fn(c)}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ S11 VAT report */
export function VatReport() {
  return (
    <div className="frag b-app cq">
      <div className="b-toolbar" style={{ marginTop: 0 }}>
        <span className="tw-seg">
          {['This month', '3 months', '12 months'].map((t) => (
            <span key={t} className={t === '3 months' ? 'is-active' : undefined}>
              {t}
            </span>
          ))}
        </span>
        <span className="b-select">
          Invoice basis <ChevronDown strokeWidth={S} aria-hidden="true" />
        </span>
      </div>
      <div className="b-basis">
        Jul 2026 to Sep 2026 · output VAT <Info strokeWidth={S} aria-hidden="true" />
      </div>
      <div className="tw-card tw-card--flush b-table b-vat">
        <div className="b-vat__tr b-th">
          <span>Month</span>
          <span>Invoices</span>
          <span>Excl. VAT</span>
          <span>Output VAT</span>
          <span>Incl. VAT</span>
        </div>
        {VAT_ROWS.map((r) => (
          <div className="b-vat__tr" key={r.m}>
            <span>{r.m}</span>
            <span>{r.invoices}</span>
            <span>{R(r.ex)}</span>
            <span>{R(r.vat)}</span>
            <span>{R(r.incl)}</span>
          </div>
        ))}
        <div className="b-vat__tr b-age__total">
          <span>Total</span>
          <span>{VAT_TOTAL.invoices}</span>
          <span>{R(VAT_TOTAL.ex)}</span>
          <span>{R(VAT_TOTAL.vat)}</span>
          <span>{R(VAT_TOTAL.incl)}</span>
        </div>
        <div className="b-check">
          <Check strokeWidth={S} aria-hidden="true" />
          Total excl. VAT plus output VAT equals the total incl. VAT across {VAT_TOTAL.invoices} invoices.
        </div>
      </div>
    </div>
  );
}

/* ================================================================ S12 insights, lanes scatter */
export function LanesScatter() {
  const W = 640;
  const H = 280;
  const pad = { l: 48, r: 12, t: 12, b: 32 };
  const xMax = 1500;
  const yMin = 30;
  const yMax = 60;
  const x = (km: number) => pad.l + (km / xMax) * (W - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - yMin) / (yMax - yMin)) * (H - pad.t - pad.b);
  const best = LANE_POINTS.filter((p) => !p.thin).sort((a, b) => b.perKm - a.perKm);
  const top = best[0];
  const low = best[best.length - 1];
  const pctAbove = Math.round(((top.perKm - FLEET_AVG_PER_KM) / FLEET_AVG_PER_KM) * 100);
  const pctBelow = Math.round(((FLEET_AVG_PER_KM - low.perKm) / FLEET_AVG_PER_KM) * 100);
  return (
    <div className="frag b-app cq">
      <AppHead title="Insights" sub="Which routes pay best per kilometre" tabs={['Findings', 'Margin', 'Getting paid', 'Fleet', 'Lanes']} active="Lanes" />
      <div className="tw-card">
        <div className="tw-card__title">
          Revenue per km by lane <Info strokeWidth={S} aria-hidden="true" style={{ width: 14, height: 14, color: 'var(--text-tertiary)' }} />
        </div>
        <div className="tw-card__sub">Delivered loads, last 12 months</div>
        <p className="b-scatter__lead">
          {top.lane} earns {rand(Math.round(top.perKm))}/km, {pctAbove}% above the fleet average; {low.lane} is {pctBelow}% below it.
        </p>
        <div className="legend" style={{ marginBottom: 8 }}>
          <span>
            <i style={{ background: 'var(--chart-series-1)', borderRadius: '50%' }} />
            3+ trips
          </span>
          <span>
            <i style={{ boxShadow: 'inset 0 0 0 1.5px var(--text-tertiary)', borderRadius: '50%' }} />
            Fewer than 3 trips
          </span>
          <span>
            <i style={{ height: 2, width: 14, verticalAlign: 3, background: 'var(--text-primary)' }} />
            Fleet average (12 months)
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="b-scatter" aria-hidden="true">
          {[30, 40, 50, 60].map((v) => (
            <g key={v}>
              <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke="var(--chart-grid)" />
              <text x={pad.l - 8} y={y(v) + 4} textAnchor="end" className="b-scatter__ax">
                R {v}
              </text>
            </g>
          ))}
          {[0, 500, 1000, 1500].map((v) => (
            <text key={v} x={x(v)} y={H - 10} textAnchor="middle" className="b-scatter__ax">
              {num(v)}
            </text>
          ))}
          <line x1={pad.l} x2={W - pad.r} y1={y(FLEET_AVG_PER_KM)} y2={y(FLEET_AVG_PER_KM)} stroke="var(--text-primary)" strokeWidth="1.25" />
          <text x={pad.l + 4} y={y(FLEET_AVG_PER_KM) - 6} textAnchor="start" className="b-scatter__ax">
            Fleet {rand(FLEET_AVG_PER_KM, { cents: true })}/km
          </text>
          {LANE_POINTS.map((p) => (
            <g key={p.lane}>
              <circle
                cx={x(p.km)}
                cy={y(p.perKm)}
                r="6"
                fill={p.thin ? 'var(--bg-surface)' : 'var(--chart-series-1)'}
                stroke={p.thin ? 'var(--text-tertiary)' : 'none'}
                strokeWidth="1.5"
              />
              <text
                x={x(p.km) + (p.km > 1100 ? -10 : 10)}
                y={y(p.perKm) + (p.km > 1100 ? 18 : 4)}
                textAnchor={p.km > 1100 ? 'end' : 'start'}
                className="b-scatter__lbl"
              >
                {p.lane}
              </text>
            </g>
          ))}
        </svg>
        <div className="b-scatter__x">Kilometres per trip</div>
      </div>
    </div>
  );
}

/* ================================================================ S18 expenses */
export function Expenses() {
  const e = EXPENSES;
  const max = Math.max(...e.categories.map((c) => c.amount));
  const total = e.categories.reduce((s, c) => s + c.amount, 0);
  return (
    <div className="frag b-app cq">
      <AppHead
        title="Finance"
        sub="Invoices, expenses and what you are owed"
        tabs={['Invoices', 'Expenses']}
        active="Expenses"
        actions={
          <>
            <span className="tw-btn b-hide-sm">Export CSV</span>
            <span className="tw-btn tw-btn--primary">Add expense</span>
          </>
        }
      />
      <div className="b-exp">
        <div className="tw-card b-exp__kpis">
          <div className="stat">
            <span className="stat__label">Spent in September</span>
            <span className="stat__fig">{R0(e.spentSep)}</span>
            <span className="stat__note">
              {e.vsAug >= 0 ? '+' : ''}
              {e.vsAug}% vs August
            </span>
          </div>
          <div className="stat">
            <span className="stat__label">To approve</span>
            <span className="stat__fig">{R0(e.toApprove)}</span>
            <span className="stat__note">{e.toApproveCount} expenses</span>
          </div>
        </div>
        <div className="tw-card b-exp__cats">
          <div className="tw-card__title">Spend by category</div>
          <div className="tw-card__sub" style={{ marginBottom: 10 }}>
            September, approved and pending
          </div>
          {e.categories.map((c, i) => (
            <div className="b-cat" key={c.name}>
              <span>{c.name}</span>
              <span className="lane__track">
                <span className="lane__fill" style={{ display: 'block', width: `${(c.amount / max) * 100}%`, background: i === 0 ? 'var(--chart-series-1)' : undefined }} />
              </span>
              <span className="tw-500">{R0(c.amount)}</span>
              <span className="tw-muted">{Math.round((c.amount / total) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-card tw-card--flush b-table b-exl">
        <div className="b-exl__tr b-th">
          <span>Date</span>
          <span>Expense</span>
          <span>Category</span>
          <span>Vehicle</span>
          <span>Status</span>
          <span>Amount</span>
        </div>
        {e.rows.map((r) => (
          <div className="b-exl__tr" key={r.ref}>
            <span className="tw-sec">{date(r.date)}</span>
            <span style={{ minWidth: 0 }}>
              <span className="b-exl__title">{r.title}</span>
              <span className="tw-12 tw-muted">{r.ref}</span>
            </span>
            <span>{r.cat}</span>
            <span>{r.vehicle}</span>
            <span>
              <Status tone={r.status === 'Approved' ? 'success' : 'neutral'}>{r.status}</Status>
            </span>
            <span className="tw-500">{R(r.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================ S15 integrations settings */
export function IntegrationsSettings() {
  const cards: { name: string; mark: string; line: string; status: string; tone: 'success' | 'neutral'; foot: string }[] = [
    { name: 'Cartrack', mark: 'C', line: 'Vehicle location, speed and ignition status', status: 'Connected', tone: 'success', foot: '18 vehicles linked' },
    { name: 'CtrlFleet', mark: 'C', line: 'Vehicle location and points of interest', status: 'Not connected', tone: 'neutral', foot: 'Connect CtrlFleet' },
  ];
  return (
    <div className="frag b-app cq">
      <AppHead title="Integrations" sub="Connect TruckWys to your existing tools" />
      <div className="b-intg">
        {cards.map((c) => (
          <div className="tw-card b-intg__card" key={c.name}>
            <div className="b-intg__row">
              <span className="b-intg__mark" aria-hidden="true">
                {c.mark}
              </span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <b>{c.name}</b>
                <span className="tw-13 tw-sec b-intg__line">{c.line}</span>
              </span>
              <Status tone={c.tone}>{c.status}</Status>
            </div>
            <span className="tw-btn tw-btn--sm b-intg__btn">{c.foot}</span>
          </div>
        ))}
        <div className="tw-card b-intg__card">
          <div className="b-intg__row">
            <KeyRound strokeWidth={S} aria-hidden="true" className="b-intg__icon" />
            <b style={{ flex: 1 }}>Partner API keys</b>
            <span className="tw-btn tw-btn--sm">New key</span>
          </div>
          <div className="tw-row b-intg__key">
            <span style={{ minWidth: 0 }}>
              <span className="tw-500">Dispatch system</span>
              <span className="tw-12 tw-muted" style={{ display: 'block' }}>
                tw_••••••••3f9a · created 2 Sep 2026
              </span>
            </span>
            <Status tone="success">Active</Status>
          </div>
        </div>
        <div className="tw-card b-intg__card">
          <div className="b-intg__row">
            <Webhook strokeWidth={S} aria-hidden="true" className="b-intg__icon" />
            <b style={{ flex: 1 }}>Webhooks</b>
            <span className="tw-btn tw-btn--sm">Add webhook</span>
          </div>
          <div className="tw-row b-intg__key">
            <span className="tw-13 b-ellipsis">https://dispatch.example.co.za/hooks/truckwys</span>
            <Status tone="success">Active</Status>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================ small crops for the hub cards */
export function MiniCost() {
  return (
    <div className="frag tw-card b-mini" aria-hidden="true">
      <div className="cost__row">
        <span>Fuel</span>
        <span>{R(QUOTE.fuel)}</span>
      </div>
      <div className="cost__row">
        <span>Tolls, N3 class 4</span>
        <span>{R(QUOTE.tolls)}</span>
      </div>
      <div className="cost__row" style={{ borderBottom: 0 }}>
        <span className="tw-600" style={{ color: 'var(--text-primary)' }}>
          Quote price, excl. VAT
        </span>
        <span className="tw-600">{R(QUOTE.quotePrice)}</span>
      </div>
    </div>
  );
}
export function MiniInvoice() {
  return (
    <div className="frag tw-card b-mini" aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0 }}>
        <span className="tw-13 tw-muted">{INVOICE.number}</span>
        <Status tone="info">Sent</Status>
      </div>
      <div className="tw-row">
        <span className="tw-13 tw-sec">VAT (15%)</span>
        <span className="tw-13">{R(INVOICE.vat)}</span>
      </div>
      <div className="tw-row" style={{ paddingBottom: 0 }}>
        <span className="tw-13 tw-600">Total due</span>
        <span className="tw-13 tw-600">{R(INVOICE.total)}</span>
      </div>
    </div>
  );
}
export function MiniAge() {
  const tones = ['var(--chart-muted)', 'var(--chart-axis)', 'var(--chart-hatch)', 'var(--text-secondary)', 'var(--text-primary)'];
  return (
    <div className="frag tw-card b-mini" aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0, borderBottom: 0 }}>
        <span className="tw-13 tw-muted">Owed to you</span>
        <span className="tw-13 tw-600">{R0(KPIS.owed)}</span>
      </div>
      <div className="age__bar" style={{ margin: '6px 0 10px' }}>
        {AGEING.filter((a) => a.amount > 0).map((a, i) => (
          <span key={a.label} style={{ width: `${(a.amount / KPIS.owed) * 100}%`, background: tones[i] }} />
        ))}
      </div>
      <div className="tw-12 tw-muted">Current · 1 to 30 · 31 to 60 · 61 to 90 days</div>
    </div>
  );
}
export function MiniLanes() {
  const pts = LANE_POINTS.filter((p) => !p.thin).slice(0, 3);
  const max = pts[0].perKm;
  return (
    <div className="frag tw-card b-mini" aria-hidden="true">
      {pts.map((p, i) => (
        <div className="b-minilane" key={p.lane}>
          <span className="tw-12 tw-sec">{p.lane.replace('Johannesburg', 'JHB').replace('Pretoria', 'PTA').replace('Cape Town', 'CPT').replace(' border', '')}</span>
          <span className="lane__track">
            <span className="lane__fill" style={{ display: 'block', width: `${(p.perKm / max) * 100}%`, background: i === 0 ? 'var(--text-primary)' : undefined }} />
          </span>
          <span className="tw-12 tw-500">{rand(p.perKm, { cents: true })}</span>
        </div>
      ))}
    </div>
  );
}

/* ================================================================ fuel line, opened up (S3 cost breakdown, fuel row) */
export function FuelLine() {
  const q = QUOTE;
  const rows: [string, string, string][] = [
    ['Distance', `${q.from} to ${q.to}, one way`, `${num(q.km)} km`],
    ['Consumption', `${q.vehicle} at 20 t`, `${num(q.burn, 1)} L/100 km`],
    ['Litres', 'Distance times consumption', `${num(q.litres, 2)} L`],
    ['Diesel', 'Inland, per litre', rand(q.dieselPerL, { cents: true })],
  ];
  return (
    <div className="frag tw-card cq">
      <div className="tw-card__head" style={{ marginBottom: 4 }}>
        <div>
          <div className="tw-card__title">Fuel</div>
          <div className="tw-card__sub">
            {q.number} · {q.customer}
          </div>
        </div>
      </div>
      {rows.map(([k, sub, v]) => (
        <div className="cost__row" key={k}>
          <span>
            {k}
            <span className="cost__plazas">{sub}</span>
          </span>
          <span>{v}</span>
        </div>
      ))}
      <div className="cost__price">
        <span>Fuel on this quote</span>
        <span>{rand(q.fuel, { cents: true })}</span>
      </div>
    </div>
  );
}
