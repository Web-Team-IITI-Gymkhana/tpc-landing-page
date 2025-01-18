"use client";
import React from "react";
import styles from "./activities.module.css";
import data from "./data.json";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Activities() {
  return (
    <>
      <div className={styles.cardContainer}>
        {data.activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and 50px to the right
            animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className=" w-full"
          >
            <div className={styles.card}>
              <div className={`${styles.cardside} ${styles.front}`}>
                <Image
                  src={activity.img}
                  alt={activity.title}
                  className={styles.image}
                />
              </div>

              <div className={`${styles.cardside} ${styles.back}`}>
                <Link href={activity.link} target="_blank">
                  <div
                    className={`para text-[0.8rem] ${styles.overlay} text-white`}
                  >
                    <div className=" font-bold text-[1rem]">
                      {activity.title}
                    </div>
                    {activity.description}

                    <Image
                      src={data.insta}
                      alt="insta"
                      width={40}
                      className=" brightness-0 invert-[1] relative left-[150px]"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
