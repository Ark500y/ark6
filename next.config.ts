import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 414, 640, 768, 1024, 1280, 1440, 1920],
    minimumCacheTTL: 86400,
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Transpile three.js and R3F for Turbopack compatibility
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  allowedDevOrigins: [
    "localhost:3000",
    "chatty-shirts-pick.loca.lt",
  ],
  experimental: {
    optimizePackageImports: [
      "next/font",
      "framer-motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
};

export default nextConfig;
