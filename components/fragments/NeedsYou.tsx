import { FileText, Truck } from 'lucide-react';
import { OVERDUE, NEEDS_YOU, NEEDS_YOU_OTHER, AGEING, KPIS } from '../../content/demo-data';
import { rand } from '../../lib/format';

const R0 = (n: number) => rand(Math.round(n));

function Row({ icon, title, amount, sub, action }: { icon: 'doc' | 'truck'; title: string; amount?: string; sub: string; action: string }) {
  const Icon = icon === 'doc' ? FileText : Truck;
  return (
    <div className="needs__row">
      <Icon strokeWidth={1.75} aria-hidden="true" />
      <div style={{ minWidth: 0 }}>
        <div className="needs__title">
          <span>{title}</span>
          {amount ? <span>{amount}</span> : null}
        </div>
        <div className="needs__sub">{sub}</div>
      </div>
      <span className="tw-btn tw-btn--sm">{action}</span>
    </div>
  );
}

/** F4: the Home "Needs you" list. `chase` adds the debtors age strip (StepSwitcher panel 3). */
export default function NeedsYou({ variant = 'home' }: { variant?: 'home' | 'chase' | 'phone' }) {
  const toRow = (i: (typeof OVERDUE)[number]) => (
    <Row
      key={i.number}
      icon="doc"
      title={i.customer}
      amount={R0(i.amount)}
      sub={`${i.daysLate} days late · ${i.number}`}
      action="Chase"
    />
  );
  // Home and phone: the app's own "Needs you" order (S1, S2). Chase: largest overdue first.
  const home = NEEDS_YOU.map(toRow);
  const rows = OVERDUE.slice(0, 3).map(toRow);
  if (variant === 'phone') return <div>{home.slice(0, 2)}</div>;
  if (variant === 'home') {
    return (
      <div>
        <Row icon="truck" title={NEEDS_YOU_OTHER.openLoad.title} sub={NEEDS_YOU_OTHER.openLoad.sub} action="Review" />
        {home}
        <Row icon="truck" title={NEEDS_YOU_OTHER.idle.title} sub={NEEDS_YOU_OTHER.idle.sub} action="View" />
      </div>
    );
  }
  const total = KPIS.owed;
  const tones = ['var(--chart-muted)', 'var(--chart-axis)', 'var(--chart-hatch)', 'var(--text-secondary)', 'var(--text-primary)'];
  return (
    <div>
      {rows}
      <div className="age">
        <div className="tw-13 tw-sec" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Debtors by age</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{rand(total)}</span>
        </div>
        <div className="age__bar" aria-hidden="true">
          {AGEING.filter((a) => a.amount > 0).map((a, i) => (
            <span key={a.label} style={{ width: `${(a.amount / total) * 100}%`, background: tones[i] }} />
          ))}
        </div>
        <div className="age__legend">
          {AGEING.map((a) => (
            <div key={a.label}>
              <span>{a.label}</span>
              <b>{R0(a.amount)}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
