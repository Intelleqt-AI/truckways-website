import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How TruckWys collects, uses and protects personal information across our web platform and mobile app, in compliance with POPIA.',
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

// Apple App Review and Google Play's Data safety declaration are both checked
// against this page. Three things here are load-bearing for those reviews and
// must not be softened or dropped:
//   1. Section 3.5's explicit statement that the app collects no location and
//      carries no advertising or analytics SDK — the Play Data safety form
//      declares no location, and a reviewer comparing the two looks here.
//   2. Section 11, account deletion, which both stores require to be described
//      on a page reachable without signing in (see also /delete-account).
//   3. The processor list in section 5. Every third party that receives
//      personal information has to appear, so adding an integration means
//      adding it here in the same change.
export default function PrivacyPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Privacy policy</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 4 August 2026</p>

          <div className="article-body measure mt-12">
            <section>
              <h2>1. Who we are</h2>
              <p>
                This Privacy Policy explains how TruckWys (Pty) Ltd, registration number 2025/773091/07 ("TruckWys",
                "we", "us"), collects, uses, shares and protects personal information in connection with the TruckWys
                platform, in compliance with the Protection of Personal Information Act 4 of 2013 ("POPIA").
              </p>
              <p>
                TruckWys is the responsible party for personal information processed through our platform, except where
                we process information on behalf of a customer (a fleet operator) as an operator, as described in
                section 7.
              </p>
              <ul>
                <li>
                  <strong>Registered address:</strong> 12 Keurboom Road, Claremont, Cape Town, 7800, Western Cape
                </li>
                <li>
                  <strong>Information Officer:</strong> Grant McEvoy —{' '}
                  <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>, 084 704 1120
                </li>
              </ul>
              <p>
                This policy covers both the TruckWys web dashboard and the TruckWys mobile app for iOS and Android.
                Where a practice applies only to the mobile app, we say so.
              </p>
            </section>

            <section>
              <h2>2. Who this policy is for</h2>
              <p>
                TruckWys is a business platform. Accounts are created for staff by their company&apos;s administrator —
                there is no public sign-up in the mobile app. If you are a driver, dispatcher or manager using TruckWys
                at work, your employer decides what operational information is entered about you, and this policy
                explains what we do with it.
              </p>
            </section>

            <section>
              <h2>3. Personal information we collect</h2>

              <h3>3.1 Account and company information</h3>
              <ul>
                <li>Company name, registration number, VAT number and billing address</li>
                <li>Names, job titles, email addresses and phone numbers of company contacts and platform users</li>
                <li>Account credentials, and the one-time codes used to verify a sign-in</li>
              </ul>

              <h3>3.2 Driver and vehicle information</h3>
              <ul>
                <li>Driver names, contact details and licence information entered by the fleet operator</li>
                <li>
                  Vehicle registration, axle configuration, and route and trip data used for quoting and toll
                  calculation
                </li>
              </ul>

              <h3>3.3 Invoicing and financial information</h3>
              <ul>
                <li>Invoice line items, trip profitability data, and customer or shipper billing details</li>
                <li>
                  Payment card data, tokenised and processed by our payment gateway, Paystack — TruckWys never receives
                  or stores full card numbers. We hold only a token, the card type and its last four digits
                </li>
                <li>
                  Banking details where required for payouts, or for the invoice financing referral described in
                  section 4
                </li>
              </ul>

              <h3>3.4 Technical information</h3>
              <ul>
                <li>Sign-in and usage logs, IP address, device and browser information</li>
              </ul>

              <h3>3.5 Mobile app data</h3>
              <p>The TruckWys mobile app collects the following, and only for the purposes described:</p>
              <ul>
                <li>
                  <strong>Photos you choose to upload.</strong> The app asks for photo library access when you attach a
                  proof of delivery, a profile picture or a company logo. We receive only the images you explicitly
                  select. We do not browse, scan or index your photo library.
                </li>
                <li>
                  <strong>Voice recordings, if you use voice quoting.</strong> The app asks for microphone access only
                  when you tap to record. The recording is transcribed into quote details and then discarded — it is
                  never written to our storage, never used to identify you, and never used to train any model. See
                  section 6.
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
                <li>
                  <strong>Messages you type to the AI assistant.</strong> Sent to our AI providers to generate a reply.
                  See section 6.
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
              <h2>4. Why we process this information</h2>
              <ul>
                <li>To provide the quoting, invoicing and trip profitability features of the platform</li>
                <li>To process the 0.25% invoice success fee and manage subscription billing via Paystack</li>
                <li>
                  To facilitate an introduction to our invoice financing partner, Merchant Capital, where a customer opts
                  in to factoring
                </li>
                <li>To calculate routes, distances and tolls, using third-party routing data where needed</li>
                <li>To send transactional and collections communications</li>
                <li>
                  To sync invoicing data with accounting platforms such as Xero, where a customer connects their account
                </li>
                <li>To secure accounts, including one-time sign-in codes, and fraud and card-health monitoring</li>
                <li>To comply with legal, tax and regulatory obligations</li>
              </ul>
              <p>
                Our lawful basis for processing is primarily performance of the SaaS agreement with the customer,
                together with consent (for optional integrations such as Xero, or the factoring referral) and legitimate
                business interests (such as fraud prevention and service security).
              </p>
            </section>

            <section>
              <h2>5. Sharing your information</h2>
              <p>
                We share personal information with the following third parties, only as needed to provide the service.
                They process it on our behalf, under contract.
              </p>
              <ul>
                <li>
                  <strong>Paystack</strong> — subscription payment processing and card tokenisation
                </li>
                <li>
                  <strong>Merchant Capital</strong> — invoice financing, only where a customer opts in to factoring
                </li>
                <li>
                  <strong>Xero</strong> — accounting sync, only where a customer connects their account
                </li>
                <li>
                  <strong>TomTom</strong> — route, distance and travel-time data
                </li>
                <li>
                  <strong>MapTiler</strong>, using OpenStreetMap data — supplies the map imagery on route previews.
                  Loading map tiles reveals your IP address and the approximate map area to the tile provider, as with
                  any web map
                </li>
                <li>
                  <strong>Anthropic</strong> and <strong>OpenAI</strong> — power quote analysis, the AI assistant and
                  voice transcription. See section 6
                </li>
                <li>
                  <strong>Google Firebase Cloud Messaging</strong> and <strong>Apple Push Notification service</strong> —
                  deliver push notifications to the mobile app. The notification title and body pass through their
                  infrastructure, which is why we keep notification text to a short summary
                </li>
                <li>
                  <strong>Resend</strong> — sends transactional email such as quotes, invoices and password resets
                </li>
                <li>
                  <strong>Amazon Web Services</strong> — hosting and infrastructure
                </li>
              </ul>
              <p>
                We do not sell personal information, and we do not share it for advertising. Any new category of
                third-party sharing will be reflected in an updated version of this policy.
              </p>
            </section>

            <section>
              <h2>6. AI processing</h2>
              <p>
                Some features send your data to third-party AI providers (Anthropic and OpenAI) to generate a result:
                pricing and margin analysis, the AI assistant, natural-language quote creation, and voice-to-quote
                transcription.
              </p>
              <ul>
                <li>
                  We send only the data needed for the request — for example route, weight, vehicle type and cost inputs
                  for a pricing analysis, or the audio clip for a transcription
                </li>
                <li>
                  Under our agreements with these providers, your data is <strong>not used to train their models</strong>
                </li>
                <li>Voice recordings are transcribed and not retained for any other purpose</li>
                <li>
                  AI output is a decision-support suggestion, not advice. You remain responsible for the pricing and
                  operational decisions you make
                </li>
              </ul>
            </section>

            <section>
              <h2>7. When TruckWys acts as an operator</h2>
              <p>
                Where a customer uploads or processes personal information about its own drivers, employees or customers
                through the platform, TruckWys generally acts as an "operator" (equivalent to a processor) on that
                customer&apos;s instruction, and the customer remains the responsible party for that information. The
                terms governing this relationship are set out in our Data Processing Agreement.
              </p>
              <p>
                If you are a driver or employee of a TruckWys customer and want to access or correct information your
                employer has entered about you, please raise it with your employer first, as they control that record.
                You may also contact our Information Officer and we will assist.
              </p>
            </section>

            <section>
              <h2>8. Cross-border transfers</h2>
              <p>
                Our primary infrastructure is hosted in South Africa, in Amazon Web Services&apos; Cape Town region, so
                your platform data is stored locally by default.
              </p>
              <p>
                Some of the providers listed in section 5 — including our AI providers, push notification services, email
                delivery, mapping and accounting integrations — process information outside South Africa. Before any such
                transfer we take reasonable steps to ensure the recipient is subject to data protection terms that
                provide an adequate level of protection, consistent with section 72 of POPIA.
              </p>
            </section>

            <section>
              <h2>9. Security safeguards</h2>
              <ul>
                <li>All traffic between the apps and our servers is encrypted in transit over TLS</li>
                <li>Stored credentials and integration tokens, such as Xero OAuth tokens, are encrypted</li>
                <li>Card data is tokenised by Paystack; no full card numbers are stored on TruckWys systems</li>
                <li>Sign-in can require a one-time code in addition to a password</li>
                <li>
                  On mobile, your session token is held in the device keychain or keystore rather than in general app
                  storage
                </li>
                <li>Access controls limit internal access to personal information on a need-to-know basis</li>
              </ul>
              <p>
                No method of transmission or storage is completely secure. If a security compromise affects your personal
                information, we will notify you and the Information Regulator as required by POPIA.
              </p>
            </section>

            <section>
              <h2>10. Data retention</h2>
              <p>
                We retain personal information for as long as necessary to provide the service and to meet our legal, tax
                and accounting obligations. Financial, invoicing and company records are retained for 7 years, in line
                with the Companies Act 71 of 2008, which sets the longer of the applicable statutory retention periods —
                the Tax Administration Act separately requires 5 years for tax-related records.
              </p>
              <p>
                Personal information that we are not required to retain under those obligations is securely deleted or
                de-identified once it is no longer needed for the purpose it was collected for.
              </p>
            </section>

            <section>
              <h2>11. Deleting your account</h2>
              <p>You can delete your account yourself, without contacting us:</p>
              <ul>
                <li>
                  <strong>Mobile app:</strong> More → Settings → Security → Delete account. You confirm with your
                  password
                </li>
                <li>
                  <strong>Web dashboard:</strong> Settings → Security → Delete account
                </li>
              </ul>
              <p>
                Deleting your account deactivates it immediately, signs you out of every device, and removes your push
                notification registrations. Records we are legally required to keep — such as invoices and financial
                transactions needed for tax and audit purposes — are retained for the statutory period set out in
                section 10 and then deleted.
              </p>
              <p>
                Deleting your own user account removes your access; it does not close your company&apos;s TruckWys
                account. Full details, including what to do if you cannot sign in, are on our{' '}
                <a href="/delete-account">account deletion page</a>. If you would prefer we handle the deletion for you,
                email <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>.
              </p>
            </section>

            <section>
              <h2>12. Your rights under POPIA</h2>
              <p>Subject to POPIA, you have the right to:</p>
              <ul>
                <li>Be notified that your personal information is being collected</li>
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Object to the processing of your personal information, in certain circumstances</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
              <p>
                To exercise any of these rights, contact our Information Officer using the details in section 1. To lodge
                a complaint, contact the Information Regulator of South Africa at{' '}
                <a href="mailto:complaints.IR@justice.gov.za">complaints.IR@justice.gov.za</a>.
              </p>
            </section>

            <section>
              <h2>13. Children&apos;s privacy</h2>
              <p>
                TruckWys is a business platform intended for use by people aged 18 and over in the course of their work.
                We do not knowingly collect personal information from children. If you believe a child has provided us
                with personal information, contact our Information Officer and we will delete it.
              </p>
            </section>

            <section>
              <h2>14. Cookies and tracking</h2>
              <p>
                The web dashboard uses cookies and similar storage that are necessary to keep you signed in and to
                remember your preferences. We do not use advertising cookies or cross-site tracking. The mobile app uses
                no cookies and contains no advertising or analytics tracking SDK.
              </p>
            </section>

            <section>
              <h2>15. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The date at the top of this page shows when it was last
                revised, and material changes will be communicated to registered users.
              </p>
            </section>

            <section>
              <h2>16. Contact us</h2>
              <p>
                For any privacy question, or to exercise a right under section 12, contact our Information Officer, Grant
                McEvoy, at <a href="mailto:grant@truckwys.com">grant@truckwys.com</a> or 084 704 1120. General privacy
                enquiries can also be sent to <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>, and app
                support to <a href="mailto:support@truckwys.com">support@truckwys.com</a>.
              </p>
              <p>TruckWys (Pty) Ltd, 12 Keurboom Road, Claremont, Cape Town, 7800, Western Cape, South Africa.</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
