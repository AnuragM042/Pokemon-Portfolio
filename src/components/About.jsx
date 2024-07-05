import React from "react";
import AnuragResume from "./../assets/Anurag_Resume.pdf";
import Profile from "./../assets/Profile-pic.jpeg";
import { MdOutlineCoPresent } from "react-icons/md";
import { IoClose } from "react-icons/io5"; // Import the close icon

const About = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="w-[90%] gap-4 sm:w-[500px] sm:h-[600px] flex justify-center items-center flex-col rounded-2xl">
        <div>
          <div className="flex flex-col w-[80] items-center justify-center">
            <img
              src={Profile}
              alt="Icon"
              className="rounded-full h-[100px] w-[100px]"
            />
            <span className="p-4 bg-black bg-opacity-75 text-white text-xl rounded-2xl">
              Hi, I'm <span className="font-bold">Anurag Mishra,</span> a
              20-year-old <span className="font-bold">Frontend Developer </span>
              with 6 months of experience in Html, Css, Javascript , React.js Firebase, Git, UI..
            </span>
          </div>
        </div>

        <div className="border w-full p-4  rounded-2xl sm:text-xl text-lg bg-black text-white bg-opacity-75">
          <div className="p-2">
            <h2 className="text-center font-bold">Experience</h2>
            <div className="flex justify-around gap-[100px]">
              <h4>Html</h4>
              <h4>Intermediate</h4>
            </div>
            <div className="flex justify-around gap-[100px]">
              <h4>Css</h4>
              <h4>Intermediate</h4>
            </div>
            <div className="flex sm:justify-around sm:gap-[100px] gap-[70px] ">
              <h4>Javasript</h4>
              <h4>Intermediate</h4>
            </div>
            <div className="flex sm:justify-around sm:gap-[100px] gap-[70px] mr-5 sm:m-0">
              <h4>TailwindCss</h4>
              <h4>Intermediate</h4>
            </div>
            <div className="flex justify-around gap-[100px] ">
              <h4>React.js</h4>
              <h4>Beginner</h4>
            </div>
            <div className="flex justify-around gap-[100px] ">
              <h4>Firebase</h4>
              <h4>Beginner </h4>
            </div>
          </div>
        </div>

        <div className="bg-black bg-opacity-75 flex flex-col items-center justify-center border p-2 rounded-2xl">
          <MdOutlineCoPresent size={40} className="text-white" />
          <a
            href={AnuragResume}
            download
            className="bg-black border-2 text-white p-2 rounded-xl mt-4"
          >
            Download Resume
          </a>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-2 bg-black text-white rounded-full hover:bg-red-500 transition duration-300 sm:hidden"
      >
        <IoClose size={20} />
      </button>
    </div>
  );
};

export default About;
