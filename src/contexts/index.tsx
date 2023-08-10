// https://atakansava.medium.com/using-react-context-with-nextjs-288bde71f807

import { useContext } from "react";

import { GlobalContext } from "./globalContext";

export const useGlobalContext = () => useContext(GlobalContext);
