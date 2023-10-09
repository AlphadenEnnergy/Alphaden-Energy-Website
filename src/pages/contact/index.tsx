import React from "react"
import RootLayout from "@/app/layout"
import LocationMap from "@/components/home/LocationMap"
import ContactUsForm from "@/components/contactUs/ContactUsForm"
import PageLayout from "@/layouts/SubLayout"

const Contact = () => {
  return (
    <PageLayout>
      <ContactUsForm/>
      <LocationMap/>
    </PageLayout>
  )
}

export default Contact