'use client'
import React, { memo } from 'react'
import ticketLogo from '../../utils/images/ticketLogoLight.png'
import presentation from '../../utils/images/presentation.webp'

import Image from 'next/image'
import { CustomerReviews } from '../CustomerReviews'

const DesktopLanding = memo(() => {
  return (
    <>
      {/* <nav className="fixed z-20 top-0 w-full h-16 flex justify-center items-center text-2xl bg-slate-700 shadow-accent shadow-lg">
        <p>Navbar Placeholder</p>
      </nav> */}
      <div className="w-full bg-desktopBackground bg-center bg-cover bg-no-repeat text-base text-white selection:bg-accent selection:text-dark overflow-hidden">
        <div className="h-screen pb-12 sm:pb-0 overflow-y-auto overflow-x-hidden relative scroll-smooth perspective">
          <header className="min-h-screen flex flex-col justify-evenly items-center relative preserve-3d">
            <div className="absolute bg-gradient-to-b inset-0 bottom-1/2 from-accent to-transparent"></div>
            <div className="absolute bg-gradient-to-t inset-0 top-1/3 -bottom-32 from-bkg/80 to-transparent distance-1"></div>
            <div className=" w-10/12 rounded bg-dark shadow-lg shadow-primary flex z-20">
              <div className=" w-4/6 text-7xl flex items-center ml-10">
                <div className="flex flex-col items-center">
                  The simple way to organize{' '}
                  <span className="text-primary">your events</span>
                  <p className="text-2xl mt-10">
                    Be in control without the stress
                  </p>
                  <div
                    className="text-xl mt-5 bg-white w-96 flex justify-between rounded text-dark items-center 
                  focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-slate-300/90 
                  space-x-2 drop-shadow-text-lg hover:drop-shadow-none transition-shadow distance-2 pl-2"
                  >
                    Placeholder Search Bar{' '}
                    <button className="bg-primary rounded-r px-4 py-1 text-white">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-r bg-groupBackground bg-cover bg-no-repeat w-2/6 h-[400px]"></div>
            </div>
            <a
              href="/"
              className="bg-accent text-bkg font-medium py-1 px-6 rounded border border-bkg focus:outline-none focus-visible:ring-4 
            ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 flex items-center space-x-2 drop-shadow-text-lg 
            hover:drop-shadow-none transition-shadow distance-2"
            >
              <span className="uppercase tracking-wide">Start an Event</span>
              {/* <a
              href="/"
              aria-label="Go Home"
              className="p-1 m-4 focus:outline-none focus-visible:ring-4 ring-accent rounded-full transition-shadow"
            > */}
              <Image
                src={ticketLogo}
                alt="Company ticket logo"
                width={50}
                height={50}
              />
              {/* </a> */}
            </a>
          </header>

          <main className="relative grid place-items-center overflow-hidden w-full">
            <div className="w-full flex justify-center m-auto">
              Carousel Placeholder
            </div>

            <div className="mt-32 w-full">
              <div className="pl-20">
                <small className="tracking-widest text-accent uppercase drop-shadow-text-sm bg-dark p-1 rounded">
                  See what customers think
                </small>
                <h2
                  id="headline"
                  className="text-3xl font-bold tracking-wide drop-shadow-text-md"
                >
                  Customer Reviews
                </h2>
              </div>

              <div className="w-full">
                <CustomerReviews />
              </div>
            </div>
            <section
              aria-labelledby="headline"
              className="w-full gap-4 text-center max-w-prose fade-up mt-32"
            ></section>

            <section
              aria-labelledby="slider"
              className="container grid gap-4 text-center sm:text-left fade-up"
            >
              <div className="relative">
                <div className="hidden sm:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
                <div>
                  <small className="tracking-widest text-accent uppercase drop-shadow-text-sm bg-dark p-1 rounded">
                    Plan the work
                  </small>
                  <h2
                    id="slider"
                    className="text-3xl font-bold tracking-wide drop-shadow-text-md"
                  >
                    Work the plan
                  </h2>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center space-x-4 space-y-4">
                  <p className="text-muted max-w-2xl drop-shadow-text-sm bold">
                    We specialize in making memories. Let us help you make ones
                    that last a lifetime.
                  </p>
                  <div className="flex space-x-4"></div>
                </div>
              </div>
            </section>

            <div className="hero-section relative z-10 w-full h-[600px] bg-gradient-to-b from-transparent to-slate-700 flex justify-evenly">
              <div className="bg-planningBackground rounded-ss-full rounded-ee-full bg-center bg-cover bg-no-repeat w-5/12 h-[400px]"></div>
              <div className=" w-4/12">
                {' '}
                <p className="text-muted drop-shadow-text-lg mb-10 bg-primary rounded place-items-center p-2">
                  Unlock the door to stress-free event planning today with our
                  powerful and intuitive app! Do not delay and experience the
                  ease of organizing memorable events, saving time, and ensuring
                  nothing is left to chance.
                </p>
              </div>
            </div>

            <div className="bg-slate-700 w-full flex justify-evenly items-center gap-20">
              <div className="relative">
                <div className="hidden md:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
                <small className="tracking-widest text-accent uppercase">
                  Where imagination meets celebration
                </small>
                <h2 id="map" className="text-3xl font-bold tracking-wide">
                  Transforming visions into <br /> Unforgettable Experiences
                </h2>
                <p className="text-muted max-w-2xl">
                  Don’t take our word for it! Thousands of adventurous travelers
                  have enjoyed more than 250 exotic locations all over the
                  globe!
                </p>
              </div>
              <Image
                src={presentation}
                alt="Giving a presentation"
                width={800}
                className="ml-10"
                loading="lazy"
              />
            </div>
            <div className="bg-slate-700 w-full flex justify-center">
              <footer className="w-full h-56 flex justify-center items-center">
                <p className="text-2xl">Footer Placeholder</p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  )
})

DesktopLanding.displayName = 'DesktopLanding'

// export const MemoizedDesktopLanding = React.memo(DesktopLanding);
export default DesktopLanding
