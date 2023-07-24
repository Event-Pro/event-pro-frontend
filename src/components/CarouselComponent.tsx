// "use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
// import Image from "next/image";

// import colorRun from "../utils/images/colorRun.webp";
// import concert from "../utils/images/concert.webp";
// import park from "../utils/images/park.webp";
// import baseball from "../utils/images/baseball.webp";
// import soccer from "../utils/images/soccer.webp";
// import left from "../utils/icons/left.png";
// import right from "../utils/icons/right.png";
// import { StaticImageData } from "next/image";

// interface Image {
//   url: StaticImageData;
// }

// const images: Image[] = [
//   {
//     url: colorRun,
//   },
//   {
//     url: concert,
//   },
//   {
//     url: park,
//   },
//   {
//     url: baseball,
//   },
//   {
//     url: soccer,
//   },
// ];

// const arrowStyle: string =
//   "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

// // Move sliderControl outside of CarouselComponent
// const sliderControl = (
//   isLeft: boolean,
//   onClick: () => void,
//   previousImage: () => void,
//   nextImage: () => void
// ) => (
//   <div className="hidden md:block">
//     <button
//       type="button"
//       onClick={onClick}
//       className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
//       style={{ top: "40%" }}
//     >
//       <Image
//         src={isLeft ? left : right}
//         alt={`Arrow ${isLeft ? "left" : "right"}`}
//         width={30} // Adjust width to your icon size
//         height={30} // Adjust height to your icon size
//         className="filter invert"
//       />
//     </button>
//   </div>
// );

// export const CarouselComponent: React.FC = () => {
//   const [currentImage, setCurrentImage] = useState<number>(0);

//   const refs: RefObject<HTMLDivElement>[] = images.map(() =>
//     useRef<HTMLDivElement>(null)
//   );

//   const scrollToImage = (i: number) => {
//     setCurrentImage(i);
//     refs[i].current?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "start",
//     });
//   };

//   const totalImages: number = images.length;

//   const nextImage = () => {
//     if (currentImage >= totalImages - 1) {
//       scrollToImage(0);
//     } else {
//       scrollToImage(currentImage + 1);
//     }
//   };

//   const previousImage = () => {
//     if (currentImage === 0) {
//       scrollToImage(totalImages - 1);
//     } else {
//       scrollToImage(currentImage - 1);
//     }
//   };
//   //? ----- AUTO SCROLL LOGIC -----
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 6000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentImage]);

//   return (
//     <>
//       <div className="w-full p-12 flex justify-center md:w-1/2 items-center">
//         <div className="relative w-full">
//           <div className="carousel w-full transition-scroll duration-2000 ease-in-out">
//             {sliderControl(true, previousImage, previousImage, nextImage)}
//             {images.map((img, i) => (
//               <div
//                 className="w-full flex-shrink-0"
//                 key={img.url.src}
//                 ref={refs[i]}
//               >
//                 <Image
//                   src={img.url}
//                   className="w-full object-contain"
//                   alt={`Image ${i}`}
//                   width={img.url.width}
//                   height={img.url.height}
//                 />
//               </div>
//             ))}
//             {sliderControl(false, nextImage, previousImage, nextImage)}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
