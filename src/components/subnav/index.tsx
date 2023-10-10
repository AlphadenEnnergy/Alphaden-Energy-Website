import React from "react";
import Link from "next/link";
import { MdPhone } from "react-icons/md";

const Subnav: React.FC = () => {
  return (
    <>
      <div className="text-gray-300 bg-primary w-full w-full hidden justify-center md:flex">
        <div className="max-w-7xl flex justify-between space-x-12 text-xs p-3">
          <Link
            href={
              "https://www.google.com/maps/search/Plot+23+Furo+Ezimora+Street,+Lekki+Phase+1+Lagos+State+Nigeria/@6.4325509,3.4639771,17z/data=!3m1!4b1?entry=ttu"
            }
            target="_blank"
            className="cursor-pointer"
          >
            Plot 23 Furo Ezimora Street, Lekki Phase 1 Lagos State Nigeria
          </Link>
          <Link
            href={"mailto:info@alphadenenergy.com"}
            target="_blank"
            className="underline cursor-pointer"
          >
            info@alphadenenergy.com
          </Link>
          <Link
            href={"tel:+234(0)700 ALPHADEN"}
            target="_blank"
            className="cursor-pointer flex"
          >
            <MdPhone className="text-xl mr-1 " />
            +234(0)700 ALPHADEN
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Subnav;
