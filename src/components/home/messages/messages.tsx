"use client";

import styles from "./messages.module.css";
import { useRef, useEffect, useState } from "react";
import Modal from "../modal/modal";
import messagesData from "./messages.json";
import React from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";

export default function Messages() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedMessage, setSelectedMessage] = useState<{
    heading: string;
    info: string;
    photo: string;
  } | null>(null);

  const openModal = (heading: string, info: string, photo: string) => {
    setSelectedMessage({ heading, info, photo });
    modalRef.current?.showModal();
  };
  const ref = useRef(null); // Reference for the div
  const isInView = useInView(ref, { amount: 1 }); //
  const [scrollY, setScrollY] = useState(870);

  useEffect(() => {
    const handleScroll = () => {
      {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {messagesData.messages.map((message: any, index: any) => (
        <div key={index} className="  flex flex-col items-start">
          <h2
            ref={ref}
            className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]"
          >
            {message.title}
          </h2>
          <div className={index % 2 === 0 ? styles.info : styles.infoReverse}>
            <div className=" relative   min-w-max  flex flex-col gap-5 justify-center">
              <Image
                width={200}
                height={200}
                src={message.image}
                alt={message.title}
                className={` object-contain border-sky-700 bg-white text-white shadow-xl w-[250px]   border-[2px] rounded-3xl `}
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px to the right
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and its original position
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Modal {...message}></Modal>
              </motion.div>
            </div>
            <div
              style={{
                right:
                  scrollY < 870 && index % 2 != 0
                    ? `${-scrollY * 0.45 + 390}px`
                    : ``,
                left:
                  scrollY < 870 && index % 2 === 0
                    ? `${-scrollY * 0.3 + 260}px`
                    : ``,
              }}
              className={` ${
                index % 2 === 0
                  ? "border-sky-700 bg-white  text-black shadow-2xl shadow-sky-700/20 items-start"
                  : "border-sky-700 bg-white text-black shadow-2xl shadow-sky-700/20  items-end"
              }  p-10 relative flex flex-col justify-center   rounded-3xl  gap-7 `}
            >
              <div
                className={`${styles.summary} para `}
                style={{ fontSize: "0.9rem" }}
              >
                {message.summary}
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedMessage && (
        <Modal
          photo={selectedMessage.photo}
          heading={selectedMessage.heading}
          info={selectedMessage.info}
          ref={modalRef}
        ></Modal>
      )}
    </>
  );
}
