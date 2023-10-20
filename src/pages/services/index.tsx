import React, { useState } from "react";
import Data from "@/components/services/Data";
import Header from "@/components/services/Header";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const Services = () => {
  const [state, setState] = useState({
    active: "Our Services",
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
        <Subnav />
        <Navbar state={state} setState={setState} />
      </nav>
      <section className=" md:mt-24">
      <Header />
      <section className="w-full flex  flex-col justify-start items-center px-4 ">
        <div className="w-full max-w-5xl items-center justify-center mt-10">
          <HeaderText primary={"Our"} secondary={"Services"} />
          <p className="text-xs md:text-sm md:text-md text-gray-400 text-center leading-loose mt-4">
            Our core expertise lies in the exploration and production of energy
            resources. We&apos;re at the forefront of identifying new energy
            reserves, leveraging cutting-edge technology to extract resources
            efficiently, and optimizing production processes to meet the world&apos;s
            growing energy demands. Our commitment to responsible exploration
            ensures that we harness the Earth&apos;s resources while safeguarding the
            environment.
          </p>
        </div>
         <Data />
      </section>

      </section>
      <footer>
        <Footer />
      </footer>
      </section>
    </main>
  );
};

export default Services;
