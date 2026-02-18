import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | TruckWys',
  description:
    'TruckWys Privacy Policy. Learn how we collect, use, and protect your data in compliance with POPIA and international privacy standards.',
  alternates: {
    canonical: 'https://truckwys.com/privacy',
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              TruckWys ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our fleet profitability platform
              and services.
            </p>
            <p className="text-gray-600">
              We comply with the Protection of Personal Information Act (POPIA) of South Africa and other applicable
              data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-black mb-2">Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and role</li>
              <li>Fleet size and operational data</li>
              <li>Billing and payment information</li>
              <li>Account credentials</li>
            </ul>

            <h3 className="text-lg font-medium text-black mb-2">Operational Data</h3>
            <p className="text-gray-600 mb-4">
              When you connect your systems to TruckWys, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Telematics and GPS data</li>
              <li>Trip and route information</li>
              <li>Invoice and financial data</li>
              <li>Driver and vehicle performance metrics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and improve our fleet profitability platform</li>
              <li>Generate AI-powered pricing recommendations</li>
              <li>Automate invoicing and financial workflows</li>
              <li>Provide customer support and communicate with you</li>
              <li>Process payments and manage your account</li>
              <li>Comply with legal obligations</li>
              <li>Conduct analytics to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties that help us operate our platform (hosting, payment
                processing, analytics)
              </li>
              <li>
                <strong>Integration Partners:</strong> When you connect TruckWys to third-party services (Xero, Sage,
                telematics providers)
              </li>
              <li>
                <strong>Lending Partners:</strong> If you use our Capital module, we share necessary information with
                our financing partners to process advances
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your information, including
              encryption, access controls, and secure data storage. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">6. Your Rights (POPIA)</h2>
            <p className="text-gray-600 mb-4">Under POPIA, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">7. Data Retention</h2>
            <p className="text-gray-600">
              We retain your information for as long as necessary to provide our services and comply with legal
              obligations. When you close your account, we will delete or anonymize your information within a reasonable
              timeframe, except where retention is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar technologies to improve your experience, analyze usage, and personalize
              content. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting
              the new policy on our website and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Privacy Policy or to exercise your rights, contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{' '}
              <a href="mailto:privacy@truckwys.com" className="hover:underline" style={{ color: 'rgb(60, 131, 246)' }}>
                privacy@truckwys.com
              </a>
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Information Officer:</strong> TruckWys (Pty) Ltd
              <br />
              South Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
