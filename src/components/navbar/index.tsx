"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/shared/logo.svg";
import { Button } from "../shared/buttons";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
const Navbar = ({ state, setState}: any) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
   const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      if (currentScrollY > prevScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setPrevScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);


  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 6,
      name: "Our Services",
      path: "/services",
    },
    {
      id: 3,
      name: "HSEQ Policy",
      path: "/hseq",
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 5,
      name: "OEM Relationships",
      path: "/partners",
    },
    {
      id: 7,
      name: "Affiliates",
      path: "/affiliates",
    },
    {
      id: 8,
      name: "CSR",
      path: "/csr",
    },
  ];

  return (
    <div className="bg-white transition-opacity duration-700 ease-in-out z-10">
      <div className="text-gray-700 border-primary w-full z-10 w-full justify-center md:flex">
        <div className="flex justify-between items-center px-3 md:p-3 md:w-full md:max-w-7xl">
          {isScrolled ? (
            <div className="w-full text-gray-700 border-primary md:w-full justify-center flex py-3 md:py-0">
              <div>
                <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full md:max-w-7xl  ">
              <div className="block text-gray-700 border-primary md:w-full md:justify-center flex py-3 md:hidden">
                <div>
                  <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
                </div>
              </div>
              <div className="hidden w-full md:flex justify-between md:max-w-3xl">
                {links.map((link, index) => (
                  <Link
                    key={link.id || index}
                    href={link.path}
                    // onClick={() => clickLink(link)}
                    className={`cursor-pointer text-sm md:text-md pb-1 hover:text-red-500 ${
                      state.active == `${link.name}`
                        ? "text-red-500 border-b-2 border-red-500"
                        : ""
                    }`}
                  >
                    {" "}
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link href={"/contact"} className="space-x-5 hidden md:flex">
                <Button>Contact Us</Button>
              </Link>

              <div
                onClick={() =>
                  setState((prev: any) => {
                    return {
                      ...prev,
                      openNav: !state.openNav,
                    };
                  })
                }
                className="space-x-5 flex md:hidden my-5"
              >
                {state.openNav ? (
                  <RiCloseLine className="text-4xl" />
                ) : (
                  <RiMenuFill className="text-3xl" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* MOBILE NAV */}

        {state.openNav && (
          <div
            className={`w-96 bg-white bg-opacity-10 absoute inset-0 flex justify-end transition-all duration-700 ease-in-out`}
          >
            <div
              className={` w-full md:w-3/5 lg:hidden z-10 h-screen bg-pink text-center pr-4`}
            >
              <div className="flex flex-col justify-center items-center mt-4">
                <div className="flex flex-col space-y-3 mb-4">
                  {links.map((link, index) => (
                    <Link
                      key={link.id || index}
                      href={link.path}
                      className={`cursor-pointer font-bold text-xl pb-1 hover:text-red-500 ${
                        state.active == `${link.name}`
                          ? "text-red-500 border-red-500"
                          : ""
                      }`}
                      onClick={() => {
                        setState((prev: any) => {
                          return {
                            ...prev,
                            active: `${link.name}`,
                          };
                        });
                      }}
                    >
                      {" "}
                      {link.name}
                    </Link>
                  ))}
                </div>

                <Link href={"/contact"} className="mt-4 h-auto">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
