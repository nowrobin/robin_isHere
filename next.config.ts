import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/videos/(.*)', // public/videos 폴더 기준
        headers: [
          {
            key: 'Content-Type',
            value: 'video/webm',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
