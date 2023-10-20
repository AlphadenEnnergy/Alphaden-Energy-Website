"use client";
import React, { useState } from "react";
import WhatWeDo from "@/components/aboutUs/WhatWeDo";
import Features from "@/components/aboutUs/Features";
import OurManagement from "@/components/aboutUs/OurManagement";
import Header from "@/components/aboutUs/Header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const AboutUs = () => {
  const [state, setState] = useState({
    active: "About Us",
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

        {/* PAGE START */}
        <section className=" md:mt-24">
          <Header />
          <section
            className={`w-full flex-col items-center justify-between text-sm md:text-md lg:flex transition delay-700 duration-300 ease-in-ou`}
          >
            <WhatWeDo />
            <Features />
            <OurManagement />
          </section>
        </section>
        {/* PAGE END */}

      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default AboutUs;
