import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { href: '/product', label: 'Product' },
  { href: '/ai', label: 'The AI inside' },
  { href: '/product#quote', label: 'AI quote builder' },
  { href: '/product#paid', label: 'Invoicing and FastPay' },
  { href: '/product#capital', label: 'Capital' },
  { href: '/pricing', label: 'Pricing' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/get-started', label: 'Get started' },
];

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/truckwys-logo-transparent.png"
              alt="TruckWys"
              width={148}
              height={32}
              className="h-7 w-auto invert"
            />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-2">
              Fleet finance software for South African transporters. Quote with real
              costs, invoice on delivery, and get paid in 48 hours.
            </p>
            <p className="mt-6 text-[13px] text-ink-3">
              <a href="mailto:grant@truckwys.com" className="hover:text-ink">
                grant@truckwys.com
              </a>
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Product</div>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-1.5 text-[14px] text-ink-2 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Company</div>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-1.5 text-[14px] text-ink-2 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-ink-3">
            © {new Date().getFullYear()} TruckWys. Built for South African fleets.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/truckwys-a8519239a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1.5 text-[13px] text-ink-3 transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/truckwys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1.5 text-[13px] text-ink-3 transition-colors hover:text-ink"
            >
              X
            </a>
            <Link href="/privacy" className="inline-block py-1.5 text-[13px] text-ink-3 transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="inline-block py-1.5 text-[13px] text-ink-3 transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
