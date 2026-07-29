import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How TruckWys collects, uses and protects your data across our web platform and mobile app, in line with POPIA and other applicable privacy laws.',
  alternates: {
    canonical: 'https://www.truckwys.com/privacy',
  },
  openGraph: {
    title: 'Privacy policy | TruckWys',
    url: 'https://www.truckwys.com/privacy',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Privacy policy</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 30 July 2026</p>

          <div className="article-body measure mt-12">
            <section>
              <h2>1. Introduction</h2>
              <p>
                TruckWys ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our fleet profitability platform
                and services.
              </p>
              <p>
                This policy covers both the TruckWys web dashboard and the TruckWys mobile app for iOS and Android.
                Where a practice applies only to the mobile app, we say so.
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

              <h3>Mobile App Data</h3>
              <p>The TruckWys mobile app collects the following, and only for the purposes described:</p>
              <ul>
                <li>
                  <strong>Photos you choose to upload.</strong> The app asks for photo library access when you attach a
                  proof of delivery, a profile picture, or a company logo. We receive only the images you explicitly
                  select. We do not browse, scan, or index your photo library.
                </li>
                <li>
                  <strong>Voice recordings, if you use voice quoting.</strong> The app asks for microphone access only
                  when you tap to record. The recording is transcribed into quote details and is not used to identify
                  you or to train any model of ours. See "AI processing" below.
                </li>
                <li>
                  <strong>A push notification token.</strong> An anonymous device identifier issued by Apple or Google so
                  we can deliver operational alerts. It is tied to your account, deleted when you sign out, and deleted
                  automatically once the platform reports the app uninstalled.
                </li>
                <li>
                  <strong>Device model, operating system and app version.</strong> Used for troubleshooting and to know
                  which build a device is running.
                </li>
              </ul>
              <p>
                <strong>The mobile app does not collect your device location.</strong> It never requests location
                permission. Pickup and delivery addresses come from what you type into a quote, not from your device. The
                app contains no advertising or analytics tracking SDKs and does not track you across other apps or
                websites.
              </p>
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

              <h3>Processors we rely on</h3>
              <p>
                These providers process data on our behalf, under contract, and only to deliver the features you use:
              </p>
              <ul>
                <li>
                  <strong>Google Firebase Cloud Messaging</strong> and <strong>Apple Push Notification service</strong> —
                  deliver push notifications to the mobile app. The notification title and body pass through their
                  infrastructure, which is why we keep notification text to a short summary.
                </li>
                <li>
                  <strong>Anthropic</strong> and <strong>OpenAI</strong> — power quote analysis, the AI copilot, and voice
                  transcription. See "AI processing" below.
                </li>
                <li>
                  <strong>Paystack</strong> — processes subscription payments. Card details are entered on Paystack's
                  systems; we never receive or store your full card number.
                </li>
                <li>
                  <strong>Resend</strong> — sends transactional email such as quotes, invoices and password resets.
                </li>
                <li>
                  <strong>OpenStreetMap</strong> — supplies the map imagery shown on route previews. Loading map tiles
                  reveals your IP address and the approximate map area to the tile provider, as with any web map.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. AI Processing</h2>
              <p>
                Some features send your data to third-party AI providers (Anthropic and OpenAI) to generate a result:
                pricing and margin analysis, the AI copilot, natural-language quote creation, and voice-to-quote
                transcription.
              </p>
              <ul>
                <li>We send only the data needed for the request — for example route, weight, vehicle type and cost inputs
                  for a pricing analysis, or the audio clip for a transcription.</li>
                <li>
                  Under our agreements with these providers, your data is <strong>not used to train their models</strong>.
                </li>
                <li>Voice recordings are transcribed and not retained for any other purpose.</li>
                <li>
                  AI output is a decision-support suggestion, not advice. You remain responsible for the pricing and
                  operational decisions you make.
                </li>
              </ul>
            </section>

            <section>
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information, including
                encryption, access controls, and secure data storage. However, no method of transmission over the internet
                is 100% secure.
              </p>
            </section>

            <section>
              <h2>7. Your Rights (POPIA)</h2>
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
              <h2>8. Deleting Your Account</h2>
              <p>You can delete your account yourself, without contacting us:</p>
              <ul>
                <li>
                  <strong>Mobile app:</strong> More → Settings → Security → Delete account. You confirm with your
                  password.
                </li>
                <li>
                  <strong>Web dashboard:</strong> Settings → Security → Delete account.
                </li>
              </ul>
              <p>
                Deleting your account deactivates it immediately, signs you out of every device, and removes your push
                notification registrations. Records we are legally required to keep — such as invoices and financial
                transactions needed for tax and audit purposes — are retained for the statutory period and then deleted.
                If you would prefer we handle the deletion for you, email{' '}
                <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>.
              </p>
            </section>

            <section>
              <h2>9. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. When you close your account, we will delete or anonymize your information within a reasonable
                timeframe, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2>10. Children's Privacy</h2>
              <p>
                TruckWys is a business tool intended for use by people aged 18 and over. We do not knowingly collect
                personal information from children. If you believe a child has provided us with personal information,
                contact <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a> and we will delete it.
              </p>
            </section>

            <section>
              <h2>11. International Transfers</h2>
              <p>
                Some of the processors listed in section 4 operate outside South Africa. Where your information is
                transferred across borders, we rely on the safeguards permitted by POPIA — including contractual
                protections requiring a comparable standard of care to our own.
              </p>
            </section>

            <section>
              <h2>12. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies on our website and web dashboard to improve your experience,
                analyze usage, and personalize content. You can control cookies through your browser settings.
              </p>
              <p>
                The mobile app does not use cookies or any cross-app tracking technology.
              </p>
            </section>

            <section>
              <h2>13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting
                the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2>14. Contact Us</h2>
              <p>For questions about this Privacy Policy or to exercise your rights, contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>
              </p>
              <p>
                <strong>App support:</strong> <a href="mailto:support@truckwys.com">support@truckwys.com</a>
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
