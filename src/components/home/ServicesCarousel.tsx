import React from "react";
import ecpi from "./../../assets/images/landing/services/ecpi.png";
import upstream from "./../../assets/images/landing/services/upstream.png";
import marine from "./../../assets/images/landing/services/marine.png";
import midstream from "./../../assets/images/landing/services/midstream.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const ServicesCarousel = () => {
  const serviceItems = [
    {
      id: 1,
      imgSrc: ecpi,
      name: "ECPI",
      text: "4th /5th floor, 11A Oko Awo street, Victoria island,Lagos, Nigeria",
    },
    {
      id: 2,
      imgSrc: upstream,
      name: "Upstream",
      text: "No 36 Trans Amadi Layout, Port Harcourt, Rivers State, Nigeria.",
    },
    {
      id: 3,
      imgSrc: marine,
      name: "Marine Services",
      text: "#302, 42, Geojejungang-ro,15-Gil, Geoje-si, Kyeongsangnam-do, Republic of Korea",
    },
    {
      id: 4,
      imgSrc: midstream,
      name: "Midstream",
      text: "5048 Nicollet Avenue, Minneapolis Mn. 55419, USA",
    },
  ];
  return (
    <div>
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={ecpi} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">ECPI</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today's construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={upstream} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Upstream</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today's construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={marine} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Marine Services</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today's construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={midstream} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Midstream</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today's construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        

      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
