'use client';

import { useEffect } from 'react';

/* Fallback for browsers without scroll-driven animations: rise the dashboard once it is 10% visible. */
export default function LabMotion() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: view()')) return;
    const els = document.querySelectorAll<HTMLElement>('.lc-rise');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-in'));
      return;
    }
    document.documentElement.classList.add('lc-io');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
