import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/ams/Welcome";
import AMSData from "@/components/ams/AMSData";

const CSR = () => {
  return (
    <SubLayout>
      <Welcome />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <AMSData/>
      </section>
    </SubLayout>
  );
};

export default CSR;
