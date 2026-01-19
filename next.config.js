/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Uncomment if you want to deploy as a static site
  // output: 'export',
}

module.exports = nextConfig
