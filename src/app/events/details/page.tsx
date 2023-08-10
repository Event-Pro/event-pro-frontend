"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import baseball from "@/assets/images/baseball.webp";
// module resolution
import { useEvent } from "@/hooks";
import { dateFull, partialDate, partialTime } from "@/utils/dateFormatter";

// {"_id":"64c82df01662e48507781c97","name":"Event 2","is_virtual":false,"location":"New York","startDatetime":"2023-08-02T18:00:00.000Z","endDatetime":"2023-08-02T20:00:00.000Z","price":20,"tags":["entertainment"],"creatorId":"60d5ecb8b48738759f80f842","managedBy":["60d5ecb8b48738759f80f843"],"imgUrl":"http://example.com/event2.png","description":"This is a description for Event 2"}

function EventDetailPage() {
  // temp
  const eventId = "/64cdc2aa0baf2699bc6b0812";

  const { data: event, isError, isLoading } = useEvent(eventId);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [eventRegister, setEventRegister] = useState<boolean>(false);

  useEffect(() => {
    if (event && !isLoading) {
      setStart(dateFull(event.startDatetime));
      const endDateFull = dateFull(event.endDatetime);
      const startDatePartial = partialDate(event.startDatetime);
      const endDatePartial = partialDate(event.endDatetime);

      if (startDatePartial !== endDatePartial) {
        setEnd(endDateFull);
      } else {
        setEnd(partialTime(event.endDatetime));
      }
    }
  }, [event]);

  const register = () => {
    if (eventRegister) {
      setEventRegister(false);
    } else {
      setEventRegister(true);
      alert("Registered!");
    }
  };

  return (
    <div className="overflow-hidden mt-24 h-full min-h-screen">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {event ? (
            <div className=" flex flex-row my-8 mx-4 xl:mx-32 flex-wrap">
              <div className="m-auto mx-4 basis-full">
                <h1 className="my-4  text-3xl xs:text-5xl sm:text-6xl md:text-8xl text-center">
                  {event.name}
                </h1>

                <h1 className=" my-8 w-full text-lg xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-center ">
                  {start} to {end}
                </h1>
              </div>
              <Image
                className=" basis-full lg:basis-1/2 h-2/5 w-auto lg:h-auto lg:w-1/4 m-auto "
                alt="event image"
                src={baseball}
              ></Image>
              <div className="px-2 py-2 flex flex-col basis-full lg:basis-1/2 ">
                <div className="sm:px-8 lg:h-1/2 text-lg sm:text-2xl text-left flex flex-col py-4">
                  <h1 className="py-2">Location: {event.location}</h1>
                  <h1 className=" py-2">Cost: ${event.price}</h1>
                  <h1 className=" py-2">Hosted By: {event.creatorId}</h1>
                  <h1 className=" py-2">{event.description}</h1>
                  {eventRegister ? (
                    <button
                      className="bg-dark hover:bg-secondary text-white font-bold py-4 px-4 my-4 rounded focus:outline-none focus:shadow-outline m-auto text-1xl sm:text-4xl"
                      type="submit"
                      onClick={register}
                    >
                      Registered
                    </button>
                  ) : (
                    <button
                      className="bg-dark hover:bg-secondary text-white font-bold py-4 px-4 my-4 rounded focus:outline-none focus:shadow-outline m-auto text-1xl sm:text-4xl"
                      type="submit"
                      onClick={register}
                    >
                      Register Today!
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default EventDetailPage;
