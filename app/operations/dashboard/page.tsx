import {Logout} from '@components/logout'
import {SendEmail} from '@components/send-email'

export default function Dashboard() {
  return (
    <main className="p-4 border border-red-400">
      <section>
        <h1>Operations/Dashboard</h1>
        <SendEmail />
        <Logout />
      </section>
    </main>
  )
}
