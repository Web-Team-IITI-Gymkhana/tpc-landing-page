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
  Dropdown,
} from "@nextui-org/react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Drop from "./components/dropdown/dropdown";
import Accord from "./components/accordion/accordion";
import { Divider } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

export default function NavbarUI(props: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      // isBordered={scrolled ? true : false}
      maxWidth="2xl"
      className={`w-full overflow-hidden z-50 fixed top-0 transition-all duration-300 bg-sky-900 h-[5rem] shadow-md ${scrolled ? `shadow-md` : ""} `}
    >
      <NavbarContent
        justify="start"
        className={`overflow-hidden min-w-max  hover:scale-105 transition-all duration-300 bg-sky-900  rounded-xl px-3  `}
      >
        <Link href="/" className="">
          <Image
            width={60}
            height={60}
            src={props.logo}
            alt="iit indore"
            className={`${styles.iitilogo}  invert brightness-0 `}
          />

          <div
            className={`h-[5rem]  text-white overflow-hidden flex flex-col ml-2 items-start justify-center  transition-all duration-300 poppins  `}
          >
            <div className="text-[0.8rem] font-bold leading-4">
              Training and Placement Cell
            </div>
            <div className="text-[0.65rem] font-bold leading-4">
              Indian Institue of Technology Indore
            </div>
          </div>

          {/* <div
          className={`h-[5rem]  overflow-hidden flex flex-col justify-center gap-[0rem] poppins ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <div className={styles.block1}>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={styles.tpc}>Training and Placement Cell</div>
            </Link>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={styles.divider1}>&nbsp; | &nbsp;</div>
            </Link>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={`${styles.tpc} ${styles.hindi}`}>
                प्रशिक्षण एवं नियोजन कक्ष
              </div>
            </Link>
          </div>
          <div className={styles.block2}>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={styles.iiti}>
                Indian Institute of Technology, Indore{" "}
              </div>
            </Link>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={styles.divider2}>&nbsp; | &nbsp;</div>
            </Link>
            <Link
              href="/"
              color="foreground"
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              <div className={`${styles.iiti} ${styles.hindi}`}>
                भारतीय प्रौद्योगिकी संस्थान, इंदौर{" "}
              </div>
            </Link>
          </div>
        </div> */}
        </Link>
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="hidden  w-full md:flex justify-around  "
        style={{ justifyContent: "space-around" }}
      >
        {props.buttons.map((item: any, index: any) => (
          <NavbarMenuItem
            className={`enter1 delay-500`}
            key={`${item}-${index}`}
          >
            {item.isdrop ? (
              <Drop {...item}>
                {item.title == "About Us" ? (
                  <InfoIcon className=" text-[1rem]" />
                ) : item.title == "Contact Us" ? (
                  <ContactSupportIcon className=" text-[1rem]" />
                ) : item.title == "Recruiters' Corner" ? (
                  <BusinessCenterIcon className=" text-[1rem]" />
                ) : item.title == "Students' Corner" ? (
                  <SchoolIcon className=" text-[1rem]" />
                ) : null}
                {item.title}
              </Drop>
            ) : (
              <Link
                href={item.link}
                className={`  flex transition-all duration-200  items-center gap-1 text-sm ${
                  scrolled ? "opacity-100 " : "opacity-80 "
                }`}
              >
                <Button
                  color="default"
                  variant="light"
                  className=" text-white min-w-[155px]  poppins"
                >
                  {item.title == "Home" ? (
                    <HomeIcon className=" text-[1rem]" />
                  ) : (
                    <DatasetLinkedIcon className=" text-[1rem]" />
                  )}
                  <div>{item.title}</div>
                </Button>
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />

      <NavbarMenu>
        <NavbarMenuItem className=" my-10">
          <Accord {...props} />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
