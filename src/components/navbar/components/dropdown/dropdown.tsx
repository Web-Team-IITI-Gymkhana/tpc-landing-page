"use client";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import styles from "./dropdown.module.css";

import Link from "next/link";
export default function DropdownUI(props: any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
    <Dropdown shouldBlockScroll={false}>
      <DropdownTrigger>
        <Button
          color="default"
          variant="light"
          className={` text-sm min-w-[155px] transition-all duration-200 text-white  poppins ${
            scrolled ? "opacity-100" : "opacity-80"
          }`}
        >
          {props.children}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color="default"
        variant="light"
      >
        {props.drop.map((item: any, index: any) => (
          <DropdownItem
            className={`${styles.menuitem}`}
            key={index}
            href={item.link}
            target={item.target}
          >
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
