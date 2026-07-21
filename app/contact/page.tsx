import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to TruckWys about quoting, invoicing and FastPay for your fleet. Email grant@truckwys.com, most South African fleets get a reply within one working day.',
  alternates: {
    canonical: 'https://www.truckwys.com/contact',
  },
  openGraph: {
    title: 'Contact TruckWys',
    description:
      'Talk to TruckWys about quoting, invoicing and FastPay for your fleet. Most fleets get a reply within one working day.',
    url: 'https://www.truckwys.com/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: intro */}
          <div>
            <div className="eyebrow eyebrow-accent mb-4">Contact</div>
            <h1 className="text-display text-ink">Talk to us</h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-2">
              Tell us about your fleet and what you want to fix: quoting, slow
              payments, cash flow, or all three. We will come back with straight
              answers, not a sales script.
            </p>
            <div className="mt-8">
              <div className="eyebrow mb-2">Email</div>
              <a
                href="mailto:grant@truckwys.com"
                className="text-[16px] font-medium text-accent underline-offset-4 hover:underline"
              >
                grant@truckwys.com
              </a>
            </div>
            <p className="mt-6 text-[13px] text-ink-3">
              Most fleets get a reply within one working day.
            </p>
          </div>

          {/* Right: form */}
          <div className="card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
