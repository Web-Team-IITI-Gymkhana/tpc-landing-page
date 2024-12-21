"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "./faq.module.css";

export default function Faq(props: any) {
  return (
    <div className={styles.wrapper}>
      <Accordion selectionMode="single" variant="splitted" fullWidth={true}>
        {props.faq.map((item: any, index: any) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={
              <span className={styles.accordionTitle}>{item.Question}</span>
            }
          >
            <div className={styles.accordionContent}>{item.Answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
