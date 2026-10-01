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
  const { props } = getImageProps({ src: '/closing/n3-gillitts.jpg', alt: '', fill: true, quality: 70, sizes: 'calc(100vw - 32px)' });
  return <img {...props} className="closing__img" alt="" loading="lazy" decoding="async" />;
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
 * The closing section for Home and every subpage (owner, R4): page ground, a two-tone H2, one line, the
 * blue "Get started" with the price line, and "Open the demo" as a text link only. No panel, no screenshot.
 */
export function Closing({
  page,
  a = 'Ready when your next load is.',
  b = 'Price it, invoice it, get paid.',
  line = 'One plan for your whole team. Load your customers, trucks and rates yourself, and price your first load the same day.',
  extra,
}: {
  page: string;
  a?: ReactNode;
  b?: ReactNode;
  line?: ReactNode;
  /** Optional extra text link (e.g. "Talk to us" on About). */
  extra?: ReactNode;
}) {
  return (
    <section className="closing" aria-labelledby="closing-h">
      <div className="closing__frame" data-theme="dark">
        <ClosingPhoto />
        <div className="closing__scrim" aria-hidden="true" />
        <div className="closing__text">
          <TwoTone id="closing-h" a={a} b={b} />
          <p className="closing__line">{line}</p>
          <div className="closing__ctas">
            <ButtonLink href={signupUrl(`${page}-cta`)} cta="get_started" loc="closing">
              Get started
            </ButtonLink>
            <TextLink href={demoUrl(`${page}-cta`)} cta="open_demo" loc="closing" className="closing__demo">
              Open the demo
            </TextLink>
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
