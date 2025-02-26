// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Add the correct domains for image sources
    domains: ['postimg.cc', 'media.globalcitizen.org', 'i.postimg.cc', 'cyclingflash.ams3.cdn.digitaloceanspaces.com',], // Add 'i.postimg.cc' here
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
