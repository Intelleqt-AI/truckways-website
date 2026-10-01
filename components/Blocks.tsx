import type { ReactNode } from 'react';
import { ButtonLink, TextLink, TwoTone } from './ui';
import { CONTACT_EMAIL, demoUrl, signupUrl } from '../lib/site';
import { getImageProps } from 'next/image';

/*
 * Closing photos, one per page family (fix round 8). All sharp: blur is only for backdrops behind product UI.
 *  - n3 (default, product and marketing pages): "timelapse of road", Gillitts (N3 corridor), KwaZulu-Natal, by David Rama
 *    (https://www.pexels.com/photo/timelapse-of-road-541333/), Pexels Licence. Cropped (railing removed), desaturated,
 *    darkened, slightly cooler.
 *  - durban (Fast Pay family): the Port of Durban band photo, credited in components/FastPayBand.tsx.
 *  - midrand (About family) and franschhoek (Insurance family): the hero photos of those pages, credited there.
 */
const PHOTOS = {
  n3: { src: '/closing/n3-gillitts.jpg', place: 'N3 at Gillitts, KwaZulu-Natal', pos: '50% 55%', posPhone: '62% 55%' },
  durban: { src: '/bands/durban-port.jpg', place: 'Port of Durban, KwaZulu-Natal', pos: '50% 50%', posPhone: '58% 50%' },
  midrand: { src: '/bands/about-n1-midrand.jpg', place: 'N1 at Midrand, Gauteng', pos: '50% 50%', posPhone: '50% 50%' },
  franschhoek: { src: '/bands/insurance-franschhoek-pass.jpg', place: 'Franschhoek Pass, Western Cape', pos: '50% 50%', posPhone: '50% 50%' },
} as const;
export type ClosingPhotoName = keyof typeof PHOTOS;

function ClosingPhoto({ name }: { name: ClosingPhotoName }) {
  const ph = PHOTOS[name];
  const { props } = getImageProps({ src: ph.src, alt: '', fill: true, quality: 55,
    // Cover-scaled into a tall frame on phones (560px x 120%), so the image is drawn far wider than the viewport there.
    sizes: '(max-width: 767px) 250vw, (max-width: 1023px) 130vw, calc(100vw - 32px)',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style: _style, ...rest } = props;
  // 120% tall (CSS) so the scroll parallax (SiteScripts, data-parallax) never shows an edge.
  return (
    <img
      {...rest}
      className="closing__img"
      alt=""
      loading="lazy"
      decoding="async"
      data-parallax="0.08"
      style={{ ['--pos' as string]: ph.pos, ['--pos-phone' as string]: ph.posPhone }}
    />
  );
}

/**
 * Visible breadcrumbs removed (owner, 1 Oct 2026): marketing pages don't show a dashboard-style trail.
 * The BreadcrumbList JSON-LD (lib/schema.ts breadcrumbSchema) stays on each page for search.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Breadcrumbs(_props: { trail: { name: string; path: string }[] }) {
  return null;
}

/** Flott calm page hero: white, left-aligned two-tone H1, lead, optional buttons. */
export function PageHero({ a, b, lead, children, crumbs }: { a: ReactNode; b?: ReactNode; lead?: ReactNode; children?: ReactNode; crumbs?: ReactNode }) {
  return (
    <section className="phero">
      <div className="wrap">
        {crumbs}
        <TwoTone as="h1" className="h1" a={a} b={b} />
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

/**
 * The closing section for Home and every subpage (owner, R4): a photo band with a two-tone H2, one line, the
 * blue button and a text link. No price line, no panel, no screenshot.
 *
 * variant "default": "Get started" + "Open the demo" (text link), with PRICE / INVOICE / GET PAID bottom right.
 * variant "notify":  for products that are not live (Fast Pay, Insurance). "Get notified" to `notifyHref`,
 *                    plus a secondary text link (`secondary`, default: what is live today, /product).
 *                    A quiet "Coming soon" bottom right instead of the three words.
 * variant "contact": for /contact. Defaults "A person replies." / "Usually the same working day.", an
 *                    "Email us" button (mailto CONTACT_EMAIL, or `primary`) and an optional `secondary` text link.
 * `photo` picks the band photo; by default it follows the page family (capital: durban, else n3).
 * Pages may pass their own a / b / line in any variant.
 */
export function Closing({
  page,
  variant = 'default',
  photo,
  a,
  b,
  line,
  notifyHref = '/contact?topic=fast-pay',
  notifyLabel = 'Get notified',
  primary,
  secondary,
  extra,
}: {
  page: string;
  variant?: 'default' | 'notify' | 'contact';
  /** Band photo. Default: 'durban' on the Fast Pay family (page "capital"), else 'n3'. */
  photo?: ClosingPhotoName;
  a?: ReactNode;
  b?: ReactNode;
  line?: ReactNode;
  /** notify only: where "Get notified" goes. */
  notifyHref?: string;
  notifyLabel?: string;
  /** contact only: the blue button. Default { href: mailto:CONTACT_EMAIL, label: 'Email us' }. */
  primary?: { href: string; label: string };
  /** notify and contact: the text link beside the button (notify default: /product "See what is live today"). */
  secondary?: { href: string; label: string };
  /** Optional extra text link (e.g. "Talk to us" on About). White on the photo. */
  extra?: ReactNode;
}) {
  const notify = variant === 'notify';
  const contact = variant === 'contact';
  const photoName: ClosingPhotoName = photo ?? (page === 'capital' ? 'durban' : 'n3');
  const ph = PHOTOS[photoName];
  const head = {
    a: a ?? (notify ? 'Be first when Fast Pay goes live.' : contact ? 'A person replies.' : 'Ready when your next load is.'),
    b: b ?? (notify ? 'Meanwhile, price, invoice and get paid.' : contact ? 'Usually the same working day.' : 'Price it, invoice it, get paid.'),
    line:
      line ??
      (notify
        ? 'Leave your details and we will tell you the day it opens. Quoting, invoicing and debtors are live today, on one plan.'
        : contact
          ? `Write to ${CONTACT_EMAIL} or use the form above. We reply by email on South African working days.`
          : 'One plan for your whole team. Load your customers, trucks and rates yourself, and price your first load the same day.'),
  };
  const sec = secondary ?? (notify ? { href: '/product', label: 'See what is live today' } : undefined);
  const pri = primary ?? { href: `mailto:${CONTACT_EMAIL}`, label: 'Email us' };
  return (
    <section className={`closing closing--${variant}`} aria-labelledby="closing-h">
      <div className="closing__frame" data-theme="dark" data-pframe>
        <ClosingPhoto name={photoName} />
        <div className="closing__scrim" aria-hidden="true" />
        <div className="closing__text">
          <TwoTone id="closing-h" a={head.a} b={head.b} />
          <p className="closing__line">{head.line}</p>
          <div className="closing__ctas">
            {notify ? (
              <ButtonLink href={notifyHref} cta="notify" loc="closing">
                {notifyLabel}
              </ButtonLink>
            ) : contact ? (
              <ButtonLink href={pri.href} cta="talk_to_us" loc="closing">
                {pri.label}
              </ButtonLink>
            ) : (
              <>
                <ButtonLink href={signupUrl(`${page}-cta`)} cta="get_started" loc="closing">
                  Get started
                </ButtonLink>
                <TextLink href={demoUrl(`${page}-cta`)} cta="open_demo" loc="closing" className="closing__demo">
                  Open the demo
                </TextLink>
              </>
            )}
            {sec && (notify || contact) ? (
              <TextLink href={sec.href} loc="closing" className="closing__demo">
                {sec.label}
              </TextLink>
            ) : null}
            {extra}
          </div>
        </div>
        {variant === 'default' ? (
          <ul className="closing__words list-reset" aria-hidden="true">
            <li>Price</li>
            <li>Invoice</li>
            <li>Get paid</li>
          </ul>
        ) : notify ? (
          <p className="closing__words closing__soon" aria-hidden="true">
            Coming soon
          </p>
        ) : null}
        <p className="closing__place">{ph.place}</p>
      </div>
    </section>
  );
}
