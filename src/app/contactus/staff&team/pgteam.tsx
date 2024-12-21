import React from "react";
import styles from "./FacultyProfile.module.css";
import facultyInfo from "./facultyInfo.json";

export default function FacultyProfile(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <p>{props.department}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
