'use client';

import { usePathname } from 'next/navigation';
import ProductMenu, { type MenuItem } from './ProductMenu';

/**
 * The desktop nav links, client-side only for the current-page indicator (the layout renders one Nav for every
 * page, so the server can't pass `current`). Links get aria-current="page"; the Product button gets a class.
 */
export default function NavLinks({ links, product }: { links: { href: string; label: string; soon?: boolean }[]; product: MenuItem[] }) {
  const path = usePathname() ?? '/';
  const productCurrent = path === '/product' || path.startsWith('/product/') || path === '/integrations';
  return (
    <nav aria-label="Main" className="nav__links">
      <ProductMenu items={product} current={productCurrent} path={path} />
      {links.map((l) => (
        <a key={l.href} href={l.href} className="nav__link" aria-current={path === l.href ? 'page' : undefined}>
          {l.label}
          {l.soon ? <span className="nav__soon">Soon</span> : null}
        </a>
      ))}
    </nav>
  );
}
