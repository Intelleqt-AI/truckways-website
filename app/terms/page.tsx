import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | TruckWys',
  description:
    'TruckWys Terms of Service. Read our terms and conditions for using the TruckWys fleet profitability platform.',
  alternates: {
    canonical: 'https://truckwys.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using TruckWys ("the Platform"), you agree to be bound by these Terms of Service. If you
              do not agree to these terms, do not use the Platform.
            </p>
            <p className="text-gray-600">
              These terms constitute a legally binding agreement between you ("User," "you," or "your") and TruckWys
              (Pty) Ltd ("TruckWys," "we," "us," or "our").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-4">TruckWys provides a fleet profitability platform that includes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>AI-powered pricing and quoting recommendations</li>
              <li>Fleet performance analytics and optimization</li>
              <li>Automated invoicing and cash flow management</li>
              <li>Capital access through invoice financing (subject to separate terms)</li>
              <li>Integration with third-party telematics and accounting systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">3. Account Registration</h2>
            <p className="text-gray-600 mb-4">To use the Platform, you must:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be authorized to act on behalf of your organization if registering a business account</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You are responsible for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">4. Subscription and Payment</h2>
            <h3 className="text-lg font-medium text-black mb-2">Fees</h3>
            <p className="text-gray-600 mb-4">
              Our pricing consists of a monthly platform fee and success fees based on usage. Current pricing is
              available on our website and may be updated from time to time.
            </p>

            <h3 className="text-lg font-medium text-black mb-2">Payment Terms</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fees are billed monthly in advance</li>
              <li>Success fees are billed based on actual usage</li>
              <li>All fees are quoted in South African Rand (ZAR) unless otherwise specified</li>
              <li>Late payments may result in service suspension</li>
            </ul>

            <h3 className="text-lg font-medium text-black mb-2 mt-4">Free Trial</h3>
            <p className="text-gray-600">
              We offer a 30-day free trial. No payment is required during the trial period. You may cancel at any time
              before the trial ends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">5. User Obligations</h2>
            <p className="text-gray-600 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Platform only for lawful business purposes</li>
              <li>Provide accurate data and information</li>
              <li>Not attempt to reverse engineer or copy the Platform</li>
              <li>Not share your account with unauthorized users</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the Platform to harm competitors or engage in anti-competitive practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">6. Data and Privacy</h2>
            <p className="text-gray-600 mb-4">
              Your use of the Platform is also governed by our{' '}
              <Link href="/privacy" className="hover:underline" style={{ color: 'rgb(60, 131, 246)' }}>
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-gray-600">
              You retain ownership of your data. By using the Platform, you grant us a license to process your data to
              provide our services, including generating insights and recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The Platform, including all software, algorithms, designs, and content, is owned by TruckWys and protected
              by intellectual property laws.
            </p>
            <p className="text-gray-600">
              You may not copy, modify, distribute, or create derivative works based on the Platform without our written
              consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">8. AI Recommendations Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              Our AI-powered recommendations (pricing, routing, performance insights) are provided as decision-support
              tools. They do not constitute financial, legal, or professional advice.
            </p>
            <p className="text-gray-600">
              You remain responsible for all business decisions. TruckWys is not liable for decisions made based on our
              recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">9. Capital Module</h2>
            <p className="text-gray-600 mb-4">
              The Capital module connects you with third-party lending partners. Invoice financing is subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Separate terms and conditions from lending partners</li>
              <li>Credit approval by the lending partner</li>
              <li>Fees and interest rates set by the lending partner</li>
            </ul>
            <p className="text-gray-600 mt-4">
              TruckWys facilitates connections but is not a lender and does not guarantee financing approval.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, TruckWys shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption</li>
              <li>Decisions made based on Platform recommendations</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">11. Termination</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate this agreement with 30 days written notice. We may suspend or terminate your
              account immediately if you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Breach these terms</li>
              <li>Fail to pay fees when due</li>
              <li>Engage in fraudulent or illegal activity</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Upon termination, you may request export of your data within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">12. Governing Law</h2>
            <p className="text-gray-600">
              These terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in
              the courts of South Africa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these terms from time to time. We will notify you of material changes via email or through
              the Platform. Continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">14. Contact</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, contact us at:{' '}
              <a href="mailto:legal@truckwys.com" className="hover:underline" style={{ color: 'rgb(60, 131, 246)' }}>
                legal@truckwys.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
