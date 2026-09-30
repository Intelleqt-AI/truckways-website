import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_LOGIN_URL, PRICE_LABEL, jsonLd, softwareSchema, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'The AI inside TruckWys',
  description:
    'How TruckWys uses AI: plain-language quoting, win probability learned from quote outcomes and a copilot on live fleet data. Plus what is rules, not AI.',
  alternates: {
    canonical: 'https://www.truckwys.com/ai',
  },
  openGraph: {
    type: 'website',
    siteName: 'TruckWys',
    locale: 'en_ZA',
    title: 'The AI inside TruckWys',
    description:
      'Plain-language quoting, win probability learned from quote outcomes and a copilot on your live fleet data.',
    url: 'https://www.truckwys.com/ai',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630, alt: 'TruckWys: know what every load really costs, invoice it the moment it delivers' }],
  },
};

const aiPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The AI inside TruckWys',
  url: `${SITE_URL}/ai`,
  description:
    'How TruckWys uses AI: plain-language quoting, win probability learned from quote outcomes, and a copilot that answers from live fleet data. Reminders and payment scores are rules, not AI.',
};

const aiFeatures = [
  {
    eyebrow: '01 · Quote in plain words',
    h: 'Type the load the way you would say it',
    body: 'Write "20 tons of steel, JHB to Cape Town, flatbed, Tuesday" and the quote builder fills itself: client, route, cargo, weight and dates. The AI reads your words; the pricing still comes from live diesel, real SANRAL tolls and your own rates, so nothing is invented.',
    bullets: [
      'Works from a typed sentence or the form',
      'Route drawn on the map with per-route tolls and fuel',
      'Every number in the quote is traceable to a real cost',
    ],
  },
  {
    eyebrow: '02 · A price that learns',
    h: 'Price recommendations from your wins, not industry averages',
    body: 'Every quote outcome you record, won or lost, teaches the model what wins work for your fleet, on your lanes, with your clients. It shows the win probability and plots the sweet spot between margin and the chance of getting the load. While your own history is short, it can use anonymised outcomes pooled across fleets.',
    bullets: [
      'Win probability on every quote',
      'Profit sweet-spot curve: see what a higher price costs you in win rate',
      'Honest by design: until about 40 quote outcomes it prices from true cost plus your base rates, and says so',
    ],
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
  },
  {
    eyebrow: '04 · One-click reminders (rules, not AI)',
    h: 'Chase every overdue invoice in one click',
    body: 'Send a reminder on one invoice, or remind everyone overdue at once. The wording comes from templates that move from gentle to firm to final as the days pass. Nothing goes to a client until you click send.',
    bullets: [
      'You trigger every reminder; nothing is sent on its own',
      'Templated wording that gets firmer as an invoice ages',
      'Debtors by age, so you know who to chase first',
    ],
  },
  {
    eyebrow: '05 · Payment score (a formula, not AI)',
    h: 'Know who pays late before it costs you',
    body: 'Each client gets a payment score worked out by a fixed formula from their actual payment history with you: how late they pay, how often, and how much is outstanding.',
    bullets: [
      'Scores from real payment behaviour, updated as invoices clear',
      'Credit limits sized per client',
      'A formula you can read, not a model',
    ],
  },
  {
    eyebrow: '06 · A copilot on your numbers',
    h: 'Ask your business a question, get an answer from live data',
    body: 'What is overdue? How is my quote pipeline? Which trucks are idle? The copilot answers from your live TruckWys data and can draft records for you. Anything it drafts, you confirm before it saves.',
    bullets: [
      'Plain-language questions on cash, quotes, invoices and fleet',
      'A daily executive briefing on Insights: what happened, what needs action',
      'Drafts quotes and customer records; you approve every one',
    ],
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
          <h1 className="text-hero mx-auto max-w-4xl text-ink">
            AI that reads your loads, learns your prices and answers your questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
            Where TruckWys uses AI, and where it uses plain rules instead. Every
            feature works from your real data, shows its working, and asks before it acts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:px-0">
            <a href={APP_LOGIN_URL} className="btn-primary w-full sm:w-auto">
              Get started
            </a>
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
              { t: 'It will not send without asking', d: 'Quotes, records and anything the copilot drafts wait for your confirmation. Payment reminders only go out when you click send.' },
              { t: 'It will not run your trucks', d: 'No dispatch and no routing decisions. That is your TMS and your call. TruckWys sticks to the money.' },
              { t: 'It will not show your prices to other fleets', d: 'Your prices and client names are never shown to another operator. The win model can learn from anonymised quote outcomes pooled across fleets, and lane benchmarks only appear once at least five won quotes from at least two operators exist for that lane.' },
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
            {PRICE_LABEL} per month, unlimited users and quotes. The AI starts learning
            your fleet from the first quote outcome.
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
