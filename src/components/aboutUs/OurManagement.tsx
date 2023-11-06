"use client";
import React from "react";
import { management } from "./data";
import HeaderText from "../shared/headerText/HeaderText";
import Image from "next/image";
import Logo from "../../assets/images/shared/logo.svg";

const OurManagement = () => {
  function truncateStringWithReadMore(input: string, maxWords: number): string {
    const words = input.split(" ");

    if (words.length > maxWords) {
      const truncatedWords = words.slice(0, maxWords);
      const truncatedText = truncatedWords.join(" ");
      return truncatedText;
    } else {
      return input;
    }
  }

  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-7xl mt-10 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="Our" secondary="Management" />
          <p className="text-sm md:text-md text-gray-400 w-full max-w-xl mt-3 leading-snug">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl my-14 flex flex-col items-center ">
        <div className="px-4 rounded-lg border-4 bg-gray-200 w-full  border-gray-600 max-w-md  mb-4 py-2">
          <div className=" border-2 flex items-center">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full border-2">
              <Image src={Logo} alt={""} width={40} />
            </div>

            <div className="flex flex-col space-y-2 p-2 m-4 mr-2">
              <p className="font-semibold text-lg">Paschal C. Anyanwu </p>
              <span className="text-[12px]">
                Chief Executive Officer - CEO{" "}
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-xs pb-4">
            Paschal Anyanwu is currently the Chief Executive Officer for
            Alphaden Energy and Oilfield Limited. A fully owned Nigerian company
            with two-decade worth of experience in Oilfield servicing and
            Engineering, Procurement{" "}
            <a href="/management" className="font-bold">
              {" "}
              ...Read more
            </a>
          </p>
        </div>

        <div className="gap-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 lg:px-0">
          {management.map((person, i) => (
            <div
              key={i}
              className="px-4 border-4 bg-gray-200 w-full border-gray-600 rounded-lg flex flex-col justify-between"
            >
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full border-2">
                  <Image src={Logo} alt={""} width={40} />
                </div>

                <div className="flex flex-col space-y-2 p-2 m-4 mr-2 w-2/3 ">
                  <p className="font-semibold text-lg">{person.name}</p>
                  <span className="text-[12px]">{person.position}</span>
                </div>
              </div>{" "}
              <p className="text-gray-500 text-xs pb-4">
                {truncateStringWithReadMore(person.text, 30)}
                <a href="/management" className="font-bold">
                  {" "}
                  ...Read more
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-5xl max-w-7xl my-10 flex flex-col items-center mb-20">
        <h2 className="uppercase font-bold text-xl text-gray-500 my-4">
          Message from our CEO
        </h2>
        <div className="w-full max-w-5xl md:w-[100rem] md:h-[40rem] bg-black rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gXjzqrSMAUQ?mute=1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;
