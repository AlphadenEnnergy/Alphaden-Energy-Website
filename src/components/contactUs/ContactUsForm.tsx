"use client";
import React from "react";
import HeaderText from "../shared/headerText/HeaderText";
import { Button } from "../shared/buttons";
import Link from "next/link"; 

const ContactUsForm = () => {
  return (
    <section className="WhoWeAre my-4 flex flex-col items-center justify-center mb-20">
      <div className="mt-10 contact w-full max-w-5xl h-auto flex flex-col justify-center items-start px-8 md:px-0 md:h-[30rem]">
        <div className=" flex flex-col mt-0 w-full md:w-auto">
          <div className="flex flex-col items-center md:block">
            <HeaderText primary="Contact" secondary="Us" />
          </div>

          <p className="text-xs text-gray-400 w-full max-w-md mt-2 leading-loose">
            Our friendly team would reach out to you
          </p>

          <form action="/" className="grid grid-cols-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full max-w-xl space-y-4 md:space-x-3 md:space-y-0">
              <div className="flex flex-col">
                <label htmlFor="firstname" className="text-[11px]">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="mt-1 block text-xs w-full rounded-md border-0 py-3 md:py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-primary sm:leading-6"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname" className="text-[11px]">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="mt-1 block text-xs w-full rounded-md border-0 py-3 md:py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-primary sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className="text-[11px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 block text-xs w-full rounded-md border-0 py-3 md:py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-primary sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="text-[11px]">
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="h-full text-xs rounded-md border-0 bg-transparent py-0 pl-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  >
                    <option>NG</option>
                    <option>KR</option>
                    <option>US</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="block text-xs w-full rounded-md border-0 py-3 md:py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-primary sm:leading-6"
                  placeholder="+234 (000) 000-0000"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="message" className="text-[11px]">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter message..."
                className="mt-1 block text-xs w-full rounded-md border-0 py-3 md:py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-primary sm:leading-6"
              />
            </div>

            <div className=" flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  aria-describedby="offers-description"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-xs leading-6">
                <label htmlFor="offers" className="text-gray-500">
                  You agree to our friendly
                </label>{" "}
                <Link href="/privacy" className="underline">privacy policy</Link>
              </div>
            </div>

            <Button>Send message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
