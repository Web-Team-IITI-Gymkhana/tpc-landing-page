"use client";

import { useState, useEffect } from "react";
import styles from "./carousel.module.css";
import React, { Component, MouseEvent } from "react";
import Image from "next/image";

export default function Carousel(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === props.images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [props.images.length]);

  return (
    <div className=" z-20 h-[min(80vh,700px)] mb-10">
      <Image
        height={500}
        width={500}
        blurDataURL={props.images[currentIndex]}
        src={props.images[currentIndex]}
        alt="tpc images"
        style={{ right: `${-scrollY * 0.5 - 5}px`, top: "40px" }} // Dynamically update the right position
        className={`  object-cover 2xl:w-[700px] xl:w-[650px] ld:w-[600px] md:w-[400px] sm:w-[350px] w-[300px] rounded-l-[100px] aspect-square absolute -mt-6   border-[5px] border-white  `}
      />
    </div>
  );
}
