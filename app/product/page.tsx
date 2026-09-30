import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { APP_LOGIN_URL, PRICE_LABEL, jsonLd, softwareSchema, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Product: load quoting, invoicing and debtors',
  description:
    'Inside TruckWys: the quote builder with live diesel and SANRAL tolls, automatic invoicing on delivery, debtors and one-click reminders for South African fleets.',
  alternates: {
    canonical: 'https://www.truckwys.com/product',
  },
  openGraph: {
    type: 'website',
    siteName: 'TruckWys',
    locale: 'en_ZA',
    title: 'The TruckWys product',
    description:
      'The quote builder with live diesel and SANRAL tolls, automatic invoicing on delivery, debtors and one-click reminders for South African fleets.',
    url: 'https://www.truckwys.com/product',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630, alt: 'TruckWys: know what every load really costs, invoice it the moment it delivers' }],
  },
};

const quoteFeatures = [
  {
    t: 'Live diesel, every quote',
    d: 'The current diesel price and your vehicle’s real consumption go into every kilometre, so a price rise never eats a margin you did not know you had.',
  },
  {
    t: 'The actual tolls, per route',
    d: 'SANRAL plaza fees are matched to the exact road each route takes, priced by vehicle class. The N1 route and the alternative are costed separately.',
  },
  {
    t: 'Cross-border ready',
    d: 'Botswana, Namibia, Zimbabwe, Zambia and Mozambique loads pick up border fees, weighbridge charges and non-SA tolls automatically.',
  },
  {
    t: 'Plain-language fill',
    d: 'Type "20 tons of steel, JHB to Cape Town, flatbed, Tuesday" and the form fills itself: client, route, cargo and weight.',
  },
  {
    t: 'A price that learns',
    d: 'After about 40 quote outcomes, wins and losses both, TruckWys shows a win probability learned from them on each quote.',
  },
  {
    t: 'Round trip by default',
    d: 'Return legs are priced properly: distance costs double, labelled clearly, so the empty drive home never comes out of your pocket.',
  },
];

export default function ProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'The TruckWys product',
          url: `${SITE_URL}/product`,
          description:
            'The quote builder, automatic invoicing on delivery, debtors and one-click reminders for South African fleets.',
        })}
      />

      {/* Hero */}
      <section className="hero-wash">
        <div className="mx-auto max-w-6xl px-5 pb-0 pt-10 text-center md:pt-16">
          <div className="eyebrow eyebrow-accent mb-5">Product</div>
          <h1 className="text-hero mx-auto max-w-3xl text-ink">
            From quote to cash, one system
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            Everything between a client asking &ldquo;what will this load cost?&rdquo;
            and the money clearing in your account. No spreadsheets in between.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <a href={APP_LOGIN_URL} className="btn-primary w-full sm:w-auto">
              Get started
            </a>
            <Link href="/pricing" className="btn-secondary w-full sm:w-auto">
              See pricing
            </Link>
          </div>
        </div>
        {/* Single product fragment: the cost breakdown (no client names). */}
        <div className="mx-auto mt-14 max-w-6xl px-5 pb-16">
          <div className="mx-auto max-w-md overflow-hidden rounded-[12px] border border-line bg-surface shadow-[0_16px_44px_-16px_rgba(17,24,39,0.2)]">
            <Image
              src="/images/product/frag-cost-card.png"
              alt="The TruckWys cost breakdown: fuel, tolls, surcharges and a quote total of R 31 636"
              width={446}
              height={370}
              priority
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Quote deep-dive */}
      <section id="quote" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">The quote builder</div>
            <h2 className="text-display text-ink">
              A load priced from its real costs
            </h2>
            <p className="mt-4 text-[16px] text-ink-2">
              Client, vehicle, collection, delivery. The system does the rest.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quoteFeatures.map((f) => (
              <div key={f.t} className="card p-6">
                <h3 className="text-[16px] font-semibold text-ink">{f.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get paid deep-dive */}
      <section id="paid" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Invoicing and debtors</div>
              <h2 className="text-display text-ink">
                Deliver the load. The invoice is already done.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                The moment a load is marked delivered, its invoice exists: correct
                amounts, correct client, proof of delivery attached, synced to Xero.
                When an invoice goes overdue, send a reminder in one click, or
                remind everyone overdue at once. Reminders get firmer as the days
                pass.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
                Fast Pay, for getting paid on an invoice before your client pays,
                is coming soon. It is not live yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights deep-dive */}
      <section id="numbers" className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Insights</div>
              <h2 className="text-display text-ink">
                Know your cost per kilometre. Actually.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Margin per route, cost per kilometre per vehicle, which clients pay
                on time and which quietly cost you money. The numbers build
                themselves from your own quotes, loads and invoices, so they reflect
                your fleet, not an industry average.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Margin and win rate per lane, client and vehicle',
                  'Fuel spend against revenue, week by week',
                  'Client payment behaviour before it becomes a problem',
                  'Fleet utilisation and idle vehicle alerts',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon: Fast Pay is not live (CAPITAL_LAUNCHED = false in the app) */}
      <section id="capital" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <div className="eyebrow eyebrow-accent mb-4">Coming soon</div>
            <h2 className="text-display text-ink">Fast Pay is not live yet</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              Fast Pay is planned as a way to get paid on an invoice before your
              client pays. It is not available today, and there are no rates or
              limits yet. We will publish them when it launches.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <div className="eyebrow eyebrow-accent mb-4">Integrations</div>
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            Plays well with your TMS, tracking and books
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-ink-2">
            TruckWys is not a transport management system and does not want to be.
            It runs the money and connects to Xero, Cartrack and your email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['Xero', 'Cartrack', 'Email quoting', 'PDF invoices'].map((n) => (
              <span key={n} className="card px-5 py-2.5 text-[14px] font-medium text-ink-2">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Everything inside: the granular layer */}
      <section className="border-t border-line bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">Everything inside</div>
            <h2 className="text-display text-ink">Every feature, in the one {PRICE_LABEL} price</h2>
            <p className="mt-4 text-[16px] text-ink-2">
              The full list. All of it in the {PRICE_LABEL}, no add-on tiers, no locked modules.
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                cat: 'Quoting',
                items: [
                  'Plain-language quote fill',
                  'Live diesel pricing per vehicle',
                  'SANRAL tolls per route, by vehicle class',
                  'Cross-border, border and weighbridge fees',
                  'Route options on a live map',
                  'Round-trip pricing',
                  'Editable tolls, driver allowance and R/km',
                  'Weight surcharges',
                  'Quote validity dates',
                  'One-click client acceptance links',
                  'PDF quotes on your letterhead',
                  'Draft autosave, park and resume',
                ],
              },
              {
                cat: 'Intelligence',
                items: [
                  'Copilot on your live data',
                  'Daily executive briefing',
                  'Win probability per quote',
                  'Profit sweet-spot curve',
                  'Revenue guard on every quote',
                  'Cost per kilometre, per vehicle',
                  'Margin per lane and per client',
                  'Fleet utilisation and idle alerts',
                  'Driver and vehicle performance',
                  'Cartrack telemetry connection',
                ],
              },
              {
                cat: 'Getting paid',
                items: [
                  'Invoice created on delivery',
                  'Proof of delivery attached',
                  'Xero sync',
                  'One-click payment reminders',
                  'Short-pay detection',
                  'Overdue flags and ageing',
                  'Payment tracking per invoice',
                  'iPhone app (Android coming soon)',
                ],
              },
              {
                cat: 'Clients and coming soon',
                items: [
                  'Payment score per client',
                  'Credit limits per client',
                  'Payment behaviour history',
                  'Coming soon: Fast Pay (not live yet)',
                ],
              },
            ].map((col) => (
              <div key={col.cat}>
                <div className="eyebrow eyebrow-accent mb-4">{col.cat}</div>
                <ul className="space-y-2.5">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[14px] leading-snug text-ink-2">
                      <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-accent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            See it price your own routes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            Set up your fleet today. {PRICE_LABEL} per month, unlimited users and quotes,
            no setup fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <a href={APP_LOGIN_URL} className="btn-primary w-full !border-white !bg-white !text-accent sm:w-auto">
              See the demo
            </a>
            <Link href="/pricing" className="btn-secondary w-full !border-white/40 !bg-transparent !text-white sm:w-auto">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
