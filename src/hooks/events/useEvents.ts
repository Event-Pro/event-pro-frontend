import { useState, useEffect } from "react";

// get all events
export const useEvents = () => {
  const EVENTS_URL = process.env.EVENT_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (EVENTS_URL) {
        try {
          setIsLoading(true);
          const response = await fetch(EVENTS_URL);

          const data = await response.json();
          setData(data);
          console.log(data);
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
