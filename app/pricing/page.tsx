import type { Metadata } from 'next';
import Link from 'next/link';
import {
  APP_LOGIN_URL,
  CANCELLATION,
  FACTS,
  FEE_BASIS,
  FEE_LABEL,
  PRICE_LABEL,
  jsonLd,
  softwareSchema,
} from '../../lib/site';

// TODO(owner): confirm whether R 4 499 is excl. or incl. VAT, then say so on this page.

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    `TruckWys costs ${PRICE_LABEL} per month per fleet plus ${FEE_LABEL} ${FEE_BASIS}. Unlimited users and quotes, no setup fees, no tiers.`,
  alternates: {
    canonical: 'https://www.truckwys.com/pricing',
  },
  openGraph: {
    type: 'website',
    siteName: 'TruckWys',
    locale: 'en_ZA',
    title: 'TruckWys pricing',
    description:
      `${PRICE_LABEL} per month per fleet plus ${FEE_LABEL} ${FEE_BASIS}. Unlimited users and quotes, no setup fees, no tiers.`,
    url: 'https://www.truckwys.com/pricing',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630, alt: 'TruckWys: know what every load really costs, invoice it the moment it delivers' }],
  },
};

const pricingFaqs = FACTS.faqs.filter((f) =>
  ['How much does TruckWys cost?', 'What is Fast Pay?', 'How long does setup take?'].includes(f.q),
);

const pricingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pricingFaqSchema)} />

      {/* Hero */}
      <section className="hero-wash">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center md:pt-28">
          <div className="eyebrow eyebrow-accent mb-5">Pricing</div>
          <h1 className="text-hero mx-auto max-w-4xl text-ink">
            TruckWys pricing: {PRICE_LABEL} a month, everything included
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            No per-user fees, no tiers, no surprises at month end. Every fleet gets
            the whole product.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card flex flex-col p-8">
              <div className="eyebrow mb-2">Platform</div>
              <div className="flex items-baseline gap-2">
                <span className="mono-stat text-[44px] font-semibold text-ink">{PRICE_LABEL}</span>
                <span className="text-[15px] text-ink-2">per month, per fleet</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Unlimited users, quotes and invoices',
                  'Quote builder with live diesel and SANRAL tolls',
                  'Cross-border pricing for Southern Africa',
                  'Automatic invoicing with POD attached',
                  'Debtors by age and one-click payment reminders',
                  'Fleet insights: margin, cost per km, utilisation',
                  'Xero and Cartrack integrations',
                  'Email and phone support',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] text-ink-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a href={APP_LOGIN_URL} className="btn-primary w-full">
                  Get started
                </a>
              </div>
            </div>

            <div className="card flex flex-col p-8">
              <div className="eyebrow mb-2">Per delivered load</div>
              <div className="flex items-baseline gap-2">
                <span className="mono-stat text-[44px] font-semibold text-ink">{FEE_LABEL}</span>
                <span className="text-[15px] text-ink-2">{FEE_BASIS}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Charged when a delivered load is invoiced',
                  'Nothing on quotes you lose',
                  'No per-user charges, no minimums',
                  CANCELLATION,
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] text-ink-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-md border border-line bg-accent-soft p-4">
                <div className="eyebrow eyebrow-accent mb-1.5">Coming soon</div>
                <p className="text-[13px] leading-relaxed text-ink-2">
                  Fast Pay is not live yet and is not part of this price. Its
                  pricing will be published when it launches.
                </p>
              </div>
              <p className="mt-auto pt-6 text-[13px] text-ink-3">
                You pay for outcomes: a delivered load is money on its way in.
              </p>
            </div>
          </div>

          {/* Comparison strip */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { v: 'R0', l: 'setup fees' },
                { v: 'R0', l: 'per-user charges' },
                { v: '30 days', l: "notice to cancel, month to month" },
              ].map((s) => (
                <div key={s.l} className="card p-6 text-center">
                  <div className="mono-stat text-[24px] font-semibold text-ink">{s.v}</div>
                  <div className="mt-1 text-[13px] text-ink-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-page">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <div className="text-center">
            <div className="eyebrow eyebrow-accent mb-4">FAQ</div>
            <h2 className="text-display text-ink">Pricing questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {pricingFaqs.map((f) => (
              <details key={f.q} className="card group px-6 py-4">
                <summary className="cursor-pointer list-none text-[15px] font-medium text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-ink-3 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-[14px] text-ink-2">
            More questions on the{' '}
            <Link href="/#faq" className="font-medium text-accent underline-offset-4 hover:underline">
              full FAQ
            </Link>{' '}
            or email{' '}
            <a href="mailto:grant@truckwys.com" className="font-medium text-accent underline-offset-4 hover:underline">
              grant@truckwys.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-accent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            {PRICE_LABEL} gets your whole fleet on board
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            Sign in and send your first properly costed quote before the diesel
            price changes again.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <a href={APP_LOGIN_URL} className="btn-primary w-full !border-white !bg-white !text-accent sm:w-auto">
              See the demo
            </a>
            <Link href="/contact" className="btn-secondary w-full !border-white/40 !bg-transparent !text-white sm:w-auto">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
