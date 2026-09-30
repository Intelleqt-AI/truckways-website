import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

/** Plain text of a React node (for the section index). */
function text(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(text).join('');
  if (isValidElement(node)) return text((node.props as { children?: ReactNode }).children);
  return '';
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48);

/**
 * Legal page layout (layout only; the legal wording lives in each page and is
 * owner-controlled). The article keeps a 68ch measure; a sticky section index
 * fills the right-hand column on desktop and folds into a disclosure above
 * the text on smaller screens. Each top-level <section> gets an id from its
 * first <h2>, which the index links to.
 */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  const toc: { id: string; label: string }[] = [];
  const used = new Set<string>();
  const body = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== 'section') return child;
    const kids = Children.toArray((child.props as { children?: ReactNode }).children);
    const h2 = kids.find((k) => isValidElement(k) && k.type === 'h2') as ReactElement | undefined;
    if (!h2) return child;
    const label = text(h2).trim();
    let id = slug(label) || `section-${toc.length + 1}`;
    while (used.has(id)) id = `${id}-${toc.length}`;
    used.add(id);
    toc.push({ id, label });
    return cloneElement(child as ReactElement<{ id?: string }>, { id });
  });

  const index = (
    <ol className="list-reset legal__toc-list">
      {toc.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`}>{t.label}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <section className="legal">
      <div className="wrap legal__grid">
        <header className="legal__head">
          <p className="label legal__eyebrow">Legal</p>
          <h1 className="h1 legal__h1">{title}</h1>
          <p className="small legal__date">Last updated: {updated}</p>
        </header>
        {toc.length > 2 ? (
          <nav className="legal__toc" aria-label="On this page">
            <details className="legal__toc-sm">
              <summary>On this page</summary>
              {index}
            </details>
            <div className="legal__toc-lg">
              <p className="label">On this page</p>
              {index}
            </div>
          </nav>
        ) : null}
        <div className="article legal__body">{body}</div>
      </div>
    </section>
  );
}
