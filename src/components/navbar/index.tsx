"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/shared/logo.svg";
import { Button } from "../shared/buttons";
import { RiArrowDropDownLine, RiMenuFill, RiCloseLine } from "react-icons/ri";
const Navbar = ({ setState }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navstate, setNavstate] = useState({
    activeTab: "Home",
    openNav: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
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
      path: "/",
    },
    {
      id: 5,
      name: "OEM/Partners",
      path: "/",
    },
  ];

  return (
    <div className="bg-white transition-opacity duration-700 ease-in-out z-10">
      {isScrolled ? (
        <div className="text-gray-700 border-primary w-full justify-center flex py-3">
          <div>
            <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
          </div>
        </div>
      ) : (
        <div className="text-gray-700 border-primary w-full z-10 w-full justify-center md:flex">
          <div className="flex justify-between items-center md:space-x-10 lg:space-x-40 text-sm p-3 ">
            <div>
              <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
            </div>
            <div className="space-x-6 hidden md:flex">
              {links.map((link, index) => (
                <Link
                  key={link.id || index}
                  href={link.path}
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: `${link.name}`,
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: `${link.name}`,
                      };
                    });
                  }}
                  className={`cursor-pointer text-sm pb-1 hover:text-red-500 ${
                    navstate.activeTab == `${link.name}`
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
                setNavstate((prev: any) => {
                  return {
                    ...prev,
                    openNav: true,
                  };
                })
              }
              className="space-x-5 flex md:hidden"
            >
              <RiMenuFill className="text-3xl" />
            </div>
          </div>

          {/* MOBILE NAV */}

          {navstate.openNav && (
            <div
              className={`bg-black bg-opacity-10 absolute inset-0 flex justify-end transition-all duration-700 ease-in-out`}
            >
              <div
                className={`h-full w-5/6 md:w-3/5 lg:w-2/5 z-10 bg-white border pr-4`}
              >
                <div className="cursor-pointer p-3 flex justify-end ml-8 mt-4">
                  <RiCloseLine
                    onClick={() => {
                      setNavstate((prev) => {
                        return {
                          ...prev,
                          openNav: false,
                        };
                      });
                    }}
                    className="text-4xl"
                  />
                </div>
                <div className="w-11/12 justify-between mx-8 mt-4">
                  <div className="flex flex-col space-y-3 mb-4">
                    {links.map((link, index) => (
                      <Link
                        key={link.id || index}
                        href={link.path}
                        className={`cursor-pointer font-bold text-xl pb-1 hover:text-red-500 ${
                          navstate.activeTab == `${link.name}`
                            ? "text-red-500 border-red-500"
                            : ""
                        }`}
                        onClick={() => {
                          setNavstate((prev) => {
                            return {
                              ...prev,
                              activeTab: `${link.name}`,
                            };
                          });
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
      )}
    </div>
  );
};

export default Navbar;
