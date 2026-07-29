import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of service',
  description:
    'The terms and conditions for using the TruckWys fleet finance platform and mobile app.',
  alternates: {
    canonical: 'https://www.truckwys.com/terms',
  },
  openGraph: {
    title: 'Terms of service | TruckWys',
    url: 'https://www.truckwys.com/terms',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Terms of service</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 30 July 2026</p>

          <div className="article-body measure mt-12">
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
              <p>
                "the Platform" means the TruckWys web dashboard and the TruckWys mobile app for iOS and Android, together.
              </p>
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
              <p>
                <strong>Accounts are created on the web dashboard only.</strong> The mobile app is for signing in to an
                existing account. If your organization already uses TruckWys, an administrator can invite you from
                Settings → Users &amp; permissions, and you complete that invitation on the web.
              </p>
              <p>
                You may delete your account at any time from Settings → Security in either the app or the dashboard. See
                our <Link href="/privacy">Privacy Policy</Link> for what happens to your data.
              </p>
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

              <h3>Where you pay</h3>
              <p>
                Subscriptions are purchased and managed on the web dashboard only. The mobile app contains no purchases,
                and nothing you do in the app charges you. The app shows your current plan and status for reference.
              </p>
            </section>

            <section>
              <h2>5. Mobile App Licence</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable licence to install and use the TruckWys
                mobile app on devices you own or control, solely to access your TruckWys account. This licence ends when
                your account or this agreement ends.
              </p>
              <p>You may not:</p>
              <ul>
                <li>Copy, modify, or create derivative works of the app</li>
                <li>Reverse engineer, decompile, or disassemble it, except where that right cannot lawfully be excluded</li>
                <li>Rent, lease, lend, sell, redistribute, or sublicense it</li>
                <li>Remove or obscure any proprietary notices</li>
              </ul>

              <h3>Device permissions</h3>
              <p>
                The app asks for the following, each only when you use the related feature, and each declinable — the rest
                of the app keeps working if you say no:
              </p>
              <ul>
                <li><strong>Microphone</strong> — to record a voice quote</li>
                <li><strong>Photo library</strong> — to attach a proof of delivery, profile picture, or company logo</li>
                <li><strong>Notifications</strong> — to receive operational alerts about your bookings and invoices</li>
              </ul>

              <h3>Notifications</h3>
              <p>
                Operational notifications (booking status, payments, invoices, fleet alerts) are part of the service and
                can be tuned per category in Settings → Notifications. We will only send you promotional or product-news
                notifications if you switch that category on yourself; it is off by default.
              </p>

              <h3>Apple App Store terms</h3>
              <p>
                If you obtained the app from the Apple App Store, the following applies and prevails over anything
                inconsistent in these terms:
              </p>
              <ul>
                <li>
                  This agreement is between you and TruckWys only, <strong>not with Apple</strong>. Apple is not
                  responsible for the app or its content.
                </li>
                <li>
                  Apple has <strong>no obligation to provide maintenance or support</strong> for the app. Support requests
                  go to <a href="mailto:support@truckwys.com">support@truckwys.com</a>.
                </li>
                <li>
                  If the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the
                  purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation.
                </li>
                <li>
                  TruckWys, not Apple, is responsible for addressing any claim relating to the app — including product
                  liability, legal or regulatory non-compliance, and consumer protection claims.
                </li>
                <li>
                  TruckWys, not Apple, is responsible for investigating and resolving any third-party claim that the app
                  infringes that party's intellectual property rights.
                </li>
                <li>
                  You represent that you are not located in a country subject to a U.S. Government embargo or designated
                  as "terrorist supporting," and that you are not on any U.S. Government restricted-party list.
                </li>
                <li>
                  Apple and its subsidiaries are <strong>third-party beneficiaries</strong> of these terms and may enforce
                  them against you.
                </li>
              </ul>
              <p>
                If you obtained the app from Google Play, Google's Play Terms of Service apply to the distribution of the
                app in addition to these terms.
              </p>
            </section>

            <section>
              <h2>6. User Obligations</h2>
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
              <h2>7. Data and Privacy</h2>
              <p>
                Your use of the Platform is also governed by our <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p>
                You retain ownership of your data. By using the Platform, you grant us a license to process your data to
                provide our services, including generating insights and recommendations.
              </p>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>
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
              <h2>9. AI Recommendations Disclaimer</h2>
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
              <h2>10. Capital Module</h2>
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
              <h2>11. Limitation of Liability</h2>
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
              <h2>12. Termination</h2>
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
              <h2>13. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in
                the courts of South Africa.
              </p>
            </section>

            <section>
              <h2>14. Changes to Terms</h2>
              <p>
                We may update these terms from time to time. We will notify you of material changes via email or through
                the Platform. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>15. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at:{' '}
                <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
