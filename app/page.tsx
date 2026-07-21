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
          <h1
            className="text-hero mx-auto max-w-5xl text-ink"
            style={{ fontSize: 'clamp(36px, 4.6vw, 58px)' }}
          >
            <span className="block">Know what every load really costs.</span>
            <span className="block">Get paid in 48 hours.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            TruckWys prices every quote with the live diesel price, the actual SANRAL
            tolls on the route and your own running costs. It invoices the moment you
            deliver, and FastPay can settle the money early while your client takes
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
        </div>

        {/* Hero product shot */}
        <div className="mx-auto mt-14 max-w-6xl px-5">
          <div className="shot-frame">
            <Image
              src="/images/product/overview-dark.png"
              alt="The TruckWys command centre: live revenue, net margin, outstanding invoices, fleet utilisation and the agent activity stream"
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
              { v: 'R0', l: 'setup fees' },
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
                Quote every load on real diesel, toll and running costs
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
                alt="The TruckWys quote builder with route options, cost breakdown and the AI recommended price"
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
                  alt="The TruckWys invoice pipeline with statuses, due dates and overdue flags"
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
                not have to, and when the wait is too long, FastPay can settle the
                invoice into your account in 48 hours.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Invoices created automatically on delivery, with POD attached',
                  'Overdue follow-ups written and sent for you',
                  'FastPay: optional 48-hour settlement when you need the cash',
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
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
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
                Cash advances against your outstanding invoices
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
                  <div className="mono-stat text-[24px] font-semibold text-ink">48 hrs</div>
                  <div className="mt-1 text-[13px] text-ink-2">from request to money</div>
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

      {/* Mobile app */}
      <section id="mobile" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="eyebrow eyebrow-accent mb-4">iOS and Android</div>
              <h2 className="text-display text-ink">
                The mobile app: quote and invoice from the roadside
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                The full TruckWys account in your pocket, same data as the web app.
                Price a load in the truck, capture the proof of delivery at the
                drop, and have the invoice on its way before you leave the yard.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Quote with live diesel and tolls from anywhere',
                  'Capture and attach POD at the point of delivery',
                  'See cash, overdue invoices and fleet status on the move',
                  'One account across web, iOS and Android',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[14px] text-ink-3">
                Rolling out with the platform. Ask us for early access when you
                start your trial.
              </p>
            </div>

            {/* Stylised phone: the app's dark operations-terminal look, real numbers */}
            <div className="flex justify-center">
              <div className="w-[300px] rounded-[42px] border border-line-strong bg-[#060709] p-3 shadow-[0_32px_80px_-24px_rgba(17,24,39,0.45)]">
                <div className="overflow-hidden rounded-[32px] border border-[#2a2e34] bg-[#060709]">
                  <div className="flex items-center justify-between px-5 pb-2 pt-4">
                    <span className="mono-stat text-[11px] text-[#9aa1a9]">09:41</span>
                    <span className="h-5 w-20 rounded-full bg-[#101215]" aria-hidden="true" />
                    <span className="mono-stat text-[11px] text-[#9aa1a9]">LTE</span>
                  </div>
                  <div className="px-5 pb-6 pt-3">
                    <div className="eyebrow" style={{ color: '#6e757d' }}>Quote · JHB to CPT</div>
                    <div className="mono-stat mt-1 text-[26px] font-semibold text-[#ededed]">R 31 613</div>
                    <div className="mt-4 space-y-2.5 rounded-[10px] border border-[#2a2e34] bg-[#101215] p-4">
                      {[
                        ['Fuel at live diesel', 'R 13 238'],
                        ['Tolls, N1 plazas', 'R 1 115'],
                        ['Base rate, R10/km', 'R 15 009'],
                      ].map(([l, v]) => (
                        <div key={l} className="flex items-center justify-between">
                          <span className="text-[12px] text-[#9aa1a9]">{l}</span>
                          <span className="mono-stat text-[12px] text-[#ededed]">{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-[8px] bg-[#4d9eff] py-3 text-center text-[13px] font-medium text-[#05101f]">
                      Send quote
                    </div>
                    <div className="mt-3 flex items-center gap-2 rounded-[8px] border border-[#2a2e34] bg-[#101215] px-3.5 py-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#4d9eff]" aria-hidden="true" />
                      <span className="mono-stat text-[11px] text-[#9aa1a9]">POD captured · invoice queued</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI: navy blueprint panel, terminal left, agent pipeline right */}
      <section id="ai" className="footer-dark">
        <div className="ai-grid">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>The AI inside</div>
              <h2 className="text-display text-ink">
                AI that prices loads, chases invoices and watches your margins
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
                No black box. It works from your live data, shows its working, and
                asks before anything is saved or sent.
              </p>
            </div>

            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.15fr_1fr]">
              {/* Terminal: the AI at work */}
              <div className="flex flex-col overflow-hidden rounded-[14px] border border-[rgba(77,158,255,0.25)] bg-[#0b1322] shadow-[0_0_60px_-12px_rgba(77,158,255,0.25)]">
                <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
                  <span className="eyebrow ml-2">Quote builder</span>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <div className="eyebrow mb-2">You type</div>
                  <p className="mono-stat ai-cursor text-[15px] text-ink">
                    &ldquo;20 tons of steel, JHB to Cape Town, flatbed, Tuesday&rdquo;
                  </p>
                  <div className="eyebrow mb-3 mt-7">The AI prices it from live data</div>
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
                  <p className="mt-auto pt-7 text-[13px] text-ink-3">
                    Every number traceable to a real cost. Nothing sent without you.
                  </p>
                </div>
              </div>

              {/* Agent pipeline */}
              <div className="flex flex-col justify-between gap-3">
                {[
                  { n: '01', t: 'Prices that learn from your wins', d: 'Recommendations and win probability from your own quote history.' },
                  { n: '02', t: 'Collections written for you', d: 'Overdue follow-ups drafted and sent, timed to each client.' },
                  { n: '03', t: 'Risk scores on every client', d: 'Who pays late, who is slipping, how much credit they deserve.' },
                  { n: '04', t: 'A copilot on your live numbers', d: 'Ask about cash, quotes or fleet status in plain words.' },
                ].map((f) => (
                  <div key={f.n} className="flex gap-4 rounded-[10px] border border-line bg-white/[0.04] p-5">
                    <span className="mono-stat text-[13px] font-medium" style={{ color: 'var(--accent)' }}>{f.n}</span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink">{f.t}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-2">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/ai" className="btn-primary">
                See how the AI works
              </Link>
            </div>
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
            <h2 className="text-display text-ink">Simple pricing: R4,500 a month, everything included</h2>
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
              <div className="eyebrow mb-2">Per booking</div>
              <div className="flex items-baseline gap-2">
                <span className="mono-stat text-[44px] font-semibold text-ink">0.25%</span>
                <span className="text-[15px] text-ink-2">per confirmed booking</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Charged only when a quote becomes a booking',
                  'Nothing on quotes you lose',
                  'No per-user charges, no minimums',
                  'FastPay early settlement is optional, priced when you switch it on',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] text-ink-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-8 text-[13px] leading-relaxed text-ink-3">
                You pay for outcomes: a confirmed booking is money on its way in.
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
            <h2 className="text-display text-ink">Questions fleet owners ask us</h2>
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
