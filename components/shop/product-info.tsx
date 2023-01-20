'use client'
import {Prose} from '@components/atoms/prose'
import * as Tabs from '@radix-ui/react-tabs'
import {FC, useState} from 'react'

const tabs = [
  {name: 'shipping', title: 'Versand'},
  {name: 'sizing', title: 'Maße & Größen'},
  {name: 'sustainability', title: 'Material & Nachhaltigkeit'},
  {name: 'transparency', title: 'Transparenz'}
]

export const ProductInfo: FC<{product: Product}> = ({product}) => {
  const [tab, setTab] = useState<string>(tabs[0].name)
  return (
    <section className="mt-16">
      <Tabs.Root value={tab} onValueChange={setTab}>
        <Tabs.List
          aria-label="Produktinformationen"
          className="relative z-10 mx-auto -mb-px flex w-full max-w-screen-xl space-x-4 overflow-x-auto px-6 pb-[0.8125rem] sm:px-8 lg:px-12"
        >
          {tabs.map(({name, title}, index) => {
            //@ts-ignore
            if (product[name])
              return (
                <Tabs.Trigger
                  key={index}
                  value={name}
                  className="relative flex h-9 shrink-0 cursor-pointer items-center rounded px-3 font-bold focus:bg-white/30 focus:outline-none data-[state=active]:text-black dark:focus:bg-white/10 dark:data-[state=active]:text-white md:h-7 md:px-2"
                >
                  {title}
                  {tab === name && (
                    <div className="absolute inset-x-0 z-10 mt-[3.8rem] h-px overflow-y-hidden md:mt-[3.3rem]">
                      <div className="mx-auto -mt-6 h-12 w-2/3 opacity-80 blur" style={{backgroundColor: product.accentColor}} />
                    </div>
                  )}
                </Tabs.Trigger>
              )
          })}
        </Tabs.List>
        <div className="relative overflow-hidden border-t border-slate-200 pt-8 pb-20 dark:border-slate-700 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48">
          <div className="absolute inset-0">
            <div
              className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl"
              style={{borderRadius: '50% 50%'}}
            />
          </div>
          {tabs.map(({name}, index) => (
            <Tabs.Content key={index} value={name} className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12">
              {/* @ts-ignore */}
              <Prose html={product[name]} />
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </section>
  )
}
