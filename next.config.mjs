/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '**',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
