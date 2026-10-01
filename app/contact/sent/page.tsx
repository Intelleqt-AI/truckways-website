import type { Metadata } from 'next';
import { TextLink, TwoTone } from '../../../components/ui';
import { Breadcrumbs } from '../../../components/Blocks';
import { InvoiceRow } from '../../../components/fragments/Money';
import { CONTACT_EMAIL, demoUrl } from '../../../lib/site';

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
          {/* R7: one action, and no price line. */}
          <div className="cta-pair status__ctas">
            <TextLink href={demoUrl('contact-sent')} cta="open_demo" loc="contact_sent">
              Open the demo while you wait
            </TextLink>
          </div>
          {/* Critic R3: one small product fragment (the delivered invoice from the demo company). */}
          <div className="status__frag" aria-hidden="true">
            <InvoiceRow compact float />
          </div>
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
