import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Cta = 'get_started' | 'open_demo' | 'talk_to_us' | 'notify' | 'sign_in' | 'see_pricing';

/** Primary / secondary button as a link. `cta` + `loc` feed the cta_click event. */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  cta,
  loc,
  className = '',
  size,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  cta?: Cta;
  loc?: string;
  className?: string;
  size?: 'sm';
}) {
  return (
    <a
      href={href}
      className={`btn btn--${variant}${size ? ` btn--${size}` : ''} ${className}`.trim()}
      data-cta={cta}
      data-loc={loc}
    >
      {children}
    </a>
  );
}

/** Text link with the trailing arrow that moves 2px on hover. */
export function TextLink({
  href,
  children,
  cta,
  loc,
  quiet,
  className = '',
}: {
  href: string;
  children: ReactNode;
  cta?: Cta;
  loc?: string;
  quiet?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`tlink${quiet ? ' tlink--quiet' : ''} ${className}`.trim()} data-cta={cta} data-loc={loc}>
      {children}
      <ArrowRight aria-hidden="true" strokeWidth={1.75} />
    </a>
  );
}

/** Two-tone heading: line one primary, the turn in tertiary. One heading element. */
export function TwoTone({ a, b, as: Tag = 'h2', className = 'h2', id }: { a: ReactNode; b?: ReactNode; as?: 'h1' | 'h2'; className?: string; id?: string }) {
  return (
    <Tag className={className} id={id}>
      {a}
      {b ? (
        <>
          {' '}
          <span className="tone-2">{b}</span>
        </>
      ) : null}
    </Tag>
  );
}

/** Flott section header: H2 in columns 1 to 7, short line in 9 to 12. */
export function SectionHeader({ a, b, line, id }: { a: ReactNode; b?: ReactNode; line?: ReactNode; id?: string }) {
  return (
    <div className="shead reveal">
      <TwoTone a={a} b={b} id={id} />
      {line ? <p>{line}</p> : null}
    </div>
  );
}

export function StatusChip({ children = 'Coming soon' }: { children?: ReactNode }) {
  return (
    <span className="chip">
      <span className="chip__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export const SAMPLE_CAPTION = 'Sample data from a fictional demo company. Figures are illustrative.';

export function Caption({ right, children = SAMPLE_CAPTION }: { right?: boolean; children?: ReactNode }) {
  return <p className={`caption${right ? ' caption--right' : ''}`}>{children}</p>;
}
