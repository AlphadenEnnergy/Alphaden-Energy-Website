import Data from "@/components/services/Data";
import Header from "@/components/services/Header";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";

const Services = () => {
  return (
    <SubLayout>
      <Header />
      <section className="w-full flex  flex-col justify-start items-center px-4 ">
        <div className="w-full max-w-5xl items-center justify-center mt-10">
          <HeaderText primary={"Our"} secondary={"Services"} />
          <p className="text-xs md:text-sm md:text-md text-gray-400 text-center leading-loose mt-4">
            Our core expertise lies in the exploration and production of energy
            resources. We&apos;re at the forefront of identifying new energy
            reserves, leveraging cutting-edge technology to extract resources
            efficiently, and optimizing production processes to meet the world&apos;s
            growing energy demands. Our commitment to responsible exploration
            ensures that we harness the Earth&apos;s resources while safeguarding the
            environment.
          </p>
        </div>
         <Data />
      </section>

       
    </SubLayout>
  );
};

export default Services;
