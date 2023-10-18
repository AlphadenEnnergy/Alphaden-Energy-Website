"use client";
import React from "react";
import { data } from "./data";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center md;mt-4">
      <div className="w-full max-w-7xl my-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl max-w-lg font-semibold ">
            We’re an ambitious and smart team with a shared mission
          </h3>
          <p className="text-sm md:text-md text-gray-400 w-full max-w-4xl mt-2 leading-loose">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>

        <div className="w-full max-w-7xl gap-4 mt-8">
          <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-4">
            {data.map((data, i) => (
            <div key={i} className="flex flex-col space-y-3 items-center px-5">
              <span className="p-2 border-2 flex items-center justify-center rounded-full text-primary">{data.icon}</span>
              <h4 className="font-semibold ">{data.title}</h4>
              <div>
                <p className="text-xs text-gray-400 leading-[16px]">{data.first}</p>
              <p className="text-xs text-gray-400 leading-[16px] leading-snug">{data.text}</p>
              </div>
              
            </div>
          ))}
          </div>
          
        </div>

        <div className="bg about-us h-72 mt-16"></div>
      </div>
    </section>
  );
};

export default Features;
