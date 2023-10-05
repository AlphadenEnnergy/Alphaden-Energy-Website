import React from "react";

const Centered = ({ children }: any) => (
  <div
    data-layout="centered"
    className="w-full h-screen flex items-center justify-center bg-gray-50"
  >
    {children}
  </div>
);

export default Centered;
