"use client";
import React, { useState, useEffect } from 'react';
import HeaderText from "../shared/headerText/HeaderText";
import ServicesCarousel from "./ServicesCarousel";
import curveline from "./../../assets/images/landing/curveline.png";
import Image from "next/image";
import "../../css/ourServices.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { LuFuel } from "react-icons/lu";
import { MdOutlineOilBarrel } from "react-icons/md";
import { PiFireBold } from "react-icons/pi";
import { VscPaintcan } from "react-icons/vsc";

const OurServices = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-7xl my-16 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Our" secondary="Services" />
          <p className="text-sm md:text-md text-gray-400 w-full max-w-2xl mt-8 leading-loose">
            At Alphaden Energy, we stand at the forefront of industry
            innovation, offering a diverse range of services that empower
            growth, sustainability, and success across various sectors. With a
            commitment to excellence, safety, and environmental responsibility,
            our services are designed to meet the unique challenges of
            today&apos;s dynamic landscape.
          </p>
        </div>

        <div className="w-full mt-5">
          <CurvedLineWithCircles />
        </div>
      </div>
    </section>
  );
};

export default OurServices;

function CurvedLineWithCircles() {
  const items = [
    {
      key: 1,
      icon: <LuFuel />,
      text: "EPCI Services",
      top: "top-[50px]",
      left: "left-[43px]",
      right: "0",
      bottom: "0",
    },
    {
      key: 2,
      icon: <VscPaintcan />,
      text: "System Integration, Process Control and Automation",
      top: "top-[150px]",
      left: "left-[73px]",
      right: "0",
      bottom: "0",
    },
    {
      key: 3,
      icon: <PiFireBold />,
      text: "Additive Manufacturing Services",
      top: "top-[270px]",
      left: "left-[73px]",
      right: "0",
      bottom: "0",
    },
    {
      key: 4,
      icon: <MdOutlineOilBarrel />,
      text: "Oilfield Services",
      top: "top-[370px]",
      left: "left-[43px]",
      right: "0",
      bottom: "0",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const currentItem = items[currentIndex];

  return (
    <div className="flex justify-center items-start ">
      <div className="w-1/3 relative hidden md:block">
        <Image src={curveline} alt={""} className="" />
        {items.map((item) => (
          <div
            key={item.key}
            className={`absolute flex justify-start items-center space-x-3 ${item.top} ${item.left} ${item.right} ${item.bottom}`}
          >
            <div
              className={`bg-white text-primary w-12 h-12 text-xl rounded-full flex justify-center items-center ${currentItem.key === item.key? "border-4 border-primary": "border"}`}
            >
              {item.icon}
            </div>
            <span className="text-left text-sm md:text-md w-40 text-gray-500">
              {" "}
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full mt-4 md:w-2/3 md:mt-10 ">
        <ServicesCarousel />
      </div>
    </div>
  );
}
