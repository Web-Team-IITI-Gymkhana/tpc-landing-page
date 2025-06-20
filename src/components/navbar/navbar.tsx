"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";

import styles from "./navbar.module.css";
import Image from "next/image";
import Drop from "./components/dropdown/dropdown";
import Accord from "./components/accordion/accordion";

import HomeIcon from "@mui/icons-material/Home";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

export default function NavbarUI(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      maxWidth="2xl"
      className={`w-full fixed top-0 z-50 transition-all duration-500 h-[5rem] shadow-md
        ${hidden ? "bg-opacity-0 backdrop-blur-sm opacity-0 pointer-events-none" : "bg-sky-900 bg-opacity-100 opacity-100"}
      `}
    >
      {/* Brand */}
      <NavbarContent
        justify="start"
        className="overflow-hidden min-w-max hover:scale-105 transition-all duration-300 bg-sky-900 rounded-xl px-3"
      >
        <Link href="/" className="">
          <Image
            width={60}
            height={60}
            src={props.logo}
            alt="iit indore"
            className={`${styles.iitilogo} invert brightness-0`}
          />

          <div className="h-[5rem] text-white flex flex-col ml-2 items-start justify-center transition-all duration-300 poppins">
            <div className="text-[0.8rem] font-bold leading-4">
              Training and Placement Cell
            </div>
            <div className="text-[0.65rem] font-bold leading-4">
              Indian Institute of Technology Indore
            </div>
          </div>
        </Link>
      </NavbarContent>

      {/* Desktop Nav */}
      <NavbarContent
        justify="center"
        className="hidden w-full md:flex justify-around"
        style={{ justifyContent: "space-around" }}
      >
        {props.buttons.map((item: any, index: any) => (
          <NavbarMenuItem className="enter1 delay-500" key={`${item}-${index}`}>
            {item.isdrop ? (
              <Drop {...item}>
                {item.title === "About Us" ? (
                  <InfoIcon className="text-[1rem]" />
                ) : item.title === "Contact Us" ? (
                  <ContactSupportIcon className="text-[1rem]" />
                ) : item.title === "Recruiters' Corner" ? (
                  <BusinessCenterIcon className="text-[1rem]" />
                ) : item.title === "Students' Corner" ? (
                  <SchoolIcon className="text-[1rem]" />
                ) : null}
                {item.title}
              </Drop>
            ) : (
              <Link
                href={item.link}
                className={`flex items-center gap-1 text-sm transition-all duration-200 ${
                  hidden ? "opacity-0" : "opacity-80"
                }`}
              >
                <Button
                  color="default"
                  variant="light"
                  className="text-white min-w-[155px] poppins"
                >
                  {item.title === "Home" ? (
                    <HomeIcon className="text-[1rem]" />
                  ) : (
                    <DatasetLinkedIcon className="text-[1rem]" />
                  )}
                  <div>{item.title}</div>
                </Button>
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* Mobile Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />

      {/* Mobile Menu Content */}
      <NavbarMenu>
        <NavbarMenuItem className="my-10">
          <Accord {...props} />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
