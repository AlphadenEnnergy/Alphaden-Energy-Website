"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Subnav from "@/components/subnav";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Aphaden Renewable Energy",
//   description:
//     "Alphaden Gas Limited is an indigenous gas processing and distribution company domiciled in Lagos state, Nigeria.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState({
    active: "Home",
  });
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between`}
      >
        <div>
          <nav>
            <Subnav />
            <Navbar setState={setState} />
          </nav>{" "}
          {children}
        </div>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
