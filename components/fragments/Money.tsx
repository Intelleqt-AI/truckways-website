import { CircleCheck, Info, ChevronRight, Paperclip, MessageSquareText, Database, Bell, Menu } from 'lucide-react';
import {
  INVOICE, OVERDUE, LANES, LANE_THIN, FINDINGS, KPIS, OVERDUE_OVER_60, OVERDUE_MAX_DAYS, COPILOT, COMPANY, COMPANY_INITIAL,
} from '../../content/demo-data';
import { rand, date, num } from '../../lib/format';
import { Kpis } from './HomeDashboard';
import NeedsYou from './NeedsYou';

const S = 1.75;

/** F3: invoice list with the delivered load's invoice expanded (StepSwitcher panel 2, CTA panel). */
export function InvoiceRow({ compact, float }: { compact?: boolean; float?: boolean }) {
  const inv = INVOICE;
  const others = OVERDUE.slice(1, 3);
  return (
    <div className={`frag tw-card tw-card--flush cq${float ? ' frag--float' : ''}`}>
      {!compact && (
        <div className="inv__th">
          <span>Customer</span>
          <span>Issued</span>
          <span>Status</span>
          <span>Amount incl. VAT</span>
        </div>
      )}
      <div className={`inv__tr inv__open${compact ? ' inv__tr--compact' : ''}`}>
        <div style={{ minWidth: 0 }}>
          <div className="inv__cust">{inv.customer}</div>
          <div className="inv__no">{inv.number}</div>
        </div>
        {!compact && <span className="tw-13">{date(inv.issued)}</span>}
        <span>
          <span className="tw-status tw-status--info">
            <span className="tw-status__dot" />
            {inv.status}
          </span>
        </span>
        <span className="tw-600">{rand(inv.total, { cents: true })}</span>
      </div>
      <div className="inv__detail" style={compact ? { gridTemplateColumns: '1fr' } : undefined}>
        <div className="inv__steps">
          <div className="inv__step">
            <CircleCheck strokeWidth={S} aria-hidden="true" />
            <span>
              <b>Delivered</b> {date(inv.delivered)} · {inv.route}
            </span>
          </div>
          <div className="inv__step">
            <CircleCheck strokeWidth={S} aria-hidden="true" />
            <span>
              <b>Invoice raised</b> on delivery, due {date(inv.due)}
            </span>
          </div>
          <div className="inv__step">
            <Paperclip strokeWidth={S} aria-hidden="true" style={{ color: 'var(--text-tertiary)' }} />
            <span>
              <b>POD attached</b> · {inv.pod}
            </span>
          </div>
        </div>
        {!compact && (
          <div className="inv__sum">
            <div className="cost__row">
              <span>Subtotal</span>
              <span>{rand(inv.subtotal, { cents: true })}</span>
            </div>
            <div className="cost__row">
              <span>VAT 15%</span>
              <span>{rand(inv.vat, { cents: true })}</span>
            </div>
            <div className="cost__row" style={{ borderBottom: 0 }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Total</span>
              <span className="tw-600">{rand(inv.total, { cents: true })}</span>
            </div>
            <div className="inv__ref">
              Pay by EFT. Reference <b>{inv.number}</b>
              <br />
              {inv.bank}
            </div>
          </div>
        )}
      </div>
      {!compact &&
        others.map((o) => (
          <div className="inv__tr" key={o.number}>
            <div style={{ minWidth: 0 }}>
              <div className="inv__cust">{o.customer}</div>
              <div className="inv__no">{o.number}</div>
            </div>
            <span className="tw-13">{date(o.issued)}</span>
            <span>
              <span className="tw-status tw-status--danger">
                <span className="tw-status__dot" />
                Overdue
              </span>
            </span>
            <span className="tw-600">{rand(o.amount, { cents: true })}</span>
          </div>
        ))}
    </div>
  );
}

/** F4 as a card with the debtors age strip (StepSwitcher panel 3). */
export function NeedsYouCard() {
  return (
    <div className="frag tw-card">
      <div className="tw-card__head">
        <div>
          <div className="tw-card__title">Needs you</div>
          <div className="tw-card__sub">Overdue invoices, largest first</div>
        </div>
        <span className="tw-card__count">3</span>
      </div>
      <NeedsYou variant="chase" />
    </div>
  );
}

/** F5: revenue per km by lane; bars encode the sorted metric, trip counts shown. */
export function LaneRanking() {
  const max = LANES[0].perKm;
  return (
    <div className="frag tw-card cq">
      <div className="tw-card__head">
        <div>
          <div className="tw-card__title">Revenue per km by lane</div>
          <div className="tw-card__sub">Delivered loads, last 12 months, excl. VAT</div>
        </div>
      </div>
      {LANES.map((l) => (
        <div className="lane" key={l.lane}>
          <span className="lane__name">{l.lane}</span>
          <span className="lane__track" aria-hidden="true">
            <span className="lane__fill" style={{ display: 'block', width: `${(l.perKm / max) * 100}%` }} />
          </span>
          <span className="lane__val">{rand(l.perKm, { cents: true })}</span>
          <span className="lane__trips">{l.trips} trips</span>
        </div>
      ))}
      <div className="lane lane--thin">
        <span className="lane__name">{LANE_THIN.lane}</span>
        <span className="lane__val">Too few trips to rank</span>
        <span className="lane__trips">{LANE_THIN.trips} trips</span>
      </div>
    </div>
  );
}

/** F6: Copilot answering from company data, with actions that wait for approval. */
export function CopilotPanel({ float }: { float?: boolean }) {
  return (
    <div className={`frag tw-card tw-card--flush cop${float ? ' frag--float' : ''}`}>
      <div className="cop__head">
        <MessageSquareText strokeWidth={S} aria-hidden="true" />
        <b>Copilot</b>
        <span>Language model · your data only</span>
      </div>
      <div className="cop__body">
        <p className="cop__q">{COPILOT.question}</p>
        <div className="cop__a">
          <b>{COPILOT.answerLead}</b>
          {COPILOT.answerDetail}
        </div>
        <div className="cop__src">
          <Database strokeWidth={S} aria-hidden="true" />
          {COPILOT.source}
        </div>
        <div className="cop__actions">
          <span className="tw-btn tw-btn--sm">View invoice</span>
          <span className="tw-btn tw-btn--sm">Draft reminder</span>
        </div>
      </div>
      <div className="cop__foot">Drafts wait for you to confirm. Nothing is sent on its own.</div>
    </div>
  );
}

/** F7: Insights "Ranked by value" findings. Only finding types the product produces today. */
export function Findings() {
  return (
    <div className="frag cq">
      <div className="findings__head">
        Ranked by value <Info strokeWidth={S} aria-hidden="true" />
      </div>
      {FINDINGS.map((f) => (
        <div className="tw-card find" key={f.title}>
          <div>
            <div className="find__val">{rand(f.value)}</div>
            <div className="find__title">{f.title}</div>
            <div className="find__bar" aria-hidden="true">
              <span style={{ width: `${f.share * 100}%` }} />
            </div>
          </div>
          <div>
            <div className="find__chips">
              <span className={`tw-status tw-status--${f.severity === 'High' ? 'danger' : 'warning'}`}>
                <span className="tw-status__dot" />
                {f.severity}
              </span>
              <span>{f.area}</span>
              <span className="tw-muted">Measured</span>
            </div>
            <p className="find__detail">{f.detail}</p>
          </div>
          <span className="tw-btn tw-btn--sm" style={{ justifySelf: 'start' }}>
            {f.action} <ChevronRight strokeWidth={S} aria-hidden="true" />
          </span>
        </div>
      ))}
    </div>
  );
}

/** F8: the narrow stats card beside the findings (Flott's "tracked indicators"). */
export function Stats() {
  return (
    <div className="frag tw-card" style={{ height: '100%' }}>
      <div className="tw-card__head" style={{ marginBottom: 8 }}>
        <div>
          <div className="tw-card__title">At a glance</div>
          <div className="tw-card__sub">{COMPANY}, 30 Sep 2026</div>
        </div>
      </div>
      <div className="stat">
        <span className="stat__label">Owed to you</span>
        <span className="stat__fig stat__fig--em">{rand(KPIS.owed)}</span>
        <span className="stat__note">{KPIS.owedNote}</span>
      </div>
      <div className="stat">
        <span className="stat__label">Over 60 days</span>
        <span className="stat__fig">{rand(OVERDUE_OVER_60)}</span>
        <span className="stat__note">1 invoice, {OVERDUE_MAX_DAYS} days late</span>
      </div>
      <div className="stat">
        <span className="stat__label">Net margin, 12 months</span>
        <span className="stat__fig">{num(KPIS.netMargin12m, 1)}%</span>
        <span className="stat__note">Cash basis, excl. VAT</span>
      </div>
    </div>
  );
}

/** S2 stand-in: Home on a 390 phone. Replace with the real capture later. */
export function PhoneHome() {
  return (
    <div className="frag ph" aria-hidden="true">
      <div className="ph__bar">
        <img src="/brand/truckwys-logo.png" alt="" width={72} height={14} />
        <span style={{ display: 'flex', gap: 14 }}>
          <Bell strokeWidth={S} />
          <Menu strokeWidth={S} />
        </span>
      </div>
      <div className="ph__page">
        <div>
          <div className="ph__title">Home</div>
          <div className="tw-12 tw-muted" style={{ marginTop: 2 }}>
            <span className="app__mark" style={{ display: 'inline-grid', width: 16, height: 16, fontSize: 9, borderRadius: 4, marginRight: 6, verticalAlign: -3 }}>
              {COMPANY_INITIAL}
            </span>
            {COMPANY}
          </div>
        </div>
        <div className="ph__kpis">
          <Kpis />
        </div>
        <div className="tw-card">
          <div className="tw-card__head" style={{ marginBottom: 4 }}>
            <div className="tw-card__title">Needs you</div>
            <span className="tw-card__count">5</span>
          </div>
          <NeedsYou variant="phone" />
        </div>
      </div>
    </div>
  );
}

/** S13 stand-in: the Copilot screen (dark). Not rendered on pages: it is exported once to
 * public/product/s13-copilot-dark.webp, the dimmed texture behind the Home Copilot band. */
export function CopilotTexture() {
  const cards = [
    ['What is overdue?', 'Who to chase first'],
    ['Quotes pipeline', 'Won, lost and open quotes'],
    ['Fleet status', 'Active, idle and in maintenance'],
    ['Add a customer', 'Drafts the record for you to check'],
    ['Draft a quote', 'Drafts a quote for you to check'],
  ];
  return (
    <div className="frag tex" aria-hidden="true">
      <div className="tex__list">
        <div className="tw-card__title" style={{ marginBottom: 12 }}>Conversations</div>
        {['Who owes us the most', 'Lanes below cost', 'Fleet status'].map((t) => (
          <div key={t} style={{ padding: '8px 0' }}>
            <div className="tw-500">{t}</div>
            <div className="tw-12 tw-muted">4 messages</div>
          </div>
        ))}
      </div>
      <div className="tw-card tex__main" style={{ padding: 40 }}>
        <div style={{ font: '600 20px/28px var(--font-sans)' }}>What do you need to know?</div>
        <div className="tw-sec">Ask about cash, overdue invoices, quotes or your fleet.</div>
        <div className="tex__grid">
          {cards.map(([t, d]) => (
            <div key={t} className="tw-card" style={{ padding: 16 }}>
              <div className="tw-600">{t}</div>
              <div className="tw-13 tw-muted">{d}</div>
            </div>
          ))}
        </div>
        <div className="app__search" style={{ width: '100%', maxWidth: 'none', height: 48, marginTop: 24 }}>Ask Copilot about your business</div>
      </div>
    </div>
  );
}
