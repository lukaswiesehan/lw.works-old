'use client'

import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'
import {useEffect} from 'react'

export default function Thanks() {
  useEffect(() => {
    if ('cart' in localStorage) {
      localStorage.removeItem('cart')
      window.dispatchEvent(new Event('storage'))
    }
  }, [])

  return (
    <main>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-32 lg:pt-48">
        <Heading level={1}>Danke!</Heading>
      </Section>
    </main>
  )
}
