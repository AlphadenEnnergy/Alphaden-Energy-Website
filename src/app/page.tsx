"use client";
import React, { useState, useEffect } from "react";
import Subnav from "@/components/subnav";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/Home/Index";
import AboutUs from "@/pages/About";
export default function Page({ children }: any) {
  const [state, setState] = useState({
    active: "Home",
  });

  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <div>
        <nav>
          <Subnav />
          <Navbar setState={setState} />
        </nav>

        {state.active === "Home" && <Home />}
        {state.active === "About Us" && <AboutUs />}
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
