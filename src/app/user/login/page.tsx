// Purpose: Allow organizer to log in

// Functionality:
// - Organizer Inputs (update as needed): Email, Password
// - Welcome Modal on submission
// - Redirect to Profile on completion
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ticket from "@/assets/images/ticketLogoLight.png";
import { useLogin } from "@/hooks";

interface CredentialModel {
  username: string;
  password: string;
}

export default function Login() {
  const AUTH_URL = process.env.AUTH_API_URL;
  console.log(AUTH_URL);
  // const [credentials, setCredentials] = useState<CredentialModel>({
  //   username: "",
  //   password: "",
  // });
  const [data, setData] = useState<any>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  const router = useRouter();

  async function loginUser(credentials: object) {
    try {
      const response = await fetch(`${AUTH_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed"); // Handle non-OK response status (e.g., 400, 500, etc.)
      }

      const data = await response.json(); // Parse the JSON data from the response
      console.log(data);
      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch request
      console.error("Login failed:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    let credentials = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    loginUser(credentials);

    // useLogin(event.target.username.value, event.target.password.value);

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    // router.push("/user/profile");
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-white max-w-md w-full space-y-8 text-dark shadow-md rounded border-solid border-2 border-primary">
        <div>
          <Image
            className="mx-auto h-12 w-auto mt-4"
            src={ticket}
            alt="ticket logo"
          ></Image>

          <h2 className="mt-6 text-center text-3xl font-extrabold">
            EventPro Login
          </h2>
        </div>
        <div className="max-w-md w-full space-y-8">
          <form
            className=" shadow-md rounded px-8 pt-6 pb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                id="username"
                placeholder="Username"
                type="text"
                name="userName"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
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
                Login
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
