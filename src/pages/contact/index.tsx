import React from "react"
import RootLayout from "@/app/layout"
import LocationMap from "@/components/home/LocationMap"
import ContactUsForm from "@/components/contactUs/ContactUsForm"

const Contact = () => {
  return (
    <RootLayout>
      <ContactUsForm/>
      <LocationMap/>
    </RootLayout>
  )
}

export default Contact