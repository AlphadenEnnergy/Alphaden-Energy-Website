import React from "react"
import PageLayout from "@/layouts/SubLayout"
import Data from "@/components/privacyPolicy/Data";
import Header from "@/components/termsAndCondition/Header";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <Header />
      <div className="w-full flex justify-center">
        <Data />
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;