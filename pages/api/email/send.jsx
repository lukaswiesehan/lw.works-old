import {createICS} from '@utils/calendar/create-ics'
import Test from '@emails/Test'
import {createClient} from '@supabase/supabase-js'
import nodemailer from 'nodemailer'
import {buildSendMail} from 'mailing-core'

export const handler = async (req, res) => {
  try {
    // Check request method
    if (req.method != 'POST') throw {code: 405, message: 'Method not allowed'}

    // Check session credentials
    const {accessToken, refreshToken} = JSON.parse(req.body)
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    const sessionResponse = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    })
    if (sessionResponse.error) throw {code: 401, message: 'Unauthorized'}

    // Get SMTP credentials
    const smtpResponse = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/smtp?select=*`, {
      method: 'GET',
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        authorization: `Bearer ${accessToken}`
      }
    })
    const data = await smtpResponse.json()
    const {host, port, username, password} = data[0]

    // Create mail sender
    const transport = nodemailer.createTransport({pool: true, host, port, secure: true, auth: {user: username, pass: password}})
    const sendMail = buildSendMail({transport, defaultFrom: 'mail@lukaswiesehan.de', configPath: './mailing.config.json'})

    // Create ICS file
    const {template, to} = JSON.parse(req.body)
    const {event, error} = createICS()
    if (error) throw error

    // Send email
    await sendMail({
      to,
      subject: 'Test-Nachricht',
      component: <Test name="Lukas" />,
      attachments: [{filename: 'event.ics', content: Buffer.from(event, 'utf-8')}]
    })

    res.status(200).end()
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}

export default handler
