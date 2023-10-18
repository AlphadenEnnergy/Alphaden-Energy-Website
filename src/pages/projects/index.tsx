"use client"
import React from "react";
import WhatWeDo from "@/components/projects/WhatWeDo";
import PageLayout from "@/layouts/SubLayout";
import Header from "@/components/projects/Header";

const Partners = () => {
  return (
    <PageLayout>
      <Header/>
      <section
        className={`w-full flex-col items-center justify-between text-sm lg:flex transition delay-700 duration-300 ease-in-ou`}
      >
         <WhatWeDo/>
      </section>
    </PageLayout>
  );
};

export default Partners;
