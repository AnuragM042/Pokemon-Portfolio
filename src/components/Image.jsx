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
import Projects from "./Projects";

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
    Pkballs1,
    Pkballs2,
    Pkballs3,
    Pkballs4,
    Pkballs5,
    Pkballs6,
    Pkballs7,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPokeballIndexes, setCurrentPokeballIndexes] = useState([
    0, 0, 0,
  ]);
  const [pokeballIntervals, setPokeballIntervals] = useState([
    null,
    null,
    null,
  ]);
  const [hoveringIndexes, setHoveringIndexes] = useState([false, false, false]);

  // Projects show
  // const [showProjects, setShowProjects] = useState(false);
  // const toggleProjects = () => {
  //   setShowProjects(!showProjects);
  // };

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

  const startPokeballInterval = (index) => {
    setHoveringIndexes((prev) => {
      const newHovering = [...prev];
      newHovering[index] = true;
      return newHovering;
    });

    if (!pokeballIntervals[index]) {
      const interval = setInterval(() => {
        setCurrentPokeballIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[index] =
            ((newIndexes[index] + 1) % (pokeballImages.length - 1)) + 1; // Start from Pkballs2
          return newIndexes;
        });
      }, 200); // Adjust interval time as needed for Pokeballs
      setPokeballIntervals((prevIntervals) => {
        const newIntervals = [...prevIntervals];
        newIntervals[index] = interval;
        return newIntervals;
      });
    }
  };

  const stopPokeballInterval = (index) => {
    setHoveringIndexes((prev) => {
      const newHovering = [...prev];
      newHovering[index] = false;
      return newHovering;
    });

    if (pokeballIntervals[index]) {
      clearInterval(pokeballIntervals[index]);
      setPokeballIntervals((prevIntervals) => {
        const newIntervals = [...prevIntervals];
        newIntervals[index] = null;
        return newIntervals;
      });
      setCurrentPokeballIndexes((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[index] = 0; // Revert back to Pkballs1
        return newIndexes;
      });
    }
  };

  useEffect(() => {
    const runningIntervals = pokeballIntervals.filter(Boolean);
    if (runningIntervals.length === 0) return;

    const resetPokeballIndexes = () => {
      setHoveringIndexes((prev) => {
        const newHovering = [...prev];
        for (let i = 0; i < newHovering.length; i++) {
          if (!newHovering[i]) {
            setCurrentPokeballIndexes((prevIndexes) => {
              const newIndexes = [...prevIndexes];
              newIndexes[i] = 0; // Revert back to Pkballs1
              return newIndexes;
            });
          }
        }
        return newHovering;
      });
    };

    window.addEventListener("mousemove", resetPokeballIndexes);
    return () => {
      window.removeEventListener("mousemove", resetPokeballIndexes);
    };
  }, [pokeballIntervals]);

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <img
          src={images[currentImageIndex]}
          alt=""
          className="h-[600px] bg-transparent"
        />
      </div>
      <div className="flex justify-center items-center gap-5 mt-5 cursor-pointer">
        <div
          className={`rounded-full h-[120px] w-[120px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handlePreviousImage}
          onMouseEnter={() => startPokeballInterval(0)}
          onMouseLeave={() => stopPokeballInterval(0)}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[0]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2  bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[0] ? "block" : "md:hidden"
            }`}
            onClick={toggleProjects}
          >
            Projects
          </div>
        </div>
        <div
          className={`rounded-full h-[100px] w-[100px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handleNextImage}
          onMouseEnter={() => startPokeballInterval(1)}
          onMouseLeave={() => stopPokeballInterval(1)}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[1]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2  bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[1] ? "block" : "md:hidden"
            }`}
          >
            Contact
          </div>
        </div>
        <div
          className={`rounded-full h-[100px] w-[100px]  ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onClick={handleLastImage}
          onMouseEnter={() => startPokeballInterval(2)}
          onMouseLeave={() => stopPokeballInterval(2)}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[2]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2  bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[2] ? "block" : "md:hidden"
            }`}
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
