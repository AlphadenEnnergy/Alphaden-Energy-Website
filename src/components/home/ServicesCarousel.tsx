import React from "react";
import epci from "./../../assets/images/landing/services/epci.png";
import upstream from "./../../assets/images/landing/services/upstream.png";
import marine from "./../../assets/images/landing/services/marine.png";
import midstream from "./../../assets/images/landing/services/midstream.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const ServicesCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
          <Image src={epci} alt="name" className=" " />
          <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">EPCI</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">
              Alphaden Energy stands out for its EPCI expertise. The company
              seamlessly integrates engineering, procurement, construction, and
              installation services, ensuring a streamlined project lifecycle.
              From designing state-of-the-art offshore platforms to constructing
              efficient pipelines and installing critical equipment, Alphaden
              Energy is your trusted partner in complex energy projects.
            </p>
          </div>
        </div>

        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
          <Image src={upstream} alt="name" className=" " />
          <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">
              System Integration, Process Control and Automation
            </h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">
              The convergence of System Integration, Process Control, and
              Automation allows Alphaden Energy to deliver energy solutions that
              are not only efficient but also sustainable and safe. By
              harnessing the power of these interconnected elements, we remain
              at the forefront of the oil and gas industry, setting new
              standards for performance and reliability.
            </p>
          </div>
        </div>

        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
          <Image src={marine} alt="name" className=" " />
          <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Additive Manufacturing Service</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">
              In our pursuit of excellence, Alphaden Energy has embraced
              additive manufacturing services. Our in-house 3D printing
              capabilities allow us to create customized parts and tools with
              speed and precision. Whether it&apos;s producing spare components for
              critical equipment or developing rapid prototypes for new drilling
              technologies, we harness additive manufacturing for innovation and
              efficiency.
            </p>
          </div>
        </div>

        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
          <Image src={midstream} alt="name" className=" " />
          <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Oilfield Services</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">
              Alphaden Energy comprehensive oilfield services are the driving
              force behind our energy solutions. From exploration and drilling
              to reservoir management and maintenance, we employ a range of
              specialized services to extract and process hydrocarbons
              efficiently. Our expertise in system integration, process control,
              automation, and additive manufacturing has helped us maintain high
              standards of safety, reliability, and sustainability.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
