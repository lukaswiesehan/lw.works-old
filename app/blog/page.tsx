import {Heading} from '@components/atoms/heading'
import {PostPreview} from '@components/content/post-preview'
import {Section} from '@components/layout/section'
import {allBlogPosts} from 'contentlayer/generated'

export default async function Blog() {
  return (
    <main>
      <Section className="pt-32 pb-20 sm:pb-28 md:pb-32 md:pt-40 lg:pt-48 lg:pb-40 xl:pb-48">
        <Heading level={1}>Blog</Heading>
        <div className="mt-24 grid max-w-xl grid-cols-1 gap-16 md:max-w-none md:grid-cols-2">
          {allBlogPosts
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post, index) => (
              <PostPreview key={index} post={post} />
            ))}
        </div>
      </Section>
    </main>
  )
}
