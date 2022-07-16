/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @see pageExtensions https://zenn.dev/uttk/articles/d6be1c224494cb
  pageExtensions: ['page.tsx', 'page.ts'],
  compiler: {
    styledComponents: true,
    removeConsole: true,
  }, 
};

module.exports = nextConfig;
