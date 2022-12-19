import React from 'react'
import {MjmlRaw} from 'mjml-react'

import {themeDefaults, fontSize} from '../theme'

type ListProps = {
  items: string[]
  paddingBottom?: number
  paddingTop?: number
} & React.ComponentProps<typeof MjmlRaw>

export default function List({items, paddingBottom, paddingTop}: ListProps) {
  return (
    <MjmlRaw>
      <tr>
        <td style={{paddingBottom: `${paddingBottom ?? 0}px`, paddingTop: `${paddingTop ?? 0}px`}}>
          <table border={0} cellPadding={0} cellSpacing={0} role="presentation" width="100%">
            {items.map((item, index) => (
              <tr key={index} className="text">
                <td style={{...themeDefaults, opacity: 0.5, fontSize: fontSize.sm, paddingTop: '1px'}} align="center" valign="top" width={25}>
                  •
                </td>
                <td style={{...themeDefaults}}>{item}</td>
              </tr>
            ))}
          </table>
        </td>
      </tr>
    </MjmlRaw>
  )
}
