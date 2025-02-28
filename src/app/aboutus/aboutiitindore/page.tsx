"use client";
import Carousel from "./components/carousel/carousel";
import CarouselData from "./components/carousel/carousel.json";

import styles from "./aboutiiti.module.css";
import data from "./data.json";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Recruit from './whyrecruit/recruit'

export default function AboutIITIndore() {
  let tabs = [
    {
      id: "1",
      label: "Undergraduate Programs",
      content:
        "Bachelor of Technology (B.Tech) in several engineering disciplines such as Computer Science, Electrical Engineering, Mechanical Engineering, Civil Engineering, and Metallurgy Engineering.",
    },
    {
      id: "2",
      label: "Postgraduate Programs",
      content:
        "Master of Technology (M.Tech), Master of Science (M.Sc), and Master of Science in Research (MS-Research) in diverse specializations.",
    },
    {
      id: "3",
      label: "Doctoral Programs",
      content: "Programs in engineering, science, and humanities",
    },
  ];

  return (
    <div>
      <div className={styles.introcard}>
        <div className=" flex flex-col items-center gap-5">
          <Carousel {...CarouselData} />
          <Link href={data.iitihome} target="_blank">
            <Button
              color="primary"
              variant="flat"
              radius="full"
             className="bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold"
            >
              IIT Indore Home
            </Button>
          </Link>
        </div>

        <div className={styles.intro}>
          <div className="header2 leading-normal">About IITI</div>
          {data.intro}
        </div>
      </div>

    <Recruit/>
     

      
    </div>
  );
}
