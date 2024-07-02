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

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-1/2 h-1/2 ">
        <Slider {...settings}>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full flex flex-col p-2 border-2 border-black ">
              <CardHeader color="blue-gray" className="relative h-1/2 rounded-lg">
                <img src={Image1} alt="card-image" className="h-full w-full rounded-lg object-cover border-b-2" />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                  Star Mercs
                </Typography>
                <Typography>
                  Star Mercs is an eCommerce website with a Star Wars theme.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-black text-white text-center p-2 rounded-lg">Live Link</Button>
                <Button className="bg-black text-white text-center p-2 rounded-lg m-2">Github Repo</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full flex flex-col  p-2 border-2 border-black ">
              <CardHeader color="blue-gray" className="relative h-1/2">
                <img src={Image2} alt="card-image" className="h-full w-full rouned-lg object-cover" />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                  UI Redesign
                </Typography>
                <Typography>
                  Redesigned a website's UI and transformed it from WordPress to React.js.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-black text-white text-center p-2 rounded-lg">Live Link</Button>
                <Button className="bg-black text-white text-center p-2 rounded-lg m-2">Github Repo</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center h-full">
            <Card className="w-full h-full flex flex-col  p-2 border-2 border-black ">
              <CardHeader color="blue-gray" className="relative h-1/2">
                <img src={Image3} alt="card-image" className="h-full w-full rounded-lg object-cover" />
              </CardHeader>
              <CardBody className="flex-grow">
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                  Movie-Dex
                </Typography>
                <Typography>
                  Movie-Dex is a movie database application.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-black text-white text-center p-2 rounded-lg">Live Link</Button>
                <Button className="bg-black text-white text-center p-2 rounded-lg m-2">Github Repo</Button>
              </CardFooter>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
