import React from "react";
import Image from "next/image";
import image1 from "./../../assets/images/ams/1.png"
import image2 from "./../../assets/images/ams/2.png"
import image3 from "./../../assets/images/ams/3.png"

const AMSData = () => {
  return (
    <div className="mt-2 w-full max-w-7xl mb-20 h-auto flex flex-col justify-start items-start text-left text-sm md:text-md text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
      <br />
      <h1 className="text-xl font-bold mb-3">
        OUR ADDITIVE MANUFACTURING CAPABILITIES
      </h1>
      Alphaden has partnered with Sciaky & Famaero, offering the largest,
      fully-programmable means of achieving near-net shape parts made of:
      <br />
      Titanium and Titanium Alloys, Inconel 600, 625, 718, Nickel and Copper
      Nickel Alloys, Stainless Steels 300 Series, Alloy Steels, Cobalt Alloys,
      4130 Steel, Zircalloy, Tantalum, Tungsten, Niobium, Molybdenum, And many
      more!{" "}
      <span className="font-bold text-gray-700">
        Any material weldable to itself and available in wire is open for
        discussion.
      </span>
      <br />
      <div className="w-full mt-2">
      <Image src={image1} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <br />
      <h1 className="text-xl font-bold mb-5">
        Electron Beam Additive Manufacturing (EBAM) ®
      </h1>
      Sciaky&apos;s exclusive Electron Beam Additive Manufacturing (EBAM®)
      process employs wire feedstock and an electron beam heat source within a
      vacuum chamber to craft near-net-shaped components. Beginning with a 3D
      CAD model converted to CNC code, the electron beam gun incrementally
      deposits metal layers until reaching the near-net shape. Subsequently, the
      part undergoes final heat treatment and machining.
      <br />
      <div className="w-full mt-2">
      <Image src={image2} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      This versatile process accommodates components of varying sizes,
      constrained solely by the vacuum chamber&apos;s dimensions, and the Electron
      Beam (EB) serves as the energy source, melting wire feedstock and adding
      layers to achieve the desired geometry, facilitating the creation of new
      components, incorporation of features, or repair of parts.
      <br />
      <div className="w-full mt-2">
      <Image src={image3} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <br />
      <h1 className="text-xl font-bold mb-5">
        A closed-loop control technology that provides real-time adaptive
        control
      </h1>
      The capability to achieve predictable and repeatable operations is
      important for wirefeed AM, and this is needed to increase the stability of
      the deposition process.
      <br />
      Sciaky offers the only real-time adaptive control system in the market
      that can sense and digitally self-adjust metal deposition with precision
      and repeatability, named the IRISS® Interlayer Realtime Imaging & Sensing
      System.
      <br />
      &bull; Digital parameter control and adjustments are made in response to
      real-time measured data, without process disruption.
      <br />
      &bull; Records every second of deposition, so the entire build can be
      reviewed, verifying consistency and keeping a record for later review.
      <br />
      &bull; Prevents surprises by dynamically adjusting parameters to maintain
      part integrity.
      <br />
      &bull; Better insures net shape fabrication and reduces post processing
      time and costs such as machining and inspection
      <br />
      <br />
      <h1 className="text-xl font-bold mb-5">
        Technological ADVANTAGES we offer:
      </h1>
      In addition to Accelerated lead times, cost-efficiency, ability to
      manufacture materials for use in the harshest environmental conditions,
      and reliability during temporary shutdowns, turnaround maintenance (TAM),
      pit stops, or addressing spare parts availability,
<br/>

<br />&bull;  EBAM boasts impressive deposition rates, spanning from 7 to 25 lbs. (3.18 to 11.34 kg) of metal per hour, rendering it the fastest metal additive manufacturing process available.
<br />&bull;  The IRISS process control effectively eradicates inconsistencies from the initial to the final layer and adjustments are executed in response to real-time data without disrupting the process. 
<br />&bull;  As an illustration, AM-grade Titanium 6AI-4V powder costs approximately 141% more than Titanium 6AI-4V wire on average, with Titanium wire offering quicker turnaround times, at times up to 4 weeks faster. Notably, AM-grade Stainless Steel 316 powder typically carry twice the average cost of their wire counterparts.
<br />&bull;  Plus, with an EBAM dual wirefeed system, you can combine two different metal alloys into a single melt pool, to create “custom alloy” parts or ingots. You also have the option to change the mixture ratio of the two materials. These unique benefits are exclusive to the EBAM dual wirefeed process and are not available with any other metal AM process in the market.

    </div>
  );
};

export default AMSData;
