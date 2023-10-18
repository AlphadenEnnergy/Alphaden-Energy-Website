"use client";
import React from "react";
import Header from "./Header";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <div className=" mt-2 w-full max-w-5xl mb-5 h-auto flex flex-col justify-start items-start text-left text-sm text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
        <h2 className="text-3xl font-bold mt-8 max-w-3xl">
          Additive Manufacturing Services
        </h2>
        <div className="bg-secondary h-2 w-64 md:w-96 rounded-xl mt-3 mb-8"></div>
        <p className="w-full max-w-3xl">
          In our pursuit of excellence, Alphaden Energy has embraced additive
          manufacturing services. Our in-house 3D printing capabilities allow us
          to create customized parts and tools with speed and precision. Whether
          it&apos;s producing spare components for critical equipment or developing
          rapid prototypes for new drilling technologies, we harness additive
          manufacturing for innovation and efficiency.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
