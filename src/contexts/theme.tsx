// https://www.js-craft.io/blog/using-react-context-nextjs-13/

// https://www.js-craft.io/blog/using-react-context-nextjs-13/

"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the user data
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

// Define the type for the context value
interface ThemeContextValue {
  user: User;
  setUser: (user: User) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  user: defaultUser,
  setUser: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue =>
  useContext(ThemeContext);
