import {Heading} from '@components/atoms/heading'
import {ArrowIcon} from '@components/icons/arrow'
import {Section} from '@components/layout/section'
import Link from 'next/link'
import 'server-only'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <Section className="pt-32 md:pt-40 lg:pt-48">
        <div className="mb-1 flex items-center space-x-4 font-mono uppercase text-white brightness-75 saturate-200 dark:brightness-100 dark:saturate-100 sm:mb-3">
          <Link
            href="/hardware"
            className="group -mx-1.5 flex items-center space-x-1 rounded-sm px-1.5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10"
          >
            <ArrowIcon className="mb-0.5 w-0 rotate-180 text-black opacity-20 transition-all duration-200 group-hover:w-4 dark:text-white" />
            <span>Hardware</span>
          </Link>
          <span className="text-black/20 dark:text-white/20">{'///'}</span>
        </div>
        <Heading level={1} className="pl-0.5">
          Warenkorb
        </Heading>
        <div className="mt-12 sm:mt-16 lg:mt-20">{children}</div>
      </Section>
    </main>
  )
}
