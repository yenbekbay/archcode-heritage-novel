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
  webpack(config) {
    config.module.exprContextCritical = false;
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
};

export default config;
