'use client';

import { useRef, useState } from 'react';
import { track } from '@vercel/analytics';

const NBSP = ' ';
function rand(v: number, cents = false) {
  const fixed = cents ? v.toFixed(2) : Math.round(v).toString();
  const [i, d] = fixed.split('.');
  return `R${NBSP}${i.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)}${d ? `,${d}` : ''}`;
}

/**
 * C-FeeCalc: arithmetic only. The default result is server-rendered, so the
 * page shows R 7 949 without JavaScript. No VAT line until owner question VAT-1.
 */
export default function FeeCalc({ monthly, feePct }: { monthly: number; feePct: number }) {
  const [loads, setLoads] = useState('40');
  const [value, setValue] = useState('34500');
  const sent = useRef(false);

  const n = Math.max(0, Math.floor(Number(loads.replace(/\s/g, '')) || 0));
  const v = Math.max(0, Number(value.replace(/\s/g, '').replace(',', '.')) || 0);
  const fees = Math.round(n * v * (feePct / 100) * 100) / 100;
  const total = monthly + fees;
  const hasCents = fees % 1 !== 0;

  const changed = (next: string) => {
    if (sent.current) return;
    sent.current = true;
    const k = Number(next) || 0;
    track('fee_calc_used', { loads_bucket: k < 20 ? 'under 20' : k < 100 ? '20 to 99' : '100+' });
  };

  return (
    <div className="calc__box">
      <div className="calc__inputs">
        <div className="field">
          <label htmlFor="fc-loads">Delivered loads per month</label>
          <input
            id="fc-loads"
            className="input num"
            inputMode="numeric"
            type="number"
            min={0}
            step={1}
            value={loads}
            onChange={(e) => {
              setLoads(e.target.value);
              changed(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="fc-value">Average invoice value per load (R)</label>
          <input
            id="fc-value"
            className="input num"
            inputMode="decimal"
            type="number"
            min={0}
            step={100}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              changed(loads);
            }}
          />
        </div>
      </div>
      <div className="calc__out num">
        <div>
          <span>Subscription</span>
          <span>{rand(monthly)}</span>
        </div>
        <div>
          <span>Load fees</span>
          <span>{rand(fees, hasCents)}</span>
        </div>
        <div className="calc__total" aria-live="polite">
          <span>Total per month</span>
          <span>{rand(total, hasCents)}</span>
        </div>
      </div>
    </div>
  );
}
