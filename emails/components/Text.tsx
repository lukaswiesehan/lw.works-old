import React from 'react'
import {MjmlText} from 'mjml-react'

type TextProps = React.ComponentProps<typeof MjmlText>

const defaultProps = {}

export const Text = ({children, ...props}: TextProps) => {
  return (
    <MjmlText {...defaultProps} {...props} cssClass="text">
      {children}
    </MjmlText>
  )
}

export default Text
