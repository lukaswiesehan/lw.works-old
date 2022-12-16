import {MjmlSection, MjmlColumn, MjmlImage} from 'mjml-react'
import Text from './Text'

const Signature = () => {
  return (
    <MjmlSection>
      <MjmlColumn width="48px" backgroundColor={'#ffffff'}>
        <MjmlImage padding="0" width="48px" height="48px" align="left" src="https://lwworks.vercel.app/images/lukaswiesehan.png" />
      </MjmlColumn>
      <MjmlColumn>
        <Text>Lukas Wiesehan</Text>
      </MjmlColumn>
    </MjmlSection>
  )
}

export default Signature
