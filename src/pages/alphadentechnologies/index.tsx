import Data from "@/components/affiliates/Data";
import HeaderTechnologies from "@/components/affiliates/HeaderTechnologies";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";
import { useState } from "react";

const Technologies = () => {
  const [state, setState] = useState({
    active: "Affiliates",
    openNav: false,
  });

  return (
    <main
      className={`flex min-h-screen flex-col justify-between relative overflow-x-hidden`}
    >
      <section className="sticky top-0 z-50">
        <nav
          id="sticky-banner"
          className="fixed top-0 left-0 right-0 z-50 w-full"
        >
           {/* <Subnav /> */}
          <Navbar state={state} setState={setState} />
        </nav>
        <section className="p-8 mt-10 md:mt-24 lg:p-0">
          <HeaderTechnologies />
          <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
            <p className="w-full max-w-7xl text-gray-500 text-sm leading-loose my-10">
              <span className="mt-4 block text-2xl font-bold">
                Welcome to Alphaden Technologies -
                <br />
                Your Gateway to Disruptive Solutions!
              </span>
              <br />
              At Alphaden Technologies, we are a cutting-edge innovation
              powerhouse, specializing in the development of disruptive software
              and hardware solutions for a wide range of industries. With a
              strong emphasis on the oil and gas industry, logistics industry,
              fintech services, surveillance/security technologies, and retail
              payment platforms, we are poised to revolutionize these sectors
              and take them to new heights.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Our Expertise:
              </span>
              <span className="mt-4 block text-xl font-semibold">
                Oil and Gas Industry:
              </span>
              <br />
              Alphaden Technologies leads the charge in transforming the oil and
              gas sector. We harness the power of advanced analytics, artificial
              intelligence, and Internet of Things (IoT) to optimize
              exploration, drilling, production, and distribution processes. Our
              solutions not only enhance efficiency but also contribute to a
              safer and more sustainable environment.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Logistics Industry:
              </span>
              <br />
              Our innovative logistics solutions streamline supply chains,
              reduce operational costs, and ensure timely deliveries. Leveraging
              state-of-the-art technologies such as blockchain and machine
              learning, we offer end-to-end visibility and real-time tracking,
              enabling businesses and individuals to make data-driven decisions
              with confidence.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Fintech Services:
              </span>
              <br />
              Alphaden Technologies drives progress in the financial technology
              landscape. We create secure and user-friendly platforms that
              facilitate seamless transactions, ensuring compliance with the
              highest security standards. Our fintech solutions empower
              businesses and consumers alike to embrace the digital economy
              confidently.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Surveillance/Security Technologies:
              </span>
              <br />
              Safety is paramount, and we take it seriously. With our
              cutting-edge surveillance and security technologies, we provide
              robust solutions to law enforcement for threat detection,
              real-time asset protection, and monitoring. Whether it&apos;s
              safeguarding critical infrastructure or enhancing public safety,
              Alphaden Technologies sets the standard for technology and
              data-driven systems.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Retail Payment Platforms:
              </span>
              <br />
              Simplifying the payment experience for businesses and consumers is
              at the core of what we do. Our retail payment platforms are
              designed to be fast, secure, and flexible, accommodating various
              payment methods and seamlessly integrating with existing systems.
              We empower merchants to offer frictionless checkout experiences
              while ensuring customers&apos; data remains protected.
            </p>

            <div className="w-full max-w-7xl mb-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
              <div className="bg techbody h-80 flex flex-col items-center justify-center"></div>
            </div>

            <p className="w-full max-w-7xl text-gray-500 text-sm leading-loose my-10">
              <span className="mt-4 block text-2xl font-bold">
                Why Choose Alphaden Technologies?
              </span>
              <span className="mt-4 block text-xl font-semibold">
                Innovative Disruption:
              </span>
              We thrive on innovation and are committed to challenging the
              status quo. Our disruptive solutions will revolutionize your
              industry and give you a competitive edge.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Expert Team:
              </span>
              At Alphaden Technologies, we have a team of highly skilled
              professionals who are passionate about pushing boundaries and
              solving complex challenges.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Customized Solutions:
              </span>
              We understand that each business has unique requirements. That&apos;s
              why we tailor our solutions to meet your specific needs, ensuring
              maximum efficiency and effectiveness.
              <br />
              <span className="mt-4 block text-xl font-semibold">
                Security and Reliability:
              </span>
              Your data and operations are crucial to us. We employ the latest
              security protocols to safeguard your assets and maintain
              uninterrupted service reliability.
              <br />
              Join us on the journey of innovation and transformation. Let
              Alphaden Technologies be your partner in creating a future where
              technology empowers businesses and individuals to thrive.
              Together, we can reshape industries and unlock the full potential
              of your enterprise. Contact us today to explore the possibilities!
            </p>
          </section>{" "}
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Technologies;
