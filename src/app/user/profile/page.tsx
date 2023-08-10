// Purpose: Landing page for an organizer/customer

// Functionality:
// Organizer -
// - Display EventCards for the events an organizer has created.
// - Access to "CreateEventForm"
// Customer -
// - Display EventCards for registered events
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useThemeContext } from "@/contexts/theme";
import { useUser } from "@/hooks";
import { stringify } from "querystring";
import { useRouter } from "next/navigation";

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

function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>(defaultUser);
  const router = useRouter();
  // const [user, setUser] = useState<User>(defaultUser);
  // const {
  //   data: user,
  //   isError,
  //   isLoading,
  // } = useUser(JSON.stringify(sessionStorage.getItem("token")));
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof sessionStorage !== "undefined" &&
      typeof sessionStorage.getItem("user") !== null
    ) {
      let activeToken = sessionStorage.getItem("token");
      let activeUser = sessionStorage.getItem("user");
      if (activeToken && activeUser) {
        setToken(JSON.stringify(activeToken));
        setUser(JSON.parse(activeUser));
      }
      if (!sessionStorage.getItem("token")) {
        router.push("/");
      }
    }
  }, []);
  // const { user, setUser } = useThemeContext();
  // console.log(user);
  return (
    <>
      {user._id.length > 0 ? (
        <>
          <h1 className="pt-44">ProfilePage for {user.name}</h1>

          <h2>
            <Link href="/">← Back to home</Link>
          </h2>
        </>
      ) : (
        <>
          <h1 className="pt-44">No one logged in</h1>

          <h2>
            <Link href="/">← Back to home</Link>
          </h2>
        </>
      )}
    </>
  );
}

export default ProfilePage;
