import {createMiddlewareSupabaseClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()

  console.log('Middleware runs...')

  const supabase = createMiddlewareSupabaseClient({req, res})

  const {
    data: {session}
  } = await supabase.auth.getSession()

  const url = req.nextUrl.clone()

  // If not logged in, redirect to /
  if (!session && url.pathname !== '/operations') {
    url.pathname = '/operations'
    return NextResponse.redirect(url)
  }

  // If logged in, but on login page, redirect to /dashboard
  if (session && url.pathname === '/operations') {
    url.pathname = '/operations/dashboard'
    return NextResponse.redirect(url)
  }

  return res
}

export const config = {
  matcher: ['/operations/:path*']
}
