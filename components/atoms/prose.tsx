import {FC} from 'react'

export const Prose: FC<{html: string; className?: string | ''}> = ({html, className}) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: html}}
      className={`prose prose-p:text-slate-600 prose-a:text-indigo-500 prose-a:no-underline prose-strong:text-black prose-ul:text-slate-600 dark:prose-p:text-slate-300 dark:prose-a:text-indigo-400 dark:prose-strong:text-white dark:prose-ul:text-slate-300 ${className}`}
    />
  )
}
