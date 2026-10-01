import type { Metadata } from 'next';
import { OG_BASE, SITE_URL } from '../../lib/site';

/** Per-page metadata for the phase B pages: title (the %s part), description, canonical and a per-page OG image. */
export function pageMeta({ path, title, description, og, ogAlt }: { path: string; title: string; description: string; og: string; ogAlt: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = `/og/${og}.png`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...OG_BASE, url, title: `${title} | TruckWys`, description, images: [{ url: image, width: 1200, height: 630, alt: ogAlt }] },
    twitter: { card: 'summary_large_image', title: `${title} | TruckWys`, description, images: [image] },
  };
}
