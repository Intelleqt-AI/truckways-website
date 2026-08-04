import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete your account',
  description:
    'How to delete your TruckWys account and what happens to your data, including what we must retain for tax and audit purposes.',
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

// Google Play and the App Store both require a publicly reachable page (no
// sign-in) describing how to delete an account and what is erased vs retained.
// The same ground is covered in section 8 of the privacy policy; this page
// exists because the stores ask for a dedicated URL, so keep the two in step.
export default function DeleteAccountPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow eyebrow-accent mb-5">Legal</div>
          <h1 className="text-display text-ink">Delete your account</h1>
          <p className="mt-3 text-[13px] text-ink-3">Last updated: 2 August 2026</p>

          <div className="article-body measure mt-12">
            <section>
              <h2>Delete it yourself, in the app</h2>
              <p>
                You do not need to contact us or wait for approval. In the TruckWys mobile app for iOS and Android:
              </p>
              <ul>
                <li>Open <strong>More → Settings → Security</strong></li>
                <li>Tap <strong>Delete account</strong></li>
                <li>Confirm with your password</li>
              </ul>
              <p>
                On the web dashboard the path is the same: <strong>Settings → Security → Delete account</strong>.
              </p>
            </section>

            <section>
              <h2>If you cannot sign in</h2>
              <p>
                Email <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a> from the address on your account and
                we will delete it for you. We respond within 30 days, and usually far sooner. If you have forgotten your
                password you can also reset it from the sign-in screen and then delete the account yourself.
              </p>
            </section>

            <section>
              <h2>What happens immediately</h2>
              <ul>
                <li>Your account is deactivated and you are signed out of every device</li>
                <li>Your push notification registrations are removed, so the app stops notifying that handset</li>
                <li>Your name, email address, phone number and profile photo are erased</li>
                <li>Any voice recordings you made for voice quoting were never stored in the first place — they are transcribed in memory and discarded</li>
              </ul>
            </section>

            <section>
              <h2>What we have to keep, and for how long</h2>
              <p>
                Some records cannot be deleted on request because South African tax and company law requires us to keep
                them. These are retained for the statutory period — generally five years — and then deleted:
              </p>
              <ul>
                <li>Invoices, payments and other financial transaction records</li>
                <li>Records relating to a cash advance or credit facility, where one was used</li>
              </ul>
              <p>
                Business records belonging to your employer — bookings, quotes, customers and vehicles — stay with that
                company&apos;s account. Deleting your own user account removes you, not your company&apos;s operational
                history.
              </p>
            </section>

            <section>
              <h2>A note for team members</h2>
              <p>
                TruckWys accounts are created for you by your company&apos;s administrator. Deleting your account removes
                your access; it does not close your company&apos;s TruckWys account. If you need the whole company account
                closed, ask your administrator, or email us at{' '}
                <a href="mailto:privacy@truckwys.com">privacy@truckwys.com</a>.
              </p>
            </section>

            <section>
              <h2>More detail</h2>
              <p>
                Our full <a href="/privacy">Privacy policy</a> explains everything we collect, why, and who processes it
                on our behalf.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
