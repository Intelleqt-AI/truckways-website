import type { Metadata } from 'next';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import '../../components/pages/pages-b.css';
import { SectionHeader, StatusChip, TextLink, TwoTone, SAMPLE_CAPTION } from '../../components/ui';
import { CTABand } from '../../components/Blocks';
import { CopilotPanel } from '../../components/fragments/Money';
import { FeatureHero, Stage, DL } from '../../components/pages/blocks';
import { QuotesBoard, QuoteForm, MiniCost, MiniInvoice, MiniAge, MiniLanes } from '../../components/pages/frags';
import { FACTS } from '../../lib/facts';
import { APP_STORE_URL, SITE_URL, jsonLd } from '../../lib/site';
import { graph, softwareSchema, offerSchema, breadcrumbSchema, ids } from '../../lib/schema';

const PATH = '/product';
const TITLE = 'How it works: from booked load to paid invoice';
const DESCRIPTION =
  'Quote from real costs, invoice on delivery, chase debtors and see margin by lane. How TruckWys runs the money side of every load, next to your TMS.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    url: `${SITE_URL}${PATH}`,
    title: `${TITLE} | TruckWys`,
    description: DESCRIPTION,
    images: [{ url: '/og/product.png', width: 1200, height: 630, alt: 'TruckWys: from booked load to paid invoice.' }],
  },
  twitter: { title: `${TITLE} | TruckWys`, description: DESCRIPTION, images: ['/og/product.png'] },
};

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: PATH },
];

const STEPS = [
  {
    id: 'quote',
    name: 'Quote',
    line: 'Build the price from the route: diesel, tolls, allowance and your rate, line by line.',
    href: '/product/quoting',
    crop: <MiniCost />,
  },
  {
    id: 'invoice',
    name: 'Invoice',
    line: 'Delivered means invoiced, with 15% VAT, your terms and your bank details.',
    href: '/product/invoicing',
    crop: <MiniInvoice />,
  },
  {
    id: 'paid',
    name: 'Collect',
    line: 'Debtors by age, a statement per customer and a reminder from any overdue invoice.',
    href: '/product/debtors',
    crop: <MiniAge />,
  },
  {
    id: 'numbers',
    name: 'Know',
    line: 'Profit and loss, revenue per kilometre by lane and output VAT, from the same numbers.',
    href: '/product/reports',
    crop: <MiniLanes />,
  },
];

const mobileSchema = {
  '@type': 'MobileApplication',
  '@id': `${SITE_URL}/#ios`,
  name: 'TruckWys',
  operatingSystem: 'iOS',
  applicationCategory: 'BusinessApplication',
  installUrl: APP_STORE_URL,
  publisher: { '@id': ids.org },
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph(softwareSchema, offerSchema, mobileSchema, breadcrumbSchema(CRUMBS)))}
      />

      {/* 1. Hero (W). Flott calm hero with one large rebuilt screen: the quotes board (S4). */}
      <FeatureHero
        crumbs={CRUMBS}
        page="product"
        eyebrow="How it works"
        a="From booked load"
        b="to paid invoice."
        lead="Four steps, one record per load, and every number traceable to a cost you can see."
        frame={
          <Stage label="The TruckWys quotes board for a demo company, with draft, sent, accepted and declined quotes and the value in each column.">
            <QuotesBoard />
          </Stage>
        }
      />

      {/* 2. The four steps (W). Hemut product row, 2 x 2, a small crop in each card. */}
      <section className="sec" aria-labelledby="steps-h">
        <div className="wrap">
          <SectionHeader
            id="steps-h"
            a="Four steps."
            b="One record per load."
            line="The quote becomes the load, the load becomes the invoice, and the payment closes it. Nothing is typed twice."
          />
          <ol className="b-hub list-reset">
            {STEPS.map((s, i) => (
              <li key={s.id} id={s.id} className="reveal">
                <a className="b-hubcard" href={s.href}>
                  <span className="b-hubcard__num">0{i + 1}</span>
                  <span className="b-hubcard__name">{s.name}</span>
                  <span className="b-hubcard__line">{s.line}</span>
                  <span className="b-hubcard__crop">{s.crop}</span>
                  <span className="b-hubcard__more">
                    Learn more<span className="sr-only"> about {s.name.toLowerCase()}</span>
                    <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <div className="b-hubfoot" id="integrations">
            <p className="b-cap" style={{ marginTop: 0 }}>{SAMPLE_CAPTION}</p>
            <TextLink href="/integrations">Works with Cartrack, CtrlFleet, your TMS and Excel</TextLink>
          </div>
        </div>
      </section>

      {/* 3. Where we use a model (G). The honest section that replaced the /ai page. */}
      <section className="sec sec--grey" id="models" aria-labelledby="models-h">
        <div className="wrap">
          <SectionHeader
            id="models-h"
            a="Where we use a model."
            b="And where we don't."
            line="Only where it helps, and never on the numbers you send a customer."
          />
          <div className="b-models">
            <div className="b-models__uses reveal">
              <h3>Uses a model</h3>
              <ul className="list-reset">
                <li>
                  <b>Type it the way you&apos;d say it.</b>
                  <span>
                    &ldquo;20 t steel, JHB to Cape Town, flatbed, Tuesday&rdquo; fills the quote form. A language model reads the words; the
                    price still comes from your costs.
                  </span>
                </li>
                <li>
                  <b>Copilot.</b>
                  <span>Answers questions about cash, quotes and your fleet from your own data, and drafts records you confirm.</span>
                </li>
                <li>
                  <b>Win chance.</b>
                  <span>
                    After about 40 quote outcomes, with both wins and losses, a trained model estimates your chance of winning at the suggested
                    price. Until then, it shows how many outcomes it still needs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="b-models__not reveal">
              <h3>Does not use a model</h3>
              <p>
                Tolls, diesel, VAT, the margin warning, reminders and the payment risk profile. These are rules and formulas, and they give the
                same answer every time.
              </p>
            </div>
            <div className="b-models__vis">
              <Stage label="The quote builder with a typed load description, and the form filled in: customer, weight, collection and delivery, dates, vehicle type and a one-way trip.">
                <QuoteForm />
              </Stage>
            </div>
          </div>
          {/* TODO(owner) Q11: the data-pooling wording ("Your pricing is never shown to another operator ...") is held until approved. */}
        </div>
      </section>

      {/* 4. Copilot (I). */}
      <section className="sec sec--ink" data-theme="dark" aria-labelledby="copilot-h">
        <div className="wrap b-cop">
          <div className="b-cop__text reveal">
            <TwoTone id="copilot-h" a="Ask your numbers in plain words." b="You approve every change." />
            <ul className="band__lines list-reset">
              <li>Answers come from your own company&apos;s data.</li>
              <li>Drafts quotes and customers for you to confirm. Nothing is sent on its own.</li>
              <li>Uses a language model. Prices, tolls, VAT and reminders do not.</li>
            </ul>
          </div>
          <figure className="b-cop__vis reveal">
            <CopilotPanel />
            <figcaption className="b-cap">{SAMPLE_CAPTION}</figcaption>
          </figure>
        </div>
      </section>

      {/* 5. Mobile, and team and control (W). */}
      <section className="sec" aria-labelledby="mobile-h">
        <div className="wrap b-duo">
          <div className="b-duo__a reveal">
            <h2 className="h3" id="mobile-h">
              The same numbers on your phone
            </h2>
            {/* VERIFY Q16: the iPhone app's exact feature list before adding more. */}
            <p>
              See cash, overdue invoices and quotes on the move, on the same account. The web app works in any phone browser too.
            </p>
            <div className="b-app-row">
              <a href={APP_STORE_URL} className="btn btn--secondary" data-appstore="product">
                iPhone app on the App Store
              </a>
              <span className="small">Android coming soon</span>
            </div>
          </div>
          <div className="b-duo__b reveal">
            <h2 className="h3">Team and control</h2>
            <DL
              rows={[
                ['Roles', FACTS.roles.join(', ')],
                ['Sign-in', 'A login code by email, and a list of signed-in sessions you can log out.'],
                ['Integrations', 'Passwords and keys for connected systems are encrypted at rest. All traffic is over TLS.'],
                [
                  'Your data',
                  <>
                    Delete your account in Settings, or{' '}
                    <a className="ulink" href="/delete-account">
                      on our website
                    </a>
                    .
                  </>,
                ],
                // TODO(owner) Q5: add a Hosting row once the production region is confirmed.
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6. Coming soon (G). */}
      <section className="sec sec--grey" aria-labelledby="soon-h">
        <div className="wrap">
          <SectionHeader id="soon-h" a="Coming soon." b="Not in the price, not live yet." line="We will publish what each one costs and does when it is live. Not before." />
          <ul className="soon list-reset">
            {[
              { icon: Zap, name: 'Fast Pay', line: 'Get paid on an invoice before your customer pays.', topic: 'fast-pay' },
              // Q12: one-line description of Insurance pending.
              { icon: ShieldCheck, name: 'Insurance', line: 'Not live yet. We will describe it when it is.', topic: 'insurance' },
            ].map(({ icon: Icon, name, line, topic }) => (
              <li key={name} className="reveal" style={{ display: 'flex' }}>
                <div className="pcard" style={{ flex: 1 }}>
                  <Icon className="pcard__icon" strokeWidth={1.75} aria-hidden="true" />
                  <span className="pcard__name">{name}</span>
                  <span className="pcard__line">{line}</span>
                  <span className="pcard__foot">
                    <StatusChip />
                    <TextLink href={`/contact?topic=${topic}`} cta="notify" loc="product_soon" quiet>
                      Get notified<span className="sr-only"> about {name}</span>
                    </TextLink>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand page="product" />
    </>
  );
}
