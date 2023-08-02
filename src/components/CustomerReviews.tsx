import React from "react";

import customer1 from "@/assets/images/customer1.webp";
import customer2 from "@/assets/images/customer2.webp";
import customer3 from "@/assets/images/customer3.webp";
import Image from "next/image";

const Customers = [
  {
    customer: "Sarah V",
    image: customer1,
    review:
      "I absolutely loved using this event planning application! It made organizing my birthday party a breeze. The user-friendly interface allowed me to easily select themes, add guest lists, and track RSVPs. It saved me so much time and stress!",
    position: "object-top",
  },
  {
    customer: "John T",
    image: customer2,
    review:
      "As an event organizer, I've tried several applications, but this one stands out from the rest. It's incredibly efficient and intuitive. From creating event timelines to managing vendors, everything is conveniently organized in one place. Highly recommended",
    position: "",
  },
  {
    customer: "Emily B",
    image: customer3,
    review:
      "This event planning app has been a game-changer for our corporate events. It streamlined the entire process, making it simple to coordinate with team members and collaborate on event details. It has definitely improved our efficiency and productivity!",
    position: "object-top",
  },
];
export const CustomerReviews = () => {
  return (
    <div className=" p-4 flex justify-evenly w-full">
      {Customers.map((data, index) => (
        <div
          key={index}
          className="bg-dark rounded-lg overflow-hidden shadow-lg mb-4 w-64 drop-shadow-text-lg"
        >
          <div className="relative h-56 w-64">
            <Image
              src={data.image}
              alt={`Image of ${data.customer}`}
              className={`object-cover h-full w-full items-center ${data.position}`}
            />
            <div className="absolute bottom-0 left-0 bg-slate-700 p-2 text-muted w-20">
              {data.customer}
            </div>
          </div>
          <div className="p-4 text-muted">
            <p>{data.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
