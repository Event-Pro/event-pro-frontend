import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

export interface EventModel {
  name: string;
  is_virtual: boolean;
  location: string;
  startDatetime: string;
  endDatetime: string;
  price: number;
  tags: string[];
  creatorId: string;
  managedBy: string;
  imgUrl: StaticImageData;
  description: string;
}
// get all events
export const useEvent = (id: string) => {
  const EVENTS_URL = process.env.EVENT_API_URL;
  const [data, setData] = useState<EventModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      // try catch finally
      if (EVENTS_URL) {
        try {
          setIsLoading(true);
          const response = await fetch(`${EVENTS_URL}/${id}`);

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
