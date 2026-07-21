import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of service',
  description:
    'The terms and conditions for using the TruckWys fleet profitability platform.',
  alternates: {
    canonical: 'https://www.truckwys.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Terms of service</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: January 2025</p>

          <div className="article-body measure mx-auto mt-12">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using TruckWys ("the Platform"), you agree to be bound by these Terms of Service. If you
                do not agree to these terms, do not use the Platform.
              </p>
              <p>
                These terms constitute a legally binding agreement between you ("User," "you," or "your") and TruckWys
                (Pty) Ltd ("TruckWys," "we," "us," or "our").
              </p>
            </section>

            <section>
              <h2>2. Description of Services</h2>
              <p>TruckWys provides a fleet profitability platform that includes:</p>
              <ul>
                <li>AI-powered pricing and quoting recommendations</li>
                <li>Fleet performance analytics and optimization</li>
                <li>Automated invoicing and cash flow management</li>
                <li>Capital access through invoice financing (subject to separate terms)</li>
                <li>Integration with third-party telematics and accounting systems</li>
              </ul>
            </section>

            <section>
              <h2>3. Account Registration</h2>
              <p>To use the Platform, you must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be authorized to act on behalf of your organization if registering a business account</li>
              </ul>
              <p>You are responsible for all activities that occur under your account.</p>
            </section>

            <section>
              <h2>4. Subscription and Payment</h2>
              <h3>Fees</h3>
              <p>
                Our pricing consists of a monthly platform fee and success fees based on usage. Current pricing is
                available on our website and may be updated from time to time.
              </p>

              <h3>Payment Terms</h3>
              <ul>
                <li>Fees are billed monthly in advance</li>
                <li>Success fees are billed based on actual usage</li>
                <li>All fees are quoted in South African Rand (ZAR) unless otherwise specified</li>
                <li>Late payments may result in service suspension</li>
              </ul>

              <h3>Free Trial</h3>
              <p>
                We offer a 30-day free trial. No payment is required during the trial period. You may cancel at any time
                before the trial ends.
              </p>
            </section>

            <section>
              <h2>5. User Obligations</h2>
              <p>You agree to:</p>
              <ul>
                <li>Use the Platform only for lawful business purposes</li>
                <li>Provide accurate data and information</li>
                <li>Not attempt to reverse engineer or copy the Platform</li>
                <li>Not share your account with unauthorized users</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Platform to harm competitors or engage in anti-competitive practices</li>
              </ul>
            </section>

            <section>
              <h2>6. Data and Privacy</h2>
              <p>
                Your use of the Platform is also governed by our <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                You retain ownership of your data. By using the Platform, you grant us a license to process your data to
                provide our services, including generating insights and recommendations.
              </p>
            </section>

            <section>
              <h2>7. Intellectual Property</h2>
              <p>
                The Platform, including all software, algorithms, designs, and content, is owned by TruckWys and protected
                by intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, or create derivative works based on the Platform without our written
                consent.
              </p>
            </section>

            <section>
              <h2>8. AI Recommendations Disclaimer</h2>
              <p>
                Our AI-powered recommendations (pricing, routing, performance insights) are provided as decision-support
                tools. They do not constitute financial, legal, or professional advice.
              </p>
              <p>
                You remain responsible for all business decisions. TruckWys is not liable for decisions made based on our
                recommendations.
              </p>
            </section>

            <section>
              <h2>9. Capital Module</h2>
              <p>
                The Capital module connects you with third-party lending partners. Invoice financing is subject to:
              </p>
              <ul>
                <li>Separate terms and conditions from lending partners</li>
                <li>Credit approval by the lending partner</li>
                <li>Fees and interest rates set by the lending partner</li>
              </ul>
              <p>
                TruckWys facilitates connections but is not a lender and does not guarantee financing approval.
              </p>
            </section>

            <section>
              <h2>10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, TruckWys shall not be liable for:</p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption</li>
                <li>Decisions made based on Platform recommendations</li>
              </ul>
              <p>
                Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2>11. Termination</h2>
              <p>
                Either party may terminate this agreement with 30 days written notice. We may suspend or terminate your
                account immediately if you:
              </p>
              <ul>
                <li>Breach these terms</li>
                <li>Fail to pay fees when due</li>
                <li>Engage in fraudulent or illegal activity</li>
              </ul>
              <p>Upon termination, you may request export of your data within 30 days.</p>
            </section>

            <section>
              <h2>12. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in
                the courts of South Africa.
              </p>
            </section>

            <section>
              <h2>13. Changes to Terms</h2>
              <p>
                We may update these terms from time to time. We will notify you of material changes via email or through
                the Platform. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>14. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at:{' '}
                <a href="mailto:legal@truckwys.com">legal@truckwys.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
