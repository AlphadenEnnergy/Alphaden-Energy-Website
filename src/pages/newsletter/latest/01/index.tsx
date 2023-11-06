import React, { useState } from "react";
import SubLayout from "@/layouts/SubLayout";

import "../../../../app/globals.css";
import Main from "@/components/newsletter/main";
import Header from "@/components/newsletter/Header";
import Footer from "@/components/footer";
import HeaderText from "@/components/shared/headerText/HeaderText";
import Subnav from "@/components/subnav";
import Navbar from "@/components/navbar";
import Data from "@/components/newsletter/Data";

const Services = () => {
  const [state, setState] = useState({
    active: "",
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
            {/* <div className="w-full max-w-5xl items-center justify-center mt-10">
              <HeaderText primary={"Newsletters"} secondary={""} />
              <p className="text-xs md:text-sm md:text-md text-gray-400 text-center leading-loose mt-4">
                We are thrilled to introduce our newsletter, where we bring you
                the latest news, updates, and insights. Our newsletter is
                designed to keep you informed about the ever-evolving industry,
                share our company&apos;s achievements, and provide valuable resources
                to our readers.
              </p>
            </div> */}
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
