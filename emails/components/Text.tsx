import React from 'react'
import {MjmlText} from 'mjml-react'

type TextProps = React.ComponentProps<typeof MjmlText>

export default function Text({children, ...props}: TextProps) {
  return (
    <MjmlText {...props} color="#475569" cssClass="text">
      {children}
    </MjmlText>
  )
}
