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
    ];
  },
};

export default nextConfig;
