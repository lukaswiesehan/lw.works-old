type Variant = {
  id: string
  selectedOptions: {
    name: string
    value: string
  }[]
  price: Price
  availableForSale: boolean
  currentlyNotInStock: boolean
}
