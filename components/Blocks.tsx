import type { ReactNode } from 'react';
import { ButtonLink, TextLink, TwoTone } from './ui';
import { demoUrl, signupUrl } from '../lib/site';
import { getImageProps } from 'next/image';

/*
 * Closing photo: "timelapse of road", Gillitts (N3 corridor), KwaZulu-Natal, by David Rama
 * (https://www.pexels.com/photo/timelapse-of-road-541333/), Pexels Licence (free commercial use,
 * no attribution required). Cropped (railing removed), desaturated, darkened, slightly cooler.
 */
function ClosingPhoto() {
  const { props } = getImageProps({ src: '/closing/n3-gillitts.jpg', alt: '', fill: true, quality: 55, sizes: 'calc(100vw - 32px)' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style: _style, ...rest } = props;
  // 120% tall (CSS) so the scroll parallax (SiteScripts, data-parallax) never shows an edge.
  return <img {...rest} className="closing__img" alt="" loading="lazy" decoding="async" data-parallax="0.08" />;
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
 * variant "default": "Get started" + "Open the demo" (text link).
 * variant "notify":  for products that are not live (Fast Pay, Insurance). "Get notified" to `notifyHref`,
 *                    plus a secondary text link (`secondary`, default: what is live today, /product).
 * Pages may pass their own a / b / line in either variant.
 */
export function Closing({
  page,
  variant = 'default',
  a,
  b,
  line,
  notifyHref = '/contact?topic=fast-pay',
  notifyLabel = 'Get notified',
  secondary,
  extra,
}: {
  page: string;
  variant?: 'default' | 'notify';
  a?: ReactNode;
  b?: ReactNode;
  line?: ReactNode;
  /** notify only: where "Get notified" goes. */
  notifyHref?: string;
  notifyLabel?: string;
  /** notify only: the text link beside the button. */
  secondary?: { href: string; label: string };
  /** Optional extra text link (e.g. "Talk to us" on About). White on the photo. */
  extra?: ReactNode;
}) {
  const notify = variant === 'notify';
  const head = {
    a: a ?? (notify ? 'Be first when Fast Pay goes live.' : 'Ready when your next load is.'),
    b: b ?? (notify ? 'Meanwhile, price, invoice and get paid.' : 'Price it, invoice it, get paid.'),
    line:
      line ??
      (notify
        ? 'Leave your details and we will tell you the day it opens. Quoting, invoicing and debtors are live today, on one plan.'
        : 'One plan for your whole team. Load your customers, trucks and rates yourself, and price your first load the same day.'),
  };
  const sec = secondary ?? { href: '/product', label: 'See what is live today' };
  return (
    <section className="closing" aria-labelledby="closing-h">
      <div className="closing__frame" data-theme="dark" data-pframe>
        <ClosingPhoto />
        <div className="closing__scrim" aria-hidden="true" />
        <div className="closing__text">
          <TwoTone id="closing-h" a={head.a} b={head.b} />
          <p className="closing__line">{head.line}</p>
          <div className="closing__ctas">
            {notify ? (
              <>
                <ButtonLink href={notifyHref} cta="notify" loc="closing">
                  {notifyLabel}
                </ButtonLink>
                <TextLink href={sec.href} loc="closing" className="closing__demo">
                  {sec.label}
                </TextLink>
              </>
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
            {extra}
          </div>
        </div>
        <ul className="closing__words list-reset" aria-hidden="true">
          <li>Price</li>
          <li>Invoice</li>
          <li>Get paid</li>
        </ul>
        <p className="closing__place">N3 at Gillitts, KwaZulu-Natal</p>
      </div>
    </section>
  );
}
