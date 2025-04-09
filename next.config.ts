// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables `next export` for static HTML
  images: {
    unoptimized: true, // disables image optimization
  },
  
};

export default nextConfig;
