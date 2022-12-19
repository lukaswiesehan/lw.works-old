import {MjmlSection, MjmlGroup, MjmlColumn, MjmlImage} from 'mjml-react'
import Text from './Text'
import {lineHeight, spacing} from '../theme'
import {FC} from 'react'

type SignatureProps = {
  greeting?: string
}

const Signature: FC<SignatureProps> = ({greeting = 'Viele Grüße —'}) => {
  return (
    <>
      <MjmlSection textAlign="left" paddingTop={spacing.xl} cssClass="gutter">
        <MjmlColumn width="100%">
          <Text>{greeting}</Text>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection textAlign="left" paddingTop={spacing.sm} cssClass="gutter">
        <MjmlGroup>
          <MjmlColumn verticalAlign="middle" cssClass="signature-left">
            <MjmlImage
              padding="0"
              width="48px"
              height="48px"
              align="left"
              src="https://lwworks.vercel.app/images/lukaswiesehan.png"
              border="1px solid #A5B4FC"
              border-radius="24px"
            />
          </MjmlColumn>
          <MjmlColumn paddingLeft={spacing.sm} verticalAlign="middle" width="70%" cssClass="signature-right">
            <Text lineHeight={lineHeight.tight}>
              <b>Lukas Wiesehan</b>
              <br />
              Designer & Developer
            </Text>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
    </>
  )
}

export default Signature
