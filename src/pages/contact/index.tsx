import React, { useEffect, useState } from "react";
import LocationMap from "@/components/home/LocationMap";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import PageLayout from "@/layouts/SubLayout";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";

const Contact = () => {
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
         {/* <Subnav /> */}
        <Navbar state={state} setState={setState} />
      </nav>

      <section className="my-20">
        <ContactUsForm />
        <LocationMap />
      </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Contact;
