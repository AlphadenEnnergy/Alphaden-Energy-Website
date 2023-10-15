import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
import { BiRightArrowAlt } from "react-icons/bi";
import { Button } from "../shared/buttons";

const Slider = () => {
  return (
    <Carousel autoPlay interval={10000} infiniteLoop>
    <div className="pulse bg hero w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-out">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-left max-w-5xl my-64 flex flex-col justify-center items-start px-8 md:px-0">
          <h1 className="text-white text-3xl leading-loose font-bold md:text-5xl">
            Providing the most efficient dynamic processes using business
            intelligence, technology and innovation.
          </h1>
          <div className="mt-8 group">
            <Button>
              <span>Learn More</span>
              <BiRightArrowAlt className="ml-2 text-xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="pulse bg hero-1 w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-out">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-left max-w-5xl my-64 flex flex-col justify-center items-start px-8 md:px-0">
          <h1 className="text-white text-3xl leading-loose font-bold md:text-5xl">
            Providing the most efficient dynamic processes using business
            intelligence, technology and innovation.
          </h1>
          <div className="mt-4 group">
            <Button>
              <span>Learn More</span>
              <BiRightArrowAlt className="ml-2 text-xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="pulse bg hero-2 w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-out">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-left max-w-5xl my-64 flex flex-col justify-center items-start px-8 md:px-0">
          <h1 className="text-white text-3xl leading-loose font-bold md:text-5xl">
            Providing the most efficient dynamic processes using business
            intelligence, technology and innovation.
          </h1>
          <div className="mt-4 group">
            <Button>
              <span>Learn More</span>
              <BiRightArrowAlt className="ml-2 text-xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
  );
};

export default Slider;
