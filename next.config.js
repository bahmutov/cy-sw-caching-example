// https://github.com/shadowwalker/next-pwa
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: 'CacheFirst',
})

module.exports = withPWA({
  // config
})
