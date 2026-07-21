import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../lib/blog-data';
import { SITE_URL, jsonLd } from '../../../lib/site';

type Post = (typeof blogPosts)[number];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function getPost(slug: string): Post | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function getRelatedPosts(post: Post): Post[] {
  const tagNames = new Set(post.tags.map((t) => t.name));
  const byDateDesc = (a: Post, b: Post) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

  const sharesTag = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => tagNames.has(t.name)))
    .sort(byDateDesc);

  const fallback = blogPosts
    .filter((p) => p.slug !== post.slug && !sharesTag.includes(p))
    .sort(byDateDesc);

  return [...sharesTag, ...fallback].slice(0, 3);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const seoTitle = (post as { seoTitle?: string }).seoTitle || post.title;
  return {
    title: seoTitle,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: seoTitle,
      description: post.description,
      publishedTime: post.publishedAt,
      siteName: 'TruckWys',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blogs/${post.slug}`;
  const related = getRelatedPosts(post);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}/og-image.png`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'TruckWys',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TruckWys',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/truckwys-logo-transparent.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(blogPostingSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-ink-3">
              <Link href="/" className="inline-block py-1.5 transition-colors hover:text-ink">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/blogs" className="inline-block py-1.5 transition-colors hover:text-ink">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="line-clamp-1">{post.title}</span>
            </nav>

            {post.tags[0] && (
              <div className="eyebrow eyebrow-accent mb-4 mt-10">{post.tags[0].name}</div>
            )}
            <h1 className="text-display max-w-3xl text-ink">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[13px] text-ink-3">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} read</span>
              <span aria-hidden="true">·</span>
              <span>{post.author.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-page">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <article
              className="article-body measure"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="panel-accent mt-16 rounded-[14px] px-8 py-12 text-center">
              <h2 className="text-[20px] font-semibold text-ink">
                Price your next load with real costs
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-2">
                TruckWys quotes with live diesel prices, the actual tolls on the route
                and your own running costs, then invoices the moment you deliver.
              </p>
              <Link href="/get-started" className="btn-primary mt-6 !border-white !bg-white !text-accent">
                Start your free trial
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mx-auto mt-20 max-w-3xl">
              <div className="eyebrow mb-5">Keep reading</div>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blogs/${r.slug}`}
                    className="card flex flex-col p-5 transition-colors hover:border-accent"
                  >
                    <h3 className="line-clamp-3 text-[15px] font-semibold leading-snug text-ink">
                      {r.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-2 pt-4 text-[13px] text-ink-3">
                      <span>{formatDate(r.publishedAt)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{r.readingTime} read</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
