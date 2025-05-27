"use client";
import Carousel from "../components/home/carousel/carousel";
import PortalForm from "../components/home/portalform/portalform";
import Recruiters from "../components/home/recruiters/recruiters";
import Messages from "../components/home/messages/messages";

import CarouselData from "../components/home/carousel/carousel.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" absolute top-0 h-[100vh]">
        <div
          style={{ bottom: `calc(${scrollY * 0.3}px + 40vh)`, left: "-500px" }} // Dynamically update the right position
          className=" w-[4000px] h-[4000px] bg-sky-700 rounded-[500px] absolute left-[-500px] bottom-[40vh] rotate-[-10deg]"
        ></div>
      </div>
      <div className="">
  <div className="flex sm:justify-start sm:items-center sm:flex-col md:flex-row h-[90vh] w-full lg:px-5   gap-12 sm:gap-[5rem]">
    <PortalForm />
    <Carousel {...CarouselData} />
  </div>
</div>

      <Messages />
      <Recruiters />
    </>
  );
}
