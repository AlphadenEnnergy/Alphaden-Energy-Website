"use client"
import React, { useState } from "react";
import WhatWeDo from "@/components/partners/WhatWeDo";
import Features from "@/components/partners/Features";
import PageLayout from "@/layouts/SubLayout";
import Header from "@/components/partners/Header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const Partners = () => {
  const [state, setState] = useState({
    active: "OEM Relationships",
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
      <Header/>
      <section
        className={`w-full flex-col items-center justify-between text-sm md:text-md lg:flex transition delay-700 duration-300 ease-in-ou`}
      >
         <WhatWeDo/>
        <Features/>
      </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Partners;
