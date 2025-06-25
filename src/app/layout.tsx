import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import FooterData from "../components/footer/footer.json";
import NavbarData from "../components/navbar/navbar.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Training and Placement Cell, IIT Indore",
  description:
    "Students' Placement Office of IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} max-w-[100dvw] overflow-x-clip pt-[2rem] md:pt-[6rem]`}>

        <Navbar {...NavbarData} />

        <div className="wrapper max-w-[100dvw] overflow-x-clip">
          <div className="unexpendable">{children}</div>
        </div>
        <Footer {...FooterData} />
      </body>
    </html>
  );
}
