import 'server-only'
import {supabaseClient} from '@utils/supabase/server'
import SupabaseListener from '@components/supabase-listener'
import {notFound} from 'next/navigation'

export const revalidate = 0

export const Layout = async ({children}: {children: React.ReactNode}) => {
  const supabase = supabaseClient()

  const {
    data: {session}
  } = await supabase.auth.getSession()

  notFound()

  return (
    <div className="border border-blue-500 p-4">
      Operations Layout
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </div>
  )
}

export default Layout
