"use client";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl my-10 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">
            What <span className="text-secondary">We Do</span>
          </h2>
          <div className="bg-secondary h-2 w-16 rounded-xl mt-3"></div>
          <p className="text-xs text-gray-400 w-full max-w-4xl mt-8 leading-loose">
            In the Energy sector, We have carved out a niche for ourselves in
            providing Engineering, Procurement & Contractual Support,
            Construction, Installation (EPCI), Oilfield Services, Upstream
            Support Services, Asset Integrity Solutions, Quality Control, NDT
            And Inspection Services, Systems Integration, Process Control &
            Automation, Marine Support Services, as well as Midstream
            development services. 
            <br/><br/>
            As an ISO (9001:2008) certified organization,
            we have taken a unique approach to our Products & Services by
            oﬀering clients a wide range of options and ensuring projects are
            delivered on schedule, Within budget and of globally acceptable
            standards. We design and estimate projects, gaining a detailed
            understanding of the work scope and critical path. As part of
            quality planning, speciﬁc inspection and test plans are established,
            and detailed hazard analysis assessments are completed to maximize
            safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
