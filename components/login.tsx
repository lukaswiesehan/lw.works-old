'use client'

import {supabaseClient} from '@utils/supabase/client'

export const Login = () => {
  const supabase = supabaseClient()

  const login = async () => {
    const {data, error} = await supabase.auth.signInWithOtp({
      email: 'mail@lukaswiesehan.de',
      options: {emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`}
    })
    console.log(data)
    if (error) console.log(error)
  }

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}
