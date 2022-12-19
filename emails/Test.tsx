import React from 'react'
import {MjmlSection, MjmlColumn} from 'mjml-react'
import {Template} from 'mailing-core'
import Button from './components/Button'
import Header from './components/Header'
import Heading from './components/Heading'
import Footer from './components/Footer'
import BaseLayout from './components/BaseLayout'
import Text from './components/Text'
import {spacing, fontSize} from './theme'
import Signature from './components/Signature'
import List from './components/List'

type TestProps = {name: string}

const Test: Template<TestProps> = ({name}) => (
  <BaseLayout width={480} preview="Excited to help you enjoy great meals.">
    <Header />
    <MjmlSection cssClass="gutter">
      <MjmlColumn>
        <Heading fontSize={fontSize.xl} paddingBottom={spacing.md}>
          Danke für 2022, {name}!
        </Heading>
        <Text paddingBottom={spacing.md}>
          Thank you for joining BookBook! We’re excited to help you enjoy great meals without any begging, guessing, waiting or phone calls. Just a couple
          taps, and the table is yours.
        </Text>
        <Heading fontSize={fontSize.lg} paddingBottom={spacing.xs}>
          17 Projekte
        </Heading>
        <Text paddingBottom={spacing.xs}>
          Thank you for joining BookBook! We’re excited to help you enjoy great meals without any begging, guessing, waiting or phone calls. Just a couple
          taps, and the table is yours.
        </Text>
        <List items={['Das ist das erste Element', 'Das ist das zweite Element', 'Ein drittes darf nicht fehlen']} paddingBottom={spacing.sm} />
        <Text paddingBottom={spacing.sm}>
          Thank you for joining BookBook! We’re excited to help you enjoy great meals without any begging, guessing, waiting or phone calls. Just a couple
          taps, and the table is yours.
        </Text>
        <Button href="https://www.mailing.run">Call vereinbaren</Button>
        <Text paddingTop={spacing.md}>
          Thank you for joining BookBook! We’re excited to help you enjoy great meals without any begging, guessing, waiting or phone calls. Just a couple
          taps, and the table is yours.
        </Text>
      </MjmlColumn>
    </MjmlSection>
    <Signature greeting="Ich wünsch' Dir eine schöne Zeit —" />
    <Footer />
  </BaseLayout>
)

Test.subject = ({name}) => `Welcome to BookBook, ${name}!`

export default Test
