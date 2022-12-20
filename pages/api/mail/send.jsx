import {createICS} from '@utils/calendar/create-ics'
import sendMail from '@emails/index'
import Test from '@emails/Test'

export const handler = async (req, res) => {
  try {
    const {event, error} = createICS()
    if (error) throw error
    await sendMail({
      to: 'lukas.wiesehan@icloud.com',
      subject: 'Hello',
      component: <Test name="Lukas" />,
      attachments: [{filename: 'event.ics', content: Buffer.from(event, 'utf-8')}]
    })
    res.status(200).end()
  } catch (error) {
    res.status(500).json({error})
  }
}

export default handler
