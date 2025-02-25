"use client";
import React from "react";
import styles from "./ContactCard.module.css";
import info from "./Info.json";
import { Image } from "@nextui-org/image";

const ContactCard: React.FC = () => {
  console.log("Info data: ", info.Info);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-8 px-4 w-full">
        {info.Info.map((person, index) => (
          <div 
            key={index} 
            className={`${styles.card} flex flex-col items-center mt-4 w-11/12 sm:w-10/12 md:w-1/2 lg:w-1/4 max-w-xs`}
          >
            <div className={`${styles.cardside} w-full`}>
              <div className={styles.imageContainer}>
                <Image
                  src={person.image}
                  alt={person.name}
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.info}>
                <h2 className="text-lg font-semibold">{person.name}</h2>
                <p className="text-sm text-gray-700">{person.position}</p>
                <p className="text-sm text-gray-600">{person.department}</p>
                <p className="text-sm">
                  Email: <a href={`mailto:${person.email}`} className="text-blue-600">{person.email}</a>
                </p>
                <p className="text-sm">
                  Phone: {person.phone} (Extn. {person.extension})
                </p>
                {person.mobile && <p className="text-sm">Mobile: {person.mobile}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
