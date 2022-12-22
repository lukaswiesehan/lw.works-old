import 'server-only'
import {supabaseClient} from '@utils/supabase/server'
import SupabaseListener from '@components/supabase-listener'

export const revalidate = 0

export const Layout = async ({children}: {children: React.ReactNode}) => {
  const supabase = supabaseClient()

  const {
    data: {session}
  } = await supabase.auth.getSession()

  return (
    <div className="p-4 border border-blue-500">
      Operations Layout
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </div>
  )
}

export default Layout
