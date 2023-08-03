// Purpose: Allow a user to create an account

// Functionality:
// - User Inputs (update as needed): First name, last name, Email, username, Password, Image (optional)
// - Welcome Modal on submission
// - Redirect to Profile on completion

"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ticket from "@/assets/images/ticketLogoLight.png";

export default function CreateCustomerAccountForm() {
  const router = useRouter();
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    alert(`Hi ${data.firstName}`);

    router.push("/user/profile");

    // // API endpoint where we send form data.
    // const endpoint = '/api/createOrganizer'

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white max-w-md w-full space-y-8 text-dark border-solid border-2 border-primary">
        <div>
          <Image
            className="mx-auto h-12 w-auto mt-4"
            src={ticket}
            alt="ticket logo"
          ></Image>

          <h2 className="mt-6 mx-4 text-center text-3xl font-extrabold">
            Create your EventPro Account
          </h2>
        </div>
        <div className="max-w-md w-full space-y-8">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                placeholder="Email"
                name="email"
                required
                type="email"
                id="email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                placeholder="******"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-dark hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div>
              <Link href="/">← Back to home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
