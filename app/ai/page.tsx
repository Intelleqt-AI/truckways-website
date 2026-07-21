import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { jsonLd, softwareSchema, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'The AI inside TruckWys',
  description:
    'How TruckWys uses AI: plain-language quoting, prices learned from your own wins, automatic collections, client risk scores and a copilot on your live fleet data.',
  alternates: {
    canonical: 'https://www.truckwys.com/ai',
  },
  openGraph: {
    title: 'The AI inside TruckWys',
    description:
      'Plain-language quoting, prices learned from your own wins, automatic collections, client risk scores and a copilot on your live fleet data.',
    url: 'https://www.truckwys.com/ai',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
};

const aiPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The AI inside TruckWys',
  url: `${SITE_URL}/ai`,
  description:
    'How TruckWys uses AI: plain-language quoting, price recommendations learned from the fleet’s own quote history, automatic collections, client risk scores and a copilot that answers from live fleet data.',
};

const aiFeatures = [
  {
    eyebrow: '01 · Quote in plain words',
    h: 'Type the load the way you would say it',
    body: 'Write "20 tons of steel, JHB to Cape Town, flatbed, Tuesday" and the quote builder fills itself: client, route, cargo, weight and dates. The AI reads your words; the pricing still comes from live diesel, real SANRAL tolls and your own rates, so nothing is invented.',
    bullets: [
      'Works from a sentence, a WhatsApp-style message or the form',
      'Route drawn on the map with per-route tolls and fuel',
      'Every number in the quote is traceable to a real cost',
    ],
    img: { src: '/images/product/quote-builder-light.png', h: 900, alt: 'The TruckWys quote builder filled from a plain-language description, showing route options and the cost breakdown' },
  },
  {
    eyebrow: '02 · A price that learns',
    h: 'Recommendations from your wins, not industry averages',
    body: 'Every quote you send and every outcome you record teaches the model what wins work for your fleet, on your lanes, with your clients. It recommends a price, shows the win probability, and plots the sweet spot between margin and the chance of getting the load.',
    bullets: [
      'Win probability on every quote',
      'Profit sweet-spot curve: see what a higher price costs you in win rate',
      'Honest by design: until about 40 completed loads it prices from true cost plus your base rates, and says so',
    ],
    img: null,
  },
  {
    eyebrow: '03 · Revenue guard',
    h: 'It catches the quote that loses money before you send it',
    body: 'The guard checks every quote against the real cost of running the load. Quote below your own diesel, tolls and running costs and it tells you, in rands, before the client ever sees the number.',
    bullets: [
      'Margin check on every quote, automatically',
      'Flags below-cost pricing with the exact shortfall',
      'You can still send it; you just do it knowingly',
    ],
    img: null,
  },
  {
    eyebrow: '04 · Collections that write themselves',
    h: 'The follow-up is sent while you are still driving',
    body: 'Overdue invoices get chased with written follow-ups in your name, timed to your client’s payment behaviour. Short payments are picked up and queried. You see everything it sends.',
    bullets: [
      'Follow-ups drafted and sent automatically',
      'Short-pay detection against the invoice amount',
      'Full log of every message, nothing hidden',
    ],
    img: { src: '/images/product/invoices-light.png', h: 834, alt: 'The TruckWys invoice list with overdue flags that drive automatic collection follow-ups' },
  },
  {
    eyebrow: '05 · Client risk scores',
    h: 'Know who pays late before it costs you',
    body: 'Each client gets a risk score built from their actual payment history with you: days to pay, short payments, disputes. The score sets sensible credit limits and feeds the capital side, so a slow payer never surprises you twice.',
    bullets: [
      'Scores from real payment behaviour, updated as invoices clear',
      'Credit limits sized per client',
      'Feeds FastPay and capital eligibility',
    ],
    img: null,
  },
  {
    eyebrow: '06 · A copilot on your numbers',
    h: 'Ask your business a question, get an answer from live data',
    body: 'What is overdue? What is my fast-pay capacity? Which trucks are idle? The copilot answers from your live TruckWys data and can draft records for you. Anything it drafts, you confirm before it saves.',
    bullets: [
      'Plain-language questions on cash, quotes, invoices and fleet',
      'A daily executive briefing on Insights: what happened, what needs action',
      'Drafts quotes and customer records; you approve every one',
    ],
    img: { src: '/images/product/copilot-light.png', h: 834, alt: 'The TruckWys copilot answering questions about overdue invoices, fast-pay capacity and fleet status from live data' },
  },
];

export default function AiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(aiPageSchema)} />

      {/* Hero */}
      <section className="hero-wash-ai">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 text-center md:pt-16">
          <div className="eyebrow eyebrow-accent mb-5">The AI inside</div>
          <h1 className="text-hero mx-auto max-w-3xl text-ink">
            AI that earns its keep
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            Six places where TruckWys uses AI to make or save you money. Every one
            works from your real data, shows its working, and asks before it acts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <Link href="/get-started" className="btn-primary w-full sm:w-auto">
              Start your free trial
            </Link>
            <Link href="/product" className="btn-secondary w-full sm:w-auto">
              See the whole product
            </Link>
          </div>
        </div>
      </section>

      {/* Feature blocks */}
      {aiFeatures.map((f, i) => (
        <section
          key={f.eyebrow}
          className={i % 2 === 0 ? 'border-t border-line bg-surface' : 'bg-tint'}
        >
          <div className="mx-auto max-w-6xl px-5 py-20">
            {f.img ? (
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="eyebrow eyebrow-accent mb-4">{f.eyebrow}</div>
                  <h2 className="text-display text-ink">{f.h}</h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-2">{f.body}</p>
                  <ul className="mt-7 space-y-3.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] text-ink-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`shot-frame ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image src={f.img.src} alt={f.img.alt} width={1440} height={f.img.h} className="w-full" />
                </div>
              </div>
            ) : (
              <div>
                <div className="mx-auto max-w-2xl text-center">
                  <div className="eyebrow eyebrow-accent mb-4">{f.eyebrow}</div>
                  <h2 className="text-display text-ink">{f.h}</h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-2">{f.body}</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
                  {f.bullets.map((b) => (
                    <div key={b} className="card p-6 text-left">
                      <span className="mb-3 block h-1.5 w-8 rounded-full bg-accent" aria-hidden="true" />
                      <p className="text-[14px] leading-relaxed text-ink-2">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* What the AI will not do */}
      <section className="footer-dark">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>The honest part</div>
            <h2 className="text-display text-ink">What the AI will not do</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              Trust comes from knowing the limits. These are ours.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              { t: 'It will not invent a price', d: 'Recommendations only start once it has learned from about 40 of your completed loads. Before that it prices from true cost plus your base rates, and the screen says so.' },
              { t: 'It will not send without asking', d: 'Quotes, records and anything the copilot drafts wait for your confirmation. Collections follow-ups run on rules you can see and switch off.' },
              { t: 'It will not run your trucks', d: 'No dispatch, no routing decisions, no driver management. That is your TMS and your call. TruckWys sticks to the money.' },
              { t: 'It will not learn from other fleets', d: 'Your quotes, rates and client history train recommendations for your fleet only. Your data is never shared or pooled.' },
            ].map((f) => (
              <div key={f.t} className="rounded-[10px] border border-line bg-white/[0.04] p-6">
                <h3 className="text-[16px] font-semibold text-ink">{f.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="panel-accent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="text-display mx-auto max-w-2xl text-ink">
            Put it to work on your next quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-ink-2">
            R4,500 per month, unlimited users and quotes. The AI starts learning
            your fleet from the first load.
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
