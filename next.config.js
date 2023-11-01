/** @type {import('next').NextConfig} */
const nextConfig = {
  cssModules: true,
  experimental: {
    serverActions: true,
  },
  publicRuntimeConfig: {
    experimental: {
      serverActions: true,
    },
  },
};

module.exports = nextConfig;
