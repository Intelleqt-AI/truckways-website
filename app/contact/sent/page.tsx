import type { Metadata } from 'next';
import { TextLink } from '../../../components/ui';
import { demoUrl } from '../../../lib/site';

export const metadata: Metadata = {
  title: 'Message sent',
  robots: { index: false, follow: true },
};

/* FormSubmit redirects here (_next) after a successful send. */
export default function SentPage() {
  return (
    <section className="phero">
      <div className="wrap">
        <h1 className="h1">Thanks.</h1>
        <p className="lead" role="status">
          We have your message and will reply by email.
        </p>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <TextLink href={demoUrl('contact-sent')} cta="open_demo" loc="contact_sent">
            Open the demo while you wait
          </TextLink>
        </div>
      </div>
    </section>
  );
}
