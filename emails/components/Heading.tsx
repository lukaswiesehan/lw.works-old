import React from 'react'
import Text from './Text'
import {MjmlText} from 'mjml-react'
import {fontFamily, lineHeight, fontWeight, fontSize, colors} from '../theme'

type HeadingProps = React.ComponentProps<typeof Text>

const defaultProps = {
  fontFamily: fontFamily.sora,
  fontWeight: fontWeight.extrabold,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.xl,
  color: colors.black
}

export default function Heading(props: HeadingProps) {
  return (
    <MjmlText {...defaultProps} {...props} cssClass="heading">
      {props.children}
    </MjmlText>
  )
}
