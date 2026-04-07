/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  assetPrefix: '/retro-landing/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
