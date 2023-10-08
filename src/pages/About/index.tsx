import React from "react";
import WhatWeDo from "@/components/aboutUs/WhatWeDo";
import Features from "@/components/aboutUs/Features";
import OurManagement from "@/components/aboutUs/OurManagement";
import Page from "@/app/page";

const AboutUs = () => {
  return (
    <Page>
      <div
        className={`z-10 w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-ou`}
      >
        {/* <div className="w-full flex flex-col justify-center items-center">
          <div className="z-40 max-w-5xl my-40 h-40 flex flex-col justify-center items-start px-8 md:px-0 md:h-80">
            <h1 className=" text-3xl leading-tight font-bold md:text-5xl">
              Providing the most efficient dynamic processes using business
              intelligence, technology and innovation.
            </h1>
            <div className="mt-4 group"></div>
          </div>
        </div> */}
        <WhatWeDo/>
        <Features/>
        <OurManagement/>
      </div>
    </Page>
  );
};

export default AboutUs;
