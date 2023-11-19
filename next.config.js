/** @type {import('next').NextConfig} */

const withInternationalization = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  publicRuntimeConfig: {
    experimental: {
      serverActions: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = withInternationalization(nextConfig);
