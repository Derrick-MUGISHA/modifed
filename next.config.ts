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
      'igihe.com',
      'encrypted-tbn0.gstatic.com',
      'dynamic-media-cdn.tripadvisor.com',
      'media-cdn.tripadvisor.com',
      'lp-cms-production.imgix.net',
      'fusionestatesafrica.com',
      'kinyarwanda.com',
      'www.ugandarwanda-safaris.com',
      'www.nkuringosafaris.com',
      'rdb.rw',
      'rwandaclothing.com',
      'cdn.getyourguide.com',
      'en.igihe.com',
      'www.rwandaclothing.com',
      'www.airlinepros.com',
      'cdn.businesstraveller.com',
      'img.freepik.com',
      'via.placeholder.com',
      'd1bvpoagx8hqbg.cloudfront.net',
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
