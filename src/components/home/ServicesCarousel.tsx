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
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={epci} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">EPCI</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today&apos;s construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={upstream} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Upstream</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today&apos;s construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={marine} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Marine Services</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today&apos;s construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        <div className=" flex flex-col transition delay-700 duration-300 ease-in-out">
         <Image src={midstream} alt="name" className=" "/>
         <div className="-mt-4 top-80 text-black text-left w-full bg-white p-5 shadow-xl -mt:16 md:w-2/3">
            <h2 className="font-bold">Midstream</h2>
            <p className="text-xs mt-2 leading-loose text-gray-400">We understand that today&apos;s construction projects must not only meet industry standards but also contribute to a healthier planet. With this mission in mind, we have curated a portfolio of cutting-edge products and solutions that prioritize both performance and sustainability.</p>
         </div>
        </div>
        
        

      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
