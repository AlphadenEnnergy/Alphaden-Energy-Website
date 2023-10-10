import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import React, { useState } from "react";
import "./../app/globals.css";
// import TestNavbar from "@/components/testNav";
const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    active: "Home",
  });
  return (
    <main className={`flex min-h-screen flex-col justify-between relative`}>
      <section className="sticky top-0 left-0 right-0 z-50">
        <nav className="">
          <Subnav />
          <Navbar state={state} setState={setState} />
          {/* <TestNavbar/> */}
        </nav>{" "}
      </section>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default SubLayout;
