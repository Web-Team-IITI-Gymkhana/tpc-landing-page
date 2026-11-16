import { getLandingPageConfig } from "@/lib/landing-page-config";
import React from "react";
import { Button } from "@nextui-org/react";

import Faq from "./faqUI/faq";
import styles from "./recruiterfaq.module.css";

import Link from "next/link";

export default async function RecruiterFAQS() {
  const { recruiterFaq: { data, general: ques1 } } = await getLandingPageConfig();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className="header2">
          Frequently Asked Questions{" "}
          <span className={styles.student}>By Recruiters</span>{" "}
        </div>
      </div>
      <div className={styles.paras}>
        <div className={styles.starter}>{data.starter}</div>
        <div className={styles.button}>
          <Link href={data.brochure} target="_blank">
            <Button
              color="primary"
              variant="flat"
              radius="full"
              className="bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold"
            >
              Placement Brochure
            </Button>
          </Link>
        </div>
      </div>

      
      <Faq></Faq>
    </div>
  );
}
