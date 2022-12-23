'use client'
import {Button} from '@components/atoms/button'
import {Logo} from '@components/visual/logo'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {MouseEventHandler, useEffect, useRef, useState} from 'react'
import {usePathname} from 'next/navigation'
import {LanguageButton} from '@components/atoms/language-button'
import {ThemeButton} from '@components/atoms/theme-button'
import {MenuIcon} from '@components/icons/menu'
import {CloseIcon} from '@components/icons/close'

const links = [
  {href: '/work', caption: 'Work'},
  {href: '/blog', caption: 'Blog'},
  {href: '/hardware', caption: 'Hardware'}
]

export const Navigation = () => {
  const [offsetX, setOffsetX] = useState<number>(0)
  const container = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    setOffsetX(e.clientX - container.current?.getBoundingClientRect().left!)
  }

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 w-full pt-4 md:pt-6 lg:pt-10">
      <div className="w-full px-4 sm:px-6 md:hidden">
        <div className="relative z-50 flex h-12 items-center justify-between rounded-3xl border border-slate-700 bg-black/70 pl-5 pr-1.5 shadow-lg backdrop-blur-lg">
          <Link href="/">
            <Logo className="h-5 text-white md:h-8" />
          </Link>
          <div className="absolute -bottom-px h-px w-8 overflow-y-hidden">
            <div className="mx-auto -mt-6 h-12 w-1/3 bg-white opacity-80 blur" />
          </div>
          <Button action={() => setOpen((open) => !open)} secondary hideArrow>
            {open ? <CloseIcon className="h-5" /> : <MenuIcon className="h-5" />}
          </Button>
        </div>
        {open && (
          <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-lg" onClick={() => setOpen((open) => !open)} />
            <div className="fixed inset-x-4 mt-2 flex h-48 flex-col items-center justify-between rounded-3xl border border-slate-700 bg-black/70 p-4 pb-6 shadow-lg sm:inset-x-6">
              <ul className="relative flex items-center justify-center space-x-4">
                {links.map(({href, caption}, index) => {
                  const active = pathname?.split('/')[1] === href.split('/')[1]
                  return (
                    <li key={index} className="relative">
                      <Link
                        href={href}
                        className={`relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/10 focus:outline-none ${
                          active ? 'text-white' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {caption}
                      </Link>
                      {active && (
                        <div className="absolute -inset-x-2 -top-[17px] h-px overflow-y-hidden">
                          <div className="mx-auto -mt-6 h-12 w-2/3 bg-white opacity-80 blur" />
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
              <Button href="/contact">Gespräch vereinbaren</Button>
              <div className="relative flex h-5 items-center">
                <LanguageButton />
                <ThemeButton />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mx-auto hidden w-full max-w-screen-xl items-center justify-between px-8 md:flex lg:px-12">
        <Link href="/">
          <Logo className="h-8 text-white md:h-8" />
        </Link>
        <motion.div
          onMouseMove={onMouseMove}
          ref={container}
          className="group relative flex h-12 items-center rounded-3xl border border-slate-700 bg-black/70 pr-1.5 shadow-lg backdrop-blur-lg"
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <motion.div
              className="absolute -bottom-3 -left-10 h-6 w-20 rounded-full bg-white/30 opacity-0 blur-lg transition-opacity duration-200 group-hover:opacity-100"
              style={{translateX: offsetX}}
            />
          </div>
          <ul className="relative flex items-center space-x-4 pl-4">
            {links.map(({href, caption}, index) => {
              const active = pathname?.split('/')[1] === href.split('/')[1]
              return (
                <li key={index} className="relative">
                  <Link
                    href={href}
                    className={`relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/10 focus:outline-none ${
                      active ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {caption}
                  </Link>
                  {active && (
                    <div className="absolute inset-x-0 mt-[9px] h-px overflow-y-hidden">
                      <div className="mx-auto -mt-6 h-12 w-2/3 bg-white opacity-80 blur" />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <div className="relative ml-4 mr-6 flex h-5 items-center border-x border-slate-600 px-3">
            <LanguageButton />
            <ThemeButton />
          </div>
          <Button href="/contact">Gespräch vereinbaren</Button>
        </motion.div>
      </div>
    </nav>
  )
}
