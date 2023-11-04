/** @type {import('next').NextConfig} */

const withInternationalization = require('next-intl/plugin')('./src/i18n.ts');

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = withInternationalization(nextConfig);
