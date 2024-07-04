import React from "react";
import loader from "./../assets/pikachu-running.mp4";

const Loader = () => {
  return (
    <div className="flex flex-col items-center bg-transparent ">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-[65px] h-[50px] bg-transparent object-cover transform rotate-0"
      >
        <source src={loader} />
      </video>
      <span className="m-12 text-center">Loading...</span>
    </div>
  );
};

export default Loader;
