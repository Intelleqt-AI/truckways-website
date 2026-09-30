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
      // No demo deep link in the app yet (owner question Q10): the login page's
      // "View demo" button opens the demo company with no form.
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
