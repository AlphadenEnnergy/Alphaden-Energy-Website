import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <section className="px-0 flex flex-col items-center w-full mb-20 md:px-20 ">
      <Link href={"/newsletter/latest/01"} className="w-full max-w-7xl px-4 mt-16 md:flex border-b-2 mr-0 lg:mr-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">
            A major milestone was reached by Alphaden when a $60m facility was
            secured from AfreximBank for the construction of its gas processing
            facility.
          </h1>{" "}
          <p className="w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
            In a monumental step towards revolutionizing the oil and gas
            industry, Alphaden has achieved a significant milestone that is set
            to reshape the energy landscape...{" "}
          </p>
        </div>

        <div className="w-full md:w-96 md:h-[10rem] bg-black rounded-xl my-10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ErWBuxnSVvA"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Link>

      <div className="w-full max-w-7xl px-4">
        <h2 className="my-10 font-bold text-3xl">Other News</h2>
        <Link
          href={
            "/https://www.linkedin.com/posts/energy-storage-news_tesla-energy-storage-demand-remains-significantly-activity-6925470255465025536-eunK?utm_source=share&utm_medium=member_ios"
          }
          target="_blank"
          className="w-full max-w-7xl flex border-b pt-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">
              The evolution of how we store and distribute energy
            </h1>{" "}
            <p className="text-red-400 italic w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
              ... Read more
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/posts/alphaden_renewables-energy-sustainable-activity-6930641581859315712-CHuq?utm_source=share&utm_medium=member_ios"
          }
          target="_blank"
          className="w-full max-w-7xl flex border-b pt-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">
            Alphaden Energy in the quest to transition out of fossil fuels into renewable energy.
            </h1>{" "}
            <p className="text-red-400 italic w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
              ... Read more
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/posts/alphaden_a-visit-by-the-new-chair-of-the-commonwealth-activity-6938943305648873472-57MC?utm_source=share&utm_medium=member_ios"
          }
          target="_blank"
          className="w-full max-w-7xl flex border-b pt-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">
            The commonwealth business forum as an integral part of ALPHADEN’s Africa centric growth strategy
            </h1>{" "}
            <p className="text-red-400 italic w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
              ... Read more
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/posts/alphaden_africaninvestment-activity-6945053581620195328-zWmp?utm_source=share&utm_medium=member_ios"
          }
          target="_blank"
          className="w-full max-w-7xl flex border-b pt-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">
            An insightful day at the CHOGM RWANDA 2022 # chogm #africaninvestment
            </h1>{" "}
            <p className="text-red-400 italic w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
              ... Read more
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/posts/alphaden_the-prime-minister-of-uk-as-well-as-prince-activity-6945882586443329536-EjQb?utm_source=share&utm_medium=member_ios"
          }
          target="_blank"
          className="w-full max-w-7xl flex border-b pt-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">
            The prime minister of UK as well as Prince Charles with other heads of states at the CHOGM 2022.
            </h1>{" "}
            <p className="text-red-400 italic w-full max-w-7xl text-gray-500 text-xs leading-loose my-2">
              ... Read more
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Main;
