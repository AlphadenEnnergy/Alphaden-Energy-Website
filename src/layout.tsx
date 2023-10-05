import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Centered from "./layouts/centered";
import Layout from "./layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aphaden Renewable Energy",
  description:
    "Alphaden Gas Limited is an indigenous gas processing and distribution company domiciled in Lagos state, Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  let { pathname } = { ...router };
  if (["/404", "/500"].includes(pathname)) {
    return <Centered>{children}</Centered>;
  }

  if (
    [
      "/",
      "/home",
      "/about-us",
    ].includes(pathname)
  ) {
    return (
      <html lang="en">
        <Layout>{children}</Layout>
      </html>
    );
  } else {
    return <div>{children}</div>;
  }
}
