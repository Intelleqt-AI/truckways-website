import type { ReactNode } from 'react';
import { ButtonLink, TextLink, TwoTone } from './ui';
import { demoUrl, signupUrl } from '../lib/site';
import { PRICE_SHORT } from '../lib/facts';

/** Breadcrumbs: mirrors the BreadcrumbList JSON-LD on each page below root. */
export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol className="list-reset">
        {trail.map((t, i) => (
          <li key={t.path}>
            {i < trail.length - 1 ? <a href={t.path}>{t.name}</a> : <span aria-current="page">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
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
      <div className="wrap">
        <div className="closing__grid">
        <TwoTone id="closing-h" a={a} b={b} />
        <div className="closing__side">
          <p className="body">{line}</p>
          <div className="cta-pair">
            <ButtonLink href={signupUrl(`${page}-cta`)} cta="get_started" loc="closing">
              Get started
            </ButtonLink>
            <TextLink href={demoUrl(`${page}-cta`)} cta="open_demo" loc="closing">
              Open the demo
            </TextLink>
            {extra}
          </div>
          <p className="small closing__price">{PRICE_SHORT}</p>
        </div>
        </div>
      </div>
    </section>
  );
}
