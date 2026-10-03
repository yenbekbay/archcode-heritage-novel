import type { NextConfig } from "next";
import "./src/config/env.ts";

const config: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31_536_000,
  },
  experimental: {
    optimizePackageImports: ["phosphor-react"],
  },
  transpilePackages: [
    "@microlink/mql",
    "path-data-parser",
    "points-on-curve",
    "points-on-path",
    "roughjs",
  ],
  redirects() {
    // NOTE: Keep the former explicit default-locale URLs reachable without
    // introducing a second canonical copy of this Russian-only website.
    return Promise.resolve([
      { source: "/ru", destination: "/", permanent: true },
      { source: "/ru/:path*", destination: "/:path*", permanent: true },
    ]);
  },
  headers() {
    return Promise.resolve([
      {
        source: "/__generated__/audio/:filename",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]);
  },
};

export default config;
