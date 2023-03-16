const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [['next-superjson-plugin', {}]]
  },
  images: {
    domains: ['cdn.shopify.com', 'pbs.twimg.com']
  }
}

module.exports = withContentlayer(nextConfig)
