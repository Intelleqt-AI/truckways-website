import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLd, organizationSchema, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why TruckWys exists: South African fleets quote below cost and wait 30 to 60 days to be paid. TruckWys fixes the money side of running trucks.',
  alternates: {
    canonical: 'https://www.truckwys.com/about',
  },
  openGraph: {
    title: 'About TruckWys',
    description:
      'Why TruckWys exists: South African fleets quote below cost and wait 30 to 60 days to be paid. TruckWys fixes the money side of running trucks.',
    url: 'https://www.truckwys.com/about',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About TruckWys',
  url: `${SITE_URL}/about`,
  description:
    'TruckWys is fleet finance software for South African transporters: quoting with live diesel and toll prices, automatic invoicing, collections and FastPay.',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(aboutPageSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />

      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow eyebrow-accent mb-5">About</div>
            <h1 className="text-display text-ink">
              Trucking runs on thin margins and late money. We started there.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
              South African transporters quote off gut feel while diesel moves every
              month and tolls differ route by route. Too many loads get priced below
              cost, and the money for the good ones arrives 30 to 60 days after the
              truck gets home. TruckWys exists to fix both: price every load on its
              real costs, then get the money in faster.
            </p>
          </div>
        </div>
      </section>

      {/* What it is / is not */}
      <section className="border-t border-line bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">The product</div>
            <h2 className="text-display text-ink">The money side of running trucks</h2>
            <p className="mt-4 text-[16px] text-ink-2">
              One system for everything between quoting a load and banking the payment: the money half of fleet management software.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card p-8">
              <div className="eyebrow mb-3">What TruckWys is</div>
              <h3 className="text-[20px] font-semibold text-ink">
                Fleet finance software
              </h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  'Quotes priced on live diesel, the actual SANRAL tolls on the route, and your own running costs',
                  'Invoices created automatically the moment a load is delivered',
                  'Collections that chase overdue invoices so you do not have to',
                  'FastPay: money in your account within 48 hours for 0.25% of the invoice',
                  'Capital advances against outstanding invoices, sized by your payment history',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8">
              <div className="eyebrow mb-3">What TruckWys is not</div>
              <h3 className="text-[20px] font-semibold text-ink">
                Not another TMS
              </h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  'It does not replace your transport management system or your tracking',
                  'It works alongside the tools you already run and stays out of dispatch',
                  'Xero keeps your books right through a direct sync',
                  'Cartrack connects your vehicle data in a few minutes',
                  'If your TMS runs the trucks, TruckWys runs the money',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product shot (dark) */}
      <section className="panel-dark">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">One view</div>
            <h2 className="text-display text-ink">
              Quotes, invoices and cash in one place
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              From the first quote on a Johannesburg to Cape Town load to the day the
              money clears, every rand is visible. No spreadsheets, no guessing what
              a client still owes.
            </p>
          </div>
          <div className="shot-frame mt-12">
            <Image
              src="/images/product/overview-dark.png"
              alt="The TruckWys overview dashboard showing active quotes, invoices awaiting payment and available FastPay settlement in one screen"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-dark border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <div className="eyebrow eyebrow-accent mb-4">Get started</div>
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            See what your next load really costs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            R4,500 per month, unlimited users and quotes. Or write to us first and
            ask anything.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <Link href="/get-started" className="btn-primary w-full sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/contact" className="btn-secondary w-full !border-line-strong !bg-transparent !text-ink sm:w-auto">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
