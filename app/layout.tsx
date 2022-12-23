import {Navigation} from '@components/layout/navigation'
import {Noise} from '@components/visual/noise'
import {BlobLarge} from '@components/visual/svg-blobs/blob-large'
import {Ellipse} from '@components/visual/svg-blobs/ellipse'
import {Triangle} from '@components/visual/svg-blobs/triangle'
import 'server-only'
import './globals.css'
import localFont from '@next/font/local'

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

export const Layout = async ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="de" className={`${lato.variable} ${sora.variable} ${mono.variable}`}>
      <head />
      <body className="min-h-screen w-full overflow-x-hidden border border-red-500 bg-[#0E1117]">
        <div className="relative mx-auto w-full max-w-screen-2xl">
          <BlobLarge className="absolute -right-8 -top-8 w-1/2 animate-spin-slow text-[#8182C8] blur-3xl md:-right-48 md:-top-40 md:blur-4xl" />
          <Ellipse className="absolute left-32 -top-4 w-7/12 rotate-6 text-[#AA8FC5] blur-3xl md:-top-32 md:left-auto md:right-16 md:blur-4xl" />
          <Ellipse className="absolute left-32 top-12 w-5/12 animate-spin-slow text-[#A2B976] mix-blend-overlay blur-2xl md:-top-8 md:left-1/4 md:blur-4xl" />
          <Triangle className="absolute -top-12 right-12 w-5/12 animate-spin-slow text-[#B0F4D5] mix-blend-overlay blur-2xl md:-top-36 md:opacity-80 md:blur-4xl" />
        </div>
        {/* <Noise /> */}
        <Navigation />
        <div className="relative">{children}</div>
      </body>
    </html>
  )
}

export default Layout
