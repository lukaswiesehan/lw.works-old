import {Heading} from '@components/atoms/heading'
import {Section} from '@components/layout/section'
import {Paragraph} from '@components/atoms/paragraph'
import {getProducts} from '@utils/shopify/get-products'
import 'server-only'
import {Logo} from '@components/visual/logo'
import {Card} from '@components/atoms/card'
import Image from 'next/image'
import Link from 'next/link'

export default async function Hardware() {
  const {products} = await getProducts()

  return (
    <main>
      <Section className="pt-12 sm:pt-20 md:pt-32">
        <Heading level={1}>Hardware</Heading>
        <Paragraph size="lg" className="mt-12 max-w-md">
          Mit diesen kleinen Masterpieces bringe ich Design in meinen Alltag. <b>Bedien&apos; Dich, wenn Du magst</b>.
        </Paragraph>
      </Section>
      <Section className="grid grid-cols-1 gap-12 py-24 sm:grid-cols-2 lg:grid-cols-3 xl:gap-16">
        {products.map((product, index) => (
          <Link href={`/hardware/${product.handle}`} key={index} className="flex space-x-4">
            <div className="relative w-4 shrink-0 py-4">
              <Logo className="w-full text-white/30" />
              <div style={{writingMode: 'vertical-rl'}} className="flex space-y-4 pt-5 font-mono uppercase leading-none text-white">
                <div>{product.displaySKU}</div>
                <div className="opacity-30">{'///'}</div>
                <h2>{product.displayName}</h2>
                <div className="opacity-30">{'///'}</div>
                <div>{product.displayVariant}</div>
              </div>
            </div>
            <Card className="p-12" glowColor={product.accentColor}>
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText}
                width={800}
                height={(800 * product.featuredImage.height) / product.featuredImage.width}
                className="w-full lg:transition-transform lg:duration-500 lg:group-hover:scale-105"
                placeholder="blur"
                blurDataURL={product.featuredImage.url}
              />
            </Card>
          </Link>
        ))}
      </Section>
    </main>
  )
}
