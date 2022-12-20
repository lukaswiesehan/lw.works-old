'use client'

import {supabaseClient} from '@utils/supabase/client'

export const Logout = () => {
  const supabase = supabaseClient()

  const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) console.log(error)
    location.reload()
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
