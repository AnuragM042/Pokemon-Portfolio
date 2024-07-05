import React from "react";
import Profile from "./../assets/Profile-pic.jpeg";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/anurag-mishra-563606299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/AnuragM042", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9136254277", "_blank");
  };

  const handleGmailClick = () => {
    window.open("mailto:anurazzz.mishra098@gmail.com");
  };

  return (
    <Card
      color="transparent"
      shadow={true}
      className="w-full border-2 p-3 bg-black bg-opacity-75 text-white"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size={30}
          variant="circular"
          src={Profile}
          alt="Anurag Mishra"
          className="h-[100px]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Anurag Mishra
            </Typography>
          </div>
          <Typography color="blue-gray">Frontend Developer</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          Do Connect and Message me
          <div className="flex gap-2 mt-2 text-3xl">
            <FaLinkedin
              className="cursor-pointer transition duration-300 ease-in-out transform hover:text-blue-500"
              onClick={handleLinkedInClick}
            />
            <FaGithubSquare
              className="cursor-pointer transition duration-300 ease-in-out transform hover:text-black hover:bg-white"
              onClick={handleGitHubClick}
            />
            <FaWhatsappSquare
              className="cursor-pointer transition duration-300 ease-in-out transform hover:text-green-500"
              onClick={handleWhatsAppClick}
            />
            <BiMailSend
              className="cursor-pointer transition duration-300 ease-in-out transform hover:text-red-500"
              onClick={handleGmailClick}
            />
          </div>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Contact;
