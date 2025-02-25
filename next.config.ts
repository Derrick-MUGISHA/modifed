// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Correct the domain to match actual image host
    domains: ['postimg.cc', 'media.globalcitizen.org'], // Add the correct domains here
  },
  webpack(config) {
    // Modify the Webpack configuration if needed
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
