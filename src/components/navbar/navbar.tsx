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
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import styles from "./navbar.module.css";
import Image from "next/image";
import Drop from "./components/dropdown/dropdown";

import HomeIcon from "@mui/icons-material/Home";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  const renderMobileIcon = (title: string) => {
    switch (title) {
      case "Home":
        return <HomeIcon className="text-[1rem]" />;
      case "About Us":
        return <InfoIcon className="text-[1rem]" />;
      case "Contact Us":
        return <ContactSupportIcon className="text-[1rem]" />;
      case "Recruiters' Corner":
        return <BusinessCenterIcon className="text-[1rem]" />;
      case "Students' Corner":
        return <SchoolIcon className="text-[1rem]" />;
      default:
        return <DatasetLinkedIcon className="text-[1rem]" />;
    }
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
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
        <Link href="/" className="" onClick={handleMobileNavClick}>
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
        className="lg:hidden text-white"
      />

      {/* Mobile Menu Content */}
      <NavbarMenu className="bg-sky-900 pt-6">
        <div className="flex flex-col">
          {props.buttons.map((item: any, index: any) => (
            <NavbarMenuItem key={`mobile-${item}-${index}`} className="w-full">
              {item.isdrop ? (
                // Dropdown items rendered as accordion in mobile
                <div className="w-full">
                  <Accordion variant="light" className="px-0 shadow-none">
                    <AccordionItem
                      key={`accordion-${index}`}
                      aria-label={item.title}
                      title={
                        <div className="flex items-center gap-3 text-white py-2">
                          {renderMobileIcon(item.title)}
                          <span className="text-base font-medium">{item.title}</span>
                        </div>
                      }
                      indicator={<ExpandMoreIcon className="text-white/70" />}
                      classNames={{
                        base: "px-0 shadow-none border-none",
                        heading: "px-0",
                        title: "text-white px-0",
                        trigger: "py-2 px-4 hover:bg-white/5 rounded-lg transition-colors border-none shadow-none data-[hover=true]:bg-white/5",
                        content: "px-0 pb-2 pt-0",
                        indicator: "text-white/70"
                      }}
                    >
                      <div className="flex flex-col ml-7 space-y-1">
                        {item.drop?.map((subItem: any, subIndex: any) => (
                          <Link
                            key={`sub-${subIndex}`}
                            href={subItem.link}
                            target={subItem.target}
                            className="text-white/80 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all duration-200 text-sm"
                            onClick={handleMobileNavClick}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                  <div className="border-b border-white/10 mx-4"></div>
                </div>
              ) : (
                // Regular navigation items
                <div className="w-full">
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 text-white py-4 px-4 hover:bg-white/5 transition-all duration-200 rounded-lg"
                    onClick={handleMobileNavClick}
                  >
                    {renderMobileIcon(item.title)}
                    <span className="text-base font-medium">{item.title}</span>
                  </Link>
                  <div className="border-b border-white/10 mx-4"></div>
                </div>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
