// Purpose: Allow organizer to log in

// Functionality:
// - Organizer Inputs (update as needed): Email, Password
// - Welcome Modal on submission
// - Redirect to Profile on completion
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import ticket from "@/assets/images/ticketLogoLight.png";
import { useLogin } from "@/hooks";
import { useThemeContext } from "@/contexts/theme";
import { userAgent } from "next/server";

interface CredentialModel {
  username: string;
  password: string;
}
interface ErrorResponse {
  message: string;
}

interface User {
  email: string;
  managedEvents: string[];
  name: string;
  password: string;
  registeredEvents: any;
  username: string;
  __v: number;
  _id: string;
}
const defaultUser = {
  email: "",
  managedEvents: [""],
  name: "",
  password: "",
  registeredEvents: [],
  username: "",
  __v: 0,
  _id: "",
};

export default function Login() {
  // const { user, setUser } = useThemeContext();
  const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;
  const [error, setError] = useState<string | null>(null);

  // const [user, setUser] = useState<User>(defaultUser);
  const [submit, setSubmit] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setError(null);
    if (
      typeof window !== "undefined" &&
      typeof sessionStorage !== "undefined"
    ) {
      if (sessionStorage.getItem("token")) {
        // window.location.reload();
        router.push("/user/profile");
      }
    }
  }, []);

  // useEffect(() => {
  //   if (user._id.length > 0) {
  //     router.push("/user/profile");
  //   }
  // }, [user]);

  async function loginUser(credentials: CredentialModel) {
    try {
      const response = await fetch(`${AUTH_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json(); // Parse the JSON data from the response

      sessionStorage.setItem("token", JSON.stringify(data.token));
      sessionStorage.setItem("user", JSON.stringify(data.user));

      window.location.reload();
      router.push("/user/profile");

      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch request
      console.error((error as Error).message);
      setError((error as Error).message);
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
            {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
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
