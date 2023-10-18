import React from "react";
import health from "./../../assets/images/csr/health.png"
import skill from "./../../assets/images/csr/health.png"
import humanitarian from "./../../assets/images/csr/humanitarian.png"
import education from "./../../assets/images/csr/education.png"
import sport from "./../../assets/images/csr/sport.png"
import Image from "next/image";

const FocusArea = () => {
  const areas = [
    {
      key: 1,
      name: "1. Education",
      img: education,
      text: `Education is the cornerstone of personal and societal progress. Our commitment is unwavering in providing access to quality education for underserved communities. Our education initiatives include:
        `,
      points: [
        "⦁	Scholarship Programs: We proudly offer scholarships to academically gifted students from disadvantaged backgrounds, providing them with the opportunity to pursue higher education. Our scholarship programs are meticulously designed to identify and empower future leaders.",
        `⦁	School Infrastructure Enhancement: We collaborate with educational institutions to enhance infrastructure, ensuring a safe and conducive learning environment that fosters growth and development. We believe that quality facilities are essential for quality education.
        `,
        `⦁  Teacher Capacity Building: We invest strategically in teacher training programs, elevating the quality of education and empowering educators to inspire future generations. Our commitment extends to creating a cadre of dedicated and motivated educators.
        `,
      ],
    },
    {
      key: 2,
      name: "2. Health",
      img: health,
      text: `Good health is the foundation of a thriving society. We are dedicated to enhancing access to healthcare services and promoting overall well-being within communities. Our health initiatives encompass: `,
      points: [
        `⦁	Health Camps: We organize and sponsor free health camps, delivering essential medical services to the most vulnerable and underserved populations. Our health camps serve as a lifeline, providing medical care to those who need it most.
`,
        `⦁	Health Education: We embark on a journey of awareness, enlightening communities about preventive healthcare measures and advocating for the adoption of healthy lifestyles. Our aim is to empower individuals to take charge of their health.
`,
        `⦁	Medical Infrastructure Development: Our relentless dedication extends to the construction and maintenance of healthcare facilities in underserved regions, ensuring access to quality healthcare. We believe that access to healthcare is a fundamental human right.
`,
      ],
    },
    {
      key: 3,
      name: "3. Sports",
      img: sport,
      text: `Physical and mental development are nurtured through sports. We ardently advocate for sports participation and talent development within communities. Our sports initiatives include:

        `,
      points: [
        `⦁	Youth Sports Programs: We wholeheartedly support local youth sports teams, nurturing talent through training opportunities and providing the requisite equipment. We believe that sports can instill values and skills that transcend the playing field.
        `,
        `⦁	Sports Facilities Revitalization: We channel our energies into the renovation and construction of sports facilities, creating secure and accessible spaces for recreational activities and competitions. We aim to provide communities with the resources they need to thrive.
        `,
        `⦁	Sports Scholarships: We celebrate and uplift promising athletes by providing scholarships, enabling them to chase their dreams and represent their communities on a broader stage. We recognize that sports can be a path to success and empowerment.
        `,
      ],
    },
    {
      key: 4,
      name: "4. Skills Acquisition",
      img: skill,
      text: `Empowering individuals with essential skills is pivotal for self-sufficiency and economic growth. Our skills acquisition initiatives include:
        `,
      points: [
        `⦁	Vocational Training: We offer comprehensive vocational training across diverse trades and skills, equipping individuals with the tools for gainful employment. We aim to provide individuals with the skills they need to secure a brighter future.
        `,
        `⦁	Entrepreneurship Support: Aspiring entrepreneurs find unwavering support through resources and mentorship, empowering them to establish and nurture their businesses. We believe that entrepreneurship can be a powerful driver of economic growth and job creation.
        `,
        `⦁	Digital Literacy: Bridging the digital divide, we champion digital literacy, unlocking new employment opportunities and fostering economic growth. We aim to ensure that individuals have the digital skills they need to thrive in the modern world.
        `,
      ],
    },
    {
      key: 5,
      name: "5. Humanitarian Relief",
      img: humanitarian,
      text: `Our commitment also extends to addressing the ongoing challenges posed by the COVID-19 pandemic, bolstering disaster preparedness, reducing emissions, safeguarding the environment, shaping a brighter future, and expanding opportunities for all.

      In times of crisis, we extend our reach to offer support to host communities, less privileged people, and places affected by various disasters. Our humanitarian relief efforts encompass:
      `,
      points: [
        `⦁	Disaster Relief: We mobilize swiftly to provide essential relief materials, shelter, and support to those affected by natural disasters, conflicts, and other emergencies. Our aim is to provide immediate assistance and relief to those in need.
        `,
        `⦁	Community Rebuilding: We engage in long-term efforts to help communities affected by disasters and conflicts rebuild their lives and infrastructure. Our goal is to support communities in their journey to recovery and resilience.
        `,
        `⦁	Less Privileged Outreach: We reach out to the less privileged, offering them essential supplies, support, and hope during challenging times. Our commitment is to stand with those who need it most.
        `,
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 w-full max-w-5xl mb-5 h-auto flex flex-col justify-start items-start text-left text-sm text-gray-500 leading-loose px-8 md:px-0 md:h-auto">
        <h2 className="text-2xl mb-2">Our Focus Area</h2>
        {areas.map((area) => (
          <div key={area.key} className="mb-8">
            <Image src={area.img} alt={area.name}/>
            <h3 className="text-[16px] font-semibold text-gray-700 mt-4">{area.name}</h3>
            <p className="mt-4">{area.text}</p>
            <div className="mt-4" >
                {area.points.map((point: string, index: any) =>(
                    <span className="mb-2" key={index}>
                        {point}
                        <br/>
                    </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusArea;
