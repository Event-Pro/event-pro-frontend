import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import textLogo from "../../utils/images/textLogoLight.png";
import down from "../../utils/icons/down.png";

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
              <div className="m-5">Search Bar Placeholder</div>
            </div>
          </div>
          <div className="animate-bounce w-10 h-10 mb-10 mx-auto">
            <Image
              src={down}
              alt="ticket logo"
              // width={350}
              // height={350}
              layout="fixed"
              className="invert"
            />
          </div>
        </section>
        <div className="rounded flex items-center z-10 mx-auto w-full">
          <div className="rounded bg-tabletBackground w-80 h-52 bg-contain bg-no-repeat mt-10 mb-10 z-10 mx-auto" />
        </div>

        <section className="w-screen h-screen relative z-10 flex flex-col items-center text-center">
          <ul className="flex flex-col justify-between items-center mb-10 text-primary bold text-2xl">
            <Link href="/user/login">
              <li className="pt-2 pb-2 pl-5 pr-5 bg-dark rounded r-pointer">
                Login
              </li>
            </Link>
            <hr className="border-t border-white w-1/2 mt-4 mb-4" />
            <li className="text-lg text-dark w-2/3 bg-white rounded mb-10">
              Securely access your account with ease using your credentials.
            </li>
            <Link href="/user/create-customer">
              <li className="pt-2 pb-2 pl-5 pr-5 bg-dark rounded cursor-pointer">
                Create Customer
              </li>
            </Link>
            <hr className="border-t border-white w-1/2 mt-4 mb-4" />
            <li className="text-lg text-dark w-2/3 bg-white rounded mb-10">
              Sign up and become a valued customer to enjoy personalized
              services and benefits.
            </li>
            <Link href="/user/create-organizer">
              <li className="pt-2 pb-2 pl-5 pr-5 bg-dark rounded cursor-pointer">
                Create Organizer
              </li>
            </Link>
            <hr className="border-t border-white w-1/2 mt-4 mb-4" />
            <li className="text-lg text-dark w-2/3 bg-white rounded mb-10">
              Take control of your events and manage them efficiently as an
              event organizer.
            </li>
            <Link href="/user/profile">
              <li className="pt-2 pb-2 pl-5 pr-5 bg-dark rounded cursor-pointer">
                Profile
              </li>
            </Link>
            <hr className="border-t border-white w-1/2 mt-4 mb-4" />
            <li className="text-lg text-dark w-2/3 bg-white rounded mb-10">
              View and manage your account details, preferences, and event
              history all in one place.
            </li>
          </ul>
        </section>
        <section className="w-full h-32 z-10 border-2 border-slate-500 bg-slate-500 mt-40 relative flex flex-col items-center text-center">
          Footer Section
        </section>
        {/* <section className="two">
          <div>3 Links to pages on site</div>
          <div>
            Features and Benefits: countdown timer for sales event? other
            visuals, images beside text
            <div>Social proof, logos, & testimonials?</div>
            <div>FAQ handle objections: menu that slides from right</div>
            <div>Last call to action</div>
          </div>
        </section> */}
      </main>
    </div>
  );
});

MobileLanding.displayName = "MobileLanding";

// export const MemoizedMobileLanding = React.memo(MobileLanding);
export default MobileLanding;
