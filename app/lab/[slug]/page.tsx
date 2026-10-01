import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VARIANTS } from '../_parts/variants';
import { Hero } from '../_parts/Heroes';
import HomeRest from '../_parts/HomeRest';

export const dynamicParams = false;

export function generateStaticParams() {
  return VARIANTS.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = VARIANTS.find((x) => x.slug === params.slug);
  return { title: { absolute: v ? `Lab ${v.slug}: ${v.a} ${v.b}` : 'Lab' } };
}

export default function LabVariant({ params }: { params: { slug: string } }) {
  const v = VARIANTS.find((x) => x.slug === params.slug);
  if (!v) notFound();
  return (
    <>
      <Hero v={v} />
      <HomeRest />
      <nav className="lab-bar" aria-label="Hero variants">
        <a href="/lab">All</a>
        {VARIANTS.map((x) => (
          <a key={x.slug} href={`/lab/${x.slug}`} aria-current={x.slug === v.slug ? 'page' : undefined}>
            {x.slug.replace('hero-', '').toUpperCase()}
          </a>
        ))}
      </nav>
    </>
  );
}
