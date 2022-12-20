'use client'

import {supabaseClient} from '@utils/supabase/client'

export const SendEmail = () => {
  const supabase = supabaseClient()

  const sendTest = async () => {
    const {data} = await supabase.auth.getSession()
    await fetch('/api/email/send', {
      method: 'POST',
      body: JSON.stringify({
        accessToken: data.session?.access_token,
        refreshToken: data.session?.refresh_token,
        template: 'Test',
        to: 'lukas.wiesehan@icloud.com'
      } as SendEmailReqBody)
    })
    const smtpResponse = await supabase.from('smtp').select()
  }

  return (
    <div>
      <button onClick={sendTest}>Send Email</button>
    </div>
  )
}
