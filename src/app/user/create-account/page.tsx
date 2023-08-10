// Purpose: Allow a user to create an account

// Functionality:
// - User Inputs (update as needed): First name, last name, Email, username, Password, Image (optional)
// - Welcome Modal on submission
// - Redirect to Profile on completion

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ticket from "@/assets/images/ticketLogoLight.png";

interface UserModel {
  name: string;
  email: string;
  username: string;
  password: string;
}
interface ErrorResponse {
  message: string;
}

export default function CreateCustomerAccountForm() {
  const AUTH_URL = process.env.AUTH_API_URL;
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (localStorage.getItem("userId")) {
      router.push("/user/profile");
    }
  }, []);

  async function createUser(userData: UserModel) {
    try {
      const response = await fetch(`${AUTH_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json(); // Parse the JSON data from the response

      if (data) {
        localStorage.setItem("userId", data._id);
        window.location.reload();
        router.push("/user/profile");
      }

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
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    createUser(data);

    // router.push("/user/profile");
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
                minLength={2}
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
                minLength={2}
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
                minLength={6}
              />
            </div>
            {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
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
