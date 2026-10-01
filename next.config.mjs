/** @type {import('next').NextConfig} */
const APP = 'https://app.truckwys.com';

const nextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      // Phase A (brief §2.2)
      { source: '/ai', destination: '/product/ai', permanent: true },
      // Capital and Fast Pay (coming soon): the old site's names.
      { source: '/fast-pay', destination: '/capital', permanent: true },
      { source: '/fastpay', destination: '/capital', permanent: true },
      { source: '/get-started', destination: `${APP}/signup?ref=site-redirect`, permanent: false },
      { source: '/signup', destination: `${APP}/signup?ref=site-redirect`, permanent: false },
      { source: '/login', destination: `${APP}/login`, permanent: false },
      // TODO: point at `${APP}/demo?ref=website` once truckwyas-frontend #123 is
      // deployed (flip DEMO_DEEP_LINK_LIVE in lib/site.ts at the same time).
      // Until then the login page's "View demo" button opens the demo company.
      { source: '/demo', destination: `${APP}/login?ref=site-redirect`, permanent: false },
      // Legacy v0 routes
      { source: '/dashboard', destination: '/', permanent: true },
      { source: '/dashboard/:path*', destination: '/', permanent: true },
      { source: '/ai-analysis', destination: '/', permanent: true },
      { source: '/linkedin-profile', destination: '/', permanent: true },
      // Blog. The original posts lived at /blogs/<slug>; v3 previewed them as /guides/<slug>. Every post now
      // lives at /blog/<slug> with its original slug, so each old URL is one 308, never a chain.
      // v3's quoting slug dropped "-ai"; the original slug was restored, so that one is mapped by name first.
      { source: '/guides/how-to-quote-freight-rates-south-africa', destination: '/blog/how-to-quote-freight-rates-south-africa-ai', permanent: true },
      { source: '/blog/how-to-quote-freight-rates-south-africa', destination: '/blog/how-to-quote-freight-rates-south-africa-ai', permanent: true },
      { source: '/blogs/how-to-quote-freight-rates-south-africa', destination: '/blog/how-to-quote-freight-rates-south-africa-ai', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/guides', destination: '/blog', permanent: true },
      { source: '/guides/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/features', destination: '/product', permanent: true },
      { source: '/features/:path*', destination: '/product', permanent: true },
    ];
  },
};

export default nextConfig;
