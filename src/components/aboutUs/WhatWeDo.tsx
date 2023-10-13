"use client";
import React from "react";
import HeaderText from "../shared/headerText/HeaderText";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl md:my-10 h-auto flex flex-col justify-center items-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="About" secondary="Us" />
          <p className="hidden text-xs text-gray-400 w-full max-w-5xl mt-8 leading-loose md:block">
            ALPHADEN Energy & Oilfield Limited, established more than two
            decades ago, is a proudly indigenous company dedicated to serving
            the energy, manufacturing, renewables, and oil & gas industries. Our
            highly specialized team of technicians excels in meeting a wide
            array of demands, from project design to construction.
            <br />
            <br />
            The name "Alphaden" derives from "Alpha's Den," signifying a
            collective of individuals who are champions in their respective
            fields. We work collaboratively with a shared mission, focusing on
            safe and efficient service delivery, as well as customer
            satisfaction, among other goals.
            <br />
            <br />
            Our relentless commitment to positively impact the natural
            environment has been a cornerstone of our identity, and we have
            consistently upheld our name through excellence and strategic
            ingenuity in successfully executing diverse projects.
            <br />
            <br />
            Alphaden also stands among the select 100 companies chosen by the
            Nigerian Content Development Monitoring Board (NCDMB) to participate
            in the Project100 initiative. This initiative is geared towards
            fostering local manufacturing and technology capabilities.
            <br />
            <br /> We take pride in our ability to deliver intricate projects to
            clients in the oil, gas, and energy sectors. Leveraging industry
            relationships and providing cost-effective, fit-for-purpose service
            delivery, we ensure that we not only meet but exceed our clients'
            needs.
            <br />
            <br /> Equipped with versatile project management capabilities and a
            diverse, skilled workforce spanning various disciplines, Alphaden
            offers a comprehensive range of services, including engineering,
            procurement, construction, and installation (EPCI); 3D metal
            printing and fabrication; maintenance solutions; shutdown repair
            services; and oilfield support services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
