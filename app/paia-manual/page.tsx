import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAIA Manual',
  description:
    'TruckWys manual prepared in terms of section 51 of the Promotion of Access to Information Act, explaining how to request access to records we hold.',
  alternates: {
    canonical: 'https://www.truckwys.com/paia-manual',
  },
  openGraph: {
    title: 'PAIA Manual | TruckWys',
    url: 'https://www.truckwys.com/paia-manual',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Section 5 duplicates disclosures that also appear in the privacy policy —
// recipients, cross-border transfers and safeguards. PAIA/POPIA requires them
// here, so the two pages have to be updated together; a mismatch between them
// is the kind of thing the Information Regulator would query.
export default function PaiaManualPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">PAIA Manual</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 4 August 2026</p>

          <div className="article-body measure mt-12">
            <p>
              Prepared in terms of section 51 of the Promotion of Access to Information Act 2 of 2000 (as amended), read
              with section 17 of the Protection of Personal Information Act 4 of 2013.
            </p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                This manual is published by TruckWys (Pty) Ltd, registration number 2025/773091/07 ("TruckWys"), a
                private body as defined in the Promotion of Access to Information Act ("PAIA"). It explains how to
                request access to records held by TruckWys, and describes how TruckWys processes personal information in
                terms of the Protection of Personal Information Act ("POPIA").
              </p>
            </section>

            <section>
              <h2>2. Contact details</h2>
              <ul>
                <li>
                  <strong>Information Officer:</strong> Grant McEvoy
                </li>
                <li>
                  <strong>Registered address:</strong> 12 Keurboom Road, Claremont, Cape Town, 7800, Western Cape
                </li>
                <li>
                  <strong>Postal address:</strong> 12 Keurboom Road, Claremont, Cape Town, 7800, Western Cape
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>
                </li>
                <li>
                  <strong>Telephone:</strong> 084 704 1120
                </li>
              </ul>
            </section>

            <section>
              <h2>3. The Regulator&apos;s guide</h2>
              <p>
                The Information Regulator has published a guide on how to use PAIA and POPIA, available at{' '}
                <a href="https://www.inforegulator.org.za" target="_blank" rel="noopener noreferrer">
                  www.inforegulator.org.za
                </a>
                , which describes the assistance available from the Regulator and from Information Officers of public and
                private bodies.
              </p>
            </section>

            <section>
              <h2>4. Categories of records held by TruckWys</h2>

              <h3>4.1 Records available without a formal request</h3>
              <ul>
                <li>This PAIA Manual</li>
                <li>
                  The TruckWys <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  The TruckWys <a href="/terms">Terms of Service</a> / SaaS Agreement
                </li>
              </ul>

              <h3>4.2 Records available on request</h3>
              <ul>
                <li>Customer account and billing records</li>
                <li>Invoice, quote and trip profitability records processed on behalf of customers</li>
                <li>Correspondence with the Information Officer</li>
                <li>
                  Internal company, financial and compliance records, subject to the applicable grounds for refusal under
                  PAIA
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Personal information processed by TruckWys</h2>
              <p>Disclosures in terms of section 51 of PAIA, read with POPIA.</p>

              <h3>5.1 Purpose of processing</h3>
              <p>
                TruckWys processes personal information to provide its fleet quoting, invoicing and trip profitability
                platform, to process subscription and invoice fee billing, and — where a customer opts in — to facilitate
                an invoice financing referral and accounting sync.
              </p>

              <h3>5.2 Categories of data subjects</h3>
              <ul>
                <li>Customer (fleet operator) company contacts and platform users</li>
                <li>Drivers and vehicle records uploaded by customers</li>
                <li>Customers&apos; own shippers and debtors, to the extent reflected on invoices</li>
              </ul>

              <h3>5.3 Categories of personal information</h3>
              <ul>
                <li>Contact and identifying information</li>
                <li>Vehicle, trip and route data</li>
                <li>Invoice and payment data, including tokenised card information</li>
                <li>
                  Where the mobile app is used: photographs uploaded as proof of delivery, voice recordings made for
                  voice quoting, and a push notification token. These are described in section 3.5 of our{' '}
                  <a href="/privacy">Privacy Policy</a>
                </li>
              </ul>

              <h3>5.4 Recipients</h3>
              <ul>
                <li>Paystack — payment processing and card tokenisation</li>
                <li>Merchant Capital — invoice financing, where opted in</li>
                <li>Xero — accounting sync, where connected</li>
                <li>TomTom — route, distance and travel-time data</li>
                <li>MapTiler, using OpenStreetMap data — map imagery on route previews</li>
                <li>Anthropic and OpenAI — quote analysis, the AI assistant and voice transcription</li>
                <li>
                  Google Firebase Cloud Messaging and Apple Push Notification service — delivery of push notifications
                  to the mobile app
                </li>
                <li>Resend — transactional email</li>
                <li>Amazon Web Services — hosting and infrastructure</li>
              </ul>

              <h3>5.5 Cross-border transfers</h3>
              <p>
                Our primary infrastructure is hosted in South Africa, in Amazon Web Services&apos; Cape Town region, so
                platform data is stored locally by default. Some of the recipients listed in 5.4 — including our AI
                providers, push notification services, email delivery, mapping and accounting integrations — process
                information outside South Africa. Before any such transfer we take reasonable steps to ensure the
                recipient is subject to data protection terms that provide an adequate level of protection, consistent
                with section 72 of POPIA.
              </p>

              <h3>5.6 Security safeguards</h3>
              <ul>
                <li>Encryption in transit over TLS between our applications and our servers</li>
                <li>Encryption of stored credentials and integration tokens, such as Xero OAuth tokens</li>
                <li>Tokenisation of payment card data via Paystack; no full card numbers are stored</li>
                <li>Optional one-time code in addition to a password at sign-in</li>
                <li>Access controls on a need-to-know basis</li>
              </ul>
            </section>

            <section>
              <h2>6. How to request access to a record</h2>
              <p>
                Requests must be made using the prescribed PAIA request form, available from the Information Officer or
                from the Information Regulator&apos;s website, and submitted to the contact details in section 2.
                TruckWys will respond within the statutory timeframes prescribed by PAIA.
              </p>
              <p>
                If you only want a copy of your own personal information, or want it corrected or deleted, you do not
                need the PAIA form — see section 12 of our <a href="/privacy">Privacy Policy</a>, or delete your account
                yourself from the <a href="/delete-account">account deletion page</a>.
              </p>
            </section>

            <section>
              <h2>7. Fees</h2>
              <p>
                A request for a requester&apos;s own personal information is provided free of charge. For other records
                the prescribed PAIA fees apply: a standard request fee, and a fee per page of photocopying, calculated in
                accordance with the fee schedule prescribed under the PAIA regulations.
              </p>
            </section>

            <section>
              <h2>8. Availability of this manual</h2>
              <p>
                This manual is available on the TruckWys website and, on request, in hard copy from the registered
                address in section 2.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
