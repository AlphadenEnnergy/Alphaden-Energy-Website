import React from "react";
import Image from "next/image";
import menAtWork from "./../../assets/images/HSEQPolicy/hseq.svg"
const Data = () => {
  return (
    <section className="px-0 flex flex-col justify-center items-center w-full md:px-20">
       <div className="flex flex-col text-white text-sm my-10 w-full max-w-5xl space-x-0 space-y-3 px-8 md:px-0 md:space-x-2 md:space-y-0 md:flex-row">
        <button className="bg-primary p-3">Health, Safety and Environment (HSEQ) Policy</button>
        <button className="bg-[#A6EF10] p-3 text-primary">Quality Policy</button>
      </div>
      <div className="w-full max-w-5xl mb-4 h-auto px-8 md:px-0 md:h-auto">
        <p className="leading-loose text-gray-500 text-sm w-full">
          Alphaden Energy & Oil Field Limited is committed to ensuring that the
          quality of products and services delivered are of the highest standard
          at all times conforming to local and international standards and
          satisfying the client&apos;s needs or contractual requirements.
          <br />
          <br />
          Inpursuance of the above, Alphaden Energy & Oilfield Limited ensures
          that the best, skilled and qualified personnel is engaged for the
          execution of his/her works and services and continuously monitored and
          supervised for the effective performance of Quality management system,
          structured to meet the requirements defined in ISO 9001.
        </p>
      </div>
      <div className="flex w-full max-w-5xl mb-20 h-auto px-8 md:px-0 md:h-auto">
        <p className="leading-loose text-gray-500 text-sm  max-w-xl mr-2">
          From the foregoing, utmost importance is given to conformance with
          international and local acceptable quality standards, which is
          intended to sustain Alphaden Energy & Oilfield Limited in the
          competitive market. 
          {/* <br /> */}
          <br />
          It is required of all personnel to operate in
          strict accordance with the quality system, performing their tasks
          correctly, and contributing to the application and continued
          improvement of the quality management system. All personnel has the
          responsibility for ensuring that all personnel in the company are
          fully aware of the company&apos;s quality policy and their individual
          responsibilities as defined in the quality manual. 
          
          <br />
          <br />The company&apos;s
          policy remains as follows: “All activities by individuals or teams
          will be planned and executed in such a way that client&apos;s requirements,
          as well as Alphaden Energy & Oil Field Limited business objectives,
          are met safely, efficiently and cost-effectively”. 
          
          <br />
          {/* <br /> */}
          With each project
          we undertake, a quality plan is implemented, encompassing control
          measures that ensure the client&apos;s requirements are met, within the
          specified time, and in line with the budget. To this end, we endeavor
          to work as a committed team in a spirit of co-operation with the
          client and their customers.
        </p>
        {/* <div className="w-full max-w-xl border-2"> */}
          <Image src={menAtWork} height={550} width={550} alt="Men working" />
        {/* </div> */}
        
      </div>
    </section>
  );
};

export default Data;
