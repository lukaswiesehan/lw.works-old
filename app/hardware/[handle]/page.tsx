import {Button} from '@components/atoms/button'
import {Card} from '@components/atoms/card'
import {Heading} from '@components/atoms/heading'
import {Paragraph} from '@components/atoms/paragraph'
import {ArrowIcon} from '@components/icons/arrow'
import {Section} from '@components/layout/section'
import {getProductByHandle} from '@utils/shopify/get-product-by-handle'
import {getProducts} from '@utils/shopify/get-products'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const {products} = await getProducts()
  return products.map((product) => ({
    handle: product.handle
  }))
}

export default async function Product({params}: {params: {handle: string}}) {
  const {product} = await getProductByHandle(params.handle)
  console.log(product)

  return (
    <Section className="flex justify-between pt-32 md:pt-40 lg:pt-48">
      <div>
        <div className="mb-3 flex items-center space-x-4 font-mono uppercase" style={{color: product.accentColor}}>
          <Link
            href="/hardware"
            className="group -mx-1.5 flex items-center space-x-1 rounded-sm px-1.5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10"
          >
            <ArrowIcon className="mb-0.5 w-0 rotate-180 text-black opacity-20 transition-all duration-200 group-hover:w-4 dark:text-white" />
            <span>Hardware</span>
          </Link>
          <span className="text-black/20 dark:text-white/20">{'///'}</span>
          <span>002</span>
          <span className="text-black/20 dark:text-white/20">{'///'}</span>
        </div>
        <Heading level={1}>{product.title}</Heading>
        <div
          className="prose mt-12 prose-p:text-slate-600 prose-ul:text-slate-600 dark:prose-p:text-slate-300 dark:prose-ul:text-slate-300"
          dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
        />
      </div>
      <div className="flex w-96 flex-col items-center">
        <Card className="p-16" glowColor={product.accentColor}>
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
        <div className="-mt-[18px]">
          <Button secondary hideArrow>
            Galerie ansehen
          </Button>
        </div>
      </div>
    </Section>
  )
}
