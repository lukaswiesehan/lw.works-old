'use client'

import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import {supabaseClient} from '@utils/supabase/client'

export const SupabaseListener = ({accessToken}: {accessToken?: string}) => {
  const router = useRouter()
  const supabase = supabaseClient()

  useEffect(() => {
    //@ts-ignore
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken])

  return null
}

export default SupabaseListener
