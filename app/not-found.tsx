import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-page">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 py-24 text-center">
        <div className="eyebrow eyebrow-accent mb-4">404</div>
        <h1 className="text-display text-ink">This page does not exist</h1>
        <p className="mt-4 max-w-md text-[15px] text-ink-2">
          The page may have moved in the site rebuild. The links below will get
          you back on the road.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Back to home
          </Link>
          <Link href="/blogs" className="btn-secondary w-full sm:w-auto">
            Read the guides
          </Link>
        </div>
      </div>
    </section>
  );
}
