"use client";
import React, { useState } from "react";
import { locations } from "./data";
export default function LocationMap() {
  const [state, setState] = useState({
    activeLocation: "Lagos",
  });

  return (
    <section className="flex justify-center">
      <div className=" w-full max-w-7xl mb-20 h-auto flex flex-col justify-center items-start px-8 md:px-0 md:h-auto">
        <div className="my-8 flex flex-col space-y-1">
          <span className="text-[10px] text-secondary">Our location</span>
          <h2 className="font-semibold text-xl">Visit Us</h2>
          <p className="text-sm md:text-md text-gray-500">Say hello to our friendly team at one of these locations.</p>
        </div>
        <div className="border-gray-300 w-full max-w-xs">
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() =>
                setState((prev) => {
                  return {
                    ...prev,
                    activeLocation: location.city,
                  };
                })
              }
              className={`cursor-pointer py-2 px-4 border-l-[3px] border-gray-200${
                state.activeLocation === location.city
                  ? "border-l-2 border-gray-800 "
                  : ""
              }`}
            >
              <p className="font-semibold text-sm md:text-md">{location.city}</p>
              <p className="mt-2 text-[10px] text-gray-500 leading-snug">
                {location.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
