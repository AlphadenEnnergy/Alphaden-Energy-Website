import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/epci/Welcome";
import EPCIData from "@/components/epci/EPCIData";

const CSR = () => {
  return (
    <SubLayout>
      <Welcome />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <EPCIData/>
      </section>
    </SubLayout>
  );
};

export default CSR;
