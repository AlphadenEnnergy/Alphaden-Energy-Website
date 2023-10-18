"use client";
import React from "react";
import Header from "./Header";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <div className=" mt-2 w-full max-w-5xl mb-5 h-auto flex flex-col justify-start items-start text-left text-sm text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
        <h2 className="text-3xl font-bold mt-8 max-w-3xl">
          System Integration, Process Control and Automation
        </h2>
        <div className="bg-secondary h-2 w-64 md:w-96 rounded-xl mt-3 mb-8"></div>
        <p className="w-full max-w-3xl">
          The convergence of System Integration, Process Control, and Automation
          allows Alphaden Energy to deliver energy solutions that are not only
          efficient but also sustainable and safe. By harnessing the power of
          these interconnected elements, we remain at the forefront of the oil
          and gas industry, setting new standards for performance and
          reliability.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
