// Purpose: Template to show preview of event details.  Cards are then populated on landing page
// This card is used on the landing page and on the Organizer's profile page

// Functionality
// - Populate a portion of the event details (update as needed): Name of Event, In person vs virtual, Start Date, End Date, Time, Tags, Image
// - OnClick redirect to EventDetailPage
// - Include Edit / Delete if the organizer of the event is logged in. Use a comparison of Logged In ID and Event ID to manipulate

// API interaction
// - Event ID = Event Details
// - Organizer ID = Organizer Flag
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// import { EventModel } from "@/hooks/useEvent";

export interface EventCardsProps {
  events: {
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
  }[];
}

const EventCard = ({ events }: EventCardsProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-5 w-full">
      {events.map((data, index) => (
        <div
          key={index}
          className="relative card border-2 border-primary w-96 h-56 rounded"
        >
          <Image
            src={data.imgUrl}
            alt="event image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "2.5px" }}
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 text-white rounded-bl-sm">
            <h3 className="text-xl font-semibold">{data.name}</h3>
            <p>{data.is_virtual === true ? "Virtual" : "In Person"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
