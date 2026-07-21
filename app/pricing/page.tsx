import type { Metadata } from 'next';
import Link from 'next/link';
import { FACTS, jsonLd, softwareSchema } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'TruckWys costs R4,500 per month per fleet with unlimited users and quotes. FastPay settles invoices in 48 hours for 0.25%. No setup fees, no tiers.',
  alternates: {
    canonical: 'https://www.truckwys.com/pricing',
  },
  openGraph: {
    title: 'TruckWys pricing',
    description:
      'R4,500 per month per fleet with unlimited users and quotes. FastPay settles invoices in 48 hours for 0.25%. No setup fees, no tiers.',
    url: 'https://www.truckwys.com/pricing',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
};

const pricingFaqs = FACTS.faqs.filter((f) =>
  ['How much does TruckWys cost?', 'What is FastPay?', 'How long does setup take?'].includes(f.q),
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
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 text-center md:pt-16">
          <div className="eyebrow eyebrow-accent mb-5">Pricing</div>
          <h1 className="text-hero mx-auto max-w-3xl text-ink">
            One price. Everything included.
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
                <span className="mono-stat text-[44px] font-semibold text-ink">R4,500</span>
                <span className="text-[15px] text-ink-2">per month, per fleet</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Unlimited users, quotes and invoices',
                  'AI quote builder with live diesel and SANRAL tolls',
                  'Cross-border pricing for Southern Africa',
                  'Automatic invoicing with POD attached',
                  'Collections follow-ups written and sent for you',
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
                <Link href="/get-started" className="btn-primary w-full">
                  Start your free trial
                </Link>
              </div>
            </div>

            <div className="card flex flex-col p-8">
              <div className="eyebrow mb-2">FastPay</div>
              <div className="flex items-baseline gap-2">
                <span className="mono-stat text-[44px] font-semibold text-ink">0.25%</span>
                <span className="text-[15px] text-ink-2">per settled invoice</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Money in your account within 48 hours',
                  'Use it invoice by invoice, only when you want it',
                  'No lock-in, no minimums, no monthly commitment',
                  'Limits grow with your payment history',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] text-ink-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-md border border-line bg-accent-soft p-4">
                <div className="eyebrow eyebrow-accent mb-1.5">Worked example</div>
                <p className="text-[13px] leading-relaxed text-ink-2">
                  A R100,000 invoice settled through FastPay costs R250 and pays out
                  within 48 hours instead of 30 to 60 days. That is diesel for the
                  next three loads, this week.
                </p>
              </div>
              <p className="mt-auto pt-6 text-[13px] text-ink-3">
                Capital advances are priced per draw, based on your book.
              </p>
            </div>
          </div>

          {/* Comparison strip */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { v: 'R0', l: 'setup fees' },
                { v: 'R0', l: 'per-user charges' },
                { v: 'Any time', l: 'cancellation, no penalties' },
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
            R4,500 gets your whole fleet on board
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            Start the trial today and send your first properly costed quote before
            the diesel price changes again.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <Link href="/get-started" className="btn-primary w-full !border-white !bg-white !text-accent sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/contact" className="btn-secondary w-full !border-white/40 !bg-transparent !text-white sm:w-auto">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
