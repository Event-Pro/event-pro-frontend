import { useState, useEffect } from "react";

interface UserModel {
  name: string;
  email: string;
  username: string;
  password: string;
  imageUrl: string | null;
}

interface CredentialModel {
  username: "";
  password: "";
}

// Log in user

export const useLogin = (credentials: CredentialModel) => {
  const AUTH_URL = process.env.AUTH_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      console.log("called");
      // try catch finally
      if (AUTH_URL && credentials) {
        try {
          setIsLoading(true);
          //   const config = {
          //     headers: {
          //       Authorization: `Bearer ${user.token}`,
          //     },
          //   };
          const response = await fetch(`${AUTH_URL}/login`, {
            method: "POST",
            // headers: {
            //   ...config.headers,
            // },
            body: JSON.stringify({ credentials }),
          });

          const data = await response.json();
          setData(data);
          console.log(data);
        } catch {
          setIsError(true);
          console.log(isError);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getData();
  }, []);

  return { data, isLoading, isError };
};
