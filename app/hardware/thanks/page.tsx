'use client'

import {Heading} from '@components/atoms/heading'
import {Paragraph} from '@components/atoms/paragraph'
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
    <main style={{minHeight: 'calc(100vh - 2rem)'}}>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-32 lg:pt-48">
        <Heading level={1}>Danke!</Heading>
        <Paragraph size="lg" className="mt-12 max-w-sm">
          Ich weiß sehr zu schätzen, dass Du mich supportest.
          <b> Ganz herzlichen Dank dafür!</b>
        </Paragraph>
        <Paragraph size="lg" className="mt-4">
          Du erhältst gleich eine Bestellbestätigung per Email.
        </Paragraph>
      </Section>
    </main>
  )
}
