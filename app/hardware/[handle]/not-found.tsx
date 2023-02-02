'use client'

import {Button} from '@components/atoms/button'
import {Heading} from '@components/atoms/heading'
import {Paragraph} from '@components/atoms/paragraph'
import {Section} from '@components/layout/section'
import {useEffect} from 'react'

export default function NotFound() {
  return (
    <main style={{minHeight: 'calc(100vh - 2rem)'}}>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-32 lg:pt-48">
        <Heading level={1}>404</Heading>
        <Paragraph size="lg" className="mt-12 mb-4">
          Das Produkt, das Du aufrufen wolltest, existiert leider nicht.
        </Paragraph>
        <Button href="/hardware">Produkte ansehen</Button>
      </Section>
    </main>
  )
}
