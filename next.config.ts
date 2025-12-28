import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pascal-elektrotechnik.de",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
