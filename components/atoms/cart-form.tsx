'use client'
import {LockIcon} from '@components/icons/lock'
import {updateCartNote} from '@utils/shopify/update-cart-note'
import {FC, FormEvent, useState} from 'react'
import {Button} from './button'
import {Checkbox} from './checkbox'
import {PopoverNote} from './popover-note'
import {TextArea} from './textarea'
import {useSWRConfig} from 'swr'
import {cartQuery} from '@utils/shopify/cart-query'

export const CartForm: FC<{cartId: string; cartNote: string | null; checkoutUrl: string}> = ({cartId, cartNote, checkoutUrl}) => {
  const [formData, setFormData] = useState<{comment: string; consent: boolean}>({comment: cartNote || '', consent: false})
  const [loading, setLoading] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)
  const {mutate} = useSWRConfig()

  const goToCheckout = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
      return
    }

    try {
      if (formData.comment != '') {
        setLoading(true)
        const {cart} = await updateCartNote({cartId, note: formData.comment})
        localStorage.cart = JSON.stringify(cart)
        window.dispatchEvent(new Event('storage'))
        setLoading(false)
        mutate(cartQuery(cartId))
      }
      window.open(checkoutUrl)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={goToCheckout} className="flex flex-col items-start justify-end space-y-4">
      <TextArea
        id="comment"
        label="Kommentar zur Bestellung"
        placeholder="Dein Kommentar zur Bestellung..."
        data={formData}
        setData={setFormData}
        className="max-h-64 min-h-[6rem] w-full max-w-md grow"
      />
      <div className="relative">
        <Checkbox
          id="consent"
          label={
            <>
              Shopify darf für den Checkout notwendige Cookies in meinem Browser setzen (
              <a className="text-indigo-500 dark:text-indigo-400" target="_blank" rel="noreferrer" href="https://www.shopify.com/legal/cookies">
                mehr Infos
              </a>
              ).
            </>
          }
          data={formData}
          setData={setFormData}
        />
        {showError && <PopoverNote type="error">Bitte zustimmen.</PopoverNote>}
      </div>
      <Button submit loading={loading} hideArrow>
        <div className="flex items-center space-x-2">
          <LockIcon className="h-4 opacity-70" />
          <span>Zum sicheren Checkout</span>
        </div>
      </Button>
    </form>
  )
}
