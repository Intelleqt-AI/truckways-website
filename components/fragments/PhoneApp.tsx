/**
 * S2 stand-in: the v3 Home screen as the app renders it at 390 px (ref-shots
 * dashboard-light-home-390): logo, search, bell and avatar on top; "Home" with
 * New quote and a more button; the 2 x 2 KPI grid with the mobile labels;
 * Revenue vs costs; the bottom tab bar. Rendered at native 390 px and scaled by
 * the caller, so nothing is squeezed or clipped. Decorative (aria-hidden).
 */
import { Search, Bell, Info, ArrowUpRight, House, FileText, Receipt, ChartNoAxesColumn, Ellipsis } from 'lucide-react';
import { KPIS, REVENUE_VS_COSTS, TODAY_LABEL } from '../../content/demo-data';
import { rand, num } from '../../lib/format';

const S = 1.75;

export default function PhoneApp() {
  const max = 700;
  return (
    <div className="frag pa" aria-hidden="true">
      <div className="pa__bar">
        <img src="/brand/truckwys-logo.png" alt="" width={108} height={21} />
        <span className="pa__tools">
          <Search strokeWidth={S} />
          <span className="pa__bell">
            <Bell strokeWidth={S} />
            <i>5</i>
          </span>
          <span className="app__avatar pa__avatar">NM</span>
        </span>
      </div>
      <div className="pa__page">
        <div className="pa__head">
          <div>
            <div className="pa__title">Home</div>
            <div className="pa__date">{TODAY_LABEL}</div>
          </div>
          <span className="pa__actions">
            <span className="tw-btn tw-btn--primary pa__new">New quote</span>
            <span className="tw-btn pa__more">
              <Ellipsis strokeWidth={S} />
            </span>
          </span>
        </div>
        <div className="pa__kpis">
          <div className="tw-kpi tw-kpi--emphasis">
            <span className="tw-kpi__label">
              Owed to you <Info strokeWidth={S} />
            </span>
            <span className="tw-kpi__figure">{rand(KPIS.owed)}</span>
            <span className="tw-kpi__note">{rand(148_920)} past due</span>
          </div>
          <div className="tw-kpi">
            <span className="tw-kpi__label">
              Revenue, 12 months <Info strokeWidth={S} />
            </span>
            <span className="tw-kpi__figure">{rand(KPIS.revenue12m)}</span>
            <span className="tw-kpi__note">Paid, incl. VAT</span>
          </div>
          <div className="tw-kpi">
            <span className="tw-kpi__label">
              Margin, 12 months <Info strokeWidth={S} />
            </span>
            <span className="tw-kpi__figure">{num(KPIS.netMargin12m, 1)}%</span>
            <span className="tw-kpi__note">Cash basis</span>
          </div>
          <div className="tw-kpi">
            <span className="tw-kpi__label" style={{ justifyContent: 'space-between' }}>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                Active loads <Info strokeWidth={S} />
              </span>
              <ArrowUpRight strokeWidth={S} />
            </span>
            <span className="tw-kpi__figure">{KPIS.activeLoads}</span>
            <span className="tw-kpi__note">3 delivering today</span>
          </div>
        </div>
        <div className="tw-card pa__chart">
          <div className="tw-card__title">
            Revenue vs costs <Info strokeWidth={S} width={14} height={14} color="var(--text-tertiary)" />
          </div>
          <div className="tw-card__sub">Excl. VAT, cash basis, Apr to Sep 2026</div>
          <div className="pa__plot">
            {REVENUE_VS_COSTS.map((d, i) => (
              <div className="chart__col" key={d.m}>
                <span className="chart__bar chart__bar--rev" style={{ height: `${(d.revenue / max) * 100}%`, width: 10 }} />
                <span className="chart__bar chart__bar--cost" style={{ height: `${(d.costs / max) * 100}%`, width: 10 }} />
                <span className={`chart__m${i === REVENUE_VS_COSTS.length - 1 ? ' is-now' : ''}`}>{d.m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pa__tabs">
        {[
          [House, 'Home'],
          [FileText, 'Quotes'],
          [Receipt, 'Finance'],
          [ChartNoAxesColumn, 'Numbers'],
          [Ellipsis, 'More'],
        ].map(([Icon, l], i) => {
          const I = Icon as typeof House;
          return (
            <span key={l as string} className={i === 0 ? 'is-active' : undefined}>
              <I strokeWidth={S} />
              {l as string}
            </span>
          );
        })}
      </div>
    </div>
  );
}
