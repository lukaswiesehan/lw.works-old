'use client'
import {CartLine} from '@components/atoms/cart-line'
import {cartQuery} from '@utils/shopify/cart-query'
import {fetcher} from '@utils/shopify/fetcher'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

export default function Cart() {
  const [cartID, setCartID] = useState<string | null>('')

  useEffect(() => {
    setCartID(localStorage.cart ? JSON.parse(localStorage.cart).id : '')
  }, [])

  const {data, error, isLoading} = useSWR(cartQuery(cartID), fetcher)

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading</div>
  if (!cartID) return <div>Empty</div>

  const cart: Cart = data.data.cart
  return (
    <div>
      <ul className="space-y-4">
        {cart.lines.edges.map(({node}, index) => (
          <li key={index}>
            <CartLine line={node} />
          </li>
        ))}
      </ul>
    </div>
  )
}
