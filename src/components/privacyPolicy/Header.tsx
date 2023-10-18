"use client";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mb-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="bg clientele h-72 flex flex-col items-center justify-center">

          <h1 className="text-white text-4xl">Privacy Policy</h1>
          <p className="w-full max-w-2xl text-sm md:text-md text-gray-300 mt-4 px-4 leading-snug italic">Your privacy is important to us at Alphaden Energy. We respect your privacy regarding any information we may collect from you across our website.</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
