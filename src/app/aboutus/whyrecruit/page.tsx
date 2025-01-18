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
    <div className=" flex relative flex-wrap gap-5 justify-around  ">
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src="/data/rankings/1.png" alt="" className="scale-[0.7]" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src="/data/rankings/2.png" alt="" className="scale-[0.7]" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src="/data/rankings/3.png" alt="" className="scale-[0.7]" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div
            className={styles.card}
            onMouseEnter={() => handleMouseEnter("text-[#67a8ac]")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src="/data/rankings/4.png" alt="" className="scale-[0.7]" />
          </div>
        </motion.div>
      </div>

      <div className="flex w-[40%] flex-wrap justify-center gap-10 mt-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.5, delay: 2 }}
          className=" w-full"
        >
          <div
            className={` shadow-md relative  flex   h-[250px] w-full  rounded-3xl  bg-sky-700  items-center justify-center text-white text-[3rem]`}
          >
            {"Highlights"}
          </div>
        </motion.div>
        {data.map((item, index) => (
          <>
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and 50px to the right
              animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
              transition={{ duration: 0.5, delay: 2.5 + index * 0.5 }}
              className=" w-full"
            >
              <div
                className={` shadow-md relative  flex justify-around  h-[250px] w-full rounded-3xl`}
                // style={{ left: scrollY<500 && index>2 && index % 2 != 0 ?  `${scrollY*0.7 - 337 }px` :  ``, right: scrollY<500 && index>2 && index % 2 === 0 ?  `${scrollY*0.7 - 337 }px` :  ``, top: scrollY<500 &&  index>1 ? `${-scrollY*(index-2)*0.55 + (index-2)*270 }px` :"" }}
              >
                <div className=" w-[40%] h-full bg-sky-700 rounded-l-3xl rounded-r-none flex items-center justify-center text-white text-[5rem]">
                  {index + 1}
                </div>
                {/* <div className=" w-[40%] h-full bg-sky-400 rounded-l-none rounded-r-3xl flex items-center justify-center text-white text-[5rem]"></div> */}
                <div className=" w-full h-full bg-white rounded-l-none rounded-r-3xl flex items-center justify-center text-sky-700 text-[1rem] p-6">
                  {item}
                </div>
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
}
