'use client';

import { useRef, useState, type ReactNode, type KeyboardEvent } from 'react';

type Step = { title: string; body: string; href: string; link: string };

/**
 * Home section 4 (Flott "From signal to action"). A list of four rows; the
 * active row shows one line and a link, and the panel on the right swaps with a
 * 200ms cross-fade. User-driven only (click, keyboard, hover on desktop), no
 * autoplay. All panels are server-rendered, so nothing shifts and nothing is
 * fetched. Semantics: disclosure buttons (aria-expanded) that control the row's
 * text and its panel, which reads correctly as the accordion it becomes on phones.
 */
export default function StepSwitcher({ steps, panels }: { steps: Step[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = steps.length;
    let j = -1;
    if (e.key === 'ArrowDown') j = (i + 1) % n;
    else if (e.key === 'ArrowUp') j = (i - 1 + n) % n;
    else if (e.key === 'Home') j = 0;
    else if (e.key === 'End') j = n - 1;
    if (j < 0) return;
    e.preventDefault();
    btns.current[j]?.focus();
  };

  const hover = (i: number) => {
    if (window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) setActive(i);
  };

  return (
    <div className="steps">
      <ol className="steps__list list-reset">
        {steps.map((s, i) => (
          <li key={s.title} className={`step${i === active ? ' is-active' : ''}`} onMouseEnter={() => hover(i)}>
            <h3 style={{ margin: 0 }}>
              <button
                ref={(el) => {
                  btns.current[i] = el;
                }}
                type="button"
                className="step__tab"
                id={`step-tab-${i}`}
                aria-expanded={i === active}
                aria-controls={`step-body-${i} step-panel-${i}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                {s.title}
              </button>
            </h3>
            <div className="step__body" id={`step-body-${i}`}>
              <p>{s.body}</p>
              <a className="tlink" href={s.href}>
                {s.link}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="step__inline">{panels[i]}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="steps__panels">
        {panels.map((p, i) => (
          <div
            key={i}
            id={`step-panel-${i}`}
            role="region"
            aria-labelledby={`step-tab-${i}`}
            className={`step__panel${i === active ? ' is-active' : ''}`}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
