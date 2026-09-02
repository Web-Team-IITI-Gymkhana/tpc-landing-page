"use client";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { motion } from "framer-motion";

export default function List(props: any) {
  const filteredList = props.achieve.filter(
    (item: string) => !item.toLowerCase().includes("inter iit")
  );

  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mb-12 bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="p-8 md:p-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Inter IIT Tech Meet 14.0
          </h2>

          <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              The 14th Inter IIT Tech Meet, hosted by IIT Patna, brought together the brightest technical minds from 23 IITs to compete on industry-driven and research-oriented challenges across cutting-edge domains like AI, Robotics, Cybersecurity, Aerospace, and Product Development.
            </p>
            <p>
              IIT Indore delivered its strongest-ever performance, securing <strong className="text-black font-bold">3rd place overall</strong> among 23 IITs and becoming the first second-generation IIT to achieve an overall podium finish at any Inter-IIT competition.
            </p>
            <p className="text-gray-600">
              The institute recorded one of its most comprehensive performances, with every participating team securing points in their respective event—winning 2 Gold, 2 Silver, and 3 Bronze medals.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF2DF] border-t border-[#E8D9B5] px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-[#0D3B66]">3rd</span>
            <span className="text-xs md:text-sm text-gray-800 font-semibold mt-1">Overall position in the competition</span>
          </div>
          <div className="flex flex-col items-center border-t sm:border-t-0 sm:border-x border-[#E0CF9B] pt-4 sm:pt-0">
            <span className="text-4xl md:text-5xl font-black text-[#0D3B66]">7</span>
            <span className="text-xs md:text-sm text-gray-800 font-semibold mt-1">Podiums secured across various challenges</span>
          </div>
          <div className="flex flex-col items-center border-t sm:border-t-0 pt-4 sm:pt-0">
            <span className="text-4xl md:text-5xl font-black text-[#0D3B66]">2915</span>
            <span className="text-xs md:text-sm text-gray-800 font-semibold mt-1">Points onboard</span>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-around gap-5 w-full">
        {filteredList.map((item: any, index: any) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.3 }}
            className="group w-full sm:w-[45%] lg:w-[40%]"
          >
            <div className="shadow-md relative group-hover:scale-105 group-hover:shadow-lg transition-all duration-200 flex justify-around min-h-[200px] w-full rounded-3xl">
              <div className="w-[40%] min-h-[100%] bg-[#d9be39] rounded-l-3xl rounded-r-none flex items-center justify-center text-white text-[5rem]">
                <EmojiEventsIcon className="transition-all text-[4rem] duration-200 text-white group-hover:scale-[1.5]" />
              </div>
              <div className="w-full min-h-[100%] group-hover:font-medium bg-white rounded-l-none rounded-r-3xl flex items-center justify-center text-black transition-all duration-200 text-[1rem] p-6">
                {item}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}