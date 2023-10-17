"use client";
import React from "react";
import HeaderText from "../shared/headerText/HeaderText";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-5xl md:my-10 h-auto flex flex-col justify-center items-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <HeaderText primary="OEM" secondary="Relationships" />
          <p className="hidden text-xs text-gray-500 w-full max-w-5xl mt-8 leading-loose md:block">
            Alpha den Energy is an Indigenous ISO (9001:2008) certified
            organization, founded over 2 decades ago yet quite modern as we
            continue to show that People, Innovation, Integrity & Efficiency
            values are key to-wards the success of every project. In the Energy
            sector, We offer the following:
            <br />
            <br />
            &bull; Engineering, Procurement & Contractual Support, Construction,
            Hook-Up & Installation. <br />
            &bull; Upstream Support services (Well Integrity, Servicing,
            Construction, Completion & Optimization Services, Coil tubing &
            Nitrogen Pumping, Metering, Measurement Solutions & Flow
            control/Assurance Solutions, Pipeline Construction & maintenance
            solutions, Emergency Pipeline Repair Systems, Facility Operations &
            Maintenance Services, Systems Integration & Automation, Specialty
            Engineering Product Units, Pigging Services) <br />
            &bull; Asset Integrity Solutions, Quality Control, NDT and
            inspection services <br />
            &bull; Systems Integration, Process Control & Automation (Integrated
            Control Systems (ICS), Instrumentation, Control & Electrical
            Solutions, Wellhead Solutions & Control Panels) <br />
            &bull; Midstream Development Services. 
            
            <br/><br/>Our procurement capabilities
            and experience cover an array of products including (but not limited
            to): 
            <br />
            <br />OCTG Drill Bits & Drilling Equipment  <br />
            &bull; Conductor Piling equipment
            <br />
            &bull; Various kinds of Pipes, Valves & Fittings (PVF)  <br />
            &bull; Noise & Vibration
            Solutions  <br />
            &bull; Wellhead Control Panels & Xmas Trees  <br />
            &bull; Structural Piles &
            Tubes  <br />
            &bull; Mill and tool supplies  <br />
            &bull; Fire & Safety Equipment,  <br />
            &bull; Heavy duty
            equipment,  <br />
            &bull; Ropes, Hawsers, Shackles & Chains
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
