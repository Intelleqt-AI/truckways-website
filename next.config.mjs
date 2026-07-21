/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Legacy v0 routes removed in the 2026 rebuild.
    return [
      { source: '/dashboard', destination: '/', permanent: true },
      { source: '/dashboard/:path*', destination: '/', permanent: true },
      { source: '/ai-analysis', destination: '/', permanent: true },
      { source: '/linkedin-profile', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
