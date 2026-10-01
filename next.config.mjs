/** @type {import('next').NextConfig} */
const APP = 'https://app.truckwys.com';

const nextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      // Phase A (brief §2.2)
      { source: '/ai', destination: '/product#models', permanent: true },
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
      // Phase B (brief §2.2, §2.3): /blogs is now /guides. Retired slugs first, then the catch-all.
      { source: '/blogs/true-cost-running-truck-fleet-south-africa-2026', destination: '/guides/sa-fleet-operators-real-cost-per-kilometre', permanent: true },
      { source: '/blogs/fleet-profitability-south-africa-ai-powered-pricing', destination: '/guides/how-to-quote-freight-rates-south-africa', permanent: true },
      // Critic R3: the quoting guide's slug lost its "-ai" suffix (308 from the old URL).
      { source: '/guides/how-to-quote-freight-rates-south-africa-ai', destination: '/guides/how-to-quote-freight-rates-south-africa', permanent: true },
      { source: '/blogs/how-to-quote-freight-rates-south-africa-ai', destination: '/guides/how-to-quote-freight-rates-south-africa', permanent: true },
      { source: '/blogs/invoice-factoring-vs-ai-cash-advances-sa-transport', destination: '/guides', permanent: true },
      { source: '/blogs/fleet-management-software-south-africa-2026', destination: '/guides', permanent: true },
      { source: '/blogs/future-of-freight-africa-ai-transforming-transport', destination: '/guides', permanent: true },
      { source: '/blogs', destination: '/guides', permanent: true },
      { source: '/blogs/:slug', destination: '/guides/:slug', permanent: true },
      { source: '/features', destination: '/product', permanent: true },
      { source: '/features/:path*', destination: '/product', permanent: true },
    ];
  },
};

export default nextConfig;
