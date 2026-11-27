import { getLandingPageConfig } from "@/lib/landing-page-config";
import React from "react";
import styles from "./studentactivities.module.css";
import { Image } from "@nextui-org/image";

export default async function Activities() {
  const { studentActivities: data } = await getLandingPageConfig();
  return (
    <>
      <div className={styles.cardContainer}>
        {data.activities.map((activity, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={activity.img}
              alt={activity.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{activity.title}</h3>
            <p className={styles.description}>{activity.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
