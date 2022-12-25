type Product = {
  title: string
  handle: string
  displayName: string
  displayVariant: string
  displaySKU: string
  accentColor: string
  options: {
    id: string
    name: string
    values: string[]
  }[]
  variants: {
    id: string
    selectedOptions: {
      name: string
      value: string
    }
    price: {
      amount: string
      currencyCode: string
    }
  }[]
  descriptionHtml: string
  featuredImage: {
    url: string
    width: number
    height: number
    altText: string
  }
}
