import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'
import 'server-only'

export default async function Contact() {
  return (
    <main>
      <Section className="pt-32 md:pt-40 lg:pt-48">
        <Heading level={1}>Contact</Heading>
      </Section>
    </main>
  )
}
