import React, { useState, useEffect } from "react";
import ImageL1_1 from "../assets/left1_1.png";
import ImageL1_2 from "../assets/left1_2.png";
import ImageL1_3 from "../assets/left1_3.png";
import ImageL1_4 from "../assets/left1_4.png";
import ImageL1_5 from "../assets/left1_5.png";
import ImageL2_1 from "../assets/left1_6.png";
import ImageL2_2 from "../assets/left1_7.png";
import ImageL2_3 from "../assets/left1_8.png";

import Pkballs1 from "../assets/Pkballs1_1.png";
import Pkballs2 from "../assets/Pkballs1_2.png";
import Pkballs3 from "../assets/Pkballs1_3.png";
import Pkballs4 from "../assets/Pkballs1_4.png";
import Pkballs5 from "../assets/Pkballs1_5.png";
import Pkballs6 from "../assets/Pkballs1_6.png";
import Pkballs7 from "../assets/Pkballs1_7.png";

const Image = () => {
  const images = [
    ImageL1_1,
    ImageL1_2,
    ImageL1_3,
    ImageL1_4,
    ImageL1_5,
    ImageL2_1,
    ImageL2_2,
    ImageL2_3,
  ];

  const pokeballImages = [
    // Pkballs1,
    Pkballs2,
    Pkballs3,
    Pkballs4,
    Pkballs5,
    Pkballs6,
    Pkballs7,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPokeballIndex, setCurrentPokeballIndex] = useState(0);
  const [pokeballInterval, setPokeballInterval] = useState(null);

  const transitionImages = (targetIndex) => {
    let index = currentImageIndex;
    setIsTransitioning(true);
    const interval = setInterval(() => {
      if (index < targetIndex) {
        index += 1;
      } else if (index > targetIndex) {
        index -= 1;
      } else {
        clearInterval(interval);
        setIsTransitioning(false);
        return;
      }
      setCurrentImageIndex(index);
    }, 50); // Adjust interval time as needed
  };

  const handleNextImage = () => {
    transitionImages(4); // Stops at the 5th image (index 4)
  };

  const handlePreviousImage = () => {
    transitionImages(0); // Transitions back to the first image (index 0)
  };

  const handleLastImage = () => {
    transitionImages(7); // Stops at the 8th image (index 7)
  };

  const startPokeballInterval = () => {
    if (!pokeballInterval) {
      const interval = setInterval(() => {
        setCurrentPokeballIndex(
          (prevIndex) => (prevIndex + 1) % pokeballImages.length
        );
      }, 200); // Adjust interval time as needed for Pokeballs
      setPokeballInterval(interval);
    }
  };

  const stopPokeballInterval = () => {
    if (pokeballInterval) {
      clearInterval(pokeballInterval);
      setPokeballInterval(null);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <img
          src={images[currentImageIndex]}
          alt=""
          className="h-[600px] bg-white"
        />
      </div>
      <div className="flex justify-center items-center gap-5 mt-5 cursor-pointer">
        <div
          className={`rounded-full h-[100px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handlePreviousImage}
          onMouseEnter={startPokeballInterval}
          onMouseLeave={stopPokeballInterval}
        >
          <img
            src={pokeballImages[currentPokeballIndex]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`rounded-full h-[100px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handleNextImage}
          onMouseEnter={startPokeballInterval}
          onMouseLeave={stopPokeballInterval}
        >
          <img
            src={pokeballImages[currentPokeballIndex]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`rounded-full h-[100px] flex justify-center items-center overflow-hidden ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handleLastImage}
          onMouseEnter={startPokeballInterval}
          onMouseLeave={stopPokeballInterval}
        >
          <img
            src={pokeballImages[currentPokeballIndex]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
