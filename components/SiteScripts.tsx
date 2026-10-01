'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

/**
 * The site's only always-on client code (well under 1 kB of logic):
 * - reveal and motion on scroll (IntersectionObserver, once, 15% visible, stagger 60ms max 6)
 * - clip-path reveals on product frames (.clipin): the clip is dropped once open, so shadows aren't cut
 * - scroll parallax on photos ([data-parallax], see `parallax` below)
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

/**
 * Scroll parallax for photos: `data-parallax="k"` moves the element at k of the scroll speed against its frame
 * (closest [data-pframe]), so the photo travels slower than the page. Writes only the `translate` property,
 * which composes with any CSS `transform` animation (hero settle, closing scale-in). One rAF-throttled passive
 * scroll listener; only frames on screen (IntersectionObserver) are measured. The offset is clamped to the
 * element's overscan (it is taller than its frame) or to `data-parallax-max` px, so no edge ever shows.
 * `data-parallax-mode="top"` (the hero) is zero at the top of the page instead of at the viewport centre.
 * Off under reduced motion.
 */
function parallax(): () => void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!els.length || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const items = els.map((el) => ({ el, frame: (el.parentElement?.closest('[data-pframe]') as HTMLElement | null) ?? el.parentElement!, k: parseFloat(el.dataset.parallax ?? '0.1'), on: false }));
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    const out: [HTMLElement, number][] = [];
    for (const it of items) {
      if (!it.on) continue;
      const f = it.frame.getBoundingClientRect();
      const max = it.el.dataset.parallaxMax ? parseFloat(it.el.dataset.parallaxMax) : Math.max(0, (it.el.offsetHeight - f.height) / 2) || f.height * it.k;
      const y = it.el.dataset.parallaxMode === 'top' ? Math.min(window.scrollY * it.k, max) : Math.max(-max, Math.min(max, (vh / 2 - (f.top + f.height / 2)) * it.k));
      out.push([it.el, y]);
    }
    for (const [el, y] of out) el.style.translate = `0 ${y.toFixed(1)}px`;
  };
  const queue = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) for (const it of items) if (it.frame === e.target) it.on = e.isIntersecting;
      queue();
    },
    { rootMargin: '10% 0px' },
  );
  new Set(items.map((i) => i.frame)).forEach((f) => io.observe(f));
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  return () => {
    io.disconnect();
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener('scroll', queue);
    window.removeEventListener('resize', queue);
  };
}

export default function SiteScripts() {
  useEffect(() => {
    // Tells the inline safety timer in app/layout.tsx that reveals are wired up, so it keeps html.js.
    (window as Window & { __twReady?: boolean }).__twReady = true;
    const page = location.pathname;

    // Reveal (sections, cards) and motion targets (charts, drawn lines): .is-in once, on entering.
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.reveal,.clipin,.phs__vis,.facts__list,.closing,.chart__plot,.lane,.find__bar,.age__bar,.b-scatter,.sig-age__bar,.sig-pnl__bars,.sig-route__plazas,.sig-flow',
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
            if (el.classList.contains('clipin')) {
              const done = (ev: TransitionEvent) => {
                if (ev.target !== el || ev.propertyName !== 'transform') return;
                el.classList.add('is-done');
                el.removeEventListener('transitionend', done);
              };
              el.addEventListener('transitionend', done);
            }
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

    // Parallax is not needed for first paint: set it up when the main thread is idle (keeps hydration short).
    let stopParallax = () => {};
    const idle = (cb: () => void) =>
      'requestIdleCallback' in window ? window.requestIdleCallback(cb, { timeout: 1500 }) : setTimeout(cb, 200);
    let cancelled = false;
    idle(() => {
      if (!cancelled) stopParallax = parallax();
    });

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
      cancelled = true;
      stopParallax();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('toggle', onToggle, true);
    };
  }, []);

  return null;
}
