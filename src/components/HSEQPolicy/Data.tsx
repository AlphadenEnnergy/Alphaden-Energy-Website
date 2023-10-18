import React, { useState } from "react";
import Image from "next/image";
import menAtWork from "./../../assets/images/HSEQPolicy/hseq.svg";
const Data = () => {
  const [state, setState] = useState("hsse");

  return (
    <section className="px-0 flex flex-col justify-center items-center w-full md:px-20">
      <div className="flex flex-col text-white text-sm md:text-md my-10 w-full max-w-7xl space-x-0 space-y-3 px-8 md:px-0 md:space-x-2 md:space-y-0 md:flex-row">
        <button
          className={`${
            state === "hsse"
              ? "bg-primary text-white"
              : "bg-[#A6EF10] text-primary"
          }  p-3 rounded-sm`}
          onClick={() => setState("hsse")}
        >
          Health, Safety, Security, & Environment (HSSE) Policy
        </button>
        <button
          className={`${
            state === "policy"
              ? "bg-primary text-white"
              : "bg-[#A6EF10] text-primary"
          }  p-3 rounded-sm`}
          onClick={() => setState("policy")}
        >
          Quality Policy and Authority
        </button>
      </div>
      {state == "hsse" && (
        <>
          <div className="w-full max-w-7xl mb-4 h-auto px-8 md:px-0 md:h-auto">
            <p className="leading-loose text-gray-500 text-sm md:text-md w-full">
              To set standards which ensure compliance with all relevant health,
              safety, environmental and security regulations and legislative
              requirements.
              <br />
              &bull; To ensure that the health, safety and security
              responsibilities of all cadres of management and staff are
              defined.
              <br />
              &bull; To communicate openly with all employees and other persons
              likely to be affected by the operations of the company about the
              promotion of a safe working environment and safe systems of work.
              <br />
              &bull; To inform employees of their duty to act responsibly and to
              take all reasonable precautions, not only to protect themselves
              but others from injury, preventable illness, loss or damage to
              property, which could arise from their actions.
              <br />
              &bull;To ensure that all employee receive adequate and suitable
              training to enable them to perform their duties in a safe and
              environmentally responsible manner.
              <br />
              &bull;To encourage all employees to participate in the continuing
              improvement of health, safety, environmental and security
              performance and to recognize that individual responsibility for
              health and safety cannot be delegated.
              <br />
              &bull;To carry out assessments of new and existing operations,
              annual audits and regular reviews of health and safety
              performance.
              <br />
              &bull;To minimize the production of waste by efficient use of
              resources, promote the recycling of materials when waste cannot be
              eliminated and dispose of waste materials in an environmentally
              responsible manner, thereby reducing pollution of air, water or
              land to a practicable minimum.
              <br />
              &bull;To control safety, health, environmental hazards, and
              nuisances, which may cause harm or offence to the community.
              <br />
              &bull;To monitor and review energy consumption, reduce any
              unnecessary energy usage and implement energy-efficient practices.
              <br />
              &bull;To seek continuous improvement in methods of identifying,
              assessing and controlling health, safety, security and
              environmental hazards.
              <br />
              &bull;To improve the HSSE awareness level of both staff and
              sub-contractors involved in our operations.
            </p>
          </div>
          <div className="flex w-full max-w-7xl mb-20 h-auto px-8 md:px-0 md:h-auto">
            <div className="hidden md:block">
              <Image
                src={menAtWork}
                height={550}
                width={550}
                alt="Men working"
              />
            </div>
          </div>{" "}
        </>
      )}
      {state == "policy" && (
        <>
          <div className="w-full max-w-7xl mb-4 h-auto px-8 md:px-0 md:h-auto">
            <p className="leading-loose text-gray-500 text-sm md:text-md w-full">
              Alphaden Energy recognizes that in today’s competitive
              marketplace, effective quality systems are essential when
              providing quality cost effective services to our clients.
              Management is totally committed to providing Commercial &
              Industrial General Contracting Services that comply fully with the
              specifications and expectations of our valued clients. Therefore,
              it is the policy of Alphaden Energy to adhere strictly to this
              quality control program and to ensure that this program and the
              requirements of our customers are met on each and every project we
              execute.
              <br />
              <br />
              Full authority for the implementation and administration of the
              quality controls described in the Quality manual has been
              delegated to the Quality Control Manager "QCM". The QCM has the
              responsibility and organizational freedom to identify quality
              control problems, stop work, recommend solutions and verify
              resolution of such problems.
              <br />
              <br />
              Project Managers are responsible for their assigned project&apos;s
              QA/QC activities. They may delegate the performance of their
              assigned duties to qualified individuals, but they shall retain
              full responsibility for completing their projects in strict
              accordance with established quality control policies and the
              client&apos;s specifications. The quality of all subcontractors
              and vendors shall be the joint responsibility of the QCM and the
              applicable Project Manager. All projects will be executed in a
              manner that emphasizes safety, quality, schedule and maximum cost
              effectiveness. Any commitment, conflicts, or non-conformance
              issues not resolved using current established Quality Assurance /
              Quality Control Procedures shall be brought to the attention of
              the undersigned for final resolution.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Data;
