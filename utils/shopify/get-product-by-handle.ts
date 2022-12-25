export const getProductByHandle = async (handle: string): Promise<{product: Product}> => {
  const res = await fetch('https://lukaswiesehan.myshopify.com/api/2022-10/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!
    },
    body: JSON.stringify({
      query: `{
        productByHandle(handle:"${handle}") {
          id
          title
          handle
          descriptionHtml
          options(first:100) {
            id
            name
            values
          }
          displayName: metafield(namespace: "custom", key: "display_name") {
            value
          }
          displayVariant: metafield(namespace: "custom", key: "display_variant") {
            value
          }
          displaySKU: metafield(namespace: "custom", key: "display_sku") {
            value
          }
          accentColor: metafield(namespace: "custom", key: "accent_color") {
            value
          }
          variants(first:100) {
            edges {
              node {
                id
                selectedOptions {
                  name
                  value
                }
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          featuredImage {
            url
            width
            height
            altText
          }
        }
      }`
    })
  })
  const {
    data: {productByHandle}
  } = await res.json()
  return {
    product: {
      ...productByHandle,
      displayName: productByHandle.displayName.value,
      displaySKU: productByHandle.displaySKU.value,
      displayVariant: productByHandle.displayVariant.value,
      accentColor: productByHandle.accentColor.value,
      variants: productByHandle.variants.edges.map((edge: any) => edge.node)
    }
  }
}
