"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnchorIcon } from "../AnchorIcon";
import Link from "next/link";

export default function AccordionUI(props: any) {
  return (
    <Accordion variant="bordered" selectionMode="multiple">
      {props.buttons.map((item: any, index: any) => (
        <AccordionItem
          key={`${item}-${index}`}
          indicator={<AnchorIcon />}
          aria-label={item.title}
          title={
            item.isDrop ? (
              item.title
            ) : (
              <a href={item.link} onClick={(e) => e.stopPropagation()}>
                {item.title}
              </a>
            )
          }
        >
          <ul>
            {item.drop.map((val: any, index: any) => (
              <li key={`${val}-${index}`}>
                <div onClick={() => (window.location.href = val.link)}>
                  {val.title}
                </div>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
