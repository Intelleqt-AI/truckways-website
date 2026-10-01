'use client';

import { useRef, useState } from 'react';
import { track } from '@vercel/analytics';

const NBSP = ' ';
const group = (i: string) => i.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
function rand(v: number, cents = false) {
  const fixed = cents ? v.toFixed(2) : Math.round(v).toString();
  const [i, d] = fixed.split('.');
  return `R${NBSP}${group(i)}${d ? `,${d}` : ''}`;
}
/** Digits only, grouped the South African way while typing: "32880" -> "32 880". */
const tidy = (raw: string) => group(raw.replace(/\D/g, '').replace(/^0+(?=\d)/, '').slice(0, 9));
const toNum = (s: string) => Number(s.replace(/\D/g, '')) || 0;

/**
 * C-FeeCalc: arithmetic only. The default result is server-rendered, so the
 * page shows the default month without JavaScript. The 0,25% is worked out on
 * each delivered load's invoice total incl. VAT (the customer invoice). No VAT
 * line on the TruckWys total: TruckWys is not VAT registered (owner decision),
 * so the subscription plus the fees is the full amount.
 */
export default function FeeCalc({
  monthly,
  feePct,
  defaultValue = 32880,
}: {
  monthly: number;
  feePct: number;
  defaultValue?: number;
}) {
  const [loads, setLoads] = useState('40');
  const [value, setValue] = useState(tidy(String(defaultValue)));
  const sent = useRef(false);

  const n = toNum(loads);
  const v = toNum(value);
  const r2 = (x: number) => Math.round(x * 100) / 100;
  const fees = r2(n * v * (feePct / 100));
  const total = r2(monthly + fees);

  const changed = (loadsNow: string) => {
    if (sent.current) return;
    sent.current = true;
    const k = toNum(loadsNow);
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
            type="text"
            autoComplete="off"
            value={loads}
            onChange={(e) => {
              const t = tidy(e.target.value);
              setLoads(t);
              changed(t);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="fc-value">Average invoice per load, incl. VAT</label>
          <div className="input-affix">
            <span aria-hidden="true">R</span>
            <input
              id="fc-value"
              className="input num"
              inputMode="numeric"
              type="text"
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(tidy(e.target.value));
                changed(loads);
              }}
            />
          </div>
        </div>
      </div>
      <div className="calc__out num">
        <div>
          <span>Subscription</span>
          <span>{rand(monthly, true)}</span>
        </div>
        <div>
          <span>
            Load fees <span className="calc__hint">({n} × 0,25% of {rand(v)})</span>
          </span>
          <span>{rand(fees, true)}</span>
        </div>
        <div className="calc__total" aria-live="polite">
          <span>Total for the month</span>
          <span>{rand(total, true)}</span>
        </div>
      </div>
    </div>
  );
}
