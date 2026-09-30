import { FileText, Truck } from 'lucide-react';
import { OVERDUE, AGEING, KPIS } from '../../content/demo-data';
import { rand } from '../../lib/format';

const top3 = [...OVERDUE].sort((a, b) => b.amount - a.amount).slice(0, 3);

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
  const rows = top3.map((i) => (
    <Row
      key={i.number}
      icon="doc"
      title={i.customer}
      amount={rand(i.amount)}
      sub={`${i.daysLate} days late · ${i.number}`}
      action="Chase"
    />
  ));
  if (variant === 'phone') return <div>{rows.slice(0, 2)}</div>;
  if (variant === 'home') {
    return (
      <div>
        <Row icon="truck" title="1 load left open" sub="Past its delivery date since 28 Sep 2026" action="Review" />
        {rows}
        <Row icon="truck" title="2 vehicles idle" sub="No load in the last 7 days" action="View" />
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
              <b>{rand(a.amount)}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
