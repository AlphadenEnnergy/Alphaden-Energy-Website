"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const OurServices = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl my-16 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">
            Our <span className="text-secondary">Services</span>
          </h2>
          <div className="bg-secondary h-2 w-16 rounded-xl mt-3"></div>
          <p className="text-xs text-gray-400 w-full max-w-2xl mt-8 leading-loose">
            At Alpha Den Energy, we stand at the forefront of industry
            innovation, offering a diverse range of services that empower
            growth, sustainability, and success across various sectors. With a
            commitment to excellence, safety, and environmental responsibility,
            our services are designed to meet the unique challenges of today's
            dynamic landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
