import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How TruckWys collects, uses and protects your data, in line with POPIA and other applicable privacy laws.',
  alternates: {
    canonical: 'https://www.truckwys.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Privacy policy</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: January 2025</p>

          <div className="article-body measure mx-auto mt-12">
            <section>
              <h2>1. Introduction</h2>
              <p>
                TruckWys ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our fleet profitability platform
                and services.
              </p>
              <p>
                We comply with the Protection of Personal Information Act (POPIA) of South Africa and other applicable
                data protection laws.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and role</li>
                <li>Fleet size and operational data</li>
                <li>Billing and payment information</li>
                <li>Account credentials</li>
              </ul>

              <h3>Operational Data</h3>
              <p>When you connect your systems to TruckWys, we may collect:</p>
              <ul>
                <li>Telematics and GPS data</li>
                <li>Trip and route information</li>
                <li>Invoice and financial data</li>
                <li>Driver and vehicle performance metrics</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our fleet profitability platform</li>
                <li>Generate AI-powered pricing recommendations</li>
                <li>Automate invoicing and financial workflows</li>
                <li>Provide customer support and communicate with you</li>
                <li>Process payments and manage your account</li>
                <li>Comply with legal obligations</li>
                <li>Conduct analytics to improve our services</li>
              </ul>
            </section>

            <section>
              <h2>4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
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
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information, including
                encryption, access controls, and secure data storage. However, no method of transmission over the internet
                is 100% secure.
              </p>
            </section>

            <section>
              <h2>6. Your Rights (POPIA)</h2>
              <p>Under POPIA, you have the right to:</p>
              <ul>
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
            </section>

            <section>
              <h2>7. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. When you close your account, we will delete or anonymize your information within a reasonable
                timeframe, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2>8. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to improve your experience, analyze usage, and personalize
                content. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting
                the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2>10. Contact Us</h2>
              <p>For questions about this Privacy Policy or to exercise your rights, contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>
              </p>
              <p>
                <strong>Information Officer:</strong> TruckWys (Pty) Ltd
                <br />
                South Africa
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
