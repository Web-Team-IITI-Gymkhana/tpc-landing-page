"use client";
import styles from "./gymkhana.module.css";

import React from "react";
import dataTech from "./TechClubs.json";
import dataCultural from "./CulturalClubs.json";
import Card from "./components/card/card";
import dataSport from "./SportsClubs.json";

export default function Gymkhana() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className="header2"> Student&#39;s Gymkhana</h1>
        <div className="para">
          The Student Gymkhana at IIT Indore is led by the Senate, consisting of
          executives and councillors. Elected representatives focus on fostering
          student development and leadership through coordinating events and
          maximizing individual potential. Numerous clubs and groups cater to
          diverse co-curricular interests.
        </div>
      </div>
      <div className="questitle">Tech Clubs</div>
      <Card {...dataTech}></Card>

      <div className="questitle">Cultural Clubs</div>
      <Card {...dataCultural}></Card>

      <div className="questitle">Sports Clubs</div>
      <Card {...dataSport}></Card>
    </div>
  );
}
