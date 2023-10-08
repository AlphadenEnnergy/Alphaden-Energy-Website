"use client";
import React, { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Button } from "react-scroll";

const Home = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through 1, 2, 3 and reset to 1 after 3 seconds
      setCurrentNumber((currentNumber) => (currentNumber % 3) + 1);
    }, 6000); // Change the interval to 3000 milliseconds (3 seconds) for cycling

    return () => clearInterval(interval);
  }, []);
  return (
    <Page>
      <div
        className={`pulse bg ${
          currentNumber === 1
            ? "hero"
            : currentNumber === 2
            ? "hero-1"
            : "hero-2"
        } z-10 w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-ou`}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <div className="z-40 max-w-5xl my-40 h-40 flex flex-col justify-center items-start px-8 md:px-0 md:h-80">
            <h1 className="text-white text-3xl leading-tight font-bold md:text-5xl">
              Providing the most efficient dynamic processes using business
              intelligence, technology and innovation.
              {/* {currentNumber} */}
            </h1>
            <div className="mt-4 group">
              <Button>
                <span>Learn More</span>
                <BiRightArrowAlt className="ml-2 text-xl inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end w-full  max-w-5xl px-8 md:px-0">
          <div className="w-12 my-10 grid grid-cols-3 gap-2">
            <div
              className={`w-3 h-1 rounded-xl ${
                currentNumber === 1 ? "bg-secondary" : "bg-gray-400"
              }`}
            >
              {/* 1 */}
            </div>
            <div
              className={`w-3 h-1 rounded-xl ${
                currentNumber === 2 ? "bg-secondary" : "bg-gray-400"
              }`}
            >
              {/* 2 */}
            </div>
            <div
              className={`w-3 h-1 rounded-xl ${
                currentNumber === 3 ? "bg-secondary" : "bg-gray-400"
              }`}
            >
              {/* 3 */}
            </div>
          </div>
        </div>
      </div>
      {/* <Slider/> */}
      <WhoWeAre />
      <OurServices />
      <Clientele />
      <LocationMap />
    </Page>
  );
};

export default Home;
