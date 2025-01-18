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
    <div className="  z-20 h-[80vh] mb-10">
      <Image
        height={500}
        width={500}
        blurDataURL={props.images[currentIndex]}
        src={props.images[currentIndex]}
        alt="tpc images"
        style={{ right: `${-scrollY * 0.5 - 5}px`, top: "40px" }} // Dynamically update the right position
        className={`  object-cover w-[80vh] rounded-l-[100px] aspect-square absolute  border-[5px] border-white  `}
      />

      {/* <div className={styles.dots}>
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
          </div> */}
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import styles from "./carousel.module.css"
// import React, { Component, MouseEvent } from 'react';
// import {Image} from "@nextui-org/react";

// export default function Carousel(props: any) {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {

//       setCurrentIndex(currentIndex => (currentIndex === props.images.length - 1 ? 0 : currentIndex + 1));

//     }, 5000)

//     return () => clearInterval(intervalId);
//   }, [props.images.length])

//   return (
//     <>

//           <div className={styles.carousel}>

//           <div className={styles.gallery}>

//           <div className={styles.imagewrap}>
//           <Image isZoomed src={props.images[currentIndex]} className={styles.displaypic} radius="sm" alt="tpc images" />
//           </div>
//             <div className={styles.dots}>

//               {props.images.map((image: string, index: number) => {

//                 if (index === currentIndex) {
//                   return (
//                     <button onClick={() => setCurrentIndex(index)} key={index}>
//                   <div className={styles.activedot} key={index}>.</div>
//                   </button>
//               )}
//                 else {
//                   return(
//                   <button onClick={() => setCurrentIndex(index)} key={index} >
//                  <div className={styles.inactivedot} key={index}>.</div>
//                   </button>
//                   )
//                 }})}

//             </div>

//           </div>

//           <div className={styles.sidebar}>
//               {props.images.map((image: string, index: number) => (
//                 <button key={index} onClick={() => setCurrentIndex(index)} style={{ display: index === currentIndex ? "none" : "block" } }>
//                 <Image removeWrapper isZoomed key={index} radius="sm" alt="gallery" src={image}  className={styles.thumbnails} />
//                 </button>
//               ))

//               }
//             </div>

//             </div>

//     </>

//   );
// }
