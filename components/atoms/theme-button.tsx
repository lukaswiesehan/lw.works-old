import {MoonIcon} from '@components/icons/moon'
import {SunIcon} from '@components/icons/sun'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {useState} from 'react'

const themes = [
  {id: 'dark', name: 'Dark Mode', icon: MoonIcon},
  {id: 'light', name: 'Light Mode', icon: SunIcon}
]

export const ThemeButton = () => {
  const [theme, setTheme] = useState<string>(themes[0].id)
  const Icon = themes.find((t) => t.id === theme)!.icon

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex h-7 items-center rounded px-2 text-indigo-300 hover:text-indigo-200 focus:bg-white/10 focus:outline-none">
        <span className="">
          <Icon className="h-4 text-indigo-300" />
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={10} className="relative z-50 mt-3.5 rounded-lg border border-slate-700 bg-[#191F29] p-2 shadow-lg md:mt-0">
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            {themes.map(({id, icon}, index) => {
              const Icon = icon
              return (
                <DropdownMenu.RadioItem
                  key={index}
                  value={id}
                  className="relative flex h-7 cursor-pointer items-center rounded border border-transparent px-2 font-mono text-sm uppercase focus:bg-white/10 focus:outline-none data-[state=checked]:text-indigo-300"
                >
                  <DropdownMenu.ItemIndicator className="absolute inset-2 bg-indigo-300/80 blur-md" />
                  <Icon className="relative h-4" />
                </DropdownMenu.RadioItem>
              )
            })}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="relative z-10 -mb-px h-1.5 w-3 fill-current text-transparent md:text-[#191F29]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
