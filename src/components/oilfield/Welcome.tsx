"use client";
import React from "react";
import Header from "./Header";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <div className=" mt-2 w-full max-w-5xl mb-5 h-auto flex flex-col justify-start items-start text-left text-xs text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
        <h2 className="text-3xl font-bold mt-8 max-w-3xl">Oilfield Services</h2>
        <div className="bg-secondary h-2 w-64 md:w-64 rounded-xl mt-3 mb-8"></div>
        <p className="w-full max-w-3xl">
          Alphaden Energy comprehensive oilfield services are the driving force
          behind our energy solutions. From exploration and drilling to
          reservoir management and maintenance, we employ a range of specialized
          services to extract and process hydrocarbons efficiently. Our
          expertise in system integration, process control, automation, and
          additive manufacturing has helped us maintain high standards of
          safety, reliability, and sustainability.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
