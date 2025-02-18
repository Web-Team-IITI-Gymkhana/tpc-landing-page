"use client";
import React from "react";
import styles from "./ContactCard.module.css";
import info from "./Info.json";
import { Image } from "@nextui-org/image";

const ContactCard: React.FC = () => {
  console.log("Info data: ", info.Info);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-12 mx-auto ">
      {info.Info.map((person, index) => (
        <div key={index} className={`${styles.card} flex flex-col items-center`}>
          <div className={`${styles.cardside} w-full max-w-xs`}>
            <div className={styles.imageContainer}>
              <Image
                src={person.image}
                alt={person.name}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.info}>
              <h2>{person.name}</h2>
              <p>{person.position}</p>
              <p>{person.department}</p>
              <p>
                Email: <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
              <p>
                Phone: {person.phone} (Extn. {person.extension})
              </p>
              {person.mobile && <p>Mobile: {person.mobile}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
