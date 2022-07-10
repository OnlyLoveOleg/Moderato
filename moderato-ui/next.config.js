/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  removeConsole: true,
  styledComponents: {
    displayName: true,
    ssr: true,
    cssProp: true,
  }
};

module.exports = nextConfig;
