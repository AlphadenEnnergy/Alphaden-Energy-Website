import Header from "@/components/csr/Header";
import SubLayout from "@/layouts/SubLayout";
import ManagementData from "@/components/management/Management";

const Management = () => {
  return (
    <SubLayout>
      <Header />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <ManagementData/>
      </section>
    </SubLayout>
  );
};

export default Management;
