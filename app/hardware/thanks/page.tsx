'use client'

import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'

export default async function Thanks() {
  return (
    <main>
      <Section className="pt-32 md:pt-40 lg:pt-48">
        <Heading level={1}>Danke!</Heading>
      </Section>
    </main>
  )
}
