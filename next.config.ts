import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";
import "./src/config/env.ts";

const isProduction = process.env.NODE_ENV === "production";

const hasSentryBuildToken = Boolean(process.env["SENTRY_AUTH_TOKEN"]);

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

// Skip the Sentry wrap in dev: it adds source-map upload and bundle
// instrumentation with no runtime to back it (instrumentation*.ts gates the
// SDK on production).
export default isProduction
  ? withSentryConfig(config, {
      // Marks bundled modules so the client third-party error filter in
      // src/instrumentation-client.ts can tell application frames apart.
      applicationKey: "archcode-heritage-novel",
      org: "utilfirst",
      project: "archcode-heritage-novel",
      telemetry: false,
      silent: true,
      tunnelRoute: "/monitoring",
      sourcemaps: {
        disable: !hasSentryBuildToken,
        deleteSourcemapsAfterUpload: true,
      },
    })
  : config;
