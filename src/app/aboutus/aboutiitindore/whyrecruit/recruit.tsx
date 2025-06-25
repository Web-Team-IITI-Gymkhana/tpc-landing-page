"use client";
import React from "react";
import styles from "./recruit.module.css";
import { useState, useEffect } from "react";
import data from "./data.json";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

export default function WhyRecruit() {
  const [color, setColor] = useState("text-[#115398]");

  const handleMouseEnter = (newColor: any) => setColor(newColor);
  const handleMouseLeave = () => setColor("text-[#115398]");

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex relative flex-wrap gap-2 sm:gap-3 md:gap-5 justify-around px-1 sm:px-2">
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src="/data/rankings/1.png" 
              alt="" 
              className="scale-[0.6] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] xl:scale-[0.8] max-w-full max-h-full object-contain" 
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src="/data/rankings/2.png" 
              alt="" 
              className="scale-[0.6] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] xl:scale-[0.8] max-w-full max-h-full object-contain" 
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src="/data/rankings/3.png" 
              alt="" 
              className="scale-[0.6] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] xl:scale-[0.8] max-w-full max-h-full object-contain" 
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src="/data/rankings/4.png" 
              alt="" 
              className="scale-[0.6] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.75] xl:scale-[0.8] max-w-full max-h-full object-contain" 
            />
          </div>
        </motion.div>
      </div>

      <div className="flex w-full md:w-[40%] lg:w-[45%] xl:w-[40%] flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 px-1 sm:px-2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-full"
        >
          <div className="shadow-md relative flex h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[250px] w-full rounded-xl sm:rounded-2xl md:rounded-3xl bg-sky-700 items-center justify-center text-white font-bold overflow-hidden">
            <div className={styles.highlightText + " text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-[3rem]"}>
              {"Highlights"}
            </div>
          </div>
        </motion.div>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.5 + index * 0.5 }}
              className="w-full"
            >
              <div className="shadow-md relative flex justify-around h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[250px] w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="w-[40%] h-full bg-sky-700 rounded-l-xl sm:rounded-l-2xl md:rounded-l-3xl rounded-r-none flex items-center justify-center text-white font-bold overflow-hidden">
                  <div className={styles.highlightText + " text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-[3rem]"}>
                    {index + 1}
                  </div>
                </div>
                <div className="w-full h-full bg-white rounded-l-none rounded-r-xl sm:rounded-r-2xl md:rounded-r-3xl flex items-center justify-start overflow-hidden">
                  <div className="text-sky-700 text-left text-xs sm:text-sm md:text-sm lg:text-base xl:text-base p-3 sm:p-4 md:p-4 lg:p-5 xl:p-5 break-words leading-tight overflow-y-auto max-h-full w-full font-medium">
                    {item}
                  </div>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
