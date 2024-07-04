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
import About from "./About";
import Loader from "./Loader"; // Import the Loader component

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

  // Projects and About show
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false); // State for About
  const [loading, setLoading] = useState(true); // Loading state
  const [showProjectsLoading, setShowProjectsLoading] = useState(false); // Loading state for Projects

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the loading time as needed

    return () => clearTimeout(timer);
  }, []);

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

  const handleProjectsClick = () => {
    handlePreviousImage(); // Ensure the main image changes first
    setShowProjectsLoading(true);
    setTimeout(() => {
      setShowProjects(true);
      setShowProjectsLoading(false);
    }, 1000); // Delay of 1 second
  };

  const handleAboutClick = () => {
    handleLastImage(); // Ensure the main image changes first
    setShowProjectsLoading(true);
    setTimeout(() => {
      setShowAbout(true);
      setShowProjectsLoading(false);
    }, 1000); // Delay of 1 second
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <img
          src={images[currentImageIndex]}
          alt=""
          className="h-[600px] bg-transparent"
        />
        {showProjectsLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-red-500 bg-opacity-50 z-50">
            <Loader />
          </div>
        )}
        {showProjects && !showProjectsLoading && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-red-500 bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setShowProjects(false)} // Close Projects when clicking outside
          >
            <div
              className="bg-opacity-80 p-4 rounded-lg w-[300px] h-[370px] md:w-[500px] md:h-[500px] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the Projects div
            >
              <Projects />
            </div>
          </div>
        )}
        {showAbout && !showProjectsLoading && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-red-500 bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setShowAbout(false)} // Close About when clicking outside
          >
            <div
              className="bg-opacity-80 p-4 rounded-lg w-[300px] h-[370px] md:w-[500px] md:h-[500px] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the About div
            >
              <About onClose={() => setShowAbout(false)} />{" "}
              {/* Pass onClose prop */}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 mt-5 cursor-pointer">
        <div
          className={`rounded-full h-[120px] w-[120px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onMouseEnter={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[0] = true;
              return newHovering;
            });
            startPokeballInterval(0);
          }}
          onMouseLeave={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[0] = false;
              return newHovering;
            });
            stopPokeballInterval(0);
          }}
          onClick={handleProjectsClick}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[0]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2 bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[0] ? "block" : "hidden"
            }`}
          >
            Projects
          </div>
        </div>
        <div
          className={`rounded-full h-[100px] w-[100px] ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onMouseEnter={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[1] = true;
              return newHovering;
            });
            startPokeballInterval(1);
          }}
          onMouseLeave={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[1] = false;
              return newHovering;
            });
            stopPokeballInterval(1);
          }}
          onClick={handleNextImage}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[1]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2 bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[1] ? "block" : "hidden"
            }`}
          >
            Contact
          </div>
        </div>
        <div
          className={`rounded-full h-[100px] w-[100px]  ${
            isTransitioning ? "pointer-events-none" : ""
          }`}
          onMouseEnter={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[2] = true;
              return newHovering;
            });
            startPokeballInterval(2);
          }}
          onMouseLeave={() => {
            setHoveringIndexes((prev) => {
              const newHovering = [...prev];
              newHovering[2] = false;
              return newHovering;
            });
            stopPokeballInterval(2);
          }}
          onClick={handleAboutClick}
        >
          <img
            src={pokeballImages[currentPokeballIndexes[2]]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div
            className={`text-center mt-2 bg-black text-white text-xl rounded-2xl opacity-70 p-4 ${
              hoveringIndexes[2] ? "block" : "hidden"
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
