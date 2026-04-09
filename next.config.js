/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Asset prefix for GitHub Pages subdirectory deployment
  assetPrefix: isGitHubPages ? '/retro-landing/' : undefined,
};

module.exports = nextConfig;