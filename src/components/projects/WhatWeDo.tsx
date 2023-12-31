"use client";
import React from "react";
import HeaderText from "../shared/headerText/HeaderText";
import Image from "next/image";
import image1 from "./../../assets/images/projects/1.png";
import image2 from "./../../assets/images/projects/2.png";
import image3 from "./../../assets/images/projects/3.png";
import image4 from "./../../assets/images/projects/4.png";
import image5 from "./../../assets/images/projects/5.png";
import image6 from "./../../assets/images/projects/6.png";
import image7 from "./../../assets/images/projects/7.png";
import image8 from "./../../assets/images/projects/8.png";
import image9 from "./../../assets/images/projects/9.png";
import image10 from "./../../assets/images/projects/10.png";
import image11 from "./../../assets/images/projects/11.png";
import image12 from "./../../assets/images/projects/12.jpeg";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4 mb-16">
      <div className="w-full max-w-7xl md:my-10 h-auto flex flex-col justify-center items-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Projects" secondary="" />
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block">
            <span className="italic">
              {" "}
              At Alphaden Energy, we take immense pride in our track record of
              successfully executed projects that have not only propelled our
              industry but have also contributed to global energy security. Our
              commitment to excellence, innovation, and sustainability shines
              through each completed endeavor. Explore a selection of our
              standout projects that represent our dedication to fueling
              progress responsibly.
            </span>
            <br />
            <br />
          </p>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block md:">
              PROJECT: OBAMA GAS FLARE COMMERCIALIZATION PROJECT
      
              <br />
              LOCATION: OKOROMA, BAYELSA STATE, NIGERIA
            </span>{" "}
            We are constructing a 20 mmscfd mini-LNG facility in Okoroma
            Bayelsea state. The facility will cater to up to 5 days site storage
            for all products and the same amount of off-site storage. The
            products will be transported to the offsite storage facility via
            self-propelled barges and will be transported to the customer site
            regasification stations via purpose-fit distribution trucks. The
            trucks will be able to transport up to 20MT per load, enough to
            generate up to 120,000kwh of electricity.
          </p>
          <div className="w-full md:flex flex-col mt-4 md:space-y-4">
            <div className="w-full">
              <Image src={image11} alt={"Project Photo"} height={1000} />
            </div>
          </div>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block border-t-2 pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block md:">
              PROJECT: TEBIDABA GAS FLARE COMMERCIALIZATION PROJECT
             
              <br />
              LOCATION: TEBIDABA, BAYELSA STATE, NIGERIA
            </span>{" "}
            Upon the recent completion of the Nigerian Gas Flare
            Commercialization program, we were awarded the rights to
            commercialize the gas from the tebidaba Flowstation. We are
            currently finalizing with investors the capital required to develop
            the project.
          </p>

          {/* <div className="w-full mt-4">
            <Image src={image1} alt={"Project Photo"} />
          </div> */}
          <div className="w-full md:flex flex-col mt-4 md:space-y-4">
            <div className="w-full">
              <Image src={image12} alt={"Project Photo"} height={1000} />
            </div>
          </div>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 md:leading-loose block">
            <span className="font-bold text-gray-700 text-sm md:text-md block md:">
              PROJECT: ASSA NORTH OHAJI SOUTH PROJECT: EPC, SITE PREPARATION &
              INDUSTRIAL AREA INFRASTRUCTURE DEVELOPMENT <br /> CLIENT: SHELL
              PETROLEUM DEVELOPMENT COMPANY (SPDC) <br />
              ROLE: MAIN CONTRACTOR
              <br />
              {/* STATUS: ONGOING LOCATION: ASSA, IMO STATE, NIGERIA <br /> */}
            </span>{" "}
          </p>
          <div className="w-full md:flex flex-col mt-4 md:space-y-4">
            <div className="w-full">
              <Image src={image2} alt={"Project Photo"} height={1000} />
            </div>
            <div className="w-full md:flex md:space-x-4">
              <div className="w-3/5">
                <Image src={image3} alt={"Project Photo"} height={1000} />
              </div>
              <div className="w-11/12">
                <Image src={image4} alt={"Project Photo"} height={1000} />
              </div>
            </div>
          </div>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block border-t-2 pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block">
              PROJECT: PROVISION OF SITE PREPARATION AND ROAD WORKS FOR REMOTE
              LOCATIONS (NIGERIA GAS COMPANY MANIFOLD) <br />
              CLIENT: ANOH GAS PROCESSING COMPANY (AGPC) <br />
              ROLE: MAIN CONTRACTOR <br />
              LOCATION: ASSA, IMO STATE, NIGERIA.
            </span>{" "}
          </p>
          {/* <div className="w-full md:flex flex-col mt-4 md:space-y-4">
            <div className="w-full">
              <Image src={image5} alt={"Project Photo"} height={1000} />
            </div>
            <div className="w-full md:flex md:space-x-4">
              <div className="">
                <Image src={image6} alt={"Project Photo"} height={1000} />
              </div>
              <div className="">
                <Image src={image7} alt={"Project Photo"} height={1000} />
              </div>
            </div>
          </div> */}
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block border-t-2 pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block">
              PROJECT: WELL TEST FLARE PIPING AND BUNDWALL CONSTRUCTION FOR ASSA
              NORTH OHAJI SOUTH GAS DEVELOPMENT PROJECT
              <br />
              CLIENT: THE SHELL PETROLEUM DEVELOPMENT COMPANY OF NIGERIA LTD.
              <br />
              ROLE: MAIN CONTRACTOR
              {/* <br />
              STATUS: COMPLETED */}
              <br />
            </span>{" "}
          </p>
          <div className="w-full md:flex flex-col mt-4 md:space-y-4">
            <div className="w-full md:flex md:space-x-4">
              <div className="">
                <Image src={image8} alt={"Project Photo"} height={1000} />
              </div>
              <div className="">
                <Image src={image9} alt={"Project Photo"} height={1000} />
              </div>
            </div>
            <div className="w-full">
              <Image src={image10} alt={"Project Photo"} height={1000} />
            </div>
          </div>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block border-t-2 pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block">
              PROJECT: WELLBAY & WELL RIGS CAMP CONSTRUCTION FOR ASSA NORTH
              OHAJI SOUTH PROJECT
              <br />
              CLIENT: THE SHELL PETROLEUM DEVELOPMENT COMPANY OF NIGERIA LTD.
              <br />
              ROLE: MAIN CONTRACTOR
              {/* <br />
              STATUS: COMPLETED */}
              <br />
            </span>{" "}
          </p>
          <p className=" text-sm md:text-md text-gray-500 w-full max-w-7xl mt-8 leading-loose block border-t-2 pt-4">
            <span className="font-bold text-gray-700 text-sm md:text-md block">
              PROJECT: RECONSTRUCTION OF EXTERNAL ACCESS ROAD (FIRST 7KM SECTION
              OF
              <br />
              ASSA/OHOBA.OBOSIMA ROAD)
              <br />
              CLIENT: THE SHELL PETROLEUM DEVELOPMENT COMPANY OF NIGERIA LTD.
              <br />
              ROLE: MAIN CONTRACTOR
              {/* <br />
              STATUS: ONGOING */}
              <br />
            </span>{" "}
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
