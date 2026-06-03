import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  transpilePackages: ["react-icons"],
  allowedDevOrigins: ['192.168.0.91'],
};

export default nextConfig;
