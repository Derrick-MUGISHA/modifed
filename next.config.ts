import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'postimg.cc',
      'media.globalcitizen.org',
      'i.postimg.cc',
      'cyclingflash.ams3.cdn.digitaloceanspaces.com',
      'www.ktpress.rw',
      'lh5.googleusercontent.com',
      'upload.wikimedia.org',
      'encrypted-tbn3.gstatic.com',
      'media.licdn.com',
      'paanvuusafaris.com',
      'www.carolinesyrup.com',
      'www.onthegotours.com',
      'africantravelinc.com',
      'visitrwanda.com',
      'm.mightytravels.com',
    ],
  },
  webpack(config) {
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
