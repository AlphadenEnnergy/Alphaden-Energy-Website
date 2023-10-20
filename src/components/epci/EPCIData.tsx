import React from "react";
import Image from "next/image";
import image1 from "./../../assets/images/epci/1.png"
import image2 from "./../../assets/images/epci/1a.png"
import image3 from "./../../assets/images/epci/1b.png"
import image4 from "./../../assets/images/epci/2.png"
import image5 from "./../../assets/images/epci/3.png"
import image6 from "./../../assets/images/epci/4.png"
import image7 from "./../../assets/images/epci/5.png"
import image8 from "./../../assets/images/epci/6.png"
import image9 from "./../../assets/images/epci/7.png"
import image10 from "./../../assets/images/epci/8.png"

const EPCIData = () => {
  return (
    <div className="mt-2 w-full max-w-7xl mb-5 h-auto flex flex-col justify-start items-start text-left text-sm md:text-md text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
      <br />
      Since its inception, Alphaden has consistently excelled in delivering
      comprehensive Engineering, Procurement, Construction, and Installation
      (EPCI) solutions. These encompass a broad spectrum of offerings, including
      the provision of pipes, valves, fittings, OCTG (Oil Country Tubular
      Goods), and a diverse selection of customized spare parts tailored to
      various projects. Notable among these projects are Total&apos;s Egina and
      Chevron&apos;s Makaraba, Meji, and Okan projects, among others.
      <br />
      <div className="w-full mt-4">
        <Image src={image1} alt={"Project Photo"} />
      </div>
      <br />
      Additionally, Alphaden proudly serves as the EPC Contractor for
      Shell&apos;s Assa North Ohaji (ANOH) South Gas Development project,
      awarded In 2018, the contract is for the EPC, Site preparation &
      Industrial Area Infrastructure Development by the Shell Petroleum
      Development Company (SPDC) for their Assa North Ohaji South Gas
      Development Project, which includes the Well Bay Area Construction,
      Project Fabrication, Internal & External roads, Perimeter Fencing,
      Residential & Industrial Infrastructure as well as other developments that
      make up the Assa North/Ohaji South Field Logistics Base and Primary
      Treatment Facility.
      <br />
      <div className="w-full md:flex mt-4 md:space-x-4">
        <div className="w-full md:w-1/2 ">
          <Image src={image2} alt={"Project Photo"} height={1000}/>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1  space-y-4">
          <div className="w-full">
            <Image src={image3} alt={"Project Photo"} height={1000}/>
          </div>
          <div className="w-full">
            <Image src={image4} alt={"Project Photo"} height={1000}/>
          </div>
        </div>
      </div>
      <br />
      <p className="mt-8">
        In this capacity, the company has recently overseen the design,
        fabrication, and recent installation of the Well Test Flare piping and
        bundwall for the Assa North Ohaji South Gas Development Project,
        culminating in the achievement of the coveted Golden Weld milestone for
        the ANOH project.
      </p>
      <br />
      <div className="w-full md:flex mt-4 md:space-x-4">
        <div className="w-full md:w-1/2 "><Image src={image5} alt={"Project Photo"} height={1000}/></div>
        <div className="w-full md:w-1/2 "><Image src={image6} alt={"Project Photo"} height={1000}/></div>
      </div>
      <br />
      ALPHADEN offers excellent turnkey services for a wide range of industrial
      projects, demonstrating exceptional expertise in seamlessly integrating
      engineering, procurement, and construction services across all project
      stages. We are commercially flexible, offering various commercial models
      customized to meet our clients&apos; needs, including extensive lump-sum
      turnkey expertise (LSTK) in onshore engineering, procurement, and
      construction (EPC), as well as offshore engineering, procurement,
      construction, and installation (EPCI). We also provide engineering,
      procurement, and construction management (EPCm) services as part of our
      extensive portfolio.
      <br />
      <div className="w-full  mt-4"><Image src={image7} alt={"Project Photo"} height={1000}/></div>
      <br />
      With a wealth of OEM relationships and well-managed industry connections,
      we remain committed to our mission of delivering fit-for-purpose services
      to the Energy sector. Our comprehensive procurement and supply chain
      management unit serves clients for both project and MRO (Maintenance,
      Repair, and Operations) supplies.
      <br />
      In our role providing procurement and contractual support to the Upstream
      sector, we are a prominent and active contractor for a variety of projects
      with clients such as Chevron, NAOC, Mobil, Total, STOIL, Eroton, and
      others. Our procurement capabilities and experience encompass a wide range
      of products, including but not limited to OCTG, Drill Bits & Drilling
      Equipment, Conductor Piling equipment, various types of Pipes, Valves &
      Fittings (PVF), Noise & Vibration Solutions, Wellhead Control Panels &
      Xmas Trees, Structural Piles & Tubes, Mill and tool supplies, Fire &
      Safety Equipment, Heavy-duty equipment, Ropes, Hawsers, Shackles & Chains,
      Crude Oil Export Hoses, Skids and Packaged Systems, Electrical equipment &
      Materials (Switchgears, Transformers, Bus Ducts, cables, etc.),
      Instrumentation & Automation, Umbilicals and submarine cables, and Pumps
      and Compressors.
      <br />
      <div className="w-full  mt-4"><Image src={image8} alt={"Project Photo"} height={1000}/></div>
      <br />
      Our expertise also extends to equipment, modular installation, and
      commissioning projects. All our personnel possess the requisite skills for
      their roles and are trained in planning, coordination, management,
      supervision, inspection duties, as well as instructing operating
      personnel. Our Installation and Commissioning services ensure the
      implementation of the desired technology and/or efficient production
      processes, as required by our clients.
      <br />
      <div className="w-full md:flex mt-4 md:space-x-4">
        <div className="w-full md:w-1/2 "><Image src={image9} alt={"Project Photo"} height={1000}/></div>
        <div className="w-full md:w-1/2 "><Image src={image10} alt={"Project Photo"} height={1000}/></div>
      </div>
      <br />
      Alphaden employs highly skilled structural and facilities engineering
      staff specializing in the design of oil and gas production facilities,
      pipelines, and utility systems for onshore and offshore developments. Our
      scope of services ranges from preliminary designs, feasibility studies,
      and economic analysis to complete detailed engineering design, permitting,
      construction planning, and procurement.
    </div>
  );
};

export default EPCIData;
