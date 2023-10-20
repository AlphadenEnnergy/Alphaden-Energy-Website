import React, { useState } from "react";
import Data from "@/components/HSEQPolicy/Data";
import Header from "@/components/HSEQPolicy/Header";
import SubLayout from "@/layouts/SubLayout";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const HSEQPolicy = () => {
  const [state, setState] = useState({
    active: "HSEQ Policy",
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

      <Header />
      <div className="w-full flex justify-center">
        <Data />
      </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default HSEQPolicy;