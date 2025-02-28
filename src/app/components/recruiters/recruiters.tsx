// "use client";
// import Image from "next/image";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Home,
//   User,
//   Bus,
//   Car,
//   AlertTriangle,
//   Coffee,
//   Landmark,
//   Camera,
//   Church,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useRef, useEffect, useState } from "react";

// export default function Recruiters(props: any) {
// const nearbyAttractions = Array.from({ length: 31 }, (_, i) => ({
//   path: require(`../../../../public/data/recruiters/prorec/l${i + 1}.png`),
// }));

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [itemsPerSlide, setItemsPerSlide] = useState(1);

//   useEffect(() => {
//     const updateItemsPerSlide = () => {
//       if (window.innerWidth >= 1024) {
//         setItemsPerSlide(5); // lg screen: 3 items per slide
//       } else if (window.innerWidth >= 768) {
//         setItemsPerSlide(2); // md screen: 2 items per slide
//       } else {
//         setItemsPerSlide(1); // sm screen: 1 item per slide
//       }
//     };

//     // Set initial itemsPerSlide
//     updateItemsPerSlide();

//     // Add a resize event listener
//     window.addEventListener("resize", updateItemsPerSlide);

//     // Cleanup listener on component unmount
//     return () => window.removeEventListener("resize", updateItemsPerSlide);
//   }, []);

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       // Move to the next slide, considering the number of items per slide
//       setCurrentSlide(
//         (prevSlide) =>
//           (prevSlide + 1) % Math.ceil(nearbyAttractions.length / itemsPerSlide)
//       );
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [itemsPerSlide, nearbyAttractions.length]);

//   const nextSlide = () => {
//     setCurrentSlide(
//       (prevSlide) => (prevSlide + 0.5) % nearbyAttractions.length
//     );
//     setCurrentSlide(
//       (prevSlide) => (prevSlide + 0.5) % nearbyAttractions.length
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prevSlide) =>
//         (prevSlide - 0.5 + nearbyAttractions.length) % nearbyAttractions.length
//     );
//     setCurrentSlide(
//       (prevSlide) =>
//         (prevSlide - 0.5 + nearbyAttractions.length) % nearbyAttractions.length
//     );
//   };

//   return (
//     <section className="mb-16">
//       <h2 className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]">
//         Our Recruiters
//       </h2>

//       <div className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${
//                 currentSlide * (100 / itemsPerSlide)
//               }%)`,
//             }}
//           >
//             {nearbyAttractions.map((attraction, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0 px-4 md:px-6 lg:px-8"
//                 style={{ width: `${100 / itemsPerSlide}%` }} // Dynamic width based on screen size
//               >
//                 <div className="mb-4 flex justify-center items-center object-contain">
//                   <Image
//                     placeholder="blur"
//                     src={attraction.path}
//                     alt={"image"}
//                     className="w-[65%] h-48  object-contain rounded-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Prev/Next buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6 text-[#3498DB]" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6 text-[#3498DB]" />
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Recruiters() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]">
        Our Recruiters
      </h2>
      <div className="h-[15rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={recruiters1}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
const recruiters1 = Array.from({ length: 31 }, (_, i) => ({
  path: require(`../../../../public/data/recruiters/prorec/l${i + 1}.png`),
}));
const recruiters2 = Array.from({ length: 31 }, (_, i) => ({
  path: require(`../../../../public/data/recruiters/prorec/l${31 - i}.png`),
}));

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
