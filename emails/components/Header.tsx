import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react'

const Header = () => {
  return (
    <MjmlSection padding="64px 0 64px">
      <MjmlColumn>
        <MjmlImage padding="0" width="48px" height="28px" align="center" src="https://lwworks.vercel.app/images/logo.svg" cssClass="invert" />
      </MjmlColumn>
    </MjmlSection>
  )
}

export default Header
