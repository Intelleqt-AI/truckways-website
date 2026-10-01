import { getPost } from '../content/blog';

/** One quiet line under a product page's next step: the blog posts that explain the same job in depth. */
export default function FromTheBlog({ slugs }: { slugs: string[] }) {
  const posts = slugs.map(getPost).filter((p): p is NonNullable<ReturnType<typeof getPost>> => Boolean(p));
  if (!posts.length) return null;
  return (
    <p className="small" style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
      From the blog:{' '}
      {posts.map((p, i) => (
        <span key={p.slug}>
          {i ? ' · ' : null}
          <a href={`/blog/${p.slug}`} style={{ color: 'var(--link)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            {p.title}
          </a>
        </span>
      ))}
    </p>
  );
}
