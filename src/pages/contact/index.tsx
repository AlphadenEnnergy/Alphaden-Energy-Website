import React from "react";
import RootLayout from "@/app/layout";
import LocationMap from "@/components/home/LocationMap";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import PageLayout from "@/layouts/SubLayout";

const Contact = () => {
  return (
    <PageLayout>
      <section className="my-20">
        <ContactUsForm />
        <LocationMap />
      </section>
    </PageLayout>
  );
};

export default Contact;
