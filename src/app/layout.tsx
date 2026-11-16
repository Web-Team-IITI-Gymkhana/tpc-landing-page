import { getLandingPageConfig } from "@/lib/landing-page-config";
import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getLandingPageConfig();
  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navbar, footer } = await getLandingPageConfig();
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} ${poppins.variable} m-0 p-0 w-full overflow-x-clip bg-slate-50`}>
        <header className="sticky top-0 z-50 w-full">
          <Navbar {...NavbarData} />
        </header>

        <main className="w-full min-h-screen m-0 p-0">
          {children}
        </main>

        <Footer {...footer} />
      </body>
    </html>
  );
}