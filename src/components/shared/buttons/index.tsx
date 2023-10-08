import React from "react";

export const Button = ({ children }: any) => {
  return (
    <button className="flex items-center bg-primary text-white px-4 py-3 rounded hover:bg-blue-950">
      {children}
    </button>
  );
};

