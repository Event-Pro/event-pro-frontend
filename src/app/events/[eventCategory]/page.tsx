"use client";
import { useRouter } from "next/router";
// import EventList from "@/components/eventList";
import { useParams } from "next/navigation";
import { useEvents } from "@/hooks";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { musicEvents, parkEvents, sportEvents } from "@/utils/data";

function EventCategoryPage() {
  const [events, setEvents] = useState([]);
  // const router = useRouter();
  const params = useParams();
  const category = params.eventCategory;
  // const { category } = router.query;
  // const { data: allEvents, isError, isLoading } = useEvents();

  if (category == "SportsAndHobbies") {
    return (
      <div className="pt-44">
        <div className="w-10/12 justify-center m-auto mt-10">
          <h1 className="text-3xl font-bold tracking-wide drop-shadow-text-md mb-2">
            {category}
          </h1>
          <div className="flex justify-center">
            <EventCard events={sportEvents} />
          </div>
        </div>
      </div>
    );
  }
  if (category == "SocialActivities") {
    return (
      <div className="pt-44">
        <div className="w-10/12 justify-center m-auto mt-10">
          <h1 className="text-3xl font-bold tracking-wide drop-shadow-text-md mb-2">
            {category}
          </h1>
          <div className="flex justify-center">
            <EventCard events={parkEvents} />
          </div>
        </div>
      </div>
    );
  }
  if (category == "Entertainment") {
    return (
      <div className="pt-44">
        <div className="w-10/12 justify-center m-auto mt-10">
          <h1 className="text-3xl font-bold tracking-wide drop-shadow-text-md mb-2">
            {category}
          </h1>
          <div className="flex justify-center">
            <EventCard events={musicEvents} />
          </div>
        </div>
      </div>
    );
  }
}

export default EventCategoryPage;
