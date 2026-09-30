import type { ReactNode } from 'react';
import { ButtonLink, TwoTone } from './ui';
import { demoUrl, signupUrl } from '../lib/site';
import { PRICE_LINE } from '../lib/facts';

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

/** Inner pages' closing band (I): two-tone H2 left, one line, primary + secondary, price line. */
export function CTABand({ page }: { page: string }) {
  return (
    <section className="sec sec--ink ctab" data-theme="dark" aria-labelledby="ctab-h">
      <div className="wrap grid12">
        <TwoTone id="ctab-h" a="Look around a working company." b="Then decide." />
        <div className="ctab__side">
          <p className="body">The demo is open. No form, no sales call.</p>
          <div className="btn-row btn-row--stack">
            <ButtonLink href={demoUrl(`${page}-cta`)} cta="open_demo" loc="cta_band">
              Open the demo
            </ButtonLink>
            <ButtonLink href={signupUrl(`${page}-cta`)} variant="secondary" cta="get_started" loc="cta_band">
              Get started
            </ButtonLink>
          </div>
          {/* TODO(owner) VAT-1 */}
          <p className="small">{PRICE_LINE}, plus 0,25% per delivered load.</p>
        </div>
      </div>
    </section>
  );
}
