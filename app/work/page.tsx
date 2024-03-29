import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'
import 'server-only'

export default async function Work() {
  return (
    <main>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-32 lg:pt-48">
        <Heading level={1}>Work</Heading>
      </Section>
    </main>
  )
}
