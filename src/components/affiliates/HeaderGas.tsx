"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/affiliates/gasLogo.png"

const HeaderGas = () => {
  return (
    <section className="hidden md:flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mb-5 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="bg gas h-72 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl">
            <Image src={Logo} alt={"Logo"} width={200} height={200}/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeaderGas;
