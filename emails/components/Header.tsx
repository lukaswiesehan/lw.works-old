import React from 'react'
import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react'

type HeaderProps = {
  loose?: boolean
}

const Header: React.FC<HeaderProps> = ({loose}) => {
  return (
    <MjmlSection padding={loose ? '48px 0 40px' : '48px 0 24px'}>
      <MjmlColumn>
        <MjmlImage padding="0 24px 0" width="64px" height="37px" align="center" src="https://lwworks.vercel.app/images/logo.svg" cssClass="invert" />
      </MjmlColumn>
    </MjmlSection>
  )
}

export default Header
