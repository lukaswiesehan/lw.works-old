import {Logo} from '@components/visual/logo'
import Link from 'next/link'

const links = [
  {href: '/work', caption: 'Work'},
  {href: '/blog', caption: 'Blog'},
  {href: '/hardware', caption: 'Hardware'}
]

export const Navigation = () => {
  return (
    <nav className="relative mx-auto flex w-full max-w-screen-xl justify-between p-4 sm:p-8 lg:py-10 lg:px-16">
      <Link href="/">
        <Logo className="h-6 text-white md:h-8" />
      </Link>
      <ul className="flex space-x-16">
        {links.map(({href, caption}, index) => (
          <li key={index}>
            <Link href={href} className="font-bold text-slate-700/70 mix-blend-color-burn">
              {caption}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
