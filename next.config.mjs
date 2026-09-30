/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    "@microlink/mql",
    "path-data-parser",
    "points-on-curve",
    "points-on-path",
    "react-rough",
    "roughjs",
  ],
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
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
