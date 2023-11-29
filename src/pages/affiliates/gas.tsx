import Data from "@/components/affiliates/Data";
import HeaderGas from "@/components/affiliates/HeaderGas";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "../../app/globals.css";
import { useState } from "react";

const Gas = () => {
  const [state, setState] = useState({
    active: "Affiliates",
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
        <section className=" md:mt-24">
          <HeaderGas />
          <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
            <p className="w-full max-w-7xl text-gray-500 text-sm leading-loose my-10">
              Alphaden Gas Limited is an indigenous gas processing and
              distribution company domiciled in Lagos state, Nigeria. Since its
              incorporation, we have strategically positioned ourselves as a
              major player in the Nigerian gas space capable of competing
              globally with other industry gas players, utilizing cutting edge
              technology, whilst saving cost and effectively improving the
              environment. Innovation and hard work are at the center of our
              operations as we offer advanced and efficient services that meets
              the expectation of our clients and partners. One of our major
              focus points, is the effective collaboration with the Nigerian
              Federal Government on its plan to reduce flares from existing oil
              assets.
              <br />
              Alphaden utilizes cutting edge technology in capturing these
              flares, commercializing and turning the same into other reusable
              end products - such as Liquefied Natural Gas (&quot;LNG&quot;), Liquefied
              Petroleum Gas (&quot;LPG&quot;), Compressed Natural Gas (&quot;CNG&quot;), Urea etc.
              We are committed to excellence and customer satisfaction as we
              utilize our state-of-the-art facilities and highly trained
              personnel in ensuring we maintain consistency in delivering safe
              and reliable services. Since its existence, we have forged some
              essential partnerships with the Nigerian Government, Host
              communities, Clients, and OEMs to ensure the delivery of essential
              gas related projects. The safety and survival of the environment
              drives us towards the pursuit of legacy gas projects capable of
              standing the test of time and providing continuous value to the
              environment.
              <br />
              <span className="mt-4 block text-2xl font-bold">Our Capabilities/Services</span>
              <br />
              We offer various products such as: LNG, LPG and CNG storage and
              distribution: These products are stored at our storage facilities
              and transported using either ISO tank containers or cryogenic
              cylinders to the respective clients across West Africa. These
              tanks are placed on the back of tailers, using cranes for ease of
              transport of gas products.
              <br />
              Off-grid LNG power: LNG has been used as an alternative to power
              generation, by the utilization of gas generators to guarantee
              power supply. We provide LNG generators with low emissions and
              fuel cost savings – by the utilization of LNG to effectively save
              cost.
              <br />
              <br />
              Regasification solutions: We provide effective regasification
              solutions, that is essential in making LNG a viable and versatile
              energy source with numerous benefits.
              <br />
              <span className="mt-4 block text-2xl font-bold">Our Projects</span>
              <br />
              Obama gas flare commercialization project: We are constructing a
              20 mmscfd mini-LNG facility in Okoroma Bayelsea state. The
              feedstock for the gas is from the Obama Flowstation operated by
              the NAOC JV evidenced by the execution of a gas sales and purchase
              agreement between the NAOC JV and Alphaden, which shows our
              contribution towards a safe and cleaner environment. The facility
              will cater to up to 5 days site storage for all products and the
              same amount of off-site storage. The products will be transported
              to the offsite storage facility via self-propelled barges and will
              be transported to the customer site regasification stations via
              purpose-fit distribution trucks. The trucks will be able to
              transport up to 20MT per load, enough to generate up to 120,000kwh
              of electricity. Tebidaba gas flare commercialization project: Upon
              the recent completion of the Nigerian Gas Flare Commercialization
              program, we were awarded the rights to commercialize the gas from
              the tebidaba Flowstation. We are currently finalizing with
              investors the capital required to develop the project.
            </p>
          </section>{" "}
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Gas;
