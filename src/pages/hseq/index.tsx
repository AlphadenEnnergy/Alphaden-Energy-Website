import Data from "@/components/HSEQPolicy/Data";
import Header from "@/components/HSEQPolicy/Header";
import SubLayout from "@/layouts/SubLayout";

const HSEQPolicy = () => {
  return (
    <SubLayout>
      <Header />
      <div className="w-full flex justify-center">
        <Data />
      </div>
    </SubLayout>
  );
}

export default HSEQPolicy;