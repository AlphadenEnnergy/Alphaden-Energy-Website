"use client";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="bg clientele h-72"></div>
        {/* <div className="flex flex-col items-center mt-16">
          <h3 className="text-2xl max-w-lg font-semibold ">
            We’re an ambitious and smart team with a shared mission
          </h3>
          <p className="text-xs text-gray-400 w-full max-w-4xl mt-2 leading-loose">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Header;
