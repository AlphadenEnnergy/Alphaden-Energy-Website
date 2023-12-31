import Data from "@/components/affiliates/Data";
import Header from "@/components/affiliates/Header";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";
import { useState } from "react";

const Affiliates = () => {
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
      <section className=" md:mt-24">
      <Header />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <div className="w-full max-w-5xl items-center justify-center mt-10">
          <HeaderText primary={"Our"} secondary={"Affiliates"} />
        </div>
         <Data />
      </section>     </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Affiliates;
