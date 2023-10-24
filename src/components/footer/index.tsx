import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/shared/logo.svg";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs"

const Footer = () => {
  const currentYear = (() => new Date().getFullYear())();
  // const router = useRouter();

  return (
    <div className="px-5 bg-primary text-white flex flex-col items-center justify-center md:px-0">
      <div className="px-2 w-full max-w-7xl my-12 flex justify-between">
        <div className="hidden md:flex flex-col">
          <div className="flex flex-col space-y-3 text-sm md:text-md ">
            <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
          </div>
          <div className="flex flex-col space-y-3 text-sm md:text-md mt-3 w-48">
            <Link href={"/"} className="uppercase">
              Alphaden Energy
            </Link>
            <Link href={"/"} className="leading-loose">
              Powering Progress: Your Trusted Energy Partner
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xl grid grid-cols-2 md:grid-cols-3 text-gray-300 space-x-3">
          <div className="flex flex-col space-y-3 text-sm md:text-md">
            <Link href={"/about-us"} className="text-gray-400 md:text-white">
              About Us
            </Link>
            <Link href={"/about-us"}>What we do</Link>
            <Link href={"/about-us"}>Our Company</Link>
            <Link href={"/management"}>Management</Link>
            <Link href={"/newsletter"}>Newsletter</Link>
          </div>
          <div className="flex flex-col space-y-3 text-sm md:text-md">
            <Link href={"/"} className="text-gray-400 md:text-white">
              Our Services
            </Link>
            <Link href={"/epci"}>EPCI Services</Link>
            <Link href={"/sipca"}>System Intergration, Process Control and Automation</Link>
            <Link href={"/ams"}>Additive Manufacturing Services</Link>
            <Link href={"/oilfield"}>Oilfield Services</Link>
          </div>
          <div className="flex flex-col space-y-3 text-sm md:text-md">
            <Link href={"/"} className="text-gray-400 md:text-white">
              Legal{" "}
            </Link>
            <Link href={"/terms"}>Terms and Condition</Link>
            <Link href={"/privacy"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 w-full max-w-7xl py-8 text-gray-300 text-sm md:text-md flex items-center flex-col-reverse md:flex-row md:justify-between ">
        <div className="text-gray-400 mt-3 md:mt-0">&copy; {currentYear} Alphaden Energy. All rights reserved.</div>
        <div className="flex justify-between w-28 text-lg">
          <Link href={"/"}><BsTwitter/></Link>
          <Link href={"/"}><BsInstagram/></Link>
          <Link href={"/"}><BsLinkedin/></Link>
          <Link href={"/"}><BsFacebook/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
