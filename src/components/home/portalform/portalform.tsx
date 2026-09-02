"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function PortalForm() {
  const words = `Career Advancement and Mentoring Centre of IIT Indore facilitates internships, placements and career readiness activities for all it's students.`;

  return (
    <div className="w-full max-w-2xl relative z-10 flex flex-col items-start justify-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-[1.2] drop-shadow-md"
      >
        Career Advancement and Mentoring Centre
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="mt-5 text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow"
      >
        <TextGenerateEffect words={words} />
      </motion.div>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          onClick={() => (window.location.href = "/portal/login")}
          className="hover:scale-105 active:scale-95 transition-all duration-200 bg-[#e91e63] hover:bg-[#d81b60] px-6 py-3 text-white text-sm font-semibold rounded-lg shadow-lg"
        >
          PORTAL LOGIN
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          onClick={() => (window.location.href = "/portal/recruiter/signup")}
          className="hover:scale-105 active:scale-95 transition-all duration-200 text-white border border-white/80 hover:border-white hover:bg-white/10 px-6 py-3 rounded-lg text-sm font-semibold shadow-sm"
        >
          Recruit from IITI
        </motion.button>
      </div>
    </div>
  );
}