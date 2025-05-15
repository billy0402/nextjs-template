/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:3001/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
