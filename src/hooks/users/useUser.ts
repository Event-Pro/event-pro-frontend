import { useState, useEffect } from "react";

export interface UserModel {
  name: string;
  email: string;
  username: string;
  password: string;
}
// get a single events
export const useUser = (token: string) => {
  const USERS_URL = process.env.USER_API_URL;
  const [data, setData] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (USERS_URL) {
        try {
          setIsLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await fetch(USERS_URL, config);

          const data = await response.json();
          setData(data.event);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getData();
  }, []);

  return { data, isLoading, isError };
};
