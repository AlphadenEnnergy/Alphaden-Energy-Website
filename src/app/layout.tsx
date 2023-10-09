"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageLayout from "@/layouts/SubLayout";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Aphaden Renewable Energy",
  description:
    "Alphaden Gas Limited is an indigenous gas processing and distribution company domiciled in Lagos state, Nigeria.",
};

export default function RootLayout() {
  // const [state, setState] = useState({
  //   active: "Home",
  // });
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}><PageLayout children/></body>
    </html>
  );
}
