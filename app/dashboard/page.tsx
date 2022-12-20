import {Logout} from '@components/logout'
import {SendEmail} from '@components/send-email'

export default function Email() {
  return (
    <main>
      <section>
        <h1>Dashboard</h1>
        <SendEmail />
        <Logout />
      </section>
    </main>
  )
}
