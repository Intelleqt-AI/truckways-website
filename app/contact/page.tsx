import type { Metadata } from 'next';
import { Breadcrumbs, PageHero } from '../../components/Blocks';
import { TextLink } from '../../components/ui';
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
  { v: 'fleet-50', l: '50+ fleet' },
  { v: 'partner', l: 'TMS or telematics partner' },
  { v: 'updates', l: 'Fast Pay or Insurance updates' },
  { v: 'other', l: 'Something else' },
];

/* Preselects Topic from ?topic= (fleet-50, partner, fast-pay, insurance). Inline, no framework JS. */
const TOPIC_SCRIPT = `(function(){try{var t=new URLSearchParams(location.search).get('topic');var m={'fleet-50':'fleet-50','partner':'partner','fast-pay':'updates','insurance':'updates'};var s=document.getElementById('topic');if(t&&m[t]&&s){s.value=m[t];}}catch(e){}})();`;

/*
 * The form posts straight to FormSubmit (formsubmit.co), as before, to the same
 * address. It is a plain HTML form so it works without JavaScript. Spam
 * protection: FormSubmit's captcha step is on (it was off) and a honeypot
 * field (_honey) that people never see. The privacy policy discloses FormSubmit.
 * Brief D15 (our own route handler, backend or Resend delivery) is phase B.
 */
export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph(breadcrumbSchema(CRUMBS)))} />
      <PageHero
        crumbs={<Breadcrumbs trail={CRUMBS} />}
        a="Talk to us"
        lead="For fleets of 50 trucks or more, TMS and telematics partners, and anything the demo does not answer."
      />
      <section className="sec" style={{ paddingTop: 0 }} aria-label="Contact form">
        <div className="wrap contact">
          <div className="contact__side">
            <h2 className="h3">What happens next</h2>
            {/* Q15: no response time is stated until the owner confirms one. */}
            <ol className="contact__steps list-reset">
              <li>We read every message.</li>
              <li>A person replies by email.</li>
              <li>If it helps, we set up a call and walk through your own lanes.</li>
            </ol>
            <div className="contact__more">
              <TextLink href={demoUrl('contact')} cta="open_demo" loc="contact">
                Prefer to look first? Open the demo
              </TextLink>
              <TextLink href={loginUrl('contact')} cta="sign_in" loc="contact" quiet>
                Already a customer? Sign in
              </TextLink>
            </div>
          </div>

          <div className="contact__form">
            <form className="form" action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
              <input type="hidden" name="_subject" value="TruckWys website: Talk to us" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={`${SITE_URL}/contact/sent`} />
              <div className="hp" aria-hidden="true">
                <label htmlFor="_honey">Leave this field empty</label>
                <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input className="input" id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input className="input" id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input className="input" id="company" name="company" type="text" autoComplete="organization" required />
                </div>
                <div className="field">
                  <label htmlFor="fleet">Fleet size</label>
                  <select className="input" id="fleet" name="fleet_size" required defaultValue="">
                    <option value="" disabled>
                      Choose
                    </option>
                    <option>1 to 4</option>
                    <option>5 to 19</option>
                    <option>20 to 49</option>
                    <option>50 to 199</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="topic">Topic</label>
                <select className="input" id="topic" name="topic" defaultValue="fleet-50">
                  {TOPICS.map((t) => (
                    <option key={t.v} value={t.v}>
                      {t.l}
                    </option>
                  ))}
                </select>
              </div>
              <script dangerouslySetInnerHTML={{ __html: TOPIC_SCRIPT }} />
              <div className="field">
                <label htmlFor="message">
                  Message <span className="opt">(optional)</span>
                </label>
                <textarea className="input" id="message" name="message" rows={4} />
              </div>
              <button type="submit" className="btn btn--primary btn--block" data-cta="talk_to_us" data-loc="contact_form">
                Send message
              </button>
              <p className="small">
                We use these details only to reply to you. The form is delivered by FormSubmit (formsubmit.co), which asks
                you to confirm you are not a robot before it sends.{' '}
                <a href="/privacy" className="ulink">
                  Privacy policy
                </a>{' '}
                ·{' '}
                <a href="/paia-manual" className="ulink">
                  PAIA manual
                </a>
              </p>
              <p className="small">
                Prefer email? <a href={`mailto:${CONTACT_EMAIL}`} className="ulink">{CONTACT_EMAIL}</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
