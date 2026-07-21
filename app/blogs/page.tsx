import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides on fleet costs, freight pricing and cash flow for South African transporters.',
  alternates: {
    canonical: 'https://www.truckwys.com/blogs',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.truckwys.com/blogs',
    title: 'Blog | TruckWys',
    description:
      'Guides on fleet costs, freight pricing and cash flow for South African transporters.',
    siteName: 'TruckWys',
    images: [{ url: 'https://www.truckwys.com/og-image.png', width: 1200, height: 630 }],
  },
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 md:pt-28">
          <div className="eyebrow eyebrow-accent mb-5">Blog</div>
          <h1 className="text-display max-w-2xl text-ink">
            Guides for South African fleet operators
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] text-ink-2">
            Practical guides to what it costs to run trucks in South Africa, how to
            price loads, and how to keep the cash coming in.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-page">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="card flex flex-col p-6 transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded-[6px] bg-surface-2 px-2.5 py-1 text-[13px] text-ink-2"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 line-clamp-2 text-[20px] font-semibold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-2">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-5 text-[13px] text-ink-3">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime} read</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="panel-accent mt-16 rounded-[14px] px-8 py-12 text-center">
            <h2 className="text-[20px] font-semibold text-ink">
              Put the numbers to work on your own fleet
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-2">
              TruckWys prices your loads with live diesel, real tolls and your own
              running costs, then gets the invoices paid.
            </p>
            <Link href="/get-started" className="btn-primary mt-6 !border-white !bg-white !text-accent">
              Start your free trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
