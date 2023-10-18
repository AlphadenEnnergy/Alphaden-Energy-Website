import Data from "@/components/affiliates/Data";
import Header from "@/components/affiliates/Header";
import SubLayout from "@/layouts/SubLayout";
import HeaderText from "@/components/shared/headerText/HeaderText";

const Affiliates = () => {
  return (
    <SubLayout>
      <Header />
      <section className="w-full flex  flex-col justify-start items-center mt-8 md:mt-0">
        <div className="w-full max-w-5xl items-center justify-center mt-10">
          <HeaderText primary={"Our"} secondary={"Affiliates"} />
        </div>
         <Data />
      </section>
    </SubLayout>
  );
};

export default Affiliates;
