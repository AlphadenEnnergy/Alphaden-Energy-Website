import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/oilfield/Welcome";
import OilfeildData from "@/components/oilfield/OilfeildData";

const CSR = () => {
  return (
    <SubLayout>
      <Welcome />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <OilfeildData/>
      </section>
    </SubLayout>
  );
};

export default CSR;
