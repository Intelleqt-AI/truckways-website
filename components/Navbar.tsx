'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/#product', label: 'Product' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label="TruckWys home">
          <Image
            src="/images/truckwys-logo-transparent.png"
            alt="TruckWys"
            width={148}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/get-started" className="btn-primary !px-5 !py-2.5 text-[14px]">
            Get started
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-ink-2"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/get-started" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
