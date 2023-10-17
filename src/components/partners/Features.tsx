"use client";
import React from "react";
import { pipeandValves, additive, electrical, enclosures } from "./data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center md;mt-4">
      <div className="w-full max-w-5xl my-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl max-w-lg font-semibold ">
            Additive manufacturers/3D metal Printing
          </h3>
        </div>

        <div className="w-full max-w-5xl gap-4 mt-8">
          <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-4">
            {additive.map((data, i) => (
            <div key={i} className="flex flex-col items-center px-5">
              <Image src={data} alt={""} width={100} height={100}/>
            </div>
          ))}
          </div>
          
        </div>

      </div>
      <div className="w-full max-w-5xl my-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl max-w-lg font-semibold ">
            Pipes Valves and Fittings
          </h3>
        </div>

        <div className="w-full max-w-5xl gap-4 mt-8">
          <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-4">
            {pipeandValves.map((data, i) => (
            <div key={i} className="flex flex-col items-center px-5 m-10">
              <Image src={data} alt={""} width={100} height={100}/>
            </div>
          ))}
          </div>
          
        </div>

      </div>
      <div className="w-full max-w-5xl my-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl max-w-lg font-semibold ">
            Electrical Conduit and fittings, Cable Trays and Accessories
          </h3>
        </div>

        <div className="w-full max-w-5xl gap-4 mt-8">
          <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-4">
            {electrical.map((data, i) => (
            <div key={i} className="flex flex-col items-center px-5 m-10">
              <Image src={data} alt={""} width={100} height={100}/>
            </div>
          ))}
          </div>
          
        </div>

      </div>
      <div className="w-full max-w-5xl my-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl max-w-lg font-semibold ">
            Encosures, Instrumentation, Lighting and Signalling, Grounding and lighting Protection
          </h3>
        </div>

        <div className="w-full max-w-5xl gap-4 mt-8">
          <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-4">
            {enclosures.map((data, i) => (
            <div key={i} className="flex flex-col items-center px-5 m-10">
              <Image src={data} alt={""} width={100} height={100}/>
            </div>
          ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Features;
