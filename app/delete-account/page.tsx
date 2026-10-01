import type { Metadata } from 'next';
import LegalPage from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Delete your account',
  description:
    'How to deactivate your TruckWys account, what that does and does not remove, and how to ask us to erase your personal information.',
  alternates: {
    canonical: 'https://www.truckwys.com/delete-account',
  },
  openGraph: {
    title: 'Delete your account | TruckWys',
    url: 'https://www.truckwys.com/delete-account',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The App Store requires a publicly reachable page (no sign-in) describing how
// to delete an account and what is erased vs retained. Section 11 of the
// privacy policy covers the same ground, so keep the two in step.
//
// What the code does today (truckwys-backend core/views.py DeleteAccountView):
// is_active=False, status INACTIVE, email and username prefixed "deleted-<tag>",
// all sessions deleted. Nothing else is removed. Do not describe erasure here
// until the backend actually erases data.
export default function DeleteAccountPage() {
  return (
    <LegalPage title="Delete your account" updated="1 October 2026">
    <section>
      <h2>Deactivate it yourself</h2>
      <p>You do not need to contact us or wait for approval. In the TruckWys app for iPhone:</p>
      <ul>
        <li>Open <strong>More → Settings → Security</strong></li>
        <li>Tap <strong>Delete account</strong></li>
        <li>Confirm with your password</li>
      </ul>
      <p>
        On the web dashboard: <strong>Settings → Security → Delete my account</strong>, then confirm with your
        password.
      </p>
      <p>
        If you are your company&apos;s only administrator and other people still use the account, make one of
        them an administrator first.
      </p>
    </section>

    <section>
      <h2>What happens straight away</h2>
      <ul>
        <li>Your account is deactivated and you are signed out of every device</li>
        <li>
          Your email address is replaced with a marked copy, so you can sign up again with the same address
          later
        </li>
        <li>
          Voice recordings you made for voice quoting were never stored: they are transcribed and then
          discarded
        </li>
      </ul>
    </section>

    <section>
      <h2>What deactivating does not do</h2>
      <p>
        Deactivating your account does not erase your personal information. Your name, phone number, address,
        job title and profile photo, your notification registrations and your Copilot history stay stored, and
        your company&apos;s administrator can reactivate the account. Records you created for your company,
        such as quotes, loads, invoices and customers, stay with your company&apos;s account.
      </p>
    </section>

    <section>
      <h2>Ask us to erase your personal information</h2>
      <p>
        Email our Information Officer, Grant McEvoy, at{' '}
        <a href="mailto:grant@truckwys.com">grant@truckwys.com</a>, from the address on your account if you can.
        This also works if you cannot sign in. We will erase or de-identify the personal information we are not
        required to keep, tell you what we have kept and why, and reply within 30 days.
      </p>
    </section>

    <section>
      <h2>What we have to keep, and for how long</h2>
      <p>
        Some records cannot be erased on request because South African tax and company law requires us to keep
        them: invoices, payments and other financial transaction records. The Tax Administration Act requires
        tax records to be kept for 5 years, and the Companies Act 71 of 2008 requires company and accounting
        records to be kept for 7 years. We keep these records for 7 years. We do not yet delete them
        automatically when that period ends; you can ask the Information Officer to do so then.
      </p>
    </section>

    <section>
      <h2>A note for team members</h2>
      <p>
        Deactivating your own account removes your access; it does not close your company&apos;s TruckWys
        account. If you need the whole company account closed, ask your administrator to give 30 days&apos;
        written notice under clause 6 of our <a href="/terms">Terms and conditions</a>.
      </p>
    </section>

    <section>
      <h2>More detail</h2>
      <p>
        Our full <a href="/privacy">Privacy policy</a> explains everything we collect, why, and who processes it
        on our behalf.
      </p>
    </section>
    </LegalPage>
  );
}
