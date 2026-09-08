/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Legacy v0 routes removed in the 2026 rebuild.
    return [
      // There is no free trial any more: the trial-request form is gone and
      // every CTA sends people straight to the app to sign in. Kept as a
      // redirect so already-indexed /get-started links still land somewhere
      // useful instead of on the 404.
      {
        source: '/get-started',
        destination: 'https://app.truckwys.com/login',
        permanent: true,
      },
      { source: '/dashboard', destination: '/', permanent: true },
      { source: '/dashboard/:path*', destination: '/', permanent: true },
      { source: '/ai-analysis', destination: '/', permanent: true },
      { source: '/linkedin-profile', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
