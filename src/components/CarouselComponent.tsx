import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import left from "@/assets/icons/left.png";
import right from "@/assets/icons/right.png";

interface CarouselComponentProps {
  images: string[] | StaticImageData[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null); // Use the correct type for timerId

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(goToNextSlide, 6000); // Change the delay (in milliseconds) for the timer here
    setTimerId(timer);

    // Clean up the timer when the component unmounts
    return () => {
      if (timerId !== null) {
        clearInterval(timerId); // Use a different variable name for the timer identifier
      }
    };
  }, [currentIndex]); // Re-run the effect whenever the currentIndex changes

  return (
    <div className="flex flex-col items-center">
      <div className=" w-[900px] object-contain">
        <Image src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      </div>
      <div className="flex justify-evenly w-full">
        <button onClick={goToPrevSlide}>
          <Image
            src={left}
            alt="back button"
            width={20}
            height={20}
            style={{ filter: "invert(100%)" }}
          />
          Back
        </button>
        <button onClick={goToNextSlide}>
          <Image
            src={right}
            alt="next button"
            width={20}
            height={20}
            style={{ filter: "invert(100%)" }}
          />
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
