import React from 'react'
import {Mjml, MjmlBody, MjmlHead, MjmlFont, MjmlStyle, MjmlAttributes, MjmlAll, MjmlRaw, MjmlPreview} from 'mjml-react'
import {colors, screens, themeDefaults, spacing} from '../theme'

type BaseLayoutProps = {
  width: number
  children: React.ReactNode
  preview?: string
}

export default function BaseLayout({width, children, preview}: BaseLayoutProps) {
  return (
    <Mjml>
      <MjmlHead>
        {preview && <MjmlPreview>{preview}</MjmlPreview>}
        <MjmlRaw>
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
        </MjmlRaw>
        <MjmlFont name="Sora" href="https://lwworks.vercel.app/fonts/sora.css" />
        <MjmlFont name="Lato" href="https://lwworks.vercel.app/fonts/lato.css" />
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
        <MjmlStyle>{`
          body {
            -webkit-font-smoothing: antialiased;
          }
          a {
            color: inherit
          }
          .gutter {
            padding-left: ${spacing.s7}px;
            padding-right: ${spacing.s7}px;
          }
          .no-wrap {
            white-space: nowrap;
          }
          .dark-mode {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .lg-hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .gradient-background {
            background-image: url("https://lwworks.vercel.app/images/background-light.jpg");
            background-size: 100% auto;
            background-position: center top;
            background-repeat: no-repeat;
          }

          /* Large screens */
          @media (min-width:${screens.xs}) {
            .lg-gutter {
              padding-left: ${spacing.s7}px !important;
              padding-right: ${spacing.s7}px !important;
            }
            .sm-hidden {
              display: none;
              max-width: 0px;
              max-height: 0px;
              overflow: hidden;
              mso-hide: all;
            }
            .lg-hidden {
              display: block !important;
              max-width: none !important;
              max-height: none !important;
              overflow: visible !important;
              mso-hide: none !important;
            }
            .gradient-background {
              background-size: ${screens.xs} auto;
            }
          }

          /* Dark Mode */
          @media (prefers-color-scheme: dark) {
            body {
              background: ${colors.bgDark};
            }
            .invert > * {
              filter: invert(1) !important;
            }
            .text > * {
              color: #fff !important;
            }
            .dark-mode {
              display: inherit !important;
              max-width: none !important;
              max-height: none !important;
              overflow: visible !important;
              mso-hide: none !important;
            }
            .light-mode {
              display: none;
              max-width: 0px;
              max-height: 0px;
              overflow: hidden;
              mso-hide: all;
            }
            .gradient-background {
              background-image: url("https://lwworks.vercel.app/images/background-dark.jpg");
            }
          }
      `}</MjmlStyle>
      </MjmlHead>

      <MjmlBody width={width} cssClass="gradient-background">
        {children}
      </MjmlBody>
    </Mjml>
  )
}
