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
            item.isdrop ? (
              item.title
            ) : (
              <Link href={item.link} onClick={(e) => e.stopPropagation()}>
                {item.title}
              </Link>
            )
          }
        >
          {item.isdrop && item.drop && (
            <ul>
              {item.drop.map((val: any, index: any) => (
                <li key={`${val}-${index}`}>
                  <Link href={val.link} className="block py-1 hover:text-blue-600 transition-colors">
                    {val.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
