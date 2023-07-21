// Purpose: Allow organizer to log in

// Functionality:
// - Organizer Inputs (update as needed): Email, Password
// - Welcome Modal on submission
// - Redirect to Profile on completion
import React from 'react'
import Link from 'next/link'

function LoginForm() {
  return (
    <>
      <h1>Login Page</h1>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  )
}

export default LoginForm
