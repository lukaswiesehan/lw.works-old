import {ComponentProps} from 'react'
import {MjmlButton} from 'mjml-react'

import {colors, borderRadius, fontWeight} from '../theme'

type ButtonProps = {
  style?: 'primary' | 'secondary'
} & ComponentProps<typeof MjmlButton>

export default function Button({style = 'primary', ...props}: ButtonProps) {
  if (style === 'primary') {
    return (
      <>
        <MjmlButton
          align="left"
          innerPadding="4px 16px"
          borderRadius={borderRadius.full}
          color={colors.white}
          backgroundColor={colors.indigo500}
          fontWeight={fontWeight.bold}
          cssClass="light-mode"
          {...props}
        />
        <MjmlButton
          align="left"
          innerPadding="4px 16px"
          borderRadius={borderRadius.full}
          color={colors.white}
          backgroundColor={colors.indigo500}
          fontWeight={fontWeight.bold}
          cssClass="dark-mode"
          {...props}
        />
      </>
    )
  } else {
    return (
      <>
        <MjmlButton
          align="left"
          innerPadding="4px 16px"
          borderRadius={borderRadius.full}
          color={colors.indigo500}
          backgroundColor="transparent"
          fontWeight={fontWeight.bold}
          cssClass="light-mode"
          {...props}
        />
        <MjmlButton
          align="left"
          innerPadding="4px 16px"
          borderRadius={borderRadius.full}
          color={colors.indigo400}
          backgroundColor="transparent"
          fontWeight={fontWeight.bold}
          cssClass="dark-mode"
          {...props}
        />
      </>
    )
  }
}
