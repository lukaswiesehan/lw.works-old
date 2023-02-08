const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['cdn.shopify.com', 'pbs.twimg.com']
  }
}

module.exports = withContentlayer(nextConfig)
