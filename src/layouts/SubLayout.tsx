"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import React, { useState } from "react";
import "./../app/globals.css";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    active: "Home",
    openNav: false,
  });

//  localStorage.setItem('active', state.active);


  console.log(state.active, "ACTIVE STATE");
  return (
    <main className={`flex min-h-screen flex-col justify-between relative`}>
      <section className="sticky top-0 z-50">
        <nav
          id="sticky-banner"
          className="fixed top-0 left-0 right-0 z-50 w-full"
        >
          <Subnav />
          <Navbar state={state} setState={setState} />
        </nav>{" "}
        <section className="md:mt-24">{children}</section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default SubLayout;
