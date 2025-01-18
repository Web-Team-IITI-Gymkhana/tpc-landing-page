"use client";

import { useState, useEffect } from "react";
import styles from "./carouselsm.module.css";
import React, { Component, MouseEvent } from "react";
import { Image } from "@nextui-org/react";

export default function CarouselSm(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === props.images.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [props.images.length]);

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.gallery}>
          <div className={styles.shadow}>
            <Image
              isZoomed
              src={props.images[currentIndex]}
              alt="tpc images"
              className={styles.displaypic}
            />
          </div>
          <div className={styles.dots}>
            {props.images.map((image: string, index: number) => {
              if (index === currentIndex) {
                return (
                  <button onClick={() => setCurrentIndex(index)} key={index}>
                    <div className={styles.activedot} key={index}>
                      .
                    </div>
                  </button>
                );
              } else {
                return (
                  <button onClick={() => setCurrentIndex(index)} key={index}>
                    <div className={styles.inactivedot} key={index}>
                      .
                    </div>
                  </button>
                );
              }
            })}
          </div>
        </div>

        {/* <div className={styles.sidebar}>
              {props.images.map((image: string, index: number) => (
                <button key={index} onClick={() => setCurrentIndex(index)} style={{ display: index === currentIndex ? "none" : "block" } }>
                <img key={index} alt="gallery" src={image}  />
                </button>
              ))

              }
            </div> */}
      </div>
    </>
  );
}
