"use client"
import React from "react";
import WhatWeDo from "@/components/aboutUs/WhatWeDo";
import Features from "@/components/aboutUs/Features";
import OurManagement from "@/components/aboutUs/OurManagement";
import RootLayout from "@/app/layout";
import PageLayout from "@/layouts/SubLayout";

const AboutUs = () => {
  return (
    <PageLayout>
      <section
        className={`z-10 w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-ou`}
      >
         <WhatWeDo/>
        <Features/>
        <OurManagement/>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
