"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function PortalForm() {
  const words = `Training and Placement Cell IIT Indore, is the organization which handles all activities related to the campus placement of the graduating batch.`;

  return (
    <div className="w-[90%] sm:w-full md:w-[45%] relative z-10 h-full flex flex-col items-start justify-center px-4 sm:px-6 mt-10 md:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-[1.8rem] sm:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] uppercase text-white font-bold"
      >
        Training And Placement Cell
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="text-white opacity-70 font-thin text-xs sm:text-sm md:text-base"
      >
        <TextGenerateEffect words={words} />
      </motion.div>

      <div className="flex flex-wrap justify-start gap-4 my-8">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          onClick={() => (window.location.href = "/portal/login")}
          className="hover:scale-110 transition-all duration-300 bg-pink-500 px-6 py-3 sm:px-8 sm:py-4 text-white rounded-2xl"
        >
          <div>{"PORTAL LOGIN"}</div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          onClick={() => (window.location.href = "/portal/recruiter/signup")}
          className="hover:scale-110 transition-all duration-300 text-white border-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border-white"
        >
          <div>{"Recruit from IITI"}</div>
        </motion.button>
      </div>
    </div>
  );
}
