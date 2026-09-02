import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import FooterData from "../components/footer/footer.json";
import NavbarData from "../components/navbar/navbar.json";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Career Advancement and Mentoring Centre , IIT Indore",
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
      <head />
      <body className={`${inter.className} ${poppins.variable} m-0 p-0 w-full overflow-x-clip bg-slate-50`}>
        {/* Float navbar on top of the hero section */}
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
          <Navbar {...NavbarData} />
        </header>

        <main className="w-full min-h-screen m-0 p-0">
          {children}
        </main>

        <Footer {...FooterData} />
      </body>
    </html>
  );
}