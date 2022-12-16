import React from 'react'
import {MjmlSection, MjmlColumn, MjmlText} from 'mjml-react'
import {EMAIL_PREFERENCES_URL} from 'mailing-core'
import {colors, fontSize, spacing} from '../theme'

type FooterProps = {
  includeUnsubscribe?: boolean
}

export default function Footer({includeUnsubscribe}: FooterProps) {
  return (
    <MjmlSection textAlign="center" cssClass="gutter">
      <MjmlColumn>
        <MjmlText paddingTop={spacing.s9} paddingBottom={spacing.s10} fontSize={fontSize.sm} color={colors.neutral400} align="center">
          © {new Date().getFullYear()} Lukas Wiesehan
          {includeUnsubscribe && (
            <>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href={EMAIL_PREFERENCES_URL} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                Unsubscribe
              </a>
            </>
          )}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  )
}
