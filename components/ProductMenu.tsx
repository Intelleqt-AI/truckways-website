'use client';

import { useEffect, useRef, useState } from 'react';

export type MenuItem = { href: string; label: string; line: string };

/** Product menu (brief §2.4): a simple disclosure panel, not a mega-menu. Escape and outside click close it. */
export default function ProductMenu({ items, current }: { items: MenuItem[]; current?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  return (
    <div
      className="pmenu"
      ref={root}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={btn}
        type="button"
        className="nav__link pmenu__btn"
        aria-expanded={open}
        aria-controls="product-menu"
        aria-current={current ? 'page' : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        Product
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="pmenu__panel" id="product-menu" hidden={!open}>
        <ul className="list-reset">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="pmenu__item">
                <b>{i.label}</b>
                <span>{i.line}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
