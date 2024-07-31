import React from "react"
import SubLayout from "@/layouts/SubLayout"
import Data from "@/components/termsAndCondition/Data";
import Header from "@/components/termsAndCondition/Header";

const TermsAndConditions = () => {
  return (
    <SubLayout>
      <Header />
      <div className="w-full flex justify-center">
        <Data />
      </div>
    </SubLayout>
  );
}

export default TermsAndConditions;