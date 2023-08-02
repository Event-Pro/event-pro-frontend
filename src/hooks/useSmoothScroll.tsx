"use client";
import { useEffect } from "react";
import Image from "next/image";

import down from "../utils/icons/down.png";

function useSmoothScroll() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();

          const hrefAttribute = anchor.getAttribute("href");
          const targetElement = hrefAttribute
            ? document.querySelector<HTMLElement>(hrefAttribute)
            : null;

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        });
      });
  }, []);
}

const SmoothScroll = () => {
  useSmoothScroll();

  return (
    <div className="animate-bounce w-10 h-10 mb-10 mx-auto">
      <a href="#mobile-links" className="scroll-smooth">
        <Image
          src={down}
          alt="ticket logo"
          layout="fixed"
          className="invert"
          width={350}
          height={350}
        />
      </a>
    </div>
  );
};

export default SmoothScroll;
