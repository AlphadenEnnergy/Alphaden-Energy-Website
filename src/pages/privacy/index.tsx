import React from "react"
import PageLayout from "@/layouts/SubLayout"
import Header from "@/components/privacyPolicy/Header"
import Data from "@/components/privacyPolicy/Data";
// import Data from "@/components/privacyPolicy/data"

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