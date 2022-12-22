import {Heading} from '@components/heading'
import {Section} from '@components/layout/section'
import {Paragraph} from '@components/paragraph'
import {getProducts} from '@utils/shopify/get-products'
import 'server-only'

export default async function Hardware() {
  const {products} = await getProducts()
  console.log(products)

  return (
    <main>
      <Section className="pt-24">
        <Heading level={1}>Hardware</Heading>
        <Paragraph size="lg" className="mt-12 max-w-md">
          Mit diesen kleinen Masterpieces bringe ich Design in meinen Alltag. <b>Bedien&apos; Dich, wenn Du magst</b>.
        </Paragraph>
      </Section>
    </main>
  )
}
