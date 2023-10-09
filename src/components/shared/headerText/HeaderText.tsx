import React from "react";

const HeaderText = ({primary, secondary}: any) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-primary">
        {primary} <span className="text-secondary">{secondary}</span>
      </h2>
      <div className="bg-secondary h-2 w-16 rounded-xl mt-3"></div>
    </>
  );
};

export default HeaderText;
