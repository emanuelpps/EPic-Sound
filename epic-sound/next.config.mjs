/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audius-content-17.cultur3stake.com",
      },
    ],
  },
};

export default nextConfig;
