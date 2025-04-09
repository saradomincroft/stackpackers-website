import type { NextConfig } from "next";
import withSitemap from "next-sitemap";

const nextConfig: NextConfig = {
  output: "export", // enables `next export` for static HTML
  images: {
    unoptimized: true, // disables image optimization
  }
};

export default withSitemap(nextConfig);
