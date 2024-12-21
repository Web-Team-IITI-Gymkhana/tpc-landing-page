"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  MotionValue,
} from "framer-motion";
import { ChevronDown, Pin } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="header2 mb-16">Placement Process</h2>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-500"
            style={{ scaleY, originY: 0 }}
          />

          {data.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              progress={scrollYProgress}
              index={index}
              total={data.length}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="fixed bottom-8 right-8 p-2 bg-primary text-primary-foreground rounded-full shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
};

const TimelineItem = ({
  item,
  progress,
  index,
  total,
  isLeft,
}: {
  item: TimelineEntry;
  progress: MotionValue<number>;
  index: number;
  total: number;
  isLeft: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const start = index / total;
  const end = (index + 1) / total;
  const iconColor = useTransform(
    progress,
    [start, end],
    ["#0369a1", "#2563eb"], // From sky-700 to blue-600
  );

  return (
    <div
      className={`mb-16 flex justify-center items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <motion.div
        ref={ref}
        className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }
        }
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="bg-white dark:bg-sky-900 p-8 rounded-lg shadow-xl overflow-hidden relative"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(3, 105, 161, 0.1), 0 4px 6px -2px rgba(3, 105, 161, 0.05)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 to-blue-500"></div>

          <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-4 relative z-10">
            {item.title}
          </h3>
          <div className="prose dark:prose-invert max-w-none text-sky-700 dark:text-sky-300 relative z-10">
            {item.content}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center z-10"
        style={{ backgroundColor: iconColor }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {item.icon}
      </motion.div>
      <div className="w-5/12"></div>
    </div>
  );
};
