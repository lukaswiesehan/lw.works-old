const Shopify = require('shopify-api-node')

export const shopify = new Shopify({
  shopName: 'lukaswiesehan.myshopify.com',
  //apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
  //password: process.env.SHOPIFY_API_SECRET
  accessToken: '3874a13dad92bbe7566cfd76ef724d11'
})
