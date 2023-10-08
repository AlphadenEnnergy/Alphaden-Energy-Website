"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Aphaden Renewable Energy",
  description:
    "Alphaden Gas Limited is an indigenous gas processing and distribution company domiciled in Lagos state, Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState({
    active: "Home",
  });
  return (
    <section lang="en">
      <div
        className={`${inter.className} flex min-h-screen flex-col justify-between`}
      >
        <section>
          <nav>
            <Subnav />
            <Navbar setState={setState} />
          </nav>{" "}
          {children}
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </section>
  );
}
