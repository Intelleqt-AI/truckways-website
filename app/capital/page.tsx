import '../../components/pages/pages-b.css';
import { ButtonLink, SectionHeader, StatusChip, TextLink } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import Faq, { type QA } from '../../components/Faq';
import { FeatureHero, Stage, FeatureRow, Split, DL } from '../../components/pages/blocks';
import { InvoiceDetail } from '../../components/pages/frags';
import { pageMeta } from '../../components/pages/meta';
import { PRICE } from '../../lib/facts';
import { jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema, faqSchema } from '../../lib/schema';

/*
 * Capital and Fast Pay: coming soon. Honest content only (owner, 1 Oct 2026). Mirrors Terms 10:
 * TruckWys is not a credit provider; any financing is from an independent invoice-finance provider
 * on its own terms and credit checks. Do not name the provider here, and never list Fast Pay in
 * the SoftwareApplication featureList or Offer (lib/schema.ts, scripts/check-copy.mjs).
 */
const PATH = '/capital';
export const metadata = pageMeta({
  path: PATH,
  title: 'Capital and Fast Pay: coming soon',
  description:
    "Fast Pay is coming soon: get paid on a delivered load's invoice before your customer pays. Not live yet. Opt-in, and rates are published when it goes live.",
  og: 'product',
  ogAlt: 'TruckWys Fast Pay: coming soon.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Capital and Fast Pay', path: PATH },
];

/** How it will work. Steps 1 and 2 are live today; 3 to 5 are coming soon (truckwyas-frontend CapitalPrelaunch). */
const STEPS = [
  { t: 'The load is delivered', d: 'Marked delivered in TruckWys, or by your TMS through the API.', live: true },
  { t: 'The paperwork is already there', d: 'The proof of delivery is on the load, and the invoice was raised on delivery.', live: true },
  { t: 'You opt in', d: 'Pick a delivered invoice and see the fee and the exact amount you would receive, before you ask.', live: false },
  { t: 'You get paid early', d: 'An independent finance provider pays you, on its own terms and credit checks.', live: false },
  { t: 'Your customer pays as normal', d: 'On the invoice’s usual terms. That payment settles the early payment.', live: false },
];

const WHO = [
  { t: 'You pay out before you get paid', d: 'Diesel, tolls and wages go out this week. The invoice is paid on your customer’s terms.' },
  { t: 'You are taking on more loads', d: 'Every new load costs cash before it pays. Waiting on invoices slows growth down.' },
  { t: 'You already invoice in TruckWys', d: 'Your delivered loads, proof of delivery and invoices are already in one place.' },
];

const FAQ: QA[] = [
  {
    id: 'fp-live',
    q: 'Is Fast Pay live?',
    a: 'No. It is coming soon. Ask to be told when it is live and we will email you.',
  },
  {
    id: 'fp-cost',
    q: 'What will it cost?',
    a: 'We will publish the rates when it goes live. Not before.',
  },
  {
    id: 'fp-lender',
    q: 'Is TruckWys lending me money?',
    a: 'No. TruckWys is not a credit provider. Financing would come from an independent invoice-finance provider, on its own terms, fees and credit checks.',
  },
  {
    id: 'fp-which',
    q: 'Which invoices will qualify?',
    a: 'The checks being built look for proof of delivery on file, an invoice no more than 90 days old, and no open dispute. The final rules are published at launch.',
  },
  {
    id: 'fp-customer',
    q: 'Does my customer pay differently?',
    a: 'No. Your customer pays the invoice on its usual terms, and that payment settles the early payment.',
  },
  {
    id: 'fp-optin',
    q: 'Do I have to use it?',
    a: 'No. It will be opt-in. Nothing in how TruckWys works today depends on it.',
  },
];

export default function CapitalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS), faqSchema(FAQ)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="capital"
        primary="none"
        eyebrow="Capital and Fast Pay"
        a="Get paid on a delivered load."
        b="Before your customer pays."
        lead="Fast Pay is coming soon. It is being built so you can be paid on a delivered load's invoice without waiting out your customer's terms. It is not live yet."
        actions={
          <>
            <ButtonLink href="/contact?topic=fast-pay" cta="notify" loc="hero">
              Get notified
            </ButtonLink>
            <StatusChip />
            <TextLink href="#how-h">How it will work</TextLink>
          </>
        }
      />

      <section className="sec sec--grey" aria-labelledby="how-h">
        <div className="wrap">
          <SectionHeader
            id="how-h"
            a="How it will work."
            b="From delivered to paid."
            line="The first two steps are in TruckWys today. Fast Pay adds the last three when it goes live."
          />
          <ol className="b-steps5 list-reset">
            {STEPS.map((st, i) => (
              <li key={st.t} className="reveal">
                <span className="b-steps5__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`b-steps5__tag${st.live ? ' is-live' : ''}`}>{st.live ? 'In TruckWys today' : 'Coming soon'}</span>
                <h3>{st.t}</h3>
                <p>{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="why-h">
        <div className="wrap">
          <SectionHeader
            id="why-h"
            a="Why TruckWys."
            b="The paperwork is already there."
            line="Invoice finance usually starts with collecting the paperwork again. In TruckWys, it is already on the load."
          />
          <FeatureRow
            title="The load, the proof, the invoice and the history"
            body="When a load is marked delivered, TruckWys raises the invoice with 15% VAT, and the proof of delivery stays with the load. Debtors shows how each customer has paid you. All of that is live today, and Fast Pay is being built to start from it."
            points={['The delivered load, with its route and charges', 'The proof of delivery, on the load', 'The invoice, raised on delivery', 'How each customer has paid you']}
            link={{ href: '/product/invoicing', label: 'How invoicing works' }}
          >
            <Stage label="An invoice raised on delivery of a load: bill to, issue and due dates, 30-day terms, the charges, VAT at 15% and the total due.">
              <InvoiceDetail />
            </Stage>
          </FeatureRow>
        </div>
      </section>

      <section className="sec sec--grey" aria-labelledby="who-h">
        <div className="wrap">
          <SectionHeader id="who-h" a="Who it is for." b="Transporters who wait to be paid." line="If you deliver now and get paid in 30 days or more, the gap is yours to carry." />
          <ul className="b-rules list-reset">
            {WHO.map((w) => (
              <li key={w.t} className="reveal">
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="today-h">
        <div className="wrap">
          <Split id="today-h" a="What we can say today." b="And what waits for launch." line="We publish what Fast Pay costs and how it works when it is live. Not before.">
            <DL
              rows={[
                ['Status', 'Coming soon. Not live.'],
                ['Your plan', `Not included in the ${PRICE} plan. Nothing is charged for it today.`],
                ['Rates', 'Published when it goes live.'],
                ['Choice', 'Opt-in. You decide whether to use it.'],
                ['Who pays you', 'Not TruckWys. TruckWys is not a credit provider. Financing would come from an independent invoice-finance provider.'],
                ['Approval', "On that provider's own terms, fees and credit checks."],
                ['Until then', 'Your customers pay you by EFT, straight into your own account.'],
              ]}
            />
          </Split>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }} aria-label="Questions about Fast Pay">
        <div className="wrap">
          <Faq a="Questions" b="about Fast Pay." items={FAQ} />
        </div>
      </section>

      <Closing page="capital" />
    </>
  );
}
