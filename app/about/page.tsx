import { Check, X } from 'lucide-react';
import '../../components/pages/pages-b.css';
import { ButtonLink, SectionHeader, TwoTone, SAMPLE_CAPTION } from '../../components/ui';
import FitDiagram from '../../components/FitDiagram';
import PhoneShot from '../../components/PhoneShot';
import { FeatureHero, Split, DL } from '../../components/pages/blocks';
import { pageMeta } from '../../components/pages/meta';
import { FACTS, PRICE_AND_FEE } from '../../lib/facts';
import { SITE_URL, demoUrl, jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema, ids } from '../../lib/schema';

const PATH = '/about';
export const metadata = pageMeta({
  path: PATH,
  title: 'About: South African load-to-cash software',
  description:
    'TruckWys (Pty) Ltd is a Cape Town company building software for the money side of trucking: price, invoice, collect. What we are, and what we are not.',
  og: 'about',
  ogAlt: 'About TruckWys: the money side of running trucks.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: PATH },
];

const BELIEFS = [
  'A quote should show its working.',
  'The invoice should exist the day the load delivers.',
  'Owners should know who owes them before it is 90 days.',
  'Software should say plainly what is not live yet.',
];

const IS = [
  { t: 'Quoting from real costs', href: '/product/quoting' },
  { t: 'Invoicing on delivery', href: '/product/invoicing' },
  { t: 'Debtors and reminders', href: '/product/debtors' },
  { t: 'Reports and margin', href: '/product/reports' },
];
const ISNT = ['A TMS', 'Tracking or telematics', 'Dispatch, routing or scheduling', 'Your accounting system'];

const aboutPage = {
  '@type': 'AboutPage',
  '@id': `${SITE_URL}${PATH}#page`,
  url: `${SITE_URL}${PATH}`,
  name: 'About TruckWys',
  inLanguage: 'en-ZA',
  about: { '@id': ids.org },
  isPartOf: { '@id': ids.website },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(aboutPage, breadcrumbSchema(CRUMBS)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="about"
        primary="none"
        eyebrow="About TruckWys"
        a="The money side"
        b="of running trucks."
        lead="TruckWys is South African software for the part of trucking that decides whether a year was good: price, invoice, collect."
        aside={
          <figure className="b-phonefig">
            <PhoneShot scale={0.72} />
            <figcaption className="b-cap">TruckWys on a phone. {SAMPLE_CAPTION}</figcaption>
          </figure>
        }
      />

      <section className="sec" aria-labelledby="believe-h">
        <div className="wrap">
          <Split id="believe-h" a="What we believe." b="Four lines we build to." line="Every screen in TruckWys has to pass these.">
            <ol className="b-beliefs list-reset">
              {BELIEFS.map((b) => (
                <li key={b} className="reveal">
                  {b}
                </li>
              ))}
            </ol>
          </Split>
        </div>
      </section>

      <section className="sec sec--grey" aria-labelledby="is-h">
        <div className="wrap">
          <SectionHeader
            id="is-h"
            a="What TruckWys is."
            b="And what it isn't."
            line="It works next to the TMS, tracking and books you already run. It does not replace them."
          />
          <FitDiagram />
          <p className="caption fit__cap" style={{ marginBottom: 48 }}>
            Invoice, debtors and lanes: {SAMPLE_CAPTION.charAt(0).toLowerCase() + SAMPLE_CAPTION.slice(1)}
          </p>
          <div className="b-isnt">
            <div className="reveal">
              <h3>TruckWys is</h3>
              <ul className="list-reset">
                {IS.map((i) => (
                  <li key={i.t}>
                    <Check strokeWidth={1.75} aria-hidden="true" />
                    <a href={i.href}>{i.t}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3>TruckWys isn&apos;t</h3>
              <ul className="list-reset">
                {ISNT.map((t) => (
                  <li key={t}>
                    <X strokeWidth={1.75} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*
        TODO(owner) Q6: founder note. Written and signed by the founder in their own words (at most 120 words),
        with a real email address and, only if one exists, a real photo (1:1, radius 12). Not rendered until provided.
        Template for the founder to rewrite, never to publish as is: brief §4.8.
      */}

      <section className="sec" aria-labelledby="company-h">
        <div className="wrap b-duo">
          <div className="b-duo__a reveal">
            <h2 className="h3" id="company-h">
              The company
            </h2>
            <DL
              rows={[
                ['Name', FACTS.company.name],
                ['Registration', FACTS.company.reg],
                ['Address', FACTS.company.address],
                ['Information Officer', FACTS.company.infoOfficer],
                [
                  'Documents',
                  <>
                    <a className="ulink" href="/privacy">
                      Privacy policy
                    </a>
                    {' · '}
                    <a className="ulink" href="/paia-manual">
                      PAIA manual
                    </a>
                  </>,
                ],
              ]}
            />
          </div>
          <div className="b-duo__b reveal">
            <h2 className="h3">Security and POPIA</h2>
            <DL
              rows={[
                ['Sign-in', 'A six-digit login code by email, valid for 10 minutes.'],
                ['Sessions', 'See where you are signed in, and log out any session.'],
                ['Roles', `${FACTS.roles.length} roles per user: ${FACTS.roles.join(', ')}.`],
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
                ['Hosting', `${FACTS.hosting}.`],
                // TODO(owner) Q11: data-pooling wording. Omitted until confirmed.
              ]}
            />
          </div>
        </div>
      </section>

      <section className="sec sec--ink ctab" data-theme="dark" aria-labelledby="about-cta-h">
        <div className="wrap grid12">
          <TwoTone id="about-cta-h" a="Questions before you start?" b="Ask a person." />
          <div className="ctab__side">
            <p className="body">For fleets of 50 or more, TMS partners, or anything this page does not answer. Or look around the demo first.</p>
            <div className="btn-row btn-row--stack">
              <ButtonLink href="/contact" cta="talk_to_us" loc="cta_band">
                Talk to us
              </ButtonLink>
              <ButtonLink href={demoUrl('about-cta')} variant="secondary" cta="open_demo" loc="cta_band">
                Open the demo
              </ButtonLink>
            </div>
            <p className="small">{PRICE_AND_FEE}</p>
          </div>
        </div>
      </section>
    </>
  );
}
