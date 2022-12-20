'use client'

import {supabaseClient} from '@utils/supabase/client'
import {useRouter} from 'next/navigation'

export const Logout = () => {
  const supabase = supabaseClient()
  const router = useRouter()

  const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) console.log(error)
    router.refresh()
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
