/**
 * The v3 Home screen rebuilt in HTML at 1:1 product scale, from the same demo
 * data as the real S1/S14 captures (Home now shows those captures; this stays
 * for Kpis and any future crop that needs live text).
 * Decorative when a text alternative is given by the caller (aria-hidden here).
 */
import {
  House, MessageSquareText, FileText, Receipt, ChartNoAxesColumn, FileBarChart, Users, Truck, Zap,
  ShieldCheck, Settings, Search, Bell, Sun, ChevronsUpDown, PanelLeftClose, Info, ArrowUpRight,
} from 'lucide-react';
import { COMPANY, COMPANY_INITIAL, KPIS, REVENUE_VS_COSTS, TODAY_LABEL, LATEST_QUOTES, PIPELINE } from '../../content/demo-data';
import { rand, num } from '../../lib/format';
import NeedsYou from './NeedsYou';

const S = 1.75;

function Sidebar() {
  const item = (Icon: typeof House, label: string, opts: { active?: boolean; soon?: boolean } = {}) => (
    <div className={`app__item${opts.active ? ' is-active' : ''}${opts.soon ? ' is-muted' : ''}`}>
      <Icon strokeWidth={S} />
      <span>{label}</span>
      {opts.soon ? <span className="app__soon">Soon</span> : null}
    </div>
  );
  return (
    <div className="app__side">
      <div className="app__brand">
        <img src="/brand/truckwys-logo.png" alt="" width={92} height={18} />
        <PanelLeftClose strokeWidth={S} />
      </div>
      <div className="app__company">
        <span className="app__mark">{COMPANY_INITIAL}</span>
        <b>{COMPANY}</b>
        <ChevronsUpDown strokeWidth={S} />
      </div>
      <div className="app__nav">
        <div className="app__group">
          {item(House, 'Home', { active: true })}
          {item(MessageSquareText, 'Copilot')}
        </div>
        <div className="app__group">
          <div className="app__glabel">Work</div>
          {item(FileText, 'Quotes and loads')}
          {item(Receipt, 'Finance')}
        </div>
        <div className="app__group">
          <div className="app__glabel">Numbers</div>
          {item(ChartNoAxesColumn, 'Insights')}
          {item(FileBarChart, 'Reports')}
        </div>
        <div className="app__group">
          <div className="app__glabel">Records</div>
          {item(Users, 'Customers')}
          {item(Truck, 'Fleet')}
        </div>
        <div className="app__group">
          <div className="app__glabel">Coming soon</div>
          {item(Zap, 'Fast Pay', { soon: true })}
          {item(ShieldCheck, 'Insurance', { soon: true })}
        </div>
        <div className="app__group">{item(Settings, 'Settings')}</div>
      </div>
    </div>
  );
}

export function Kpis() {
  return (
    <div className="tw-kpi-row">
      <div className="tw-kpi tw-kpi--emphasis">
        <span className="tw-kpi__label">
          Owed to you <Info strokeWidth={S} />
        </span>
        <span className="tw-kpi__figure">{rand(KPIS.owed)}</span>
        <span className="tw-kpi__note">{KPIS.owedNote}</span>
      </div>
      <div className="tw-kpi">
        <span className="tw-kpi__label">
          Revenue received, 12 months <Info strokeWidth={S} />
        </span>
        <span className="tw-kpi__figure">{rand(KPIS.revenue12m)}</span>
        <span className="tw-kpi__note">Paid, incl. VAT</span>
      </div>
      <div className="tw-kpi">
        <span className="tw-kpi__label">
          Net margin, 12 months <Info strokeWidth={S} />
        </span>
        <span className="tw-kpi__figure">{num(KPIS.netMargin12m, 1)}%</span>
        <span className="tw-kpi__note">{KPIS.marginNote}</span>
      </div>
      <div className="tw-kpi">
        <span className="tw-kpi__label" style={{ justifyContent: 'space-between' }}>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            Active loads <Info strokeWidth={S} />
          </span>
          <ArrowUpRight strokeWidth={S} />
        </span>
        <span className="tw-kpi__figure">{KPIS.activeLoads}</span>
        <span className="tw-kpi__note">{KPIS.activeNote}</span>
      </div>
    </div>
  );
}

function Chart() {
  const max = 2000;
  return (
    <div className="tw-card chart-card">
      <div className="tw-card__head">
        <div>
          <div className="tw-card__title">
            Revenue vs costs <Info strokeWidth={S} width={14} height={14} color="var(--text-tertiary)" />
          </div>
          <div className="tw-card__sub">Excl. VAT, cash basis, Oct 2025 to Sep 2026</div>
        </div>
        <div className="legend">
          <span>
            <i style={{ background: 'var(--chart-series-1)' }} />
            Revenue
          </span>
          <span>
            <i className="chart__bar--cost" />
            Costs
          </span>
        </div>
      </div>
      <div className="chart chart--12">
        <div className="chart__y">
          <span>R 2m</span>
          <span>R 1,5m</span>
          <span>R 1m</span>
          <span>R 500k</span>
          <span>R 0</span>
        </div>
        <div className="chart__plot">
          {REVENUE_VS_COSTS.map((d, i) => (
            <div className="chart__col" key={d.m}>
              <span className="chart__bar chart__bar--rev" style={{ height: `${(d.revenue / max) * 100}%` }} />
              <span className="chart__bar chart__bar--cost" style={{ height: `${(d.costs / max) * 100}%` }} />
              <span className={`chart__m${i === REVENUE_VS_COSTS.length - 1 ? ' is-now' : ''}`}>{d.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LatestWork() {
  const tone: Record<string, string> = { Accepted: 'success', Sent: 'info', Draft: 'neutral' };
  return (
    <div className="tw-card tw-card--flush">
      <div className="tw-card__head" style={{ padding: '20px 20px 0', marginBottom: 12 }}>
        <div>
          <div className="tw-card__title">Latest work</div>
          <div className="tw-card__sub">Five most recent</div>
        </div>
        <div className="tw-seg">
          <span className="is-active">Quotes</span>
          <span>Loads</span>
        </div>
      </div>
      <div className="lw__th">
        <span>Quote</span>
        <span>Customer</span>
        <span>Route</span>
        <span>Total</span>
        <span>Status</span>
      </div>
      {LATEST_QUOTES.map((q) => (
        <div className="lw__tr" key={q.number}>
          <span className="tw-500">{q.number}</span>
          <span>{q.customer}</span>
          <span className="tw-sec">{q.route}</span>
          <span>{rand(q.total)}</span>
          <span>
            <span className={`tw-status tw-status--${tone[q.status]}`}>
              <span className="tw-status__dot" />
              {q.status}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function Pipeline() {
  const rows: [string, number][] = [
    ['Draft', PIPELINE.draft],
    ['Sent', PIPELINE.sent],
    ['Accepted', PIPELINE.accepted],
    ['On the road', PIPELINE.onRoad],
  ];
  const max = Math.max(...rows.map((r) => r[1]));
  return (
    <div className="tw-card">
      <div className="tw-card__head">
        <div>
          <div className="tw-card__title">
            Quote pipeline <Info strokeWidth={S} width={14} height={14} color="var(--text-tertiary)" />
          </div>
          <div className="tw-card__sub">All {num(PIPELINE.all)} quotes</div>
        </div>
        <ArrowUpRight strokeWidth={S} width={16} height={16} color="var(--text-tertiary)" />
      </div>
      {rows.map(([l, n], i) => (
        <div className="pipe__row" key={l}>
          <span className="tw-13 tw-sec">{l}</span>
          <span className="lane__track">
            <span className="lane__fill" style={{ display: 'block', width: `${(n / max) * 100}%`, background: i === 2 ? 'var(--chart-series-1)' : undefined }} />
          </span>
          <span className="tw-13 tw-600">{n}</span>
        </div>
      ))}
    </div>
  );
}

/** `short` drops the lower row (Latest work, Quote pipeline) where the crop never shows it. */
export default function HomeDashboard({ short }: { short?: boolean } = {}) {
  return (
    <div className="frag appc" aria-hidden="true">
     <div className="app">
      <Sidebar />
      <div className="app__main">
        <div className="app__top">
          <div className="app__search">
            <Search strokeWidth={S} />
            <span>Ask Copilot about your business</span>
            <kbd>⌘K</kbd>
          </div>
          <div className="app__tools">
            <Bell strokeWidth={S} />
            <Sun strokeWidth={S} />
            <span className="app__avatar">ND</span>
          </div>
        </div>
        <div className="app__page">
          <div className="app__head">
            <div>
              <div className="app__title">Home</div>
              <div className="app__subtitle">{TODAY_LABEL}</div>
            </div>
            <div className="app__actions">
              <span className="tw-btn">Add expense</span>
              <span className="tw-btn">Create invoice</span>
              <span className="tw-btn tw-btn--primary">New quote</span>
            </div>
          </div>
          <Kpis />
          <div className="app__grid">
            <Chart />
            <div className="tw-card">
              <div className="tw-card__head">
                <div>
                  <div className="tw-card__title">Needs you</div>
                  <div className="tw-card__sub">Invoices, quotes and fleet</div>
                </div>
                <span className="tw-card__count">5</span>
              </div>
              <NeedsYou variant="home" />
            </div>
          </div>
          {short ? null : (
            <div className="app__grid">
              <LatestWork />
              <Pipeline />
            </div>
          )}
        </div>
      </div>
     </div>
    </div>
  );
}
