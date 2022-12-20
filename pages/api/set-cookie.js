import {createICS} from '@utils/calendar/create-ics'
import sendMail from '@emails/index'
import Test from '@emails/Test'
import {createClient} from '@supabase/supabase-js'

export const handler = async (req, res) => {
  try {
    // Check request method
    if (req.method != 'POST') throw {code: 405, message: 'Method not allowed'}

    // Set supabase cookie
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    const response = await supabase.auth.api.setAuthCookie(req, res)

    res.status(200).end()
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
}

export default handler
