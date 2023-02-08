import {useMDXComponent} from 'next-contentlayer/hooks'
import {FC} from 'react'
import {H2, H3, H4} from './headings'
import {Image} from './image'

const mdxComponents = {
  Image,
  h2: H2,
  h3: H3,
  h4: H4
}

export const MDX: FC<{code: string}> = ({code}) => {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-slate max-w-xl prose-headings:font-display prose-headings:text-black prose-strong:text-black dark:prose-invert dark:prose-headings:text-white dark:prose-strong:text-white xl:max-w-2xl">
      <Component components={mdxComponents} />
    </article>
  )
}
