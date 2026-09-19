import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.2.69.72", "localhost:3000"],
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
