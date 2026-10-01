import type { Metadata } from 'next';
import { ButtonLink, TextLink, TwoTone } from '../../../components/ui';
import { Breadcrumbs } from '../../../components/Blocks';
import { CONTACT_EMAIL, demoUrl, signupUrl } from '../../../lib/site';
import { PRICE_SHORT } from '../../../lib/facts';

export const metadata: Metadata = {
  title: 'Message sent',
  robots: { index: false, follow: true },
};

/* The contact form lands here only after FormSubmit confirms delivery. */
export default function SentPage() {
  return (
    <section className="phero status-page">
      <div className="wrap">
        <Breadcrumbs
          trail={[
            { name: 'Home', path: '/' },
            { name: 'Talk to us', path: '/contact' },
            { name: 'Message sent', path: '/contact/sent' },
          ]}
        />
      </div>
      <div className="wrap status">
        <div className="status__main">
          <p className="label status__eyebrow" role="status">
            Message sent
          </p>
          <TwoTone as="h1" className="h1" a="Thanks." b="We have your message." />
          <p className="lead">A person reads it and replies by email, from {CONTACT_EMAIL}, on South African working days.</p>
          <div className="btn-row btn-row--stack status__ctas">
            <ButtonLink href={demoUrl('contact-sent')} cta="open_demo" loc="contact_sent">
              Open the demo while you wait
            </ButtonLink>
            <ButtonLink href={signupUrl('contact-sent')} variant="secondary" cta="get_started" loc="contact_sent">
              Get started
            </ButtonLink>
          </div>
          <p className="small status__price">{PRICE_SHORT}</p>
        </div>
        <div className="status__side">
          <h2 className="h4">What happens next</h2>
          <ol className="contact__steps list-reset">
            <li>
              <span>We read your message and check your fleet size and topic.</span>
            </li>
            <li>
              <span>A person replies by email. Nothing is sent automatically.</span>
            </li>
            <li>
              <span>If it helps, we set up a call and walk through your own lanes.</span>
            </li>
          </ol>
          <div className="status__links">
            <TextLink href="/pricing" quiet>
              See pricing
            </TextLink>
            <TextLink href="/" quiet>
              Back to the home page
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
