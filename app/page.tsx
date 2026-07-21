import Image from 'next/image';
import Link from 'next/link';
import {
  FACTS,
  jsonLd,
  organizationSchema,
  websiteSchema,
  softwareSchema,
  faqSchema,
} from '../lib/site';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      {/* Hero */}
      <section className="hero-wash">
        <div className="mx-auto max-w-6xl px-5 pb-0 pt-10 text-center md:pt-16">
          <div className="eyebrow eyebrow-accent mb-5">Fleet finance software · South Africa</div>
          <h1 className="text-hero mx-auto max-w-3xl text-ink">
            Know what every load really costs. Get paid in 48 hours, not 60 days.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            TruckWys prices every quote with the live diesel price, the actual SANRAL
            tolls on the route and your own running costs. It invoices the moment you
            deliver, and FastPay settles the money for 0.25% while your client takes
            their time. Built for South African fleets.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <Link href="/get-started" className="btn-primary w-full sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/product" className="btn-secondary w-full sm:w-auto">
              See how it works
            </Link>
          </div>
          <div className="price-chip mt-6">
            <span className="mono-stat text-[17px] font-semibold text-ink">R4,500</span>
            <span className="text-[14px] text-ink-2">
              per month · unlimited users and quotes · no setup fees
            </span>
          </div>
        </div>

        {/* Hero product shot */}
        <div className="mx-auto mt-14 max-w-6xl px-5">
          <div className="shot-frame">
            <Image
              src="/images/product/quote-builder-dark.png"
              alt="The TruckWys quote builder pricing a Johannesburg to Cape Town load with the route on a map, fuel at the live diesel price, R1,115 of N1 tolls, and a quote total of R31,636"
              width={1440}
              height={900}
              priority
              className="w-full"
            />
          </div>
        </div>

        {/* Stat strip */}
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid grid-cols-2 gap-8 border-y border-line py-8 md:grid-cols-4">
            {[
              { v: '60 sec', l: 'to price a load' },
              { v: '48 hrs', l: 'to money in the bank' },
              { v: '0.25%', l: 'FastPay fee' },
              { v: '31', l: 'SANRAL toll plazas priced' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="mono-stat text-[28px] font-semibold text-ink">{s.v}</div>
                <div className="mt-1 text-[13px] text-ink-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="product" />

      {/* Pillar 1: Quote (dark) */}
      <section id="quote" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Quote</div>
              <h2 className="text-display text-ink">
                Every real cost, before you name a price
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Pick the client, the truck, and the two points. TruckWys draws the
                route, prices fuel at today&apos;s diesel price, and adds the exact toll
                plazas that route passes. Johannesburg to Cape Town on the N1 means
                Huguenot and Verkeerdevlei, not a guess. Your freight rates come out
                grounded in real numbers, load after load.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Live diesel prices and your vehicle’s real consumption',
                  'SANRAL toll fees per route, matched to the road you will drive',
                  'Border, weighbridge and non-SA toll fees for cross-border loads',
                  'Route options with distance, tolls and fuel for each',
                  'A recommended price based on what has won you work before',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[14px] text-ink-3">
                Describe the load in plain words and the form fills itself:
                &ldquo;20 tons of steel, JHB to Cape Town, flatbed, Tuesday&rdquo;.
              </p>
            </div>
            <div className="shot-frame">
              <Image
                src="/images/product/quote-builder-light.png"
                alt="TruckWys route options and cost breakdown showing fuel, tolls and base rate for three route choices"
                width={1440}
                height={900}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Get paid */}
      <section id="paid" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="shot-frame">
                <Image
                  src="/images/product/invoices-light.png"
                  alt="The TruckWys invoice pipeline showing invoices created on delivery with statuses, due dates and overdue flags"
                  width={1440}
                  height={834}
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="eyebrow eyebrow-accent mb-4">Get paid</div>
              <h2 className="text-display text-ink">
                The invoice sends itself. The money can arrive in 48 hours.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Mark a load delivered and the invoice already exists: right amounts,
                right client, right terms. TruckWys chases what is overdue so you do
                not have to, and when the wait is too long, FastPay settles the
                invoice into your account in 48 hours for 0.25%.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Invoices created automatically on delivery, with POD attached',
                  'Overdue follow-ups written and sent for you',
                  'FastPay: 48-hour settlement at 0.25% of invoice value',
                  'Xero sync so your books stay right',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Know your numbers (dark) */}
      <section id="numbers" className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">Know your numbers</div>
            <h2 className="text-display text-ink">
              What does each truck, route and client really make you?
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              Cost per kilometre, margin per route, which clients pay late and which
              vehicles burn money. The numbers update themselves from your quotes,
              loads and invoices.
            </p>
          </div>
          <div className="shot-frame mt-12">
            <Image
              src="/images/product/insights-light.png"
              alt="TruckWys fleet insights with margin analysis, cost per kilometre and vehicle performance"
              width={1440}
              height={834}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Pillar 4: Capital */}
      <section id="capital" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">Capital</div>
              <h2 className="text-display text-ink">
                Diesel money on a Tuesday, against Friday&apos;s invoices
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Cash flow kills more fleets than competition does. TruckWys gives you
                advances against your outstanding invoices, sized by your own payment
                history, so a slow-paying client never parks your trucks.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="card p-6">
                  <div className="mono-stat text-[24px] font-semibold text-ink">R4,500</div>
                  <div className="mt-1 text-[13px] text-ink-2">flat monthly price</div>
                </div>
                <div className="card p-6">
                  <div className="mono-stat text-[24px] font-semibold text-ink">0.25%</div>
                  <div className="mt-1 text-[13px] text-ink-2">FastPay fee when you use it</div>
                </div>
              </div>
            </div>
            <div className="shot-frame">
              <Image
                src="/images/product/capital-light.png"
                alt="The TruckWys capital view showing R1,000,000 of available capital against outstanding invoices"
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
          <div className="eyebrow eyebrow-accent mb-3">Works with what you run</div>
          <h2 className="text-[20px] font-semibold text-ink">
            Your TMS, tracking and books stay in the loop
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-2">
            TruckWys handles the money side and connects to the tools you already
            use: Xero for accounting, Cartrack for vehicle tracking, and email for
            quotes your clients can accept in one click.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['Xero', 'Cartrack', 'Email quoting', 'PDF invoices'].map((n) => (
              <span
                key={n}
                className="card px-5 py-2.5 text-[14px] font-medium text-ink-2"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-page">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow eyebrow-accent mb-4">Pricing</div>
            <h2 className="text-display text-ink">One price. Everything included.</h2>
            <p className="mt-4 text-[16px] text-ink-2">
              No per-user fees, no tiers, no surprises at month end.{' '}
              <Link href="/pricing" className="font-medium text-accent underline-offset-4 hover:underline">
                See full pricing
              </Link>
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card flex flex-col p-8">
              <div className="eyebrow mb-2">Platform</div>
              <div className="flex items-baseline gap-2">
                <span className="mono-stat text-[44px] font-semibold text-ink">R4,500</span>
                <span className="text-[15px] text-ink-2">per month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Unlimited users, quotes and invoices',
                  'AI quote builder with live diesel and tolls',
                  'Automatic invoicing and collections',
                  'Fleet insights and reporting',
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
              <p className="mt-auto pt-8 text-[13px] leading-relaxed text-ink-3">
                Example: a R100,000 invoice settled through FastPay costs R250 and
                pays out within 48 hours instead of 30 to 60 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <div className="text-center">
            <div className="eyebrow eyebrow-accent mb-4">FAQ</div>
            <h2 className="text-display text-ink">Straight answers</h2>
          </div>
          <div className="mt-10 space-y-3">
            {FACTS.faqs.map((f) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="panel-accent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <div className="eyebrow eyebrow-accent mb-4">Get started</div>
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            Your next quote can be priced right
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            Set up your fleet today and send your first properly costed quote before
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
