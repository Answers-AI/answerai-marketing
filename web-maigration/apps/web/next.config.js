/** @type {import('next').NextConfig} */

module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp']
  },
};
