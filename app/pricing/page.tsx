import type { Metadata } from 'next';
import { Check, Zap, ShieldCheck } from 'lucide-react';
import { ButtonLink, TextLink, TwoTone, StatusChip } from '../../components/ui';
import { Breadcrumbs, PageHero, CTABand } from '../../components/Blocks';
import Faq, { type QA } from '../../components/Faq';
import FeeCalc from '../../components/FeeCalc';
import { FACTS, PRICE, CANCELLATION, FEE_LINE } from '../../lib/facts';
import { FEE_EXAMPLE } from '../../content/demo-data';
import { rand } from '../../lib/format';
import { SITE_URL, signupUrl, demoUrl, jsonLd } from '../../lib/site';
import { graph, softwareSchema, offerSchema, faqSchema, breadcrumbSchema } from '../../lib/schema';

const URL = `${SITE_URL}/pricing`;
const TITLE = 'Pricing: R 4 499 per month, unlimited users';
const DESCRIPTION =
  "One plan for South African transporters: R 4 499 per month excl. VAT, plus 0,25% of each delivered load's invoice value. Unlimited users, no setup fees.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
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
  'iPhone app',
];

const FAQ: QA[] = [
  { id: 'trial', q: 'Is there a free trial?', a: 'No. The demo is open to everyone, with a working company in it. Use it as long as you like before you pay.' },
  { id: 'setup', q: 'Are there setup fees?', a: 'No.' },
  { id: 'per-user', q: 'Do you charge per user?', a: 'No. Add your whole team.' },
  { id: 'vat', q: 'Is VAT included?', a: `No. ${PRICE} per month is excl. VAT, and 15% VAT is added to your TruckWys invoice. The 0,25% is worked out on each delivered load's invoice total including VAT: a load invoiced at ${EG}.` },
  // Q3 (notice terms) is still open with the owner: say only this.
  { id: 'cancel', q: 'Is there a contract?', a: CANCELLATION },
  { id: 'eft', q: 'Can I pay by EFT?', a: 'Your subscription is paid by card through Paystack. Your customers pay you by EFT, straight into your own account.' },
  { id: 'fleet-50', q: 'Running 50 or more trucks?', a: 'Talk to us about onboarding, integrations and security. Use the Talk to us page and a person will reply by email.' },
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
        b={<>No <span className="nowrap">long-term</span> contract.</>}
        lead="Everything TruckWys does, for your whole team, month to month."
      />

      {/* Plan card + how the fee works */}
      <section className="sec" style={{ paddingTop: 0 }} aria-label="The plan">
        <div className="wrap plan">
          <div className="plan__card">
            <p className="plan__name">TruckWys Fleet</p>
            <div className="plan__fig">
              <span className="figure-big" style={{ color: 'var(--text-primary)' }}>{PRICE}</span>
              <span>per month excl.&nbsp;VAT</span>
            </div>
            <p className="plan__sub">plus {FEE_LINE}</p>
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
                <dt>VAT</dt>
                <dd>The subscription and the load fees are excl. VAT. VAT at 15% is added to your TruckWys invoice.</dd>
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
          <FeeCalc monthly={FACTS.price.monthly} feePct={FACTS.fee.pct} vatRate={FACTS.vatRate} defaultValue={Math.round(FEE_EXAMPLE.invoice)} />
        </div>
      </section>

      {/* Coming soon */}
      <section className="sec" aria-labelledby="soon-h">
        <div className="wrap">
          <div className="shead">
            <TwoTone id="soon-h" a="Coming soon." b="Not in the price." />
            <p>Neither is live yet, and neither is part of the plan above.</p>
          </div>
          <ul className="soon list-reset">
            {[
              { Icon: Zap, name: 'Fast Pay', line: 'Payment on invoices before your customer pays. Pricing will be published when it is live.', topic: 'fast-pay' },
              { Icon: ShieldCheck, name: 'Insurance', line: 'Being built. What it covers is published before it goes live.', topic: 'insurance' },
            ].map(({ Icon, name, line, topic }) => (
              <li className="pcard pcard--soon" key={name}>
                <span className="pcard__top">
                  <span className="pcard__tile" aria-hidden="true">
                    <Icon className="pcard__icon" strokeWidth={1.75} />
                  </span>
                  <StatusChip />
                </span>
                <span className="pcard__name">{name}</span>
                <span className="pcard__line">{line}</span>
                <span className="pcard__foot">
                  <TextLink href={`/contact?topic=${topic}`} cta="notify" loc="pricing_soon" quiet>
                    Get notified<span className="sr-only"> about {name}</span>
                  </TextLink>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="sec" style={{ paddingTop: 0 }} aria-label="Pricing questions">
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

      <CTABand page="pricing" />
    </>
  );
}
