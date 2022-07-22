const withTM = require('next-transpile-modules')([
  'path-data-parser',
  'points-on-curve',
  'points-on-path',
  'react-rough',
  'roughjs',
])

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(ogg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    })
    return config
  },
})
