import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import React, { useState } from "react";
import "./../app/globals.css";
import Home from "@/pages/home/Index";
const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    active: "Home",
  });
  return (
    <main className={`flex min-h-screen flex-col justify-between`}>
      <section>
        <nav>
          <Subnav />
          <Navbar setState={setState} />
        </nav>{" "}
        {children}
        <Home/>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default SubLayout;
