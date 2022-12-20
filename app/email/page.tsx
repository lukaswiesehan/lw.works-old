'use client'
import sendMail from '@emails/index'
import Test from '@emails/Test'

export const Email = () => {
  const sendTest = async () => {
    await fetch('/api/mail/send', {
      method: 'POST'
    })
  }

  return (
    <main>
      <section>
        <h1>Email</h1>
        <button onClick={sendTest}>SEND</button>
      </section>
    </main>
  )
}

export default Email
