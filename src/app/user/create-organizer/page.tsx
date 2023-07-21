// Purpose: Allow an Organizer to create an account

// Functionality:
// - Organizer Inputs (update as needed): Name, Email, Password Image (optional)
// - Welcome Modal on submission
// - Redirect to Profile on completion
import React from 'react'
import Link from 'next/link'

function CreateOrganizerAccountForm() {
  return (
    <>
      <h1>CreateOrganizerAccountForm</h1>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  )
}

export default CreateOrganizerAccountForm
