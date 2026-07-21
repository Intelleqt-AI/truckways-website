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
            Know what every load really costs. Get paid in 48 hours.
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
              alt="The TruckWys quote builder pricing a Johannesburg to Cape Town load with the route on a map, fuel at the live diesel price, R1,115 of N1 tolls, and a quote total of R31,613"
              width={1440}
              height={900}
              priority
              className="w-full"
            />
          </div>
        </div>

        {/* Stat strip */}
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14">
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
              <div className="eyebrow eyebrow-accent mb-4">Step 01 · Quote</div>
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
                alt="The TruckWys quote builder in light mode with route options, cost breakdown and the AI recommended price"
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
              <div className="eyebrow eyebrow-accent mb-4">Step 02 · Get paid</div>
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
            <div className="eyebrow eyebrow-accent mb-4">Step 03 · Know your numbers</div>
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
              <div className="eyebrow eyebrow-accent mb-4">Step 04 · Capital</div>
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

      {/* AI (unique treatment: navy panel, the AI shown actually working) */}
      <section id="ai" className="footer-dark">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>The AI inside</div>
            <h2 className="text-display text-ink">
              It does the homework. You make the call.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              No black box. You describe the load, the AI prices it from live data,
              shows its working, and asks before anything is saved or sent.
            </p>
          </div>

          {/* The AI at work: real interaction, real numbers */}
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[14px] border border-line bg-[#0b1322] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
              <span className="eyebrow ml-2">Quote builder</span>
            </div>
            <div className="px-6 py-6">
              <div className="eyebrow mb-2">You type</div>
              <p className="mono-stat text-[15px] text-ink">
                &ldquo;20 tons of steel, JHB to Cape Town, flatbed, Tuesday&rdquo;
              </p>
              <div className="eyebrow mb-3 mt-6">The AI answers with</div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Route drawn · 1,501 km',
                  'Fuel R13,238 at live diesel',
                  'Tolls R1,115 · Huguenot + Verkeerdevlei',
                  'Quote R31,613',
                  'Win probability 43%',
                ].map((c) => (
                  <span
                    key={c}
                    className="mono-stat rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-[13px] text-ink-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'A price that learns', d: 'Recommendations built from your own won and lost quotes, with a win probability on each.' },
              { t: 'Collections that write themselves', d: 'Overdue follow-ups drafted and sent, in your name, at the right moments.' },
              { t: 'Risk scores per client', d: 'Who pays late, who is slipping, and how much credit each client deserves.' },
              { t: 'A copilot on your numbers', d: 'Ask about cash, quotes or fleet status in plain words. It answers from your live data.' },
            ].map((f) => (
              <div key={f.t} className="rounded-[10px] border border-line bg-white/[0.04] p-5">
                <h3 className="text-[15px] font-semibold text-ink">{f.t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-2">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/ai" className="btn-primary">
              See how the AI works
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <div className="eyebrow eyebrow-accent mb-4">Works with what you run</div>
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            Your TMS, tracking and books stay in the loop
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            TruckWys handles the money side and connects to the tools you already
            use. Your clients get quotes they can accept in one click.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { name: 'xero', style: { fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'lowercase' as const }, note: 'Accounting sync' },
              { name: 'Cartrack', style: { fontWeight: 700, letterSpacing: '-0.01em' }, note: 'Vehicle tracking' },
              { name: 'CtrlFleet', style: { fontWeight: 600, letterSpacing: '-0.01em' }, note: 'Fleet management' },
              { name: 'Email', style: { fontWeight: 600 }, note: 'One-click quote acceptance' },
              { name: 'PDF', style: { fontWeight: 700 }, note: 'Branded invoices' },
              { name: 'WhatsApp', style: { fontWeight: 600 }, note: 'Describe a load in a message' },
            ].map((l) => (
              <div key={l.name} className="card flex flex-col items-center justify-center gap-1 px-4 py-7">
                <span className="text-[22px] leading-none text-ink" style={l.style}>
                  {l.name}
                </span>
                <span className="text-[12px] text-ink-3">{l.note}</span>
              </div>
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
