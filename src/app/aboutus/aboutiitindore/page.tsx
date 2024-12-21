"use client";
import Carousel from "./components/carousel/carousel";
import CarouselData from "./components/carousel/carousel.json";

import styles from "./aboutiiti.module.css";
import data from "./data.json";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";

import { CardFooter, Image } from "@nextui-org/react";
import { color } from "framer-motion";

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
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold"
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

      {/* <div className={styles.questitle}>Academics</div> */}

      <div className={styles.content}>
        {/* <div className="para">
        {data.academicsstarter}
      </div> */}

        {/* <div className={` flex flex-row justify-between items-start w-[100%] ${styles.academicquery} `}>
      <div className="flex  flex-col my-[2rem] justify-center max-[945px]:my-0 ">
      <Tabs aria-label="Dynamic tabs" items={tabs} radius="md" color="secondary" className={styles.tabname}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody className=" text-justify para ">
                <div className={ `w-[48vw] ${styles.tabcontent}`} >
                {item.content}
                </div>
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
        <div className="flex w-[40%] flex-col my-[2rem] justify-center items-center">
        <div className={`w-full max-w-[400px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${styles.wrapper}`}>

      <Listbox
        aria-label="Example with disabled actions" 
        disabledKeys={["Quick Links"]}
        className={styles.quick}
      >
        <ListboxItem key="Quick Links">Quick Links</ListboxItem>
        <ListboxItem key="iitiacad" className="text-danger" variant="flat" color="primary" href="https://academic.iiti.ac.in/" target="_blank">IITI Academics Home</ListboxItem>
        <ListboxItem key="acad" className="text-danger" variant="flat" color="primary" href="/aboutus/academicprograms">Academic Programs</ListboxItem>
      </Listbox>
      </div>
      </div>
      </div> */}

        {/* <div className="para">
        {data.academicsend}
      </div> */}

        <div className={styles.questitle}>Research And Innovation</div>

        <div className="para">{data.reasearchstarting}</div>

        <div className={styles.cardgrid}>
          {data.research.map((item, index) => {
            return (
              <Card
                key={index}
                isFooterBlurred
                className="h-[15rem] w-[20rem] transition-all duration-300 ease-in-out "
              >
                <Image
                  isZoomed
                  alt="Woman listing to music"
                  className="w-[20rem] h-[15rem] object-cover rounded-lg"
                  src={item.link}
                />
                <CardFooter className="absolute bg-white/30 text-[0.73rem] bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center text-center h-[2.5rem] hover:h-[15rem] hover:text-[2rem] hover:font-bold transition-all duration-300 ease-in-out">
                  <div>
                    <p className=" text-white ">{item.title}</p>
                  </div>
                  {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button> */}
                </CardFooter>
              </Card>

              //   <Card
              //   isFooterBlurred
              //   radius="lg"
              //   className="border-none h-[10rem] w-[15rem]"

              // >
              //   <Image
              //     alt="Woman listing to music"
              //     className="w-[15rem] h-[10rem] object-cover rounded-lg"
              //     src={item.link}
              //   />
              //   <CardFooter className="justify-center  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              //     <p className="text-tiny text-white/80">{item.title}</p>
              //     {/* <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              //       Notify me
              //     </Button> */}
              //   </CardFooter>
              // </Card>
            );
          })}
        </div>

        <div className="para"> {data.reaseachend}</div>

        {/* <div className={styles.questitle}>Infrastructure</div>


      <div className="para">{data.infrastructure}</div>


          {data.infrabody.map((item,index) => {
            return(

              <div key={index} className={` flex gap-[50px] ${ index%2 === 0  ? "flex-row" : "flex-row-reverse"  } ${ index === 0  ? "mt-[30px]" : "" } max-[770px]:flex-col max-[770px]:gap-[0px]  items-center w-[100%]   `  }  >
                
                <Carouselsm { ...item} />

                <div className=" h-[25vh] flex flex-col items-start justify-center max-[770px]:justify-start w-[100%]">
                  <div className="header3 text-[2rem]">{item.title}</div>
                  <div className="para">{item.description}</div>
                </div>

              </div>
              
            );

          })} */}

        <div className={styles.questitle}>Faculty</div>
        <div className=" flex max-[770px]:flex-col">
          <div className="para w-[80%] max-[770px]:w-[100%]">
            {data.faculty}
          </div>
          <div className=" w-[20%] h-[10rem] flex items-center justify-center max-[770px]:w-[100%]">
            <Link href="/contactus/faculty">
              <Button
                color="primary"
                variant="flat"
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold "
              >
                Faculties
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.questitle}>Student Life</div>
        <div className=" flex max-[770px]:flex-col">
          <div className="para w-[80%] max-[770px]:w-[100%]">
            {data.student}
          </div>
          <div className=" w-[20%] h-[10rem] flex items-center justify-center max-[770px]:w-[100%]">
            <Link href="/aboutus/studentactivities">
              <Button
                color="primary"
                variant="flat"
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold "
              >
                Activities
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.questitle}>
          Industry Collaboration and Placements
        </div>

        <div className=" flex max-[770px]:flex-col">
          <div className="para w-[80%] max-[770px]:w-[100%]">
            {data.industry}
          </div>
          <div className=" w-[20%] h-[10rem] flex items-center justify-center max-[770px]:w-[100%]">
            <Link href="/">
              <Button
                color="primary"
                variant="flat"
                radius="full"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[5rem] uppercase font-bold "
              >
                Recruiters
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
