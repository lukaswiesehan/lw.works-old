import React from 'react'
import {MjmlSection, MjmlColumn, MjmlText} from 'mjml-react'
import {fontSize, spacing} from '../theme'

export const Footer = () => {
  return (
    <MjmlSection paddingTop={spacing.xl} cssClass="gutter footer">
      <MjmlColumn cssClass="border-top">
        <MjmlText paddingTop={spacing.lg} paddingBottom={spacing.lg} fontSize={fontSize.sm} align="center">
          <p className="footer">
            &copy; Lukas Wiesehan
            <br />
            Herrenstr. 30a&nbsp;&nbsp;·&nbsp;&nbsp;21698 Harsefeld
            <br />
            <a href="mailto:mail@lukaswiesehan.de" style={{textDecoration: 'none'}}>
              mail@lukaswiesehan.de
            </a>
            <br />
            <a href="tel:01746225463" style={{textDecoration: 'none'}}>
              +49 174 622 54 63
            </a>
            <br />
            <a href="https://lukaswiesehan.de/legal" rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}>
              Impressum
            </a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="https://lukaswiesehan.de/privacy" rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}>
              Datenschutz
            </a>
          </p>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  )
}

export default Footer
