import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLd, softwareSchema, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'Inside TruckWys: the AI quote builder with live diesel and SANRAL tolls, automatic invoicing, collections, FastPay and capital for South African fleets.',
  alternates: {
    canonical: 'https://www.truckwys.com/product',
  },
  openGraph: {
    title: 'The TruckWys product',
    description:
      'The AI quote builder with live diesel and SANRAL tolls, automatic invoicing, collections, FastPay and capital for South African fleets.',
    url: 'https://www.truckwys.com/product',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
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
    d: 'After about 40 completed loads, TruckWys recommends prices from what has actually won you work, with a win probability on each quote.',
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
            'The AI quote builder, automatic invoicing, collections, FastPay and capital for South African fleets.',
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
            <Link href="/get-started" className="btn-primary w-full sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/pricing" className="btn-secondary w-full sm:w-auto">
              See pricing
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl px-5 pb-14">
          <div className="shot-frame">
            <Image
              src="/images/product/quote-builder-light.png"
              alt="The TruckWys quote builder pricing a Johannesburg to Cape Town load with route options, live diesel, SANRAL tolls and a full cost breakdown"
              width={1440}
              height={900}
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
              A load priced in about 60 seconds
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Invoicing and collections</div>
              <h2 className="text-display text-ink">
                Deliver the load. The paperwork is already done.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                The moment a load is marked delivered, its invoice exists: correct
                amounts, correct client, proof of delivery attached, synced to Xero.
                When an invoice goes overdue, the follow-up is written and sent
                without you lifting a finger.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
                And when 45-day terms are strangling your diesel budget, FastPay
                settles any approved invoice into your account within 48 hours for
                0.25% of its value. A R100,000 invoice costs R250 to have paid this
                week instead of next month.
              </p>
            </div>
            <div className="shot-frame">
              <Image
                src="/images/product/invoices-light.png"
                alt="The TruckWys invoice list with statuses, overdue flags and collection follow-ups"
                width={1440}
                height={834}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights deep-dive */}
      <section id="numbers" className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="shot-frame">
                <Image
                  src="/images/product/insights-light.png"
                  alt="TruckWys insights showing margin per route, cost per kilometre and fleet utilisation"
                  width={1440}
                  height={834}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
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

      {/* Capital deep-dive */}
      <section id="capital" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Capital</div>
              <h2 className="text-display text-ink">
                Working capital that grows with your book
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Advances against your outstanding invoices, with limits sized by your
                own payment history rather than a bank&apos;s form. Draw what you
                need for diesel, tyres or a new contract, and settle as your clients
                pay.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="card p-6">
                  <div className="mono-stat text-[24px] font-semibold text-ink">48 hrs</div>
                  <div className="mt-1 text-[13px] text-ink-2">from request to money</div>
                </div>
                <div className="card p-6">
                  <div className="mono-stat text-[24px] font-semibold text-ink">R0</div>
                  <div className="mt-1 text-[13px] text-ink-2">cost until you draw</div>
                </div>
              </div>
            </div>
            <div className="shot-frame">
              <Image
                src="/images/product/capital-light.png"
                alt="The TruckWys capital facility showing available capital against outstanding invoices"
                width={1440}
                height={560}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <div className="eyebrow eyebrow-accent mb-3">Integrations</div>
          <h2 className="text-[20px] font-semibold text-ink">
            Plays well with your TMS, tracking and books
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-2">
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

      {/* CTA */}
      <section className="panel-accent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            See it price your own routes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            Set up your fleet today. R4,500 per month, unlimited users and quotes,
            no setup fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <Link href="/get-started" className="btn-primary w-full !border-white !bg-white !text-accent sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/pricing" className="btn-secondary w-full !border-white/40 !bg-transparent !text-white sm:w-auto">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
