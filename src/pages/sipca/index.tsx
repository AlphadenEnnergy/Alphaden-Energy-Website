import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/sipca/Welcome";
import SIPCAData from "@/components/sipca/SIPCAData";

const CSR = () => {
  return (
    <SubLayout>
      <Welcome />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <SIPCAData/>
      </section>
    </SubLayout>
  );
};

export default CSR;
