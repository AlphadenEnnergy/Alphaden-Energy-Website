import React, { useState } from "react";
import Header from "@/components/csr/Header";
import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/csr/Welcome";
import Vision from "@/components/csr/Vision";
import FocusArea from "@/components/csr/FocusArea";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const CSR = () => {
  const [state, setState] = useState({
    active: "CSR",
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
      <Welcome />
      <Header />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <Vision/>
        <FocusArea/>
      </section>
    
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default CSR;
