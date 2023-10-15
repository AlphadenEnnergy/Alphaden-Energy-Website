"use client";
import React from "react";
import HeaderText from "../shared/headerText/HeaderText";
import "../../css/ourServices.css"
const OurServices = () => {

  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl my-16 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Our" secondary="Services" />
          <p className="text-xs text-gray-400 w-full max-w-2xl mt-8 leading-loose">
            At Alphaden Energy, we stand at the forefront of industry
            innovation, offering a diverse range of services that empower
            growth, sustainability, and success across various sectors. With a
            commitment to excellence, safety, and environmental responsibility,
            our services are designed to meet the unique challenges of
            today&apos;s dynamic landscape.
          </p>
        </div>

        <div className="w-full mt-5">
          <div className="w-1/2 ">
            <CurvedLineWithCircles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

function CurvedLineWithCircles() {
    const radius = 150; // Adjust the radius as needed
  const circlePositions = [
    { angle: 30, label: 'Circle 1' },
    { angle: 60, label: 'Circle 2' },
    { angle: 120, label: 'Circle 3' },
    { angle: 150, label: 'Circle 4' },
  ];

  // return (
  //   // <div className="-ml-80 arc"></div>
  // );
  return (
    <div className="arc-container">
      <div className="arc"></div>
      {circlePositions.map((position, index) => (
        <div
          className="circle"
          key={index}
          style={{
            top: `${radius * Math.sin((position.angle * Math.PI) / 180) + 50}%`, // Adding 50% to center it
            left: `${50 - radius * Math.cos((position.angle * Math.PI) / 180)}%`,
          }}
        >
          {position.label}
        </div>
      ))}
    </div>
  )
};
