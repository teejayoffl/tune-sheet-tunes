/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'],
    unoptimized: true, // For static export
  },
  // Enable static export for easy deployment
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig