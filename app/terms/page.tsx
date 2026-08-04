import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and conditions',
  description:
    'The agreement governing access to and use of the TruckWys platform, including fees, the mobile app licence, and South African consumer and data protection provisions.',
  alternates: {
    canonical: 'https://www.truckwys.com/terms',
  },
  openGraph: {
    title: 'Terms and conditions | TruckWys',
    url: 'https://www.truckwys.com/terms',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Clause 7 (Mobile app licence) is required by the app stores. Apple will not
// accept custom terms without the App Store provisions at the end of it —
// particularly Apple as third-party beneficiary, and Apple carrying no support
// or warranty obligation. Do not trim that list.
//
// The fee figures in clause 5 are the real ones, checked against
// core/services/paystack.py (MONTHLY_FEE = 4499.00) and
// core/services/delivery_fee_billing.py (DELIVERY_FEE_PCT = 0.25, charged the
// moment a load auto-invoices on delivery). Changing a price in code means
// changing it here in the same release.
export default function TermsPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Terms and conditions</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 4 August 2026</p>

          <div className="article-body measure mt-12">
            <section>
              <h2>1. Who this agreement is between</h2>
              <p>
                These Terms and Conditions ("Agreement") govern access to and use of the TruckWys platform, provided by
                TruckWys (Pty) Ltd, registration number 2025/773091/07 ("TruckWys", "we", "us"), by the customer that
                accepts this Agreement ("Customer", "you"). By creating an account, clicking to accept, or using the
                platform, you agree to be bound by this Agreement.
              </p>
              <p>TruckWys (Pty) Ltd, 12 Keurboom Road, Claremont, Cape Town, 7800, Western Cape, South Africa.</p>
            </section>

            <section>
              <h2>2. Definitions</h2>
              <ul>
                <li>
                  <strong>"Platform"</strong> means the TruckWys software-as-a-service application, including quoting,
                  invoicing, trip profitability tracking and related features, accessed through the web dashboard or the
                  mobile app.
                </li>
                <li>
                  <strong>"Subscription Fee"</strong> means the recurring monthly fee payable for access to the Platform.
                </li>
                <li>
                  <strong>"Invoice Fee"</strong> means the success fee payable on freight invoices processed through the
                  Platform.
                </li>
                <li>
                  <strong>"Factoring Referral"</strong> means the optional introduction to our invoice financing partner
                  described in clause 10.
                </li>
                <li>
                  <strong>"Customer Data"</strong> means data uploaded to or generated within the Platform by or on behalf
                  of the Customer, including personal information as defined in POPIA.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. The service</h2>
              <p>
                TruckWys grants the Customer a non-exclusive, non-transferable right to access and use the Platform for
                the Customer&apos;s internal business purposes for the term of this Agreement, subject to payment of the
                applicable fees and compliance with this Agreement.
              </p>
              <p>
                TruckWys may modify, add to or discontinue features of the Platform from time to time, provided that we
                will give reasonable notice of any change that materially reduces core functionality.
              </p>
            </section>

            <section>
              <h2>4. Accounts and access</h2>
              <p>
                TruckWys is a business platform. A company account is created by the Customer, and the Customer&apos;s
                administrator then provisions accounts for its own staff. There is no public sign-up in the mobile app.
              </p>
              <p>
                The Customer is responsible for keeping account credentials confidential, for all activity under its
                accounts, and for promptly removing access for people who leave. Notify us at{' '}
                <a href="mailto:support@truckwys.com">support@truckwys.com</a> if you believe an account has been
                compromised.
              </p>
            </section>

            <section>
              <h2>5. Fees and payment</h2>

              <h3>5.1 Subscription Fee</h3>
              <p>
                The Customer will pay a Subscription Fee of R4,499 per month per fleet, or such other amount as set out in
                the applicable order form or on our pricing page, including any tiered pricing applicable to larger fleets.
              </p>

              <h3>5.2 Invoice Fee</h3>
              <p>
                TruckWys charges an Invoice Fee of 0.25% of the value of each freight invoice processed through the
                Platform. This fee is charged when a delivery is completed and the invoice is raised, not batched monthly.
              </p>

              <h3>5.3 Payment processing</h3>
              <p>
                Fees are collected via our payment gateway, Paystack, using a tokenised payment method provided by the
                Customer. The Customer authorises TruckWys to charge the Subscription Fee and the Invoice Fee to that
                payment method as they fall due. We do not receive or store full card numbers.
              </p>

              <h3>5.4 Non-payment, grace period and suspension</h3>
              <p>
                If a payment fails, the Customer&apos;s account enters a grace period of 7 days, during which the Customer
                keeps full access, TruckWys will retry the charge, and we will notify the Customer. Any successful charge
                during the grace period restores the account immediately. If payment is not collected within the grace
                period, the account is suspended and the ability to create quotes and invoices is restricted until the
                outstanding amount is paid. Continued non-payment may result in cancellation of the account.
              </p>

              <h3>5.5 Taxes</h3>
              <p>All fees are exclusive of VAT, which will be added where applicable.</p>
            </section>

            <section>
              <h2>6. Term and termination</h2>
              <p>
                This Agreement commences on the date the Customer accepts it and continues on a month-to-month basis until
                terminated by either party on 30 days&apos; written notice. TruckWys may suspend or terminate the
                Customer&apos;s account immediately for material breach of this Agreement, non-payment beyond the grace
                period described in clause 5.4, or misuse of the Platform.
              </p>
              <p>
                On termination, the Customer&apos;s right to access the Platform ends, and TruckWys will make Customer
                Data available for export for a period of 30 days, after which it may be deleted in accordance with our{' '}
                <Link href="/privacy">Privacy Policy</Link> and Data Processing Agreement. Records we are required by law
                to retain are kept for the statutory period described in section 10 of the Privacy Policy.
              </p>
            </section>

            <section>
              <h2>7. Mobile app licence</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable licence to install and use the TruckWys
                mobile app on devices you own or control, solely to access your TruckWys account. This licence ends when
                your account or this Agreement ends.
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
                <li>
                  <strong>Microphone</strong> — to record a voice quote
                </li>
                <li>
                  <strong>Photo library</strong> — to attach a proof of delivery, profile picture, or company logo
                </li>
                <li>
                  <strong>Notifications</strong> — to receive operational alerts about your bookings and invoices
                </li>
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
                  infringes that party&apos;s intellectual property rights.
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
                If you obtained the app from Google Play, Google&apos;s Play Terms of Service apply to the distribution of
                the app in addition to these terms.
              </p>
            </section>

            <section>
              <h2>8. Customer obligations</h2>
              <ul>
                <li>Provide accurate account, billing and payment information, and keep it up to date</li>
                <li>Use the Platform only for lawful purposes related to freight quoting, invoicing and fleet management</li>
                <li>
                  Ensure that any personal information uploaded to the Platform — for example driver details — is uploaded
                  lawfully, and that the Customer has the necessary rights and consents to do so
                </li>
                <li>Not attempt to reverse-engineer, resell, or provide unauthorised third parties access to the Platform</li>
              </ul>
            </section>

            <section>
              <h2>9. AI features</h2>
              <p>
                Our AI features — pricing and margin analysis, the AI assistant, natural-language quote creation and
                voice-to-quote transcription — are decision-support tools. They do not constitute financial, legal or
                professional advice.
              </p>
              <p>
                You remain responsible for all business decisions. TruckWys does not warrant that quotes, toll calculations
                or profitability figures generated by the Platform will be error-free, and you remain responsible for
                verifying figures before relying on them commercially. How these features process your data is described in
                section 6 of our <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2>10. Invoice financing (factoring) referral</h2>
              <p>
                Where the Customer opts in, TruckWys may introduce the Customer to Merchant Capital, an independent invoice
                financing provider, for the purposes of factoring the Customer&apos;s invoices.
              </p>
              <p>
                TruckWys is not a credit provider and does not itself provide, underwrite or guarantee any factoring or
                financing arrangement. Any factoring agreement is entered into directly between the Customer and Merchant
                Capital, on Merchant Capital&apos;s own terms, and is subject to Merchant Capital&apos;s own credit
                assessment and approval — including its own fees and interest rates. TruckWys accepts no liability for the
                terms, approval, performance or outcome of any such arrangement.
              </p>
            </section>

            <section>
              <h2>11. Third-party services</h2>
              <p>
                The Platform integrates with third-party services, including Paystack (payments), Xero (accounting sync,
                where connected by the Customer), TomTom (routing) and MapTiler (map imagery), and relies on Anthropic and
                OpenAI for AI features, Google Firebase Cloud Messaging and the Apple Push Notification service for push
                notifications, Resend for transactional email, and Amazon Web Services for hosting.
              </p>
              <p>
                Use of these integrations may be subject to the relevant third party&apos;s own terms. TruckWys is not
                responsible for the availability or performance of third-party services outside its reasonable control. The
                full list of providers that process personal information is in section 5 of our{' '}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2>12. Data protection</h2>
              <p>
                TruckWys will process personal information in accordance with POPIA, our{' '}
                <Link href="/privacy">Privacy Policy</Link>, and — where TruckWys acts as an operator on the
                Customer&apos;s behalf — the Data Processing Agreement incorporated by reference into this Agreement.
                Information about how to request access to records we hold is in our{' '}
                <Link href="/paia-manual">PAIA Manual</Link>.
              </p>
            </section>

            <section>
              <h2>13. Intellectual property</h2>
              <p>
                TruckWys retains all right, title and interest in and to the Platform, including all software, design and
                underlying technology. This Agreement does not transfer any intellectual property rights to the Customer.
                Customer Data remains the property of the Customer.
              </p>
            </section>

            <section>
              <h2>14. Warranties and disclaimers</h2>
              <p>
                TruckWys will use reasonable skill and care in providing the Platform. Except as expressly stated in this
                Agreement, the Platform is provided "as is", and TruckWys disclaims all other warranties, whether express
                or implied, to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2>15. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, TruckWys&apos;s total liability arising out of or in connection
                with this Agreement is limited to the total Subscription Fees paid by the Customer in the 3 months
                preceding the event giving rise to the claim. Neither party is liable for indirect, special or
                consequential loss, including loss of profit or loss of business opportunity.
              </p>
              <p>
                Nothing in this clause limits liability that cannot be limited under South African law, including liability
                arising from gross negligence, wilful misconduct, or breach of POPIA to the extent such limitation is not
                permitted. Where the Customer is protected by the Consumer Protection Act 68 of 2008, nothing in this
                Agreement limits or excludes any right that Act gives you, and any provision that would do so does not
                apply to you.
              </p>
            </section>

            <section>
              <h2>16. Indemnity</h2>
              <p>
                The Customer indemnifies TruckWys against any claim, loss or damage arising from the Customer&apos;s breach
                of this Agreement, unlawful use of the Platform, or unlawful upload of personal information to the
                Platform.
              </p>
            </section>

            <section>
              <h2>17. Confidentiality</h2>
              <p>
                Each party will keep confidential any non-public information disclosed by the other party in connection
                with this Agreement, and use it only for the purposes of this Agreement.
              </p>
            </section>

            <section>
              <h2>18. Online transaction disclosures</h2>
              <p>
                In accordance with section 43 of the Electronic Communications and Transactions Act 25 of 2002,
                TruckWys&apos;s full name, company registration number, physical address and pricing information are made
                available on the TruckWys website wherever the Customer transacts with TruckWys online, including at
                sign-up and checkout.
              </p>
            </section>

            <section>
              <h2>19. Governing law and disputes</h2>
              <p>
                This Agreement is governed by the laws of the Republic of South Africa. The parties will attempt to resolve
                any dispute through good-faith negotiation before resorting to litigation in the courts of South Africa,
                which have exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2>20. General</h2>
              <ul>
                <li>
                  This Agreement, together with the <Link href="/privacy">Privacy Policy</Link> and the Data Processing
                  Agreement, constitutes the entire agreement between the parties regarding its subject matter.
                </li>
                <li>
                  TruckWys may update this Agreement from time to time. Material changes will be notified to the Customer,
                  and continued use of the Platform after such notice constitutes acceptance.
                </li>
                <li>
                  If any provision of this Agreement is found invalid or unenforceable, the remaining provisions continue
                  in full force.
                </li>
                <li>Neither party is liable for delay or failure to perform due to events beyond its reasonable control.</li>
                <li>
                  Notices under this Agreement should be sent to{' '}
                  <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>, or to the registered address in clause 1, or
                  to the Customer&apos;s registered account email address.
                </li>
              </ul>
            </section>

            <section>
              <h2>21. Contact</h2>
              <p>
                For questions about this Agreement, contact us at{' '}
                <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>. For app support, contact{' '}
                <a href="mailto:support@truckwys.com">support@truckwys.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
