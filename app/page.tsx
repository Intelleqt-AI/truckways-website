import type { Metadata } from 'next';
import { Calculator, Receipt, Users, FileBarChart, MessageSquareText, Plug, Zap, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { ButtonLink, TextLink, SectionHeader, TwoTone, StatusChip, Caption, SAMPLE_CAPTION } from '../components/ui';
import StepSwitcher from '../components/StepSwitcher';
import Faq, { type QA } from '../components/Faq';
import HomeDashboard from '../components/fragments/HomeDashboard';
import PhoneApp from '../components/fragments/PhoneApp';
import { CostBreakdown, QuoteCard, N3Tolls } from '../components/fragments/Quote';
import {
  InvoiceRow, NeedsYouCard, LaneRanking, CopilotPanel, Findings, Stats,
} from '../components/fragments/Money';
import { FACTS, PRICE_AND_FEE, PRICE_LINE, CANCELLATION } from '../lib/facts';
import { signupUrl, demoUrl, jsonLd, SITE_URL } from '../lib/site';
import { graph, softwareSchema, offerSchema, faqSchema } from '../lib/schema';
import { INVOICE, KPIS } from '../content/demo-data';
import { rand } from '../lib/format';

const TITLE = 'TruckWys: quoting, invoicing and debtors for SA transporters';
const DESCRIPTION =
  "Load-to-cash software for South African transporters. Price loads from FIASA diesel and SANRAL tolls, invoice on delivery and chase what's owed.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'TruckWys: Price it right. Invoice on delivery. Get paid.' }],
  },
  twitter: { title: TITLE, description: DESCRIPTION, images: ['/og/home.png'] },
};

// TODO(owner) VAT-1: every price line on this page renders without "incl." or "excl." VAT until confirmed.

const FACTS_ROW = [
  { fig: String(FACTS.tollPlazas), label: 'SANRAL mainline toll plazas, priced by vehicle class at 2026 tariffs' },
  { fig: String(FACTS.reports), label: 'Reports, all reconciled to your invoices, payments and expenses' },
  { fig: String(FACTS.roles.length), label: 'User roles, with unlimited users on one plan' },
  { fig: '0,25%', label: 'Only on loads that deliver. Nothing on quotes you lose.' },
];

const STEPS = [
  {
    title: 'Quote from real costs',
    body: "This month's FIASA diesel, every SANRAL mainline plaza at your truck's class, border fees, allowance and your rate, with a warning in rand when a quote is below cost.",
    href: '/product#quote',
    link: 'How quoting works',
  },
  {
    title: 'Delivered means invoiced',
    body: 'Mark a load delivered, in TruckWys or from your TMS, and the invoice is raised with 15% VAT, your terms, your bank details and the invoice number as the EFT reference.',
    href: '/product#paid',
    link: 'How invoicing works',
  },
  {
    title: 'See who owes you',
    body: 'Debtors by age, a statement per customer and reminders that get firmer as the days pass, one customer or everyone overdue at once.',
    href: '/product#paid',
    link: 'How debtors work',
  },
  {
    title: 'Know what every lane makes',
    body: 'Profit and loss, net margin by month, revenue per kilometre by lane and a VAT report, with CSV for your accountant.',
    href: '/product#numbers',
    link: 'See the reports',
  },
];

const CARDS = [
  { icon: Calculator, name: 'Quoting', line: 'Priced from diesel, tolls and your costs', href: '/product#quote' },
  { icon: Receipt, name: 'Invoicing', line: 'Raised when the load delivers', href: '/product#paid' },
  { icon: Users, name: 'Debtors', line: 'Who owes you, and one-click reminders', href: '/product#paid' },
  { icon: FileBarChart, name: 'Reports', line: 'P&L, VAT and margin by lane', href: '/product#numbers' },
  { icon: MessageSquareText, name: 'Copilot', line: 'Ask your numbers in plain words', href: '/product#models' },
  { icon: Plug, name: 'Integrations', line: 'Cartrack, CtrlFleet, API and CSV', href: '/product#integrations' },
];

const SOON = [
  { icon: Zap, name: 'Fast Pay', line: 'Get paid before your customer pays.', topic: 'fast-pay' },
  // Q12: one-line description of Insurance pending; "Not live yet" until then.
  { icon: ShieldCheck, name: 'Insurance', line: 'Not live yet.', topic: 'insurance' },
];

const TIMELINE = [
  { t: 'Before you pay', d: 'Open the demo: a working company with sample data. No form, no call.' },
  { t: 'Day 0', d: 'Create your account, confirm your email with a code and add a card. You are live once the payment clears.' },
  { t: 'Setup', d: 'Paste your customers and trucks from Excel, set your rates and driver allowance, and connect Cartrack or CtrlFleet with your login.' },
  { t: 'First delivery', d: 'Mark a load delivered, or let your TMS do it, and the invoice is raised with VAT.' },
  { t: 'Month end', d: 'Profit and loss, debtors age and the VAT report come from the same numbers.' },
];

const FAQ: QA[] = [
  { id: 'tms', q: 'Is TruckWys a TMS?', a: 'No. It does not dispatch, route or schedule. It works next to your TMS, your spreadsheets and your tracking, and handles the money on each load.' },
  { id: 'cost', q: 'What does it cost?', a: `${PRICE_AND_FEE} Unlimited users. No long-term contract.` },
  { id: 'try', q: 'Can I try it first?', a: 'Yes. Open the demo: a working company with sample data. No form and no call.' },
  { id: 'prices', q: 'Where do diesel and toll prices come from?', a: `Diesel from FIASA, inland or coastal. Tolls from the SANRAL tariffs effective 1 March 2026, for ${FACTS.tollPlazas} mainline plazas, by vehicle class.` },
  { id: 'cartrack', q: 'Does it work with Cartrack?', a: 'Yes. Connect with your Cartrack login and vehicle location and odometer flow in. CtrlFleet connects too.' },
  // Q11 (data pooling wording) is held until the owner approves it.
  { id: 'fastpay', q: 'What about Fast Pay?', a: 'Coming soon. It is not live, and we will not publish rates until it is.' },
];

function MiniInvoice() {
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0 }}>
        <span className="tw-12 tw-muted">{INVOICE.number}</span>
        <span className="tw-status" style={{ height: 20 }}>
          <span className="tw-status__dot" style={{ background: 'var(--status-info-dot)' }} />
          Sent
        </span>
      </div>
      <div className="tw-row">
        <span className="tw-13 tw-sec">VAT 15%</span>
        <span className="tw-13">{rand(INVOICE.vat, { cents: true })}</span>
      </div>
      <div className="tw-row" style={{ paddingBottom: 0 }}>
        <span className="tw-13 tw-600">Total</span>
        <span className="tw-13 tw-600">{rand(INVOICE.total, { cents: true })}</span>
      </div>
    </div>
  );
}
function MiniAge() {
  const parts = [76, 8, 13, 3];
  const tones = ['var(--chart-muted)', 'var(--chart-axis)', 'var(--chart-hatch)', 'var(--text-secondary)'];
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      <div className="tw-row" style={{ paddingTop: 0, borderBottom: 0 }}>
        <span className="tw-12 tw-muted">Owed to you</span>
        <span className="tw-13 tw-600">{rand(KPIS.owed)}</span>
      </div>
      <div className="age__bar" style={{ margin: '4px 0 8px' }}>
        {parts.map((p, i) => (
          <span key={i} style={{ width: `${p}%`, background: tones[i] }} />
        ))}
      </div>
      <div className="tw-12 tw-muted">Current · 1 to 30 · 31 to 60 · 61 to 90</div>
    </div>
  );
}
function MiniLanes() {
  const rows = [
    ['JHB to DBN', 100],
    ['JHB to CPT', 84],
    ['PTA to Lebombo', 80],
  ] as const;
  return (
    <div className="frag tw-card" style={{ padding: 14 }} aria-hidden="true">
      {rows.map(([l, w], i) => (
        <div key={l} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', alignItems: 'center', gap: 10, padding: '4px 0' }}>
          <span className="tw-12 tw-sec">{l}</span>
          <span className="lane__track">
            <span className="lane__fill" style={{ display: 'block', width: `${w}%`, background: i === 0 ? 'var(--text-primary)' : undefined }} />
          </span>
        </div>
      ))}
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="fit__arrow" aria-hidden="true">
      <svg viewBox="0 0 12 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 39V2M1.5 6.5 6 2l4.5 4.5" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(softwareSchema, offerSchema, faqSchema(FAQ)))}
      />

      {/* 1. Hero (I, inset panel). Ref: hemut-1440-full-0 top + flott-1440-full-0 top */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero__panel" data-theme="dark">
          <div className="hero__text">
            <p className="hero__eyebrow">Load-to-cash software for South African transporters</p>
            <h1 className="h1 hero__h1" id="hero-h1">
              <span>Price it right.</span> <span>Invoice on delivery.</span> <span className="tone-2">Get paid.</span>
            </h1>
            <p className="lead hero__lead">
              TruckWys runs the money side of every load, next to the TMS, spreadsheets and tracking you already use.
            </p>
            <div className="btn-row btn-row--stack hero__ctas">
              <ButtonLink href={signupUrl('home-hero')} cta="get_started" loc="hero">
                Get started
              </ButtonLink>
              <ButtonLink href={demoUrl('home-hero')} variant="secondary" cta="open_demo" loc="hero">
                Open the demo
              </ButtonLink>
            </div>
            {/* TODO(owner) VAT-1 */}
            <p className="small hero__price">
              {PRICE_AND_FEE} No <span className="nowrap">long-term</span> contract.
            </p>
          </div>

          {/* Composition: S1 (Home, light) rising from the panel's bottom edge, F1 floating over its left edge.
              Slot for the real S1 capture: replace <HomeDashboard /> with a <picture> (priority, sizes). */}
          <figure className="hero__comp" role="img" aria-label={`TruckWys Home for a demo company, showing ${rand(KPIS.owed)} owed to you and five items that need attention, with the cost breakdown of a Johannesburg to Durban load.`}>
            <div className="hero__frame" data-theme="light">
              <div className="hero__scale">
                <HomeDashboard />
              </div>
            </div>
            <div className="hero__float" data-theme="light">
              <CostBreakdown float hidden compact />
            </div>
          </figure>
          <div className="hero__phone" data-theme="light" role="img" aria-label={`TruckWys Home on a phone for a demo company, showing ${rand(KPIS.owed)} owed to you.`}>
            <div className="phone">
              <div className="phone__scale">
                <PhoneApp />
              </div>
            </div>
          </div>
        </div>
        <div className="hero__below" data-theme="light">
          <CostBreakdown />
        </div>
        <p className="small hero__caption">{SAMPLE_CAPTION}</p>
      </section>

      {/* 2. Facts row (W). Ref: Flott "Backed by" line, replacing Hemut's ROI counters */}
      <section className="facts" aria-label="Product facts">
        <div className="wrap">
          <ul className="facts__list list-reset">
            {FACTS_ROW.map((f) => (
              <li className="facts__item" key={f.label}>
                <span className="figure-big">{f.fig}</span>
                <span className="facts__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. How it fits (G). Ref: flott-1440-full-2 "Keep your infrastructure. Add the intelligence." */}
      <section className="sec sec--grey" aria-labelledby="fit-h">
        <div className="wrap">
          <SectionHeader
            id="fit-h"
            a="Your TMS runs the trucks."
            b="We run the money."
            line="No dispatch, no routing, nothing to rip out. TruckWys starts when a load is priced and ends when it is paid."
          />
          <figure className="fit reveal">
            <figcaption className="sr-only">
              How TruckWys fits: what you already run (your TMS, spreadsheets, Cartrack, CtrlFleet, Excel and CSV, API) feeds
              TruckWys, which quotes, invoices, collects and reports; what you get is invoices with VAT, debtors by age, and
              profit by lane with a VAT report.
            </figcaption>
            <ul className="fit__top list-reset" aria-label="What you get">
              <li>
                <h3>Invoices with VAT</h3>
                <MiniInvoice />
              </li>
              <li>
                <h3>Debtors by age</h3>
                <MiniAge />
              </li>
              <li>
                <h3>Profit by lane and a VAT report</h3>
                <MiniLanes />
              </li>
            </ul>
            <ArrowUp />
            <div className="fit__layer" data-theme="dark">
              <div className="fit__brand">
                <img src="/brand/truckwys-logo.png" alt="TruckWys" width={92} height={18} loading="lazy" />
              </div>
              {[
                ['Quote.', 'Priced from diesel, tolls and your costs.'],
                ['Invoice.', 'Raised when the load delivers.'],
                ['Collect.', 'Debtors by age, one-click reminders.'],
                ['Know.', 'Profit, margin and VAT from the same numbers.'],
              ].map(([t, d], i) => (
                <div className="fit__step" key={t}>
                  <i>0{i + 1}</i>
                  <b>{t}</b>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <ArrowUp />
            <div className="fit__bottom">
              <span className="label">What you already run</span>
              <ul className="fit__run list-reset">
                {['Your TMS', 'Spreadsheets', 'Cartrack', 'CtrlFleet', 'Excel and CSV', 'API'].map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </figure>
          <p className="small fit__note">No hardware to install. Nothing to migrate. Your tools stay in place.</p>
          <div className="fit__foot">
            <TextLink href="/contact?topic=partner" cta="talk_to_us" loc="fit">
              For TMS partners
            </TextLink>
          </div>
        </div>
      </section>

      {/* 4. From price to paid (I, full-width band). Ref: flott-1440-full-0 bottom, flott-1440-full-1 top */}
      <section className="sec sec--ink" data-theme="dark" aria-labelledby="steps-h">
        <div className="wrap">
          <SectionHeader
            id="steps-h"
            a="One record per load."
            b="From the first price to the last rand."
            line="Every load carries its price, its invoice, its payment and its margin, so the numbers always agree."
          />
          <div className="reveal">
            <StepSwitcher
              steps={STEPS}
              panels={[<QuoteCard key="q" />, <InvoiceRow key="i" />, <NeedsYouCard key="n" />, <LaneRanking key="l" />]}
            />
            <Caption />
          </div>
        </div>
      </section>

      {/* 5. Where the money leaks (W). Ref: flott-1440-full-1 "Target the losses in your operations." */}
      <section className="sec" aria-labelledby="leaks-h">
        <div className="wrap">
          <SectionHeader
            id="leaks-h"
            a="Money you have earned."
            b="Not yet in the bank."
            line="Overdue invoices never chased, invoices never sent, customers who stop paying. TruckWys ranks them by rand value."
          />
          <figure className="reveal">
            <div className="leaks">
              <div className="leaks__main">
                <Findings />
              </div>
              <div className="leaks__side">
                <Stats />
              </div>
            </div>
            <figcaption className="caption">{SAMPLE_CAPTION}</figcaption>
          </figure>
        </div>
      </section>

      {/* 6. You approve every change (I, rounded inset band). Ref: flott-1440-full-1 bottom / -2 top, hemut-1440-full-1 */}
      <section aria-labelledby="copilot-h">
        <div className="inset band" data-theme="dark">
          <div className="band__texture" aria-hidden="true">
            {/* Photo-optional slot (S13). Launch default: the Copilot screen rebuilt from the same sample data
                (components/fragments/Money.tsx CopilotTexture), exported as an image so dimmed text never reads
                as page text. Swap for the real S13 capture, or a captioned documentary photo, later. */}
            <img src="/product/s13-copilot-dark.webp" alt="" width={1084} height={499} loading="lazy" decoding="async" />
          </div>
          <div className="band__text reveal">
            <TwoTone id="copilot-h" a="Ask your numbers in plain words." b="You approve every change." />
            <ul className="band__lines list-reset">
              <li>Answers come from your own company&apos;s data.</li>
              <li>Drafts quotes and customers for you to confirm.</li>
              <li>Uses a language model. Prices, tolls, VAT and reminders do not.</li>
            </ul>
          </div>
          <div className="band__float reveal">
            <CopilotPanel float />
          </div>
        </div>
      </section>

      {/* 7. Everything in one plan (W). Ref: hemut-1440-full-1 product cards, flott-1440-full-3 */}
      <section className="sec" aria-labelledby="plan-h">
        <div className="wrap">
          <SectionHeader id="plan-h" a="Everything in one plan." b="And two more on the way." line="One subscription covers every module, for your whole team." />
          <ul className="cards list-reset">
            {CARDS.map(({ icon: Icon, name, line, href }) => (
              <li key={name} className="reveal">
                <a className="pcard" href={href}>
                  <Icon className="pcard__icon" strokeWidth={1.75} aria-hidden="true" />
                  <span className="pcard__name">
                    {name}
                    <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="pcard__line">{line}</span>
                </a>
              </li>
            ))}
            {SOON.map(({ icon: Icon, name, line, topic }) => (
              <li key={name} className="reveal">
                <div className="pcard">
                  <Icon className="pcard__icon" strokeWidth={1.75} aria-hidden="true" />
                  <span className="pcard__name">{name}</span>
                  <span className="pcard__line">{line}</span>
                  <span className="pcard__foot">
                    <StatusChip />
                    <TextLink href={`/contact?topic=${topic}`} cta="notify" loc="plan_cards" quiet>
                      Get notified<span className="sr-only"> about {name}</span>
                    </TextLink>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Built for South Africa (G). Ref: Flott's specific local detail */}
      <section className="sec sec--grey" aria-labelledby="sa-h">
        <div className="wrap">
          <SectionHeader id="sa-h" a="Rand, VAT and the N3." b="Not dollars and miles." line="Built for South African road freight, down to the toll class." />
          <div className="sa">
            <ul className="sa__rows list-reset reveal">
              <li>
                Tolls go into the quote excl. VAT, because you claim the VAT back.
                <span>Every SANRAL mainline plaza on the route, at your truck&apos;s class.</span>
              </li>
              <li>
                Border, permit and foreign toll fees for SADC loads.
                <span>Botswana, Namibia, Lesotho, Eswatini and Mozambique.</span>
              </li>
              <li>
                R&nbsp;20&nbsp;505,65 and 5&nbsp;Apr&nbsp;2026, not $20,505.65 and 04/05/26.
                <span>Rand, 15% VAT and South African dates on every invoice and report.</span>
              </li>
            </ul>
            <div className="sa__frag reveal">
              <N3Tolls />
            </div>
          </div>
        </div>
      </section>

      {/* 9. From demo to first invoice (W). Ref: hemut-1440-full-2 Day 0 / 15 / 30 timeline */}
      <section className="sec" aria-labelledby="setup-h">
        <div className="wrap">
          <SectionHeader
            id="setup-h"
            a="No migration project."
            b="Just your lists and your rates."
            line="Nothing to install and nothing to rip out. You set it up yourself, and we are a message away."
          />
          <ol className="tl list-reset reveal">
            {TIMELINE.map((s) => (
              <li className="tl__item" key={s.t}>
                <div className="tl__card">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
                <span className="tl__stem" aria-hidden="true" />
                <span className="tl__node" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="tl__more">
            <TextLink href="/contact?topic=fleet-50" cta="talk_to_us" loc="setup">
              Talk to us if you run 50 or more trucks
            </TextLink>
          </div>
        </div>
      </section>

      {/* 10. Pricing (G). Ref: flott-1440-full-3 "Deploy your first use case." */}
      <section className="sec sec--grey" aria-labelledby="price-h">
        <div className="wrap psplit">
          <div className="psplit__lead reveal">
            <TwoTone id="price-h" a="One plan. One price." b="Everything in it." />
            {/* TODO(owner) VAT-1 */}
            <p className="psplit__price">{PRICE_AND_FEE}</p>
            <p className="small" style={{ marginTop: 12 }}>
              Worked example: a load invoiced at R&nbsp;34&nbsp;500 adds R&nbsp;86,25.
            </p>
          </div>
          <ul className="psplit__list list-reset reveal">
            {['Unlimited loads, quotes, invoices and users', 'Reports, Copilot, integrations and API', 'Nothing on quotes you lose', CANCELLATION].map((t) => (
              <li key={t}>
                <Check strokeWidth={1.75} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <div className="psplit__cta reveal">
            <ButtonLink href={signupUrl('home-pricing')} cta="get_started" loc="pricing_section">
              Get started
            </ButtonLink>
            <TextLink href="/pricing" cta="see_pricing" loc="pricing_section">
              See pricing
            </TextLink>
          </div>
        </div>
      </section>

      {/* 11. FAQ (W). Ref: flott-1440-full-3 "Before you get started." */}
      <section className="sec" aria-label="Questions">
        <div className="wrap">
          <Faq a="Before you" b="get started." line="The questions fleet owners ask first." items={FAQ} />
        </div>
      </section>

      {/* 12. Final CTA (I, rounded inset panel). Ref: hemut-1440-full-2 bottom, hemut-1440-full-3, flott-1440-full-3/4 */}
      <section aria-labelledby="cta-h" style={{ paddingBottom: 16 }}>
        <div className="inset ctap" data-theme="dark">
          <div className="ctap__text reveal">
            <TwoTone id="cta-h" a="Look around a working company." b="Then decide." />
            <p className="lead">The demo is open. No form, no sales call.</p>
            <div className="btn-row btn-row--stack">
              <ButtonLink href={demoUrl('home-cta')} cta="open_demo" loc="cta_band">
                Open the demo
              </ButtonLink>
              <ButtonLink href={signupUrl('home-cta')} variant="secondary" cta="get_started" loc="cta_band">
                Get started
              </ButtonLink>
            </div>
            {/* TODO(owner) VAT-1 */}
            <p className="small">{PRICE_LINE}, plus 0,25% per delivered load.</p>
          </div>
          <div className="ctap__visual" aria-hidden="true">
            <div className="ctap__crop">
              <HomeDashboard />
            </div>
            <div className="ctap__float">
              <InvoiceRow compact float />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
