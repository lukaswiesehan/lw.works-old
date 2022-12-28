type CartLine = {
  id: string
  attributes: {
    key: string
    value: string
  }[]
  merchandise: {
    title: string
    product: {
      title: string
      handle: string
      featuredImage: {
        url: string
        width: number
        height: number
        altText: string
      }
    }
    selectedOptions: {
      name: string
      value: string
    }[]
  }
  cost: {
    amountPerQuantity: Price
    compareAtAmountPerQuantity: Price | null
    subtotalAmount: Price
    totalAmount: Price
  }
  quantity: number
}
