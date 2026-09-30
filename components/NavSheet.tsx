'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  links: { href: string; label: string }[];
  signIn: string;
  demo: string;
  signup: string;
  price: string;
};

/**
 * Phone menu: full-height sheet, focus trapped while open, Escape closes and
 * returns focus, page scroll locked. The sheet is portalled to <body> so no
 * ancestor (the sticky header) can become its containing block and clip it.
 */
export default function NavSheet({ links, signIn, demo, signup, price }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Close if the viewport grows past the phone/tablet nav while open.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(min-width: 1100px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [open]);
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = panel.current;
    const focusables = () =>
      Array.from(root?.querySelectorAll<HTMLElement>('a[href], button') ?? []);
    focusables()[0]?.focus();
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const f = focusables();
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      html.style.overflow = prevOverflow;
      html.style.paddingRight = '';
      btn.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={btn}
        type="button"
        className="nav__menu-btn"
        aria-expanded={open}
        aria-controls={mounted ? 'site-sheet' : undefined}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <span className="sr-only">Menu</span>
      </button>
      {mounted && createPortal(
      <div
        className="sheet"
        id="site-sheet"
        hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="sheet__panel" ref={panel} role="dialog" aria-modal="true" aria-label="Menu">
          <div className="sheet__head">
            <img src="/brand/truckwys-logo.png" alt="" width={113} height={22} />
            <button type="button" className="nav__menu-btn" style={{ display: 'inline-flex' }} onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Menu" className="sheet__list">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="/contact" data-cta="talk_to_us" data-loc="menu">Talk to us</a>
            <a href={signIn} data-cta="sign_in" data-loc="menu">
              Sign in
            </a>
          </nav>
          <div className="sheet__foot">
            <a href={signup} className="btn btn--primary" data-cta="get_started" data-loc="menu">
              Get started
            </a>
            <a href={demo} className="btn btn--secondary" data-cta="open_demo" data-loc="menu">
              Open the demo
            </a>
            <p className="small sheet__price">{price}</p>
          </div>
        </div>
      </div>,
        document.body,
      )}
    </>
  );
}
