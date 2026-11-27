import type { LandingPageConfig } from "@/lib/landing-page-config";
import styles from "./gymkhana.module.css";

import React from "react";
import Card from "./components/card/card";

export default function Gymkhana({ tech, cultural, sports, insta, gymkhanaIntro }: Pick<LandingPageConfig["studentActivities"], "tech" | "cultural" | "sports" | "insta" | "gymkhanaIntro">) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className="header2"> Student&#39;s Gymkhana</h1>
        <div className="para">{gymkhanaIntro}</div>
      </div>
      <div className="questitle">Tech Clubs</div>
      <Card {...tech} instagramIcon={insta} />

      <div className="questitle">Cultural Clubs</div>
      <Card {...cultural} instagramIcon={insta} />

      <div className="questitle">Sports Clubs</div>
      <Card {...sports} instagramIcon={insta} />
    </div>
  );
}
