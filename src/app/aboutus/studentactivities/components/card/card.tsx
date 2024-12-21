"use client";
import styles from "../../gymkhana.module.css";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import data from "../../data.json";

export default function CardUI(props: any) {
  const ref = useRef(null); // Reference for the div
  const isInView = useInView(ref, { amount: 0.2 }); //

  return (
    <section ref={ref} className={styles.table}>
      {props.Clubs.map(
        (club: { img: string; title: string; link: string }, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px to the right
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and its original position
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className=" w-full"
          >
            <div className={styles.card}>
              <Image src={club.img} alt={club.title} />
              <div className=" text-[0.8rem] font-semibold">{club.title}</div>

              <Link href={club.link} target="_blank">
                <div className={styles.insta}>
                  <div>
                    <Image
                      src={data.insta}
                      alt="instagram"
                      className=" brightness-0 invert-[1] "
                    />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ),
      )}
    </section>
  );
}
