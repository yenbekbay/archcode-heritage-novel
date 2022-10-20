const withTM = require('next-transpile-modules')([
  '@microlink/mql',
  'path-data-parser',
  'points-on-curve',
  'points-on-path',
  'react-rough',
  'roughjs',
])

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM(
  /** @type {import('next').NextConfig} */ ({
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ['ru'],
      defaultLocale: 'ru',
    },
    experimental: {
      newNextLinkBehavior: true,
    },
    webpack(config) {
      config.module.exprContextCritical = false
      config.module.rules.push({
        test: /\.(mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name].[hash][ext]',
        },
      })
      return config
    },
  }),
)
