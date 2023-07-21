// Purpose: Allow a Customer to create an account

// Functionality:
// - Customer Inputs (update as needed): First name, last name, Email, username, Password, Image (optional)
// - Welcome Modal on submission
// - Redirect to Profile on completion
import React from 'react'
import Link from 'next/link'

function CreateCustomerAccountForm() {
  return (
    <>
      <h1>CreateCustomerAccountForm</h1>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  )
}

export default CreateCustomerAccountForm
