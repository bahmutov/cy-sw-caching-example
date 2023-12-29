// https://github.com/shadowwalker/next-pwa
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    // build files are content-hashed
    {
      urlPattern: /\.js$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'build',
        expiration: {
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
  ],
})

module.exports = withPWA({
  // config
})
