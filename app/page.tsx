import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'

export default function Home() {
  return (
    <main>
      <Section className="pt-24">
        <Heading level={1} className="max-w-4xl">
          Präsentiere Dein SaaS Produkt
          <br className="hidden md:block" /> wie die Big Player
          <span className="mx-2 mb-2 inline-block h-1 w-12 bg-white sm:mb-2.5 sm:h-1.5 sm:w-14 lg:mx-3 lg:mb-3 lg:h-2 lg:w-20" />
          <br className="hidden md:block" />
          ohne gleich ein Team einzustellen
        </Heading>
      </Section>
      <Section className="pt-12">
        <Heading level={2} className="max-w-4xl">
          Das ist die Überschrift 2
        </Heading>
      </Section>
      <Section className="pt-12">
        <Heading level={3} className="max-w-4xl">
          Das ist die Überschrift 3
        </Heading>
      </Section>
      <Section className="pt-12">
        <Heading level={4} className="max-w-4xl">
          Das ist die Überschrift 4
        </Heading>
      </Section>
    </main>
  )
}
