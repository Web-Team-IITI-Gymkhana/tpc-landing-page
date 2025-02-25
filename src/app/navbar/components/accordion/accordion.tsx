"use cleint";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnchorIcon } from "../AnchorIcon";
import Link from "next/link";

export default function AccordionUI(props: any) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="bordered" selectionMode="multiple">
      {props.buttons.map((item: any, index: any) => (
        <AccordionItem
          key={`${item}-${index}`}
          indicator={<AnchorIcon />}
          aria-label={item.title}
          title={item.title}
        >
          <ul>
            {item.drop.map((val: any, index: any) => (
              <li key={`${item}-${index}`}>
                <Link href={val.link}>{val.title}</Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
