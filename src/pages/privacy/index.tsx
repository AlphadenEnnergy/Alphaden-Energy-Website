import React from "react"
import SubLayout from "@/layouts/SubLayout"
import Header from "@/components/privacyPolicy/Header"
import Data from "@/components/privacyPolicy/Data";
// import Data from "@/components/privacyPolicy/data"

const PrivacyPolicy = () => {
  return (
    <SubLayout>
      <Header />
      <div className="w-full flex justify-center">
        <Data />
      </div>
    </SubLayout>
  );
}

export default PrivacyPolicy;