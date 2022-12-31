import {Prose} from '@components/atoms/prose'
import {Logo} from '@components/visual/logo'
import * as Tabs from '@radix-ui/react-tabs'
import Link from 'next/link'
import {FC, useState} from 'react'

const menus = [
  {
    title: 'Blog',
    elements: [
      {caption: 'SaaS Radar', href: '/blog/saas-radar'},
      {caption: 'Technologie', href: '/blog/technology'},
      {caption: 'Trends', href: '/blog/trends'}
    ]
  },
  {
    title: 'Service',
    elements: [
      {caption: 'Konzept', href: '/concept'},
      {caption: 'Design', href: '/design'},
      {caption: 'Development', href: '/development'},
      {caption: 'Recent Work', href: '/work'}
    ]
  },
  {
    title: 'Rechtliches',
    elements: [
      {caption: 'Kontakt', href: '/contact'},
      {caption: 'Impressum', href: '/legal'},
      {caption: 'Datenschutz', href: '/privacy'},
      {caption: 'AGB', href: '/terms'},
      {caption: 'Cookies', href: '/cookies'}
    ]
  }
]

export const Footer = () => {
  return (
    <section className="pb-12 md:pb-16">
      <div className="relative min-h-[12rem] overflow-hidden border-t border-slate-200 py-16 dark:border-slate-700 md:pb-32">
        <div className="absolute inset-0">
          <div
            className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl"
            style={{borderRadius: '50% 50%'}}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col justify-between px-6 text-sm text-slate-400 dark:text-slate-500 sm:flex-row sm:space-y-0 sm:px-8 lg:px-12">
          <div className="order-2 mt-4 sm:order-1 sm:mt-0">
            <Logo className="mb-6 h-8" />
            <p>&copy; Lukas Wiesehan 2023</p>
          </div>
          <div className="order-1 flex justify-between space-x-8 sm:order-2 sm:justify-start sm:space-x-16">
            {menus.map(({title, elements}, index) => (
              <div key={index}>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-indigo-500/70 dark:text-indigo-400/70">{title}</h4>
                <ul className="space-y-2">
                  {elements.map(({caption, href}, index) => (
                    <li key={index}>
                      <Link href={href}>{caption}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
