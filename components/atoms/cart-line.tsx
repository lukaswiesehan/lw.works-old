import Image from 'next/image'
import Link from 'next/link'
import {FC, useState} from 'react'
import {Card} from './card'
import {QuantityInput} from './quantity-input'

export const CartLine: FC<{line: any}> = ({line}) => {
  const [count, setCount] = useState<number>(line.quantity)

  return (
    <div className="flex">
      <Link href={`/hardware/${line.merchandise.product.handle}`} className="group flex items-start space-x-8">
        <div className="w-28">
          <Card className="w-full rounded-2xl p-6" glowColor={line.merchandise.product.accentColor.value}>
            <Image
              src={line.merchandise.product.featuredImage.url}
              alt={line.merchandise.product.featuredImage.altText}
              width={200}
              height={(200 * line.merchandise.product.featuredImage.height) / line.merchandise.product.featuredImage.width}
              className="w-full lg:transition-transform lg:duration-500 lg:group-hover:scale-105"
              placeholder="blur"
              blurDataURL={line.merchandise.product.featuredImage.url}
            />
          </Card>
        </div>
        <div className="pt-2">
          <div className="mb-2 flex space-x-4 font-mono" style={{color: line.merchandise.product.accentColor.value}}>
            <span>{line.merchandise.product.displaySKU.value}</span>
            <span className="text-black/20 dark:text-white/20">{'///'}</span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{line.merchandise.product.title}</h3>
          {line.merchandise.selectedOptions.map(({name, value}, index) => (
            <div key={index}>
              {name}: {value}
            </div>
          ))}
        </div>
      </Link>
      <QuantityInput count={count} setCount={setCount} />
    </div>
  )
}
