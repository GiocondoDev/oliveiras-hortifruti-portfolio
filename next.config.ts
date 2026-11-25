import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Assets are already optimized locally; shared hosting has no Next image server.
  images: { unoptimized: true },
};

export default nextConfig;
