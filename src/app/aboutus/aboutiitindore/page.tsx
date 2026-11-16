import { getLandingPageConfig } from "@/lib/landing-page-config";
import Carousel from "./components/carousel/carousel";

import styles from "./aboutiiti.module.css";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Recruit from './whyrecruit/recruit'

export default async function AboutIITIndore() {
  const { about } = await getLandingPageConfig();
  return (
    <div>
      <div className={styles.introcard}>
        <div className=" flex flex-col items-center gap-5">
          <Carousel {...about.carousel} />
          <Link href={about.iitihome} target="_blank">
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
          {about.intro}
        </div>
      </div>

    <Recruit whyRecruit={about.whyRecruit} rankings={about.rankings} />
     

      
    </div>
  );
}
