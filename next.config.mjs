/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**", // `cdn` 아래의 모든 경로
      },
    ],
  },
};

export default nextConfig;
