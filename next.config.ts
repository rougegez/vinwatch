/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // Only use this if you want to completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Add this if you're using TypeScript
  typescript: {
    // !! WARN !!
    // This is for deployment only, remove in development
    // ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
