"use client";
import styles from "./portalform.module.css";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function PortalForm() {
  const words = `Training and Placement Cell IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.
`;
  return (
    <div className=" w-[45%] relative z-10 h-full flex flex-col items-start justify-center  ">
      
      <div className=" text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] uppercase text-white font-bold">
        Training And Placement Cell
      </div>
     
      <div className=" text-white opacity-70 font-thin">
        <TextGenerateEffect words={words} />
      </div>

      <div className=" flex justify-start gap-7 my-10">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => {
            window.location.href = "/portal/login";
          }}
          className="hover:scale-110 transition-all duration-300 bg-pink-500 px-8 py-5 text-white rounded-2xl ease-in-out"
        >
          <div>{"PORTAL LOGIN"}</div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          onClick={() => {
            window.location.href = "/portal/recruiter/signup";
          }}
          className="hover:scale-110 uppercase transition-all duration-300 text-white border-[2px] px-8 py-5 rounded-2xl border-white ease-in-out"
        >
          <div>{"Recruit from IITI"}</div>
        </motion.button>
      </div>
    </div>
  );
}
