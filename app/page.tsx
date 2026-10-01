import type { Metadata } from 'next';
import { Calculator, Receipt, Users, FileBarChart, MessageSquareText, Plug, ArrowRight, Check } from 'lucide-react';
import { ButtonLink, TextLink, SectionHeader, TwoTone } from '../components/ui';
import { Closing } from '../components/Blocks';
import StepSwitcher from '../components/StepSwitcher';
import PhotoHero from '../components/hero/PhotoHero';
import HeroSections from '../components/hero/HeroSections';
import FitDiagram from '../components/FitDiagram';
import { SoonCard, SOON } from '../components/SoonCard';
import Faq, { type QA } from '../components/Faq';
import { QuoteCard, N3Tolls } from '../components/fragments/Quote';
import {
  InvoiceRow, NeedsYouCard, LaneRanking, CopilotPanel, Findings, Stats,
} from '../components/fragments/Money';
import { FACTS, PRICE, PRICE_AND_FEE, FEE_LINE, NO_VAT, CANCELLATION } from '../lib/facts';
import { signupUrl, jsonLd, SITE_URL, DEMO_LINE } from '../lib/site';
import { graph, softwareSchema, offerSchema, faqSchema } from '../lib/schema';
import { FEE_EXAMPLE } from '../content/demo-data';
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


const FACTS_ROW = [
  { fig: String(FACTS.tollPlazas), label: 'SANRAL mainline toll plazas, priced by vehicle class at 2026 tariffs' },
  { fig: String(FACTS.reports), label: 'Reports, all reconciled to your invoices, payments and expenses' },
  { fig: String(FACTS.roles.length), label: 'User roles, with unlimited users on one plan' },
  { fig: '0,25%', label: 'Only on loads that deliver. Nothing on quotes you lose.' },
];

const STEPS = [
  {
    title: 'Quote from real costs',
    body: `This month's FIASA diesel, the ${FACTS.tollPlazas} SANRAL mainline plazas at your truck's class, border fees, allowance and your rate, with a warning in rand when a quote is below cost.`,
    href: '/product/quoting',
    link: 'How quoting works',
  },
  {
    title: 'Delivered means invoiced',
    body: 'Mark a load delivered, in TruckWys or from your TMS, and the invoice is raised with 15% VAT, your terms, your bank details and the invoice number as the EFT reference.',
    href: '/product/invoicing',
    link: 'How invoicing works',
  },
  {
    title: 'See who owes you',
    body: 'Debtors by age, a statement per customer and reminders that get firmer as the days pass, sent from any overdue invoice in one click after a preview.',
    href: '/product/debtors',
    link: 'How debtors work',
  },
  {
    title: 'Know what every lane makes',
    body: 'Profit and loss, net margin by month, revenue per kilometre by lane and a VAT report, with CSV for your accountant.',
    href: '/product/reports',
    link: 'See the reports',
  },
];

const CARDS = [
  { icon: Calculator, name: 'Quoting', line: 'Priced from diesel, tolls and your costs', href: '/product/quoting', fact: `FIASA diesel · ${FACTS.tollPlazas} toll plazas` },
  { icon: Receipt, name: 'Invoicing', line: 'Raised when the load delivers', href: '/product/invoicing', fact: '15% VAT · EFT reference' },
  { icon: Users, name: 'Debtors', line: 'Who owes you, and reminders after a preview', href: '/product/debtors', fact: 'By age · statements' },
  { icon: FileBarChart, name: 'Reports', line: 'P&L, VAT and margin by lane', href: '/product/reports', fact: `${FACTS.reports} reports · CSV export` },
  { icon: MessageSquareText, name: 'Copilot', line: 'Ask your numbers in plain words', href: '/product#models', fact: 'Drafts wait for you to confirm' },
  { icon: Plug, name: 'Integrations', line: 'Cartrack, CtrlFleet, API and CSV', href: '/integrations', fact: 'Nothing to install' },
];

/* Milestones, not durations: nothing here implies a measured setup time. */
const TIMELINE = [
  { t: 'Before you pay', h: 'Look around the demo', d: 'A working company with sample data. No sign-up, no call.' },
  { t: 'Day 0', h: 'Create your account', d: 'Confirm your email with a code and add a card. You are live once the payment clears.' },
  { t: 'First quote', h: 'Load your lists and rates', d: 'Paste customers and trucks from Excel, set your rates and allowance, and price a load.' },
  { t: 'First delivery', h: 'The invoice raises itself', d: 'Mark the load delivered, or let your TMS do it. The invoice is raised with 15% VAT, ready to send.' },
  { t: 'Month end', h: 'Close the month', d: 'Profit and loss, debtors by age and the VAT report, from the same numbers.' },
];

const FAQ: QA[] = [
  { id: 'tms', q: 'Is TruckWys a TMS?', a: 'No. It does not dispatch, route or schedule. It works next to your TMS, your spreadsheets and your tracking, and handles the money on each load.' },
  { id: 'cost', q: 'What does it cost?', a: `${PRICE_AND_FEE} Unlimited users. ${CANCELLATION}` },
  { id: 'fee', q: 'How is the 0,25% worked out?', a: `On each delivered load's invoice total, including the VAT on your customer's invoice: a load invoiced at ${rand(FEE_EXAMPLE.invoice, { cents: true })} adds ${rand(FEE_EXAMPLE.fee, { cents: true })}. Nothing on quotes you lose.` },
  { id: 'try', q: 'Can I try it first?', a: `Yes. Open the demo: a working company with sample data. ${DEMO_LINE}` },
  { id: 'prices', q: 'Where do diesel and toll prices come from?', a: `Diesel from FIASA, inland or coastal. Tolls from the SANRAL tariffs effective 1 March 2026, for ${FACTS.tollPlazas} mainline plazas, by vehicle class.` },
  { id: 'cartrack', q: 'Does it work with Cartrack?', a: 'Yes. Connect with your Cartrack API username and password (in Fleetweb under Settings, API Settings), not your normal login, and vehicle location, speed and ignition status flow in. CtrlFleet connects too.' },
  // Q11 (data pooling wording) is held until the owner approves it.
  { id: 'fastpay', q: 'What about Fast Pay?', a: 'Coming soon. It is not live, and we will not publish rates until it is.' },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(softwareSchema, offerSchema, faqSchema(FAQ)))}
      />

      {/* 1. Hero: approved photo hero (lab variant C, 1 Oct 2026) with three product cross-sections. */}
      <PhotoHero>
        <HeroSections />
      </PhotoHero>

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
          <FitDiagram />
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
          </figure>
        </div>
      </section>

      {/* 6. You approve every change (I, rounded inset band). Ref: flott-1440-full-1 bottom / -2 top, hemut-1440-full-1 */}
      <section aria-labelledby="copilot-h">
        <div className="inset band" data-theme="dark">
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
            {CARDS.map(({ icon: Icon, name, line, href, fact }) => (
              <li key={name} className="reveal">
                <a className="pcard" href={href}>
                  <span className="pcard__top">
                    <span className="pcard__tile" aria-hidden="true">
                      <Icon className="pcard__icon" strokeWidth={1.75} />
                    </span>
                    <ArrowRight className="pcard__go" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="pcard__name">{name}</span>
                  <span className="pcard__line">{line}</span>
                  <span className="pcard__foot pcard__fact">{fact}</span>
                </a>
              </li>
            ))}
            {SOON.map((item) => (
              <li key={item.name} className="reveal">
                <SoonCard item={item} loc="plan_cards" />
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
                <span>The {FACTS.tollPlazas} SANRAL mainline plazas on the N1, N2, N3, N4, N17 and R30, at your truck&apos;s class.</span>
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
            {TIMELINE.map((s, i) => (
              <li className="tl__item" key={s.t}>
                <span className="tl__node" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="tl__when">{s.t}</span>
                <div className="tl__card">
                  <h3>{s.h}</h3>
                  <p>{s.d}</p>
                </div>
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

      {/* 10. Pricing (G). Ref: flott-1440-full-3 "Deploy your first use case." The price is the figure. */}
      <section className="sec sec--grey" aria-labelledby="price-h">
        <div className="wrap psplit">
          <div className="psplit__lead reveal">
            <TwoTone id="price-h" a="One plan. One price." b="Everything in it." />
            <p className="body psplit__intro">One subscription for your whole team, month to month. The only other charge is on loads that deliver.</p>
          </div>
          <div className="psplit__offer reveal">
            <p className="psplit__fig">
              <span className="figure-big">{PRICE}</span>
              <span>per month</span>
            </p>
            <p className="psplit__fee">plus {FEE_LINE}. {NO_VAT}</p>
            <p className="small psplit__eg">
              Worked example: the load invoiced above, {rand(FEE_EXAMPLE.invoice, { cents: true })} incl. VAT, adds{' '}
              {rand(FEE_EXAMPLE.fee, { cents: true })}.
            </p>
            <ul className="psplit__list list-reset">
              {['Unlimited loads, quotes, invoices and users', 'Reports, Copilot, integrations and API', 'Nothing on quotes you lose', CANCELLATION].map((t) => (
                <li key={t}>
                  <Check strokeWidth={1.75} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="btn-row psplit__cta">
              <ButtonLink href={signupUrl('home-pricing')} cta="get_started" loc="pricing_section">
                Get started
              </ButtonLink>
              <TextLink href="/pricing" cta="see_pricing" loc="pricing_section">
                See pricing
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ (W). Ref: flott-1440-full-3 "Before you get started." */}
      <section className="sec" aria-label="Questions">
        <div className="wrap">
          <Faq a="Before you" b="get started." line="The questions fleet owners ask first." items={FAQ} />
        </div>
      </section>

      {/* 12. Closing (W). Owner R4: no panel, no screenshot; the demo is a link only. */}
      <Closing page="home" />
    </>
  );
}
