import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import '../../components/pages/pages-b.css';
import { FastPayCard } from '../../components/pages/blocks';
import { ButtonLink, TextLink, TwoTone, SectionHeader } from '../../components/ui';
import { Breadcrumbs, PageHero, Closing } from '../../components/Blocks';
import Faq, { type QA } from '../../components/Faq';
import FeeCalc from '../../components/FeeCalc';
import { FACTS, PRICE, CANCELLATION, FEE_LINE, NO_VAT, VAT_ANSWER } from '../../lib/facts';
import { FEE_EXAMPLE } from '../../content/demo-data';
import { rand } from '../../lib/format';
import { OG_BASE, SITE_URL, CONTACT_EMAIL, signupUrl, demoUrl, jsonLd } from '../../lib/site';
import { graph, softwareSchema, offerSchema, faqSchema, breadcrumbSchema } from '../../lib/schema';

const URL = `${SITE_URL}/pricing`;
const TITLE = 'Pricing: R 4 499 per month, one plan';
const DESCRIPTION =
  "One plan for South African transporters: R 4 499 per month, plus 0,25% of each delivered load's invoice total. Unlimited users, no setup fees.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    ...OG_BASE,
    url: URL,
    title: `${TITLE} | TruckWys`,
    description: DESCRIPTION,
    images: [{ url: '/og/pricing.png', width: 1200, height: 630, alt: 'TruckWys pricing: one plan, R 4 499 per month' }],
  },
  twitter: { title: `${TITLE} | TruckWys`, description: DESCRIPTION, images: ['/og/pricing.png'] },
};

const EG = `${rand(FEE_EXAMPLE.invoice, { cents: true })} adds ${rand(FEE_EXAMPLE.fee, { cents: true })}`;

const INCLUDED = [
  'Unlimited loads, quotes and invoices',
  'Unlimited users, with six roles',
  'Quotes from FIASA diesel, SANRAL tolls and your costs',
  'Invoice on delivery, debtors and reminders',
  'Nine reports and insights, CSV export',
  'Cartrack and CtrlFleet connections, API and webhooks',
  'iPhone and Android apps',
];

const FAQ: QA[] = [
  { id: 'trial', q: 'Is there a free trial?', a: 'No. The demo is open to everyone, with a working company in it. Use it as long as you like before you pay.' },
  { id: 'setup', q: 'Are there setup fees?', a: 'No.' },
  { id: 'per-user', q: 'Do you charge per user?', a: 'No. Add your whole team.' },
  { id: 'fee', q: 'How is the 0,25% worked out?', a: `On each delivered load's invoice total, including the VAT on your customer's invoice: a load invoiced at ${EG}. Nothing on quotes you lose.` },
  {
    id: 'credited',
    q: 'Is the 0,25% given back if an invoice is cancelled later?',
    a: 'No. The fee is charged once, when a delivered load is invoiced, and it is not reversed if that invoice is later cancelled, disputed or changed. Every charge is listed in Billing history.',
  },
  { id: 'vat', q: 'Do you charge VAT?', a: VAT_ANSWER },
  // Owner decision: Terms 6 (30 days' written notice) stands.
  {
    id: 'cancel',
    q: 'Is there a contract?',
    a: `${CANCELLATION} To give notice, email ${CONTACT_EMAIL}.`,
    rich: (
      <>
        {CANCELLATION} To give notice, email{' '}
        <a className="ulink" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    id: 'data',
    q: 'What happens to my data if I cancel?',
    a: 'Cancelling does not delete it. When your notice period ends, quoting and invoicing stop. You can still sign in, see your loads, invoices and customers, and export reports as CSV.',
  },
  {
    id: 'popia',
    q: 'Who looks after personal information under POPIA?',
    a: 'Our Information Officer, named in the Privacy policy and the PAIA manual. The Privacy policy explains how we handle personal information, and the PAIA manual explains how to request records.',
    rich: (
      <>
        Our Information Officer, named in the{' '}
        <a className="ulink" href="/privacy">Privacy policy</a> and the <a className="ulink" href="/paia-manual">PAIA manual</a>. The
        Privacy policy explains how we handle personal information, and the PAIA manual explains how to request records.
      </>
    ),
  },
  { id: 'eft', q: 'Can I pay by EFT?', a: 'Your subscription is paid by card through Paystack. Your customers pay you by EFT, straight into your own account.' },
  { id: 'fleet-50', q: 'Running 50 or more trucks?', a: 'Talk to us about onboarding, integrations and security. Use the Talk to us page and a person will reply by email.' },
];

/* From demo to first invoice (moved from Home, owner R6). Milestones, not durations: nothing here implies a measured setup time. */
const TIMELINE = [
  { t: 'Before you pay', h: 'Look around the demo', d: 'A working company, open to everyone. No sign-up, no call.' },
  { t: 'Sign-up', h: 'Create your account', d: 'Confirm your email with a code and add a card. You are live once the payment clears.' },
  { t: 'First quote', h: 'Load your lists and rates', d: 'Paste customers and trucks from Excel, set your rates and allowance, and price a load.' },
  { t: 'First delivery', h: 'The invoice raises itself', d: 'Mark the load delivered, or let your TMS do it. The invoice is raised with 15% VAT, ready to send.' },
  { t: 'Month end', h: 'Close the month', d: 'Profit and loss, debtors by age and the VAT report, from the same numbers.' },
];

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(softwareSchema, offerSchema, faqSchema(FAQ), breadcrumbSchema(CRUMBS)))}
      />

      <PageHero
        crumbs={<Breadcrumbs trail={CRUMBS} />}
        a="One plan. One price."
        b="No lock-in."
        lead={`Everything TruckWys does, for your whole team. ${CANCELLATION}`}
      />

      {/* Plan card + how the fee works */}
      <section className="sec" style={{ paddingTop: 0 }} aria-label="The plan">
        <div className="wrap plan">
          <div className="plan__card">
            <p className="plan__name">TruckWys Fleet</p>
            <div className="plan__fig">
              <span className="figure-big" style={{ color: 'var(--text-primary)' }}>{PRICE}</span>
              <span>per month</span>
            </div>
            <p className="plan__sub">plus {FEE_LINE}. {NO_VAT}</p>
            <ul className="plan__list list-reset">
              {INCLUDED.map((t) => (
                <li key={t}>
                  <Check strokeWidth={1.75} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href={signupUrl('pricing-card')} cta="get_started" loc="pricing_card" className="btn--block">
              Get started
            </ButtonLink>
            <p className="small plan__note">Paid by card through Paystack. You are live once the payment clears.</p>
            <div className="plan__alt">
              <TextLink href={demoUrl('pricing-card')} cta="open_demo" loc="pricing_card">
                Or open the demo first
              </TextLink>
            </div>
          </div>

          <div className="plan__how">
            <h2 className="h3">How the 0,25% works</h2>
            <dl className="dl">
              <div>
                <dt>When</dt>
                <dd>Charged when a delivered load is invoiced.</dd>
              </div>
              <div>
                <dt>On what</dt>
                <dd>The load&apos;s invoice total, including VAT. A load invoiced at {EG}.</dd>
              </div>
              <div>
                <dt>Not charged on</dt>
                <dd>Quotes you lose, drafts and cancelled loads.</dd>
              </div>
              <div>
                <dt>Where you see it</dt>
                <dd>Every charge is listed in Billing history.</dd>
              </div>
              <div>
                <dt>Contract</dt>
                <dd>{CANCELLATION}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Fee calculator (G) */}
      <section className="sec sec--grey" aria-labelledby="calc-h">
        <div className="wrap calc">
          <div className="calc__head">
            <TwoTone id="calc-h" a="Your month," b="worked out." />
            <p className="body">
              Load fees are 0,25% of each delivered load&apos;s invoice total, including VAT. Arithmetic only; your real fees are listed in
              Billing history.
            </p>
          </div>
          <FeeCalc monthly={FACTS.price.monthly} feePct={FACTS.fee.pct} defaultValue={Math.round(FEE_EXAMPLE.invoice)} />
        </div>
      </section>

      {/* From demo to first invoice (W), moved from Home (owner R6). Ref: hemut-1440-full-2 Day 0 / 15 / 30 timeline */}
      <section className="sec" aria-labelledby="setup-h">
        <div className="wrap">
          <SectionHeader
            id="setup-h"
            a="No migration project."
            b="Just your lists and rates."
            line="Nothing to install and nothing to rip out. You set it up yourself, and we are a message away."
          />
          <ol className="tl tl--3x2 list-reset reveal">
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
            <TextLink href="/contact?topic=fleet-50" cta="talk_to_us" loc="pricing_setup">
              Talk to us if you run 50 or more trucks
            </TextLink>
          </div>
        </div>
      </section>

      {/* Coming soon: a compact card to /capital (R7); /capital is the full story. Not in the price, not live. */}
      <FastPayCard note={`Not part of the ${PRICE} plan. Nothing is charged for it today.`} />

      {/* Pricing FAQ */}
      <section className="sec" aria-label="Pricing questions">
        <div className="wrap">
          <Faq a="Pricing" b="questions." line="What people ask before they pay." items={FAQ} />
          <div className="faq" style={{ marginTop: 24 }}>
            <div className="faq__more">
              <TextLink href="/contact?topic=fleet-50" cta="talk_to_us" loc="pricing_faq">
                Talk to us
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <Closing page="pricing" />
    </>
  );
}
