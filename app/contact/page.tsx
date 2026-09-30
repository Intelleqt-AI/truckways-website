import type { Metadata } from 'next';
import { Breadcrumbs, PageHero } from '../../components/Blocks';
import { TextLink } from '../../components/ui';
import ContactForm from '../../components/ContactForm';
import { SITE_URL, CONTACT_EMAIL, demoUrl, loginUrl, jsonLd } from '../../lib/site';
import { graph, breadcrumbSchema } from '../../lib/schema';

const URL = `${SITE_URL}/contact`;
const TITLE = 'Talk to us: fleets of 50+ and TMS partners';
const DESCRIPTION =
  'For fleets of 50 trucks or more and TMS partners: talk to a person about onboarding, integrations, security and POPIA. Or open the demo first.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: `${TITLE} | TruckWys`,
    description: DESCRIPTION,
    images: [{ url: '/og/contact.png', width: 1200, height: 630, alt: 'Talk to TruckWys' }],
  },
  twitter: { title: `${TITLE} | TruckWys`, description: DESCRIPTION, images: ['/og/contact.png'] },
};

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Talk to us', path: '/contact' },
];

const TOPICS = [
  { v: 'fleet-50', l: 'Running 50 or more trucks' },
  { v: 'partner', l: 'TMS or telematics partner' },
  { v: 'fast-pay', l: 'Tell me when Fast Pay is live' },
  { v: 'insurance', l: 'Tell me when Insurance is live' },
  { v: 'other', l: 'Something else' },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS)))} />
      <PageHero
        crumbs={<Breadcrumbs trail={CRUMBS} />}
        a="Talk to us."
        b="A person replies."
        lead="For fleets of 50 trucks or more, TMS and telematics partners, and anything the demo does not answer. Smaller fleets are welcome too."
      />
      <section className="sec" style={{ paddingTop: 0 }} aria-label="Contact form">
        <div className="wrap contact">
          {/* The form comes first in the markup, so phones see it before the side notes. */}
          <div className="contact__form">
            <ContactForm email={CONTACT_EMAIL} topics={TOPICS} next={`${SITE_URL}/contact/sent`} />
            <p className="small contact__legal">
              We use these details only to reply to you. The form is delivered by email through FormSubmit.{' '}
              <a href="/privacy" className="ulink">
                Privacy policy
              </a>{' '}
              ·{' '}
              <a href="/paia-manual" className="ulink">
                PAIA manual
              </a>
            </p>
          </div>

          <div className="contact__side">
            <h2 className="h3">What happens next</h2>
            {/* Q15: no promised turnaround until the owner confirms one; working days only. */}
            <p className="body contact__when">A person reads every message and replies by email on South African working days.</p>
            <ol className="contact__steps list-reset">
              <li>
                <span>We read your message and check your fleet size and topic.</span>
              </li>
              <li>
                <span>A person replies by email, from {CONTACT_EMAIL}.</span>
              </li>
              <li>
                <span>If it helps, we set up a call and walk through your own lanes.</span>
              </li>
            </ol>
            <div className="contact__more">
              <TextLink href={demoUrl('contact')} cta="open_demo" loc="contact">
                Prefer to look first? Open the demo
              </TextLink>
              <TextLink href={loginUrl('contact')} cta="sign_in" loc="contact" quiet>
                Already a customer? Sign in
              </TextLink>
              <p className="small">
                Prefer email?{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="ulink">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
