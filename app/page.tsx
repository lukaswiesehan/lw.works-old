import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'

export default function Home() {
  return (
    <main>
      <Section className="pt-24">
        <Heading level={1} className="max-w-4xl">
          Präsentiere Dein SaaS Produkt
          <br />
          wie die Big Player <span className="ml-1 mb-3 inline-block h-2 w-20 bg-white" />
          <br />
          ohne gleich ein Team einzustellen
        </Heading>
      </Section>
    </main>
  )
}
