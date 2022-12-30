'use client'
import {CartLine} from '@components/atoms/cart-line'
import {cartQuery} from '@utils/shopify/cart-query'
import {fetcher} from '@utils/shopify/fetcher'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import {currency} from '@utils/shopify/currency'
import {CartForm} from '@components/atoms/cart-form'

export default function Cart() {
  const [cartId, setCartId] = useState<string | null>('')

  useEffect(() => {
    setCartId(localStorage.cart ? JSON.parse(localStorage.cart).id : '')
  }, [])

  const {data, error, isLoading} = useSWR(cartQuery(cartId), fetcher)
  console.log(data)
  if (error || data?.error) return <div>Error</div>
  if (isLoading) return <div>Loading</div>

  const cart: Cart = data?.data?.cart
  if (!cartId || !cart || cart.totalQuantity === 0) return <div>Empty</div>

  return (
    <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-3 xl:gap-24">
      <div className="relative w-full lg:col-span-2">
        <table className="w-full">
          <tbody>
            {cart.lines.edges.map(({node}, index) => (
              <CartLine cartId={cartId} line={node} key={index} />
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200 dark:border-slate-700">
              <td className="hidden pr-8 pb-1 pt-4 text-right font-mono uppercase text-black dark:text-white sm:table-cell">Summe</td>
              <td className="pt-4 pb-1 font-mono text-black dark:text-white">
                <div className="flex justify-end space-x-1 uppercase  text-black dark:text-white">
                  <span className="mr-8 sm:hidden">Summe</span>
                  <span>
                    {/* @ts-ignore */}
                    {currency[cart.cost.totalAmount.currencyCode]}
                  </span>
                  <span>{new Number(cart.cost.totalAmount.amount).toFixed(0)}</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="absolute bottom-11 h-0.5 w-full bg-gradient-to-r from-white to-transparent dark:from-[#0E1117] sm:via-white dark:sm:via-[#0E1117]" />
      </div>
      <CartForm cartId={cartId} cartNote={cart.note} checkoutUrl={cart.checkoutUrl} />
    </div>
  )
}
