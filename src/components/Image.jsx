import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageL1_1 from "../assets/left1_1 _1.webp";
import ImageL1_2 from "../assets/left1_2.webp";
import ImageL1_3 from "../assets/left1_3.webp";
import ImageL1_4 from "../assets/left1_4.webp";
import ImageL1_5 from "../assets/left1_5.webp";
import ImageL2_1 from "../assets/left1_6.webp";
import ImageL2_2 from "../assets/left1_7.webp";
import ImageL2_3 from "../assets/left1_8.webp";
import ImageL1_6 from "../assets/left1_9.png";
import ImageL1_7 from "../assets/left1_10.png";
import ImageL1_8 from "../assets/left1_11.png";
import ImageL2_4 from "../assets/left1_12.png";

import Pkballs1 from "../assets/Pkballs1_1.webp";
import Pkballs2 from "../assets/Pkballs1_2.webp";
import Pkballs3 from "../assets/Pkballs1_3.webp";
import Pkballs4 from "../assets/Pkballs1_4.webp";
import Pkballs5 from "../assets/Pkballs1_5.webp";
import Pkballs6 from "../assets/Pkballs1_6.webp";
import Pkballs7 from "../assets/Pkballs1_7.webp";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact"; // Import the Contact component
import Loader from "./Loader";

const ImageComponent = () => {
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

  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false); // State for Contact
  const [loading, setLoading] = useState(true);
  const [showProjectsLoading, setShowProjectsLoading] = useState(false);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          resolve();
        };
        img.onerror = (err) => {
          reject(err);
        };
      });
    };

    const preloadImages = async () => {
      const imagePromises = images.concat(pokeballImages).map(loadImage);
      try {
        await Promise.all(imagePromises);
      } catch (err) {
        console.error("Error preloading images:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    preloadImages();
  }, [images, pokeballImages]);

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
    }, 50);
  };

  const handleNextImage = () => {
    transitionImages(4);
  };

  const handlePreviousImage = () => {
    transitionImages(0);
  };

  const handleLastImage = () => {
    transitionImages(7);
  };

  const startPokeballInterval = (index) => {
    if (!pokeballIntervals[index]) {
      const interval = setInterval(() => {
        setCurrentPokeballIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[index] =
            ((newIndexes[index] + 1) % (pokeballImages.length - 1)) + 1;
          return newIndexes;
        });
      }, 200);
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
        newIndexes[index] = 0;
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
              newIndexes[i] = 0;
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
    handlePreviousImage();
    setShowProjectsLoading(true);
    setTimeout(() => {
      setShowProjects(true);
      setShowProjectsLoading(false);
    }, 1000);
  };

  const handleAboutClick = () => {
    handleLastImage();
    setShowProjectsLoading(true);
    setTimeout(() => {
      setShowAbout(true);
      setShowProjectsLoading(false);
    }, 1000);
  };

  const handleContactClick = () => {
    handleNextImage(); // Ensure the main image changes first
    setShowProjectsLoading(true);
    setTimeout(() => {
      setShowContact(true);
      setShowProjectsLoading(false);
    }, 1000);
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
        <LazyLoadImage
          src={images[currentImageIndex]}
          alt=""
          className="h-[600px] sm:h-[680px] bg-transparent"
          effect="blur"
        />
        {showProjectsLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-red-500 bg-opacity-50 z-50">
            <Loader />
          </div>
        )}
        {showProjects && !showProjectsLoading && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50 lg:justify-start lg:pl-[150px] bg-slate-500  bg-opacity-80 "
            onClick={() => setShowProjects(false)}
          >
            <div
              className=" p-4 rounded-lg w-[300px] h-[370px] md:w-[500px] md:h-[500px] flex justify-center items-center "
              onClick={(e) => e.stopPropagation()}
            >
              <Projects />
            </div>
          </div>
        )}
        {showAbout && !showProjectsLoading && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50 lg:justify-end lg:pr-[150px]  bg-slate-500  opacity-80"
            onClick={() => setShowAbout(false)}
          >
            <div
              className=" p-4  rounded-lg w-[300px] h-[370px] md:w-[500px] md:h-[500px] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <About onClose={() => setShowAbout(false)} />
            </div>
          </div>
        )}
        {showContact && !showProjectsLoading && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50  bg-slate-500  opacity-80"
            onClick={() => setShowContact(false)}
          >
            <div
              className=" p-4 rounded-lg w-[400px] h-[370px] md:w-[500px] md:h-[500px] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Contact onClose={() => setShowContact(false)} />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 mb-12 cursor-pointer">
        <div
          className={`rounded-full h-[100px] w-[100px] ${
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
          <LazyLoadImage
            src={pokeballImages[currentPokeballIndexes[0]]}
            alt=""
            className="h-[100px] w-[100px] sm:h- object-cover"
            effect="blur"
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
          onClick={handleContactClick} // Attach handleContactClick
        >
          <LazyLoadImage
            src={pokeballImages[currentPokeballIndexes[1]]}
            alt=""
            className="h-[100px] w-[100px] sm:h- object-cover"
            effect="blur"
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
          <LazyLoadImage
            src={pokeballImages[currentPokeballIndexes[2]]}
            alt=""
            className="h-[100px] w-[100px]    object-cover"
            effect="blur"
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

export default ImageComponent;
