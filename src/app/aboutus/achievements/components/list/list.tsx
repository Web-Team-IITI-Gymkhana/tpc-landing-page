"use client";
import { Image } from "@nextui-org/image";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";

export default function List(props: any) {
  return (
    <div className="mt-8 mb-6 flex flex-wrap justify-around gap-5">
      {props.achieve.map((item: any, index: any) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and 50px to the right
          animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 and its original position
          transition={{ duration: 0.3, delay: 0.3 + index * 0.3 }}
          className="group w-full sm:w-[45%] lg:w-[40%]"
        >
          <div
            className={`shadow-md relative group-hover:scale-105 group-hover:shadow-lg transition-all duration-200 flex justify-around min-h-[200px] w-full rounded-3xl`}
          >
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
  );
}