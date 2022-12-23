import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {useState} from 'react'

const locales = [
  {id: 'de', name: 'Deutsch'},
  {id: 'en', name: 'English'}
]

export const LanguageButton = () => {
  const [locale, setLocale] = useState<string>(locales[0].id)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex h-7 items-center rounded px-2 text-indigo-300 hover:text-indigo-200 focus:bg-white/10 focus:outline-none">
        <span className="font-mono text-sm uppercase">{locale}</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          className="relative z-50 mt-3.5 rounded-lg border border-slate-700 bg-black/70 p-2 shadow-lg backdrop-blur-lg md:mt-0"
        >
          <DropdownMenu.RadioGroup value={locale} onValueChange={setLocale}>
            {locales.map(({id, name}, index) => (
              <DropdownMenu.RadioItem
                key={index}
                value={id}
                className="relative flex h-7 cursor-pointer items-center rounded border border-transparent px-2 font-mono text-sm uppercase focus:bg-white/10 focus:outline-none data-[state=checked]:text-indigo-300"
              >
                <DropdownMenu.ItemIndicator className="absolute inset-2 bg-indigo-400/80 blur-md" />
                <span className="relative">{id}</span>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="relative z-10 -mb-px h-1.5 w-3 fill-current text-transparent md:text-slate-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
