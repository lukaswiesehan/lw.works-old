'use client'

export default function Email() {
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
