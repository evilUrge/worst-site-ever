import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as static site for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for better Cloudflare compatibility
  trailingSlash: true,
  
  // Optional: Add base path if deploying to subdirectory
  // basePath: '',
};

export default nextConfig;
