"use client";
import React from "react";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs"
import HeaderText from "../shared/headerText/HeaderText";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAre my-4 flex flex-col items-center justify-center">
      {/* <div className="bg WhoWeAre h-80">
        
      </div> */}
      <div className="who-we-are w-full max-w-5xl h-auto flex flex-col justify-center items-start px-8 md:px-0 md:h-[30rem]">
        <div className="flex flex-col mt-0 md:mt-32">
          <div className="flex flex-col items-center md:block">
          <HeaderText primary="Who" secondary="We Are"/>
          </div>

          <p className="text-xs text-gray-400 w-full max-w-md mt-8 leading-loose">
            The &apos;ALPHA&apos;S DEN&apos; is a hub of professional and well experienced
            Alpha&apos;s, championing their fields while collectively making up a
            provider of fit-for-purpose services to clients across various
            industries.
            <br /><br />
            An Indigenous company, founded over 2 decades ago yet quite modern
            as we continue to show that People, Innovation, Integrity &
            Efficiency values are key towards the success of every project.
            <br /><br />
            We have an unquenchable desire to contribute positively to the
            development of our natural environment & have stayed true to our
            name due to our excellence and strategic contrivance in successfully
            delivering various projects.
          </p>

          <Link href={"/"} className="group text-primary flex items-center space-x-2 my-5">
            <BsArrowRightCircle className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"/>
            <span className="uppercase font-bold text-xs">Learn More</span>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
