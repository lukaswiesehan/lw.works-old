import 'server-only'
import './globals.css'
import {supabaseClient} from '@utils/supabase/server'
import SupabaseListener from '@components/supabase-listener'

export const revalidate = 0

export const Layout = async ({children}: {children: React.ReactNode}) => {
  const supabase = supabaseClient()

  const {
    data: {session}
  } = await supabase.auth.getSession()

  return (
    <html lang="de">
      <head />
      <body>
        <SupabaseListener accessToken={session?.access_token} />
        {children}
      </body>
    </html>
  )
}

export default Layout
