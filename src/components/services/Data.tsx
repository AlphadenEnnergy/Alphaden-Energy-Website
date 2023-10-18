import React from "react";
import Image from "next/image";
import menAtWork from "./../../assets/images/HSEQPolicy/hseq.svg";
import epci from "./../../assets/images/landing/services/epci.png";
import upstream from "./../../assets/images/landing/services/upstream.png";
import marine from "./../../assets/images/landing/services/marine.png";
import midstream from "./../../assets/images/landing/services/midstream.png";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Data = () => {
  const serviceItems = [
    {
      id: 1,
      imgSrc: epci,
      name: "EPCI",
      title: "EPCI",
      text: `Alphaden Energy stands out for its EPCI expertise. The company seamlessly integrates engineering, procurement, construction, and installation services, ensuring a streamlined project lifecycle. From designing state-of-the-art offshore platforms to constructing efficient pipelines and installing critical equipment, PetroTech is your trusted partner in complex energy projects.`,
      link: "/epci",
    },
    {
      id: 2,
      imgSrc: upstream,
      name: "Upstream",
      title: "System Intergration, Process Control And Automation",
      text: `The convergence of System Integration, Process Control, and Automation allows Alphaden Energy to deliver energy solutions that are not only efficient but also sustainable and safe. By harnessing the power of these interconnected elements, we remain at the forefront of the oil and gas industry, setting new standards for performance and reliability.`,
      link: "/sipca",
    },
    {
      id: 3,
      imgSrc: marine,
      name: "Marine Services",
      title: "Additive Manufacturing Services",
      text: `In our pursuit of excellence, Alphaden Energy has embraced additive manufacturing services. Our in-house 3D printing capabilities allow us to create customized parts and tools with speed and precision. Whether it's producing spare components for critical equipment or developing rapid prototypes for new drilling technologies, we harness additive manufacturing for innovation and efficiency.`,
      link: "/ams",
    },
    {
      id: 4,
      imgSrc: midstream,
      name: "Midstream",
      title: "Oilfeild",
      text: `Alphaden Energy comprehensive oilfield services are the driving force behind our energy solutions. From exploration and drilling to reservoir management and maintenance, we employ a range of specialized services to extract and process hydrocarbons efficiently. Our expertise in system integration, process control, automation, and additive manufacturing has helped us maintain high standards of safety, reliability, and sustainability.`,
      link: "/oilfield",
    },
  ];

  return (
    <section className="px-0 flex flex-col justify-center items-center w-full md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        {serviceItems.map((item) => (
          <Link href={item.link} key={item.id} className="group w-full lg:w-[500px] md:mr-8 md:my-8 border-2 border-transparent p-4 rounded-md shadow hover:shadow-xl">
            <Image src={item.imgSrc} alt={item.title} width={500}/>
            <p className="bg-gray-600 p-5 text-white">{item.title}</p>
            <p className="text-gray-400 mr-4 mt-4 text-xs md:text-sm md:text-md leading-loose">{item.text}</p>
            <button className="text-primary font-bold flex items-center mt-3 transition-transformmotion-reduce:transform-none">Read more <FiArrowUpRight className="ml-2 group-hover:translate-x-1 "/></button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Data;
