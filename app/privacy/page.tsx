import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';

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
//   1. Section 3.5's explicit statement that the app collects no device
//      location and carries no advertising or analytics SDK. Vehicle location
//      from connected trackers (3.2) is a separate, disclosed category.
//   2. Section 11, account deletion, which both stores require to be described
//      on a page reachable without signing in (see also /delete-account).
//   3. The processor list in section 5. Every third party that receives
//      personal information has to appear, so adding an integration means
//      adding it here in the same change.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="1 October 2026">
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
          <strong>Information Officer:</strong> Grant McEvoy:{' '}
          <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>, 084 704 1120
        </li>
      </ul>
      <p>
        This policy covers the TruckWys web dashboard and the TruckWys mobile app for iPhone, which is available
        in South Africa. An Android app is not available yet. Where a practice applies only to the mobile app, we
        say so.
      </p>
    </section>

    <section>
      <h2>2. Who this policy is for</h2>
      <p>
        TruckWys is a business platform. Accounts are created for staff by their company&apos;s administrator:
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
        <li>
          Driver names, contact details, licence number and expiry, medical certificate expiry and emergency
          contact details, entered by the fleet operator
        </li>
        <li>
          Vehicle registration, axle configuration, and route and trip data used for quoting and toll
          calculation
        </li>
        <li>
          Where the fleet operator connects a vehicle tracking system (Cartrack or CtrlFleet) or sends trip
          updates through our API: vehicle location, heading, speed and ignition status. This comes from the
          tracking system, not from your phone
        </li>
        <li>Proof of delivery documents, signatures and the name of the person who received the load</li>
      </ul>

      <h3>3.3 Invoicing and financial information</h3>
      <ul>
        <li>Invoice line items, trip profitability data, and customer or shipper billing details</li>
        <li>
          Payment card data, tokenised and processed by our payment gateway, Paystack: TruckWys never receives
          or stores full card numbers. We hold only a token, the card type and its last four digits
        </li>
        <li>Your company&apos;s bank details, which you add so that they appear on your invoices</li>
      </ul>

      <h3>3.4 Technical information</h3>
      <ul>
        <li>
          Sign-in and usage logs, IP address, device and browser information. Activity logs that record IP
          addresses are deleted after 30 days
        </li>
        <li>If you switch on browser notifications, the push subscription your browser issues</li>
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
          when you tap to record. The recording is transcribed into quote details and then discarded: it is
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
          <strong>Messages you type to Copilot.</strong> Sent to our language-model provider to generate a reply.
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
        <li>To charge the 0,25% invoice fee and manage subscription billing via Paystack</li>
        <li>To calculate routes, distances and tolls, using third-party routing data where needed</li>
        <li>
          To work out pooled market rates and train our win probability model from quote outcomes across
          customers, without customer or company names (see section 6)
        </li>
        <li>To show vehicle locations, where a customer connects a tracking system</li>
        <li>To send transactional and collections communications</li>
        <li>
          Once available, to sync invoicing data with accounting platforms such as Xero or QuickBooks, where a customer connects their account
        </li>
        <li>To secure accounts, including one-time sign-in codes, and fraud and card-health monitoring</li>
        <li>To comply with legal, tax and regulatory obligations</li>
      </ul>
      <p>
        Our lawful basis for processing is primarily performance of the SaaS agreement with the customer,
        together with consent (for optional integrations such as Xero, Cartrack or CtrlFleet) and legitimate
        business interests (such as fraud prevention, service security, and improving price suggestions with
        pooled quote outcomes).
      </p>
    </section>

    <section>
      <h2>5. Sharing your information</h2>
      <p>
        We share personal information with the following third parties, only as needed to provide the service.
        Except for the public OpenStreetMap services, they process it on our behalf, under contract.
      </p>
      <ul>
        <li>
          <strong>Paystack</strong>: subscription payment processing and card tokenisation
        </li>
        <li>
          <strong>Xero and QuickBooks</strong>: accounting sync, once available and only where a customer connects their account
        </li>
        <li>
          <strong>Cartrack</strong> and <strong>CtrlFleet</strong>: vehicle tracking, only where a customer
          connects their account. We send them the customer&apos;s API credentials and receive vehicle data
        </li>
        <li>
          <strong>TomTom</strong>: address search, route, distance and travel-time data, and map imagery in the
          web dashboard
        </li>
        <li>
          <strong>OpenStreetMap services</strong> (Nominatim address search, the OSRM routing service and
          OpenStreetMap map tiles): used by the web dashboard as a fallback when TomTom is unavailable. Your
          browser sends them the addresses or map area involved and your IP address
        </li>
        <li>
          <strong>MapTiler</strong>, using OpenStreetMap data: supplies the map imagery on route previews.
          Loading map tiles reveals your IP address and the approximate map area to the tile provider, as with
          any web map
        </li>
        <li>
          <strong>OpenAI</strong>: Copilot replies, price suggestion explanations and voice transcription.{' '}
          <strong>Anthropic</strong>: written summaries and quote parsing, where switched on. See section 6
        </li>
        <li>
          <strong>Google Firebase Cloud Messaging</strong> and <strong>Apple Push Notification service</strong>:
          deliver push notifications to the mobile app, and web browser push services deliver browser
          notifications if you switch them on. The notification title and body pass through their
          infrastructure, which is why we keep notification text to a short summary
        </li>
        <li>
          <strong>Resend</strong>: sends transactional email such as quotes, invoices, reminders and sign-in codes
        </li>
        <li>
          <strong>Amazon Web Services</strong>: hosting and infrastructure, in the Cape Town region
        </li>
        <li>
          <strong>Vercel</strong>: serves the web dashboard&apos;s pages to your browser, hosts this website and
          provides the website&apos;s Web Analytics, which counts page views
          and button clicks without cookies and without identifying you. See section 14
        </li>
        <li>
          <strong>FormSubmit</strong> (formsubmit.co): delivers messages sent through the Talk to us form on
          this website to our mailbox, after a check that the sender is not a robot. See section 14
        </li>
      </ul>
      <p>
        We do not sell personal information, and we do not share it for advertising. Any new category of
        third-party sharing will be reflected in an updated version of this policy.
      </p>
    </section>

    <section>
      <h2>6. Price suggestions, models and Copilot</h2>
      <p>
        Quote costs (diesel, tolls and your own rates) are calculated by formula, not by a model. Other features
        use models, as follows:
      </p>
      <ul>
        <li>
          <strong>Market rate.</strong> We pool accepted quotes on the same route across TruckWys customers. A
          pooled rate is shown only where at least five quotes from at least two different operators exist, so
          no single operator&apos;s prices can be identified
        </li>
        <li>
          <strong>Win probability.</strong> Our own model, run on TruckWys systems, estimates how likely a quote
          is to be accepted. It is trained on quote outcomes pooled across TruckWys customers, using quote
          features such as route, vehicle type, price and timing, without customer or company names, and on
          your own outcomes once there are enough of them
        </li>
        <li>
          <strong>Price suggestion.</strong> Where it is switched on, a language model (OpenAI) receives the
          cost breakdown, market rate and suggested price range for the load, and may adjust the suggestion
          within 10%, never below cost
        </li>
        <li>
          <strong>Copilot</strong> uses a language model (OpenAI) to answer questions from your company&apos;s
          data and to propose changes. It never changes data on its own: a change is carried out only when you
          approve it
        </li>
        <li>
          <strong>Voice quoting</strong> sends the audio clip to OpenAI&apos;s speech-to-text service
        </li>
        <li>
          We send only the data needed for the request, for example route, vehicle type and cost inputs for a
          price suggestion, or the audio clip for a transcription
        </li>
        <li>
          Under our agreements with these providers, your data is <strong>not used to train their models</strong>
        </li>
        <li>Voice recordings are transcribed and not retained for any other purpose</li>
        <li>
          Model output is a decision-support suggestion, not advice. You remain responsible for the pricing and
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
        Our primary infrastructure is hosted in South Africa, in Amazon Web Services&apos; Cape Town region
        (af-south-1), so your platform data is stored locally by default.
      </p>
      <p>
        These providers listed in section 5 process information outside South Africa: OpenAI and Anthropic
        (language-model and speech-to-text features), Google Firebase Cloud Messaging, the Apple Push
        Notification service and browser push services (notifications), Resend (email), TomTom, MapTiler and the
        OpenStreetMap services (maps and routing), Xero and QuickBooks (accounting sync, once available and where connected), Vercel (web dashboard
        pages, this website and its analytics) and FormSubmit (website enquiries). Paystack may also process
        payment information outside South Africa.
      </p>
      <p>
        We transfer personal information to them under section 72 of POPIA: where the recipient is bound by law,
        binding corporate rules or an agreement that provides an adequate level of protection, or where the
        transfer is necessary to perform our agreement with you or you have consented to it.
      </p>
    </section>

    <section>
      <h2>9. Security safeguards</h2>
      <ul>
        <li>All traffic between the apps and our servers is encrypted in transit over TLS</li>
        <li>Stored credentials and integration tokens, such as accounting-platform sign-in tokens, are encrypted</li>
        <li>Card data is tokenised by Paystack; no full card numbers are stored on TruckWys systems</li>
        <li>
          Every new account confirms its email address with a one-time code, and each user can switch on a
          one-time sign-in code in addition to their password
        </li>
        <li>
          On iPhone, your session token is held in the device keychain rather than in general app storage
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
        with the Companies Act 71 of 2008, which sets the longer of the applicable statutory retention periods:
        the Tax Administration Act separately requires 5 years for tax-related records.
      </p>
      <p>
        We do not yet delete these records automatically when the retention period ends. Activity logs that
        record IP addresses are deleted automatically after 30 days. For anything else, you can ask our
        Information Officer to delete or de-identify personal information we are no longer required to keep,
        and we will do so, or tell you why we cannot.
      </p>
    </section>

    <section>
      <h2>11. Deleting your account</h2>
      <p>You can deactivate your account yourself, without contacting us:</p>
      <ul>
        <li>
          <strong>Mobile app:</strong> More → Settings → Security → Delete account. You confirm with your
          password
        </li>
        <li>
          <strong>Web dashboard:</strong> Settings → Security → Delete my account. You confirm with your
          password
        </li>
      </ul>
      <p>
        This deactivates your account immediately and signs you out of every device. Your email address is
        replaced with a marked copy, so you can sign up again with the same address. It does not erase your
        other personal information: your name, phone number, address, job title, profile photo, notification
        registrations and Copilot history stay stored, and your company&apos;s administrator can reactivate the
        account.
      </p>
      <p>
        To have your personal information erased, email our Information Officer at{' '}
        <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>. We will erase or de-identify everything we
        are not required to keep, and tell you what we must retain and why (see section 10). Deactivating your
        own user account does not close your company&apos;s TruckWys account. Full details are on our{' '}
        <a href="/delete-account">account deletion page</a>.
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
      <p>
        <strong>This website.</strong> www.truckwys.com sets no cookies. We measure how the site is used with
        Vercel Web Analytics, which records aggregate page views and clicks on buttons such as Get started,
        without cookies, without identifying you and without following you to other sites. Vercel
        processes this data outside South Africa; we rely on section 72 of POPIA for that transfer, as
        described in section 8.
      </p>
      <p>
        <strong>The Talk to us form.</strong> When you send the form, your name, work email, company, fleet
        size, topic and message go to FormSubmit (formsubmit.co), which emails them to us. FormSubmit shows a
        check that you are not a robot before it sends, and the form has a hidden field that catches automated
        spam. FormSubmit processes the message outside South Africa. We use these details only to reply to
        you.
        {/* TODO(owner): state how long website enquiries are kept (brief §12). */}
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
    </LegalPage>
  );
}
