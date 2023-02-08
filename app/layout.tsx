import {Navigation} from '@components/layout/navigation'
import 'server-only'
import './globals.css'
import localFont from '@next/font/local'
import Script from 'next/script'
import {BlurBackground} from '@components/layout/blur-background'
import {Footer} from '@components/layout/footer'
import Analytics from '@components/atoms/analytics'

const lato = localFont({
  variable: '--font-lato',
  src: [
    {
      path: '../public/fonts/lato-400-latin.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/lato-700-latin.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})
const sora = localFont({
  variable: '--font-sora',
  src: [
    {
      path: '../public/fonts/sora-800-latin.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})
const mono = localFont({
  variable: '--font-jetbrains-mono',
  src: [
    {
      path: '../public/fonts/jetbrains-mono-300-latin.woff2',
      weight: '300',
      style: 'normal'
    }
  ]
})

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${lato.variable} ${sora.variable} ${mono.variable}`}>
      <head />
      <body className="relative h-full min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#0E1117]">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="check-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!('theme' in localStorage)) localStorage.theme = 'system'
              if (localStorage.theme === 'dark' || (localStorage.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `
          }}
        />
        <BlurBackground />
        <Navigation />
        <div className="relative">{children}</div>
        <Footer />
      </body>
      <Analytics />
    </html>
  )
}
