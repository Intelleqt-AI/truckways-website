'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

/**
 * The site's only always-on client code (well under 1 kB of logic):
 * - reveal and motion on scroll (IntersectionObserver, once, 15% visible, stagger 60ms max 6)
 * - hairline under the nav after 8px of scroll
 * - Vercel custom events (no personal data): cta_click, app_store_click, faq_open
 */
/** Count the facts-row figures up from zero (e.g. "31", "0,25%"), keeping SA decimal commas. */
function countUp(root: HTMLElement) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.querySelectorAll<HTMLElement>('.figure-big').forEach((el) => {
    const text = el.textContent ?? '';
    const m = text.match(/^(\D*)(\d+(?:,\d+)?)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    const decimals = num.includes(',') ? num.split(',')[1].length : 0;
    const target = parseFloat(num.replace(',', '.'));
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = target * (1 - Math.pow(1 - k, 3));
      el.textContent = pre + v.toFixed(decimals).replace('.', ',') + post;
      if (k < 1) requestAnimationFrame(tick);
      else el.textContent = text;
    };
    requestAnimationFrame(tick);
  });
}

export default function SiteScripts() {
  useEffect(() => {
    const page = location.pathname;

    // Reveal (sections, cards) and motion targets (charts, drawn lines): .is-in once, on entering.
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.reveal,.facts__list,.chart__plot,.lane,.find__bar,.age__bar,.b-scatter,.sig-age__bar,.sig-pnl__bars,.sig-route__plazas,.sig-flow',
      ),
    );
    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          let i = 0;
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            if (el.classList.contains('reveal')) el.style.setProperty('--d', `${Math.min(i++, 5) * 90}ms`);
            if (el.classList.contains('facts__list')) countUp(el);
            el.classList.add('is-in');
            io!.unobserve(el);
          }
        },
        { threshold: 0.15 },
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add('is-in'));
    }

    // Nav hairline
    const nav = document.getElementById('site-nav');
    const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Events
    const onClick = (e: MouseEvent) => {
      const t = (e.target as Element | null)?.closest?.('[data-cta],[data-appstore]') as HTMLElement | null;
      if (!t) return;
      if (t.dataset.appstore) track('app_store_click', { location: t.dataset.appstore, page });
      else track('cta_click', { cta: t.dataset.cta ?? '', location: t.dataset.loc ?? '', page });
    };
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement;
      if (d.tagName === 'DETAILS' && d.open && d.dataset.faq) track('faq_open', { question_id: d.dataset.faq, page });
    };
    document.addEventListener('click', onClick);
    document.addEventListener('toggle', onToggle, true);

    return () => {
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('toggle', onToggle, true);
    };
  }, []);

  return null;
}
