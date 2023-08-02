import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import textLogo from "@/assets/images/textLogoLight.png";
import down from "@/assets/icons/down.png";
import SmoothScroll from "@/hooks/useSmoothScroll";

const MobileLanding = memo(() => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-mobileBackground bg-cover bg-no-repeat border-2 pointer-events-none z-0 animate-fadeIn delay-5000"></div>
      {/* Main Content */}
      <main>
        <section className="w-screen h-screen relative z-10 flex flex-col items-center text-center bg-slate-700 bg-opacity-70">
          <h1>Mobile!</h1>
          <div>Navbar Placeholder</div>
          {/* Hero Section */}
          <div className="flex flex-col items-center">
            {/* animate fade in and out */}
            <h2 className="text-center animate-fadeInStayOut text-4xl">
              Make Life an Event
            </h2>
            <div
            // className="border-2 border-slate-700 rounded p-10 bg-cover bg-no-repeat bg-opacity-50  "
            >
              <div className="rounded animate-fadeIn delay-4000 w-44 h-44 mt-10">
                <Image
                  src={textLogo}
                  alt="ticket logo"
                  // width={350}
                  // height={350}
                  layout="fixed"
                />
              </div>
            </div>
            <div className="w-4/5">
              <h3 className="m-5 block break-words">
                Organize memories that last a lifetime...
              </h3>
              <h3 className="m-2 italic text-xl">Without the stress!</h3>
              <button className="m-5 p-2 bg-dark rounded shadow-md shadow-primary active:translate-y-0.5 active:shadow-sm transition-transform">
                <Link href="/user/login">Login</Link>
              </button>
              <div className="m-5">Get Started</div>
            </div>
          </div>
          {/* //? ----- Down Arrow smooth scrolls to links ------ */}
          <SmoothScroll />
        </section>

        <section id="mobile-links">
          {/*//? ----- Create Customer Link Section ------  */}
          <div className="rounded flex flex-col justify-center items-center z-10 mx-auto w-full ">
            <div
              className="rounded bg-phoneBackground w-full h-72 bg-center
           bg-cover  bg-no-repeat  mb-0 z-10 mx-auto"
            />

            <div className="bg-primary z-10 w-full flex flex-col items-center mt-0">
              <h2 className="text-dark text-3xl">Join for Free</h2>
              <p className="pl-5">
                Ticket buyers create a free account to customize your
                experience.
              </p>
              <Link href="/user/create-customer" className="my-5">
                <button
                  className="pt-2 pb-2 pl-5 pr-5 bg-accent rounded cursor-pointer my-5 text-dark
                 ring-4 
                 ring-accent ring-offset-dark ring-offset-2 hover:bg-accent/90 font-bold text-lg"
                >
                  Create Customer
                </button>
              </Link>
            </div>
          </div>

          {/*//? ----- Create Organizer Link Section ------  */}
          <div className="rounded flex flex-col justify-center items-center z-10 mx-auto w-full ">
            <div className="rounded bg-tabletBackground w-full h-72 bg-bottom bg-cover bg-no-repeat  mb-0 z-10 mx-auto" />

            <div className="bg-dark z-10 w-full flex flex-col items-center mt-0">
              <h2 className="text-accent text-3xl">3 Month Free Trial</h2>
              <p className="pl-5">
                Sign up now for a free trial and get started today with all the
                perks of membership!
              </p>
              <Link href="/user/create-organizer" className="my-5">
                <button
                  className="pt-2 pb-2 pl-5 pr-5 bg-secondary rounded cursor-pointer my-5 text-dark
                  ring-4 
                  ring-secondary ring-offset-dark ring-offset-2 hover:bg-accent/90 font-bold text-lg"
                >
                  Create Organizer
                </button>
              </Link>
            </div>
          </div>

          {/*//? ----- Profile Link Section ------  */}
          <div className="rounded flex flex-col justify-center items-center z-10 mx-auto w-full ">
            <div className="rounded bg-customizeBackground w-full h-72 bg-bottom bg-cover bg-no-repeat  mb-0 z-10 mx-auto" />

            <div className="bg-secondary z-10 w-full flex flex-col items-center mt-0">
              <h2 className="text-dark text-3xl">Customize Profile</h2>
              <p className="pl-5">
                Set preferences, make the experience uniquely YOU!
              </p>
              <Link href="/user/create-organizer" className="my-5">
                <button
                  className="pt-2 pb-2 pl-5 pr-5 bg-primary rounded cursor-pointer my-5 text-dark
                ring-4 
                ring-primary ring-offset-secondary ring-offset-2 hover:bg-accent/90 font-bold text-lg"
                >
                  Profile
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-20 z-10 border-2 border-slate-500 bg-slate-500  relative flex flex-col justify-center items-center text-center">
          Footer Section
        </section>
      </main>
    </div>
  );
});

MobileLanding.displayName = "MobileLanding";

// export const MemoizedMobileLanding = React.memo(MobileLanding);
export default MobileLanding;
