import Header from "@/components/csr/Header";
import SubLayout from "@/layouts/SubLayout";
import Welcome from "@/components/csr/Welcome";
import Vision from "@/components/csr/Vision";
import FocusArea from "@/components/csr/FocusArea";

const CSR = () => {
  return (
    <SubLayout>
      <Welcome />
      <Header />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <Vision/>
        <FocusArea/>
      </section>
    </SubLayout>
  );
};

export default CSR;
