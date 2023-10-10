"use client";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { management } from "./data";
import HeaderText from "../shared/headerText/HeaderText";

const OurManagement = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl mt-10 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Our" secondary="Management"/>
          <p className="text-xs text-gray-400 w-full max-w-xl mt-3 leading-snug">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl my-14 gap-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-5 lg:px-0">
        {management.map((person, i) => (
          <div key={i} className="w-auto h-80 mx-5 border-2 flex flex-col justify-end bg-gray-400 md:mx-0">
            <div className="flex flex-col space-y-2 border p-4 m-4 text-white">
              <p className="font-semibold text-lg">{person.name}</p>
              <span className="text-[10px]">{person.position}</span>
              <Link href={person.url}>
                <BsLinkedin className="text-xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurManagement;
