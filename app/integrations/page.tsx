import { Check } from 'lucide-react';
import '../../components/pages/pages-b.css';
import { SectionHeader, TextLink } from '../../components/ui';
import { Closing } from '../../components/Blocks';
import { FeatureHero, Stage, Split, NextCards } from '../../components/pages/blocks';
import { IntegrationsSettings } from '../../components/pages/frags';
import { pageMeta } from '../../components/pages/meta';
import { jsonLd, signupUrl } from '../../lib/site';
import { graph, breadcrumbSchema } from '../../lib/schema';

const PATH = '/integrations';
export const metadata = pageMeta({
  path: PATH,
  title: 'Integrations: Cartrack, CtrlFleet, API and CSV',
  description:
    'Connect Cartrack and CtrlFleet, import customers and trucks from Excel, and let your TMS send deliveries to TruckWys by API and signed webhooks.',
  og: 'integrations',
  ogAlt: 'TruckWys integrations: works with what you already run.',
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/product' },
  { name: 'Integrations', path: PATH },
];

type Card = { name: string; status: 'Available' | 'Coming soon'; line: string; points: string[]; link?: { href: string; label: string } };
const CARDS: Card[] = [
  {
    name: 'Cartrack',
    status: 'Available',
    line: 'Connect with your Cartrack Fleet API username and password, from Fleetweb, Settings, API Settings. These are not the details you use to sign in to Cartrack.',
    points: ['Vehicle location, speed and ignition status', 'Door events', 'Your password is encrypted at rest'],
  },
  {
    name: 'CtrlFleet',
    status: 'Available',
    line: 'Connect with your CtrlFleet API key. Vehicles are matched to yours by licence plate.',
    points: ['Vehicle location and points of interest', 'Link a vehicle by hand if the plates differ', 'Your key is encrypted at rest'],
  },
  {
    name: 'Open API',
    status: 'Available',
    line: 'Your TMS sends a signed delivery with its POD, and the load is marked delivered. The invoice follows.',
    points: ['API keys with a monthly quota and an optional IP allow-list', 'Inbound requests signed with HMAC SHA-256', 'OpenAPI documentation for your developers'],
    link: { href: '/contact?topic=partner', label: 'Talk to us about an integration' },
  },
  {
    name: 'Webhooks',
    status: 'Available',
    line: 'Tell your own systems when loads, quotes and invoices change, at an address you choose.',
    points: ['Each delivery signed with HMAC SHA-256', 'Send a test event from Settings', 'Add or delete a webhook at any time'],
  },
  {
    name: 'Spreadsheet import',
    status: 'Available',
    line: 'Bring your customers and vehicles across from Excel. Paste the rows, or upload an Excel, CSV or PDF file, check the columns, then import.',
    points: ['Customers and vehicles', 'Trip data imports separately', 'Nothing is saved until you confirm'],
  },
  // Owner (R7): Xero and QuickBooks are the next integrations. Switch to Available only once each is live.
  {
    name: 'Xero and QuickBooks',
    status: 'Coming soon',
    line: 'Invoices and payments sent to your accounting system, for your accountant. Until then, every report exports to CSV.',
    points: ['Xero and QuickBooks connections are coming soon', 'Every report exports to CSV today'],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS)))} />

      <FeatureHero
        crumbs={CRUMBS}
        page="integrations"
        eyebrow="Integrations"
        a="Works with what"
        b="you already run."
        lead="Connect your tracking, bring your lists across from Excel, and let your TMS send deliveries to TruckWys by API."
        frame={
          <Stage photo="durban-port" label="Integration settings: Cartrack connected with 15 vehicles linked, CtrlFleet not connected, one active partner API key and one active webhook.">
            <IntegrationsSettings />
          </Stage>
        }
      />

      <section className="sec sec--grey" aria-labelledby="list-h">
        <div className="wrap">
          <SectionHeader
            id="list-h"
            a="What connects today."
            b="And what is next."
            line="Live today, unless marked coming soon. No hardware to install."
          />
          <ul className="b-intlist b-intlist--six list-reset">
            {CARDS.map((c) => (
              <li key={c.name} className="reveal">
                <div className="b-intcard">
                  <div className="b-intcard__head">
                    <h3 className="b-intcard__name">{c.name}</h3>
                    <span className={`chip${c.status === 'Available' ? ' chip--ok' : ''}`}>
                      <span className="chip__dot" aria-hidden="true" />
                      {c.status}
                    </span>
                  </div>
                  <p>{c.line}</p>
                  {c.points.length ? (
                    <ul className="list-reset">
                      {c.points.map((p) => (
                        <li key={p}>
                          <Check strokeWidth={1.75} aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {c.link ? <TextLink href={c.link.href} cta="talk_to_us" loc="integrations">{c.link.label}</TextLink> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="flow-h">
        <div className="wrap">
          <Split
            id="flow-h"
            a="From your TMS"
            b="to an invoice."
            line="Your TMS keeps dispatch and the driver app. TruckWys takes the delivery and does the money."
          >
            <ol className="b-flow list-reset">
              <li>
                <b>You create an API key for your TMS</b>
                <span>In TruckWys settings. Each key can carry a monthly quota and a list of allowed IP addresses.</span>
              </li>
              <li>
                <b>Your TMS sends the delivery</b>
                <span>A trip update with the delivered time and the POD, signed with HMAC SHA-256 in the X-Fleet-Signature header.</span>
              </li>
              <li>
                <b>The load is delivered, and the invoice is raised</b>
                <span>With 15% VAT and the customer&apos;s terms, and the load number on the invoice.</span>
              </li>
              <li>
                <b>Events go back out</b>
                <span>Webhooks tell your systems when loads, quotes and invoices change.</span>
              </li>
            </ol>
            <p className="small" style={{ marginTop: 20 }}>
              Not an integration, but handy: share any quote with your customer by link, including on WhatsApp.
            </p>
          </Split>
        </div>
      </section>

      <NextCards
        next={{ href: '/pricing', title: 'Pricing', line: 'One plan for your whole team, and what happens from sign-up to month end.' }}
        read="fleet-management-software-south-africa-2026"
      />

      <Closing
        page="integrations"
        variant="contact"
        a="Building a TMS or telematics product?"
        b="Talk to us about an integration."
        line="Open API, signed webhooks and OpenAPI documentation for your developers. Tell us what you run, and we will reply by email."
        primary={{ href: '/contact?topic=partner', label: 'Talk to us' }}
        secondary={{ href: signupUrl('integrations-cta'), label: 'Get started' }}
      />
    </>
  );
}
