"use client";
import React from "react";
import Header from "./Header";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <div className=" mt-2 w-full max-w-5xl mb-5 h-auto flex flex-col justify-start items-start text-left text-xs text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
        <h2 className="text-3xl font-bold mt-8 max-w-3xl">EPCI</h2><div className="bg-secondary h-2 w-16 rounded-xl mt-3 mb-8"></div>
        <p className="w-full max-w-3xl">
          Alphaden Energy stands out for its EPCI expertise. The company
          seamlessly integrates engineering, procurement, construction, and
          installation services, ensuring a streamlined project lifecycle. From
          designing state-of-the-art offshore platforms to constructing
          efficient pipelines and installing critical equipment, Alphaden Energy
          is your trusted partner in complex energy projects.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
 