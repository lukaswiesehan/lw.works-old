import {Card} from '@components/atoms/card'
import {Heading} from '@components/atoms/heading'
import {ArrowIcon} from '@components/icons/arrow'
import {Section} from '@components/layout/section'
import {getProductByHandle} from '@utils/shopify/get-product-by-handle'
import Image from 'next/image'
import Link from 'next/link'
import {VariantSelection} from '@components/shop/variant-selection'
import {ProductInfo} from '@components/shop/product-info'
import {Prose} from '@components/atoms/prose'
import {notFound} from 'next/navigation'

export default async function Product({params}: {params: {handle: string}}) {
  const {product} = await getProductByHandle(params.handle)
  if (!product) notFound()

  return (
    <main style={{minHeight: 'calc(100vh - 2rem)'}}>
      <Section className="grid grid-cols-1 pt-24 sm:pt-32 md:grid-cols-3 md:pt-40 lg:pt-48">
        <div className="md:col-span-2">
          <div
            className="mb-1 flex items-center space-x-4 font-mono uppercase brightness-75 saturate-200 dark:brightness-100 dark:saturate-100 sm:mb-3"
            style={{color: product.accentColor}}
          >
            <Link
              href="/hardware"
              className="group -mx-1.5 flex items-center space-x-1 rounded-sm px-1.5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10"
            >
              <ArrowIcon className="mb-0.5 w-0 rotate-180 text-black opacity-20 transition-all duration-200 group-hover:w-4 dark:text-white" />
              <span>Hardware</span>
            </Link>
            <span className="text-black/20 dark:text-white/20">{'///'}</span>
            <span>{product.displaySKU}</span>
            <span className="text-black/20 dark:text-white/20">{'///'}</span>
          </div>
          <Heading level={1}>{product.title}</Heading>
        </div>
        <div className="flex max-w-md flex-col items-center pt-8 md:row-span-3 md:pt-0">
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
          {/* <div className="-mt-[18px]">
            <Button secondary hideArrow>
              Galerie ansehen
            </Button>
          </div> */}
        </div>
        <div className="md:col-span-2">
          <VariantSelection product={product} />
        </div>
        <Prose html={product.descriptionHtml} className="max-w-md md:col-span-2 lg:max-w-xl" />
      </Section>
      <ProductInfo product={product} />
    </main>
  )
}
