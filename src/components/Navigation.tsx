// Purpose: Navigation header used throughout app

// Functionality:
// - App Logo / Event Name

// - Menu Options -> Match available event tags
// Help -> Pop up modal showing team email

// No User Signed In:
// - Create Account, Login

// User Signed In:
// *Starting with the assumption all users are organizers and can create events
// - Profile, SignOut, CreateEvent
import React from 'react'

const Navigation = () => {
  const navLink =
    'text-dark  border-b-4 border-transparent hover:border-secondary py-2'
  return (
    <div className="sticky top-0 flex items-center justify-center bg-primary py-6">
      <ul className="flex">
        <li className="mr-6">
          <a className={navLink} href="/">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="/user/login">
            Login
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="/user/create-customer">
            Create Customer Account
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="/user/create-organizer">
            Create Organizer Account
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="/user/profile">
            Profile
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="#">
            Help
          </a>
        </li>
        <li className="mr-6">
          <a className={navLink} href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Navigation
