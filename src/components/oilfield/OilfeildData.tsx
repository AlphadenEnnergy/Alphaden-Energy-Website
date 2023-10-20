import React from "react";
import Image from "next/image";
import image1 from "./../../assets/images/oilfield/1.png"
import image2 from "./../../assets/images/oilfield/2.png"
import image3 from "./../../assets/images/oilfield/3.png"
import image4 from "./../../assets/images/oilfield/4.png"
import image5 from "./../../assets/images/oilfield/5.png"

const OilfeildData = () => {
  return (
    <div className="mt-2 w-full max-w-7xl mb-20 h-auto flex flex-col justify-start items-start text-left text-sm md:text-md text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
      <br />
      <div>
        <h2 className="text-xl font-bold ">Well Completion & Simulation</h2>
        The foundation of production performance lies in achieving excellence in
        the completion process, spanning from the reservoir to the production
        facility. Whether dealing with a conventional well or the most intricate
        subsea multilateral, our primary objective is to fully grasp our
        clients&apos; completion challenges. Leveraging the industry&apos;s most extensive
        array of established products and cutting-edge technologies, we provide
        tailored infrastructure and well integrity solutions to ensure safe and
        efficient production throughout the lifespan of our clients&apos; assets.
        <br />
        <br />
      </div>
      <br />
      <div className="w-full mt-4">
        <Image src={image1} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold ">
          Coiled Tubing Systems & Services:
        </h2>
        Coiled tubing (CT) plays a pivotal role in various well site operations.
        However, its true value extends beyond mere conveyance; it lies in the
        performance achieved at the pipe&apos;s end.
        <br />
        Both on the surface and downhole, we provide practical solutions for
        tasks such as well cleanouts, stimulation, and specialized applications.
        Our CT deployment teams are instrumental in helping you attain
        significant operational and economic performance benefits.
        <br />
        Furthermore, our Tubing Research and Engineering Team enhances and
        broadens the applications of CT, drawing from a blend of research
        expertise and field experience.
        <br />
        <br />
      </div>
       <br />
      <div className="w-full mt-4">
        <Image src={image2} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold ">Wellbore Cleanup: </h2>
        Our technology fo2 wellbore cleanup and displacement enhances
        operational efficiency by reducing risk and minimizing nonproductive
        time. Mechanical tools and chemicals are used to eliminate debris that
        disrupts normal operations without harming the integrity of the well
        structure. We offer reliable, engineered, and field-proven solutions for
        effective wellbore cleanup and debris management, ensuring successful
        completion operations and maximizing reservoir returns.
        <br />
        Our comprehensive suite of wellbore cleanup mechanical tools covers
        products for displacement, casing cleaning, blowout preventer (BOP)
        operations, riser cleaning, and debris management. Our solutions
        encompass displacement simulation, torque-and-drag analysis, and load
        analysis. Whether you&apos;re operating on land, offshore, or in Deepwater
        wells, you can rely on us to save you both time and money.
        <br />
        <br />
      </div>
      <br />
      <div className="w-full mt-4">
        <Image src={image3} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold ">Fishing Services: </h2>
        Our extensive range of fishing systems and tools, coupled with our
        industry-leading expertise in fishing, safely and efficiently remove
        wellbore obstructions, significantly reducing the costs associated with
        wellbore issues.
        <br />
        From intelligent intervention tools to auxiliary equipment that enhances
        performance, we offer the products and services necessary to address
        your fishing challenges effectively.
        <br />
        <br />
      </div>
      <br />
      <div className="w-full mt-4">
        <Image src={image4} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold ">Lower Completions</h2>
        <span className="font-bold text-gray-700">Sand Control:</span> We
        recognize that sand production poses significant challenges to equipment
        and investments. With this awareness, we adopt a comprehensive approach
        to sand control that begins with a deep understanding of your reservoir
        and culminates in tailored solutions for the specific challenges of each
        well. Leveraging a diverse range of sand screens, multizone stimulation
        systems, and gravel-pack tools, we enable you to establish effective
        reservoir connections, optimize conductivity, and enhance recovery
        rates. Our commitment to innovation ensures that you can achieve maximum
        sand-free production and improve overall recovery factors.
        <br /><br />{" "}
        <span className="font-bold text-gray-700">
          Well Service Solutions:{" "}
        </span>{" "}
        Our top-tier well servicing equipment, manufactured by Oil Country
        Manufacturing (OCM), boasts a track record of field-proven features and
        innovative designs. This high-quality equipment is your key to reducing
        operating costs, minimizing downtime, and elevating safety standards.
        Well servicing encompasses the use of rigs for a wide range of well
        completion, workover, and maintenance services, including installations,
        completions, well sidetracking, and support for perforating operations.
        We ensure swift order processing and worldwide shipping to any
        destination you require.
        <br />
        <br />
      </div>
      <br />
      <div className="w-full mt-4">
        <Image src={image5} alt={"Project Photo"} height={1000}/>
      </div>
      <br />
      <div>
        <h2 className="text-xl font-bold ">Upper Completions</h2>
        <span className="font-bold text-gray-700">
          Pressure Pumping Services:
        </span>{" "}
        Pressure pumping is a circulation of fractures through layers of rock
        using pressurized fracturing fluid and pumping the cement into the well
        bore to complete it. This approach is primarily used to extract
        resources from low permeability reservoirs such as shale gas, tight gas,
        and unconventional liquids, which are difficult to recover through
        regular drilling procedures.
        <br /><br /> Hydraulic fracturing is the frequently used pressure pump
        service, worldwide. Also, cementing services, sand control services,
        acidization, are also a part of the industry. Currently, pressure
        pumping is facing a lot of public opposition on environmental hazards
        caused by fracturing. Water usage, water contamination, and seismic
        activities are the most important concerns of pressure pumping. Due to
        these environmental concerns, the growth of the global market is
        diminished with a ban in many countries on hydraulic fracturing.
        <br />
        <br />
      </div>
    </div>
  );
};

export default OilfeildData;
