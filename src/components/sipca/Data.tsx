import React from "react";
import Image from "next/image";
import gas from "./../../assets/images/services/gas.png";
import tectltd from "./../../assets/images/services/tectltd.png";
import { FiArrowUpRight } from "react-icons/fi";

const Data = () => {
  const serviceItems = [
    {
      id: 1,
      imgSrc: gas,
      name: "EPCI",
      title: "ALPHADEN GAS LIMITED",
      text: `Alphaden Gas Limited is an indigenous gas processing and distribution company domiciled in Lagos state, Nigeria. Since its incorporation, we have strategically positioned ourselves as a major player in the Nigerian gas space capable of competing globally with other industry gas players, utilizing cutting edge technology, whilst saving cost and effectively improving the environment. Innovation and hard work are at the center of our operations as we offer advanced and efficient services that meets the expectation of our clients and partners`,
      link: "/affiliates",
    },
    {
      id: 2,
      imgSrc: tectltd,
      name: "Upstream",
      title: "ALPHADEN TECHNOLOGIES LIMITED",
      text: `At Alphaden Technologies, we are a cutting-edge innovation powerhouse, specializing in the development of disruptive software and hardware solutions for a wide range of industries. With a strong emphasis on the oil and gas industry, logistics industry, fintech services, surveillance/security technologies, and retail payment platforms, we are poised to revolutionize these sectors and take them to new heights.`,
      link: "/affiliates",
    },
  ];

  return (
    <section className="px-0 flex flex-col justify-center items-center w-full md:px-20 mb-20">
      <div className="grid grid-cols-1 mt-10">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            className="group w-full max-w-7xl py-8 md:mr-8 md:my-2 border-2 border-transparent rounded-md hover:shadow-xl"
          >
            <Image src={item.imgSrc} alt={item.title} className="" />
            <div className="px-5 -mt-12 mx-2">
              <p className="bg-gray-600 p-5 text-white ">{item.title}</p>
              <p className="text-gray-400 mr-4 mt-4 text-sm md:text-md leading-loose">{item.text}</p>
              <button className="text-blue-600 flex items-center mt-3 transition-transformmotion-reduce:transform-none">
                Read more{" "}
                <FiArrowUpRight className="ml-2 group-hover:translate-x-1 " />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Data;
