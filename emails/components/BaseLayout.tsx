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
        <MjmlFont name="Sora" href={`${process.env.NEXT_PUBLIC_BASE_URL}/fonts/sora.css`} />
        <MjmlFont name="Lato" href={`${process.env.NEXT_PUBLIC_BASE_URL}/fonts/lato.css`} />
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
        <MjmlStyle>{`
          body {
            -webkit-font-smoothing: antialiased;
          }
          a {
            color: ${colors.indigo500};
          }
          .footer a {
            color: inherit !important;
          }
          .text b {
            color: #000 !important;
          }
          .border-top {
            border-top: 1px solid #f1f5f9;
          }
          .gutter {
            padding-left: ${spacing.md}px;
            padding-right: ${spacing.md}px;
          }
          .dark-mode {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .gradient-background {
            background-image: url("${process.env.NEXT_PUBLIC_BASE_URL}/images/background-light.jpg");
            background-size: 100% auto;
            background-position: center top;
            background-repeat: no-repeat;
          }
          .signature-left {
            width: 48px !important;
          }
          .signature-right {
            width: calc(100%-48px) !important;
          }
          .footer {
            color: ${colors.slate400} !important;
          }
          @media (min-width:${screens.xs}) {
            .gradient-background {
              background-size: ${screens.xs} auto;
            }
          }
          @media (prefers-color-scheme: dark) {
            body {
              background: ${colors.bgDark};
            }
            .invert > * {
              filter: invert(1) !important;
            }
            .text > * {
              color: #CBD5E1 !important;
            }
            .heading > * {
              color: #fff !important;
            }
            .text b {
              color: #fff !important;
            }
            .border-top {
              border-top: 1px solid #1e293b;
            }
            a {
              color: ${colors.indigo400};
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
              background-image: url("${process.env.NEXT_PUBLIC_BASE_URL}/images/background-dark.jpg");
            }
            .footer {
              color: ${colors.slate500} !important;
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
