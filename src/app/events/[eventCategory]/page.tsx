"use client";
import { useRouter } from "next/router";
// import EventList from "@/components/eventList";
import { useParams } from "next/navigation";
import { useEvents } from "@/hooks";
import { useEffect, useState } from "react";

function EventCategoryPage() {
  const [events, setEvents] = useState([]);
  // const router = useRouter();
  const params = useParams();
  const category = params.eventCategory;
  // const { category } = router.query;
  const { data: allEvents, isError, isLoading } = useEvents();

  // useEffect(() => {
  //   if (allEvents && !isLoading) {
  //     let categoryEvents = [];
  //     for (let e of allEvents) {
  //       categoryEvents.push(allEvents[e]);
  //     }
  //   }
  // }, [allEvents]);

  console.log(allEvents);
  return (
    <div className="pt-44">
      <h1>Test</h1>
      {/* <EventList category={category} /> */}
    </div>
  );
}

export default EventCategoryPage;
