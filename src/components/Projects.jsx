import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/Project0.png";
import Image2 from "../assets/Project1.png";
import Image3 from "../assets/Project2.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  const StarGitHubClick = () => {
    window.open("https://github.com/AnuragM042/E-commerce", "_blank");
  };

  const StarLiveClick = () => {
    window.open("https://react-ecommerce-5bb4e.web.app/", "_blank");
  };

  const DemoGitHubClick = () => {
    window.open("https://github.com/AnuragM042/Demo-dogs-", "_blank");
  };

  const DemoLiveClick = () => {
    window.open("https://demo-dogs.netlify.app", "_blank");
  };

  const MovieGitHubClick = () => {
    window.open(
      "https://github.com/AnuragM042/js-proects/tree/master/Moviesearch",
      "_blank"
    );
  };

  const MovieLiveClick = () => {
    window.open("https://movie-dex-anurag.netlify.app", "_blank");
  };
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-full h-full ">
        <Slider {...settings}>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full gap-2 flex flex-col p-2 border-2 border-black text-white bg-black ">
              <CardHeader
                color="blue-gray"
                className="relative h-1/2 rounded-lg border border-white"
              >
                <img
                  src={Image1}
                  alt="card-image"
                  className="h-full w-full rounded-lg object-cover border-b-2"
                />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Star Mercs
                </Typography>
                <Typography>
                  Star Mercs is an eCommerce website with a Star Wars theme.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg border-2"
                  onClick={StarLiveClick}
                >
                  Live Link
                </Button>
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg m-2 border-2"
                  onClick={StarGitHubClick}
                >
                  Github Repo
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full gap-2 flex flex-col  p-2 border-2 border-black  text-white bg-black ">
              <CardHeader color="blue-gray" className="relative h-1/2 border border-white">
                <img
                  src={Image2}
                  alt="card-image"
                  className="h-full w-full rouned-lg object-cover"
                />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  UI Redesign
                </Typography>
                <Typography>
                  Redesigned a website's UI and transformed it from WordPress to
                  React.js.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg border-2"
                  onClick={DemoLiveClick}
                >
                  Live Link
                </Button>
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg m-2 border-2"
                  onClick={DemoGitHubClick}
                >
                  Github Repo
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full flex gap-2 flex-col  p-2 border-2 border-black text-white bg-black ">
              <CardHeader color="blue-gray" className="relative h-1/2 border border-white">
                <img
                  src={Image3}
                  alt="card-image"
                  className="h-full w-full rounded-lg object-cover"
                />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Movie-Dex
                </Typography>
                <Typography>
                  Movie-Dex is a movie database application.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg border-2"
                  onClick={MovieLiveClick}
                >
                  Live Link
                </Button>
                <Button
                  className="bg-black text-white text-center p-2 rounded-lg m-2 border-2"
                  onClick={MovieGitHubClick}
                >
                  Github Repo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
