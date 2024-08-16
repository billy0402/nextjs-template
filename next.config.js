/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
};

module.exports = nextConfig;
