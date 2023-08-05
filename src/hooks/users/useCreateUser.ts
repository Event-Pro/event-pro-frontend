import { useState, useEffect } from "react";

interface UserModel {
  name: string;
  email: string;
  username: string;
  password: string;
  imageUrl: string | null;
}
// Create a new event

export const useCreateUser = (userData: UserModel, user: any) => {
  const AUTH_URL = process.env.AUTH_API_URL;
  const [data, setData] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (AUTH_URL && userData) {
        try {
          setIsLoading(true);
          // const config = {
          //   headers: {
          //     Authorization: `Bearer ${user.token}`,
          //   },
          // };
          const response = await fetch(`${AUTH_URL}/signup`, {
            method: "POST",
            // headers: {
            //   ...config.headers,
            // },
            body: JSON.stringify(userData),
          });

          const data = await response.json();
          setData(data);
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
