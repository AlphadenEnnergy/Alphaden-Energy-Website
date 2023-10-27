"use client";
import React from "react";
import { management } from "./data";
import HeaderText from "../shared/headerText/HeaderText";

const OurManagement = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      {/* <div className="w-full max-w-7xl mt-10 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Our" secondary="Management" />
          <p className="text-sm md:text-md text-gray-400 w-full max-w-xl mt-3 leading-snug">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
      </div>
      <div className="w-full max-w-5xl my-14 flex flex-col items-center">
        <div className="w-full max-w-[350px] md:w-1/3  h-80 md:mx-6 border-2 flex flex-col justify-end bg-gray-400 m-4">
          <div className="flex flex-col space-y-2 border p-4 m-4 text-white bg-gray-500">
            <p className="font-semibold text-lg">Paschal C. Anyanwu </p>
            <span className="text-[10px]">Chief Executive Officer - CEO </span>
          </div>
        </div>
        <div className="gap-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 lg:px-0">
          {management.map((person, i) => (
            <div
              key={i}
              className="w-auto h-80 mx-5 border-2 flex flex-col justify-end bg-gray-400 md:mx-0"
            >
              <div className="flex flex-col space-y-2 border p-4 m-4 text-white bg-gray-500">
                <p className="font-semibold text-lg">{person.name}</p>
                <span className="text-[10px]">{person.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-5xl max-w-7xl my-10 flex flex-col items-center mb-20">
        <h2 className="uppercase font-bold text-xl text-gray-500 my-4">
          Message from our CEO
        </h2>
        <div className="w-full max-w-5xl md:w-[100rem] md:h-[40rem] bg-black rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gXjzqrSMAUQ?mute=1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;
