"use client";
import React, { useState } from "react";
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
      maxWidth="full"
      className="w-full h-[5rem] shadow-md bg-sky-900 bg-opacity-100 opacity-100 px-2 sm:px-6"
    >
      <NavbarContent justify="start" className="shrink-0">
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-all duration-300" onClick={handleMobileNavClick}>
          <Image
            width={52}
            height={52}
            src={props.logo}
            alt="iit indore"
            className={`${styles.iitilogo} invert brightness-0 shrink-0`}
          />

          <div className="text-white flex flex-col justify-center poppins leading-tight">
            <span className="text-[0.65rem] sm:text-xs lg:text-[0.78rem] font-bold">
              Career Advancement and Mentoring Centre
            </span>
            <span className="text-[0.55rem] sm:text-[0.68rem] font-medium text-white/80">
              Indian Institute of Technology Indore
            </span>
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="hidden xl:flex gap-1 2xl:gap-3 shrink-0"
      >
        {props.buttons.map((item: any, index: any) => (
          <NavbarItem key={`${item.title}-${index}`}>
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
                className="opacity-85 hover:opacity-100 transition-opacity"
              >
                <Button
                  color="default"
                  variant="light"
                  className="text-white px-3 h-9 text-xs 2xl:text-sm font-medium poppins flex items-center gap-1.5"
                >
                  {item.title === "Home" ? (
                    <HomeIcon className="text-[1rem]" />
                  ) : (
                    <DatasetLinkedIcon className="text-[1rem]" />
                  )}
                  <span>{item.title}</span>
                </Button>
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="xl:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      <NavbarMenu className="bg-sky-900 pt-6">
        <div className="flex flex-col">
          {props.buttons.map((item: any, index: any) => (
            <NavbarMenuItem key={`mobile-${item.title}-${index}`} className="w-full">
              {item.isdrop ? (
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
                        indicator: "text-white/70",
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