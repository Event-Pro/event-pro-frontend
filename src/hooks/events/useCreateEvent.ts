import { useState, useEffect } from "react";

interface EventModel {
  name: string;
  is_virtual: boolean;
  location: string;
  startDatetime: string;
  endDatetime: string;
  price: number;
  tags: string[] | null;
  creatorId: string;
  managedBy: string;
  imgUrl: string | null;
  description: string | null;
}
// Create a new event

export const useCreateEvent = (eventData: EventModel, user: any) => {
  const EVENTS_URL = process.env.EVENT_API_URL;
  const [data, setData] = useState<EventModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (EVENTS_URL && eventData) {
        try {
          setIsLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
          const response = await fetch(`${EVENTS_URL}/createEvent`, {
            method: "POST",
            headers: {
              ...config.headers,
            },
            body: JSON.stringify(eventData),
          });

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
