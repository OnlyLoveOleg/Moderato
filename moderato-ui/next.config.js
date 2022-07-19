/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @see pageExtensions https://zenn.dev/uttk/articles/d6be1c224494cb
  pageExtensions: ['page.tsx', 'page.ts'],
  optimizeFonts: true,
  compiler: {
    styledComponents: true,
    // TODO: 以下を開発環境では削除しない
    // removeConsole: true,
  },
};

module.exports = nextConfig;
