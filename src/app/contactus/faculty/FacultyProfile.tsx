import React from "react";
import styles from "./FacultyProfile.module.css";
import facultyInfo from "./facultyInfo.json";
import Image from "next/image";

const FacultyProfile: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      {facultyInfo.faculties.map((faculty, index) => (
        <div key={index} className={styles.card}>
          {/* Front Side */}
          <div className={`${styles.cardside} ${styles.front} pt-14 overflow-clip relative flex items-center gap-7 flex-col`}>
            <div className="absolute w-[600px] h-[150px] top-0 -rotate-[18deg] translate-y-[-50%] bg-sky-700"></div>
            <div className="absolute w-[600px] h-[155px] top-0 -rotate-[18deg] bg-sky-600"></div>
            <div className="absolute w-[600px] h-[50px] top-0 -rotate-[18deg] translate-y-[335%] bg-sky-700"></div>

            <div className="rounded-md w-[180px] h-[200px] relative z-10">
              <div className='content-[""] w-full h-full absolute -z-10 rounded-md bg-[#f2f1f1] rotate-2 flex'></div>
              <Image
                src={faculty.img}
                blurDataURL={faculty.img}
                alt={faculty.name}
                className="w-full h-full scale-[90%] rounded-md object-cover"
                width={180}
                height={200}
              />
            </div>

            <div>
              <h1 className="text-lg font-bold">{faculty.name}</h1>
              <p className="text-sm opacity-60">{faculty.designation}</p>
            </div>

            <Image
              src="/data/logo/iitiold.png"
              blurDataURL="/data/logo/iiti.png"
              alt="IIT Indore Logo"
              className="w-[50px] h-[55px] relative z-10 rounded-md object-cover"
              width={50}
              height={55}
            />


            <div className="rounded-b-xl uppercase text-white h-[30px] sm:h-[40px] bg-sky-700 text-[0.8rem] sm:text-[0.9rem] font-black tracking-widest flex items-center justify-center absolute bottom-0 w-full">
              {faculty.department}
            </div>
          </div>

          {/* Back Side */}
          <div className={`${styles.cardside} ${styles.back} overflow-clip relative flex items-center pl-8 pt-4 flex-col`}>
            <div className="absolute w-[800px] h-[150px] bottom-0 rotate-[18deg] translate-y-[85%] bg-sky-700"></div>
            <div className="absolute w-[800px] h-[200px] top-0 translate-y-[-70%] -rotate-[35deg] bg-sky-700"></div>

            <div className="mb-2 text-white z-10 w-full flex justify-start font-bold text-[2.2rem]">
              <span className="w-[100px]">Contact Info</span>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex gap-8 w-[90%] flex-col items-center relative z-10">
                <div className="flex flex-col">
                  <span className="text-[1.2rem]">{faculty.department}</span>
                  <span className="font-light uppercase text-[0.8rem] opacity-60">Department</span>
                </div>
                {/* <div className="flex flex-col">
                  <span className="text-[1.2rem]">{faculty.office}</span>
                  <span className="font-light uppercase text-[0.8rem] opacity-60">Office</span>
                </div> */}
                <div className="flex flex-col">
                  <span className="text-[1.2rem]">{faculty.email}</span>
                  <span className="font-light uppercase text-[0.8rem] opacity-60">Email</span>
                </div>
                <div className="flex flex-col">

                  <span className="text-[1.2rem]">{faculty.phone}</span>
                  <span className="font-light uppercase text-[0.8rem] opacity-60">Phone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyProfile;
