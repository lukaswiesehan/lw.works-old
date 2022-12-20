'use client'

import {supabaseClient} from '@utils/supabase/client'

export const Login = () => {
  const supabase = supabaseClient()

  const login = async () => {
    const {data, error} = await supabase.auth.signInWithOtp({
      email: 'mail@lukaswiesehan.de',
      options: {emailRedirectTo: 'https://lwworks.vercel.app'}
    })
    if (error) console.log(error)
  }

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}
