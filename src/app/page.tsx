"use client";
import React, { useState, useEffect } from "react";
import LocationMap from "@/components/home/LocationMap";
import Clientele from "@/components/home/Clientele";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurServices from "@/components/home/OurServices";
import PageLayout from "@/layouts/SubLayout";
import Slider from "@/components/home/Slider";

const Home = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((currentNumber) => (currentNumber % 3) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <PageLayout>
      <section className="md:mt-24">
        <Slider />
      </section>
      <WhoWeAre />
      {/* <OurServices /> */}
      <Clientele />
      <LocationMap />
    </PageLayout>
  );
};

export default Home;
