'use client'

import {Logout} from '@components/logout'

export default function Email() {
  const sendTest = async () => {
    await fetch('/api/mail/send', {
      method: 'POST'
    })
  }

  return (
    <main>
      <section>
        <h1>Dashboard</h1>
        <button onClick={sendTest}>SEND EMAIL</button>
        <Logout />
      </section>
    </main>
  )
}
