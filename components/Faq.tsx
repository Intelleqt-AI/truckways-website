import type { ReactNode } from 'react';
import { TwoTone } from './ui';

export type QA = { id: string; q: string; a: string };

/** Flott "Before you get started": two-tone heading left, native details/summary right. */
export default function Faq({ a, b, line, items }: { a: ReactNode; b?: ReactNode; line?: ReactNode; items: QA[] }) {
  return (
    <div className="faq">
      <div className="faq__head reveal">
        <TwoTone a={a} b={b} />
        {line ? <p className="body">{line}</p> : null}
      </div>
      <div className="faq__list">
        {items.map((f) => (
          <details key={f.id} className="faq__item" data-faq={f.id}>
            <summary>
              {f.q}
              <span className="faq__icon" aria-hidden="true" />
            </summary>
            <p className="faq__a">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
