import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chaimae-khater",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
