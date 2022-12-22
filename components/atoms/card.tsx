import {FC, ReactNode} from 'react'

export const Card: FC<{glowColor?: string; className?: string; children: ReactNode}> = ({glowColor, className, children}) => {
  return (
    <div className="group">
      <div className={`relative min-h-full w-full overflow-hidden rounded-[2rem] border border-slate-500 bg-slate-200/5 backdrop-blur-xl ${className}`}>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-400 opacity-10" />
        <div
          className="absolute left-1/4 right-1/4 -bottom-12 aspect-square rounded-full opacity-40 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-60"
          style={{backgroundColor: glowColor}}
        />
        <div className="relative">{children}</div>
      </div>
      <div className="relative mx-8 -mt-px h-px overflow-hidden">
        <div className="mx-auto -mt-6 h-12 w-2/3 blur-lg" style={{backgroundColor: glowColor}} />
      </div>
    </div>
  )
}
