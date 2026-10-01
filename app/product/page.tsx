import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import '../../components/pages/pages-b.css';
import { SectionHeader, TextLink, TwoTone } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { FeatureHero, Stage, DL, FastPayCard, PhotoBand } from '../../components/pages/blocks';
import { QuotesBoard, MiniCost, MiniInvoice, MiniAge, MiniLanes, TeamSettings } from '../../components/pages/frags';
import PhoneShot from '../../components/PhoneShot';
import StoreBadges from '../../components/StoreBadges';
import { FACTS } from '../../lib/facts';
import { APP_STORE_URL, PLAY_STORE_URL, OG_BASE, SITE_URL, jsonLd } from '../../lib/site';
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
    ...OG_BASE,
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
    more: 'How quoting works',
    crop: <MiniCost />,
  },
  {
    id: 'invoice',
    name: 'Invoice',
    line: 'Delivered means invoiced, with 15% VAT, your terms and your bank details.',
    href: '/product/invoicing',
    more: 'How invoicing works',
    crop: <MiniInvoice />,
  },
  {
    id: 'paid',
    name: 'Collect',
    line: 'Debtors by age, a statement per customer and a reminder from any overdue invoice.',
    href: '/product/debtors',
    more: 'How debtors works',
    crop: <MiniAge />,
  },
  {
    id: 'numbers',
    name: 'Know',
    line: 'Profit and loss, revenue per kilometre by lane and output VAT, from the same numbers.',
    href: '/product/reports',
    more: 'How the reports work',
    crop: <MiniLanes />,
  },
];

const mobileSchema = {
  '@type': 'MobileApplication',
  '@id': `${SITE_URL}/#ios`,
  name: 'TruckWys',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'BusinessApplication',
  installUrl: [APP_STORE_URL, PLAY_STORE_URL],
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
          <div className="b-capfade">
            <Stage photo="n3-gillitts" label="The TruckWys quotes board for a demo company, with draft, sent, accepted and declined quotes and the value in each column.">
              <QuotesBoard />
            </Stage>
          </div>
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
                    {s.more}
                    <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <div className="b-hubfoot" id="integrations">
            <TextLink href="/integrations" className="tlink--wrap">Works with Cartrack, CtrlFleet, your TMS and Excel</TextLink>
          </div>
          {/* R7: "Where we use a model" cut to one line; /product/ai is the full story. */}
          <div className="b-modelnote" id="models">
            <p>
              <b>Where we use a model:</b> reading a typed load into the quote form, Copilot, and the win chance. Never tolls, diesel, VAT or
              the price you send.
            </p>
            <TextLink href="/product/ai">AI in TruckWys</TextLink>
          </div>
        </div>
      </section>

      {/*
        R8: one sharp photo band mid-page. "Drone shot of a port during the day", Durban harbour, by Magda Ehlers
        (https://www.pexels.com/@magda-ehlers-pexels), https://www.pexels.com/photo/drone-shot-of-a-port-during-the-day-3814211/
        Pexels Licence (free commercial use, no attribution required). Cropped to the rail sidings and quay road (the
        car carrier's hull lettering is outside the crop), saturation 0.68, slightly darker and cooler.
        Master: public/covers/pages/product-durban-rail.jpg.
      */}
      <PhotoBand
        id="sa-h"
        src="/covers/pages/product-durban-rail.jpg"
        position="50% 50%"
        positionPhone="62% 50%"
        a="Built for South Africa."
        b="SANRAL tolls, FIASA diesel, 15% VAT."
        line={
          <>
            The rules that set your price are South African, and each one is a line you can check.{' '}
            <TextLink href="/product/quoting">How tolls and diesel are priced</TextLink>
          </>
        }
        place="Port of Durban, KwaZulu-Natal"
      />

      {/* 5. Mobile (W): the real S2 phone capture beside the copy. R8: text top-aligned with the phone, a larger phone
          cropped by the section's bottom edge on desktop, so there is no empty column. */}
      <section className="sec sec--grey b-mobile" aria-labelledby="mobile-h">
        <div className="wrap b-mobile__grid">
          <div className="b-mobile__text reveal">
            <TwoTone id="mobile-h" a="The same numbers." b="On your phone." />
            {/* VERIFY Q16: the iPhone app's exact feature list before adding more. The three points are what the S2 capture shows. */}
            <p className="body">
              See cash, overdue invoices and quotes on the move, on the same account. The web app works in any phone browser too.
            </p>
            <ul className="b-checks list-reset">
              <li>
                <Check strokeWidth={1.75} aria-hidden="true" />
                What you are owed, and how much is past due
              </li>
              <li>
                <Check strokeWidth={1.75} aria-hidden="true" />
                Revenue and margin over the last 12 months
              </li>
              <li>
                <Check strokeWidth={1.75} aria-hidden="true" />
                Active loads, and a new quote one tap away
              </li>
            </ul>
            <div className="b-app-row">
              <StoreBadges loc="product" />
            </div>
          </div>
          <figure className="b-mobile__vis reveal">
            <PhoneShot scale={0.92} />
          </figure>
        </div>
      </section>

      {/* 6. Team and control (G): the team list beside the specifics. R7: a standard section H2. */}
      <section className="sec" aria-labelledby="team-h">
        <div className="wrap">
          <SectionHeader id="team-h" a="Team and control." b="A role for everyone." />
          <div className="b-row b-row--flip">
            <div className="b-row__text reveal">
              <DL
                rows={[
                  ['Roles', FACTS.roles.join(', ')],
                  ['Sign-in', 'Email and password, with an optional emailed code (two-factor). A list of signed-in sessions you can log out.'],
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
                  ['Hosting', `${FACTS.hosting}. Your data stays in South Africa.`],
                ]}
              />
            </div>
            <div className="b-row__vis hide-sm">
              <Stage label="The team settings of a demo company: five people, each with a role (Admin, Manager, Dispatcher, Viewer, Driver), and sign-in by email and password.">
                <TeamSettings />
              </Stage>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Coming soon: a compact card to /capital (R7). Home keeps the full Fast Pay band. */}
      <FastPayCard />

      <Closing page="product" />
    </>
  );
}
