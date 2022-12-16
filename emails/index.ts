import nodemailer from 'nodemailer'
import {buildSendMail} from 'mailing-core'

const transport = nodemailer.createTransport({
  pool: true,
  host: 'smtp.strato.de',
  port: 465,
  secure: true,
  auth: {
    user: 'mail@lukaswiesehan.de',
    pass: process.env.MAIL_PASSWORD
  }
})

const sendMail = buildSendMail({
  transport,
  defaultFrom: 'mail@lukaswiesehan.de',
  configPath: './mailing.config.json'
})

export default sendMail
