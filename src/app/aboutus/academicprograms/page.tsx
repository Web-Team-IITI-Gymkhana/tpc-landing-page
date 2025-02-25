'use client'

import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';
const courseData = {
  placement: [
    { sno: 1, program: "Computer Science and Engineering", degree: "BTech" },
    { sno: 2, program: "Electrical Engineering", degree: "BTech" },
    { sno: 3, program: "Mechanical Engineering", degree: "BTech" },
    { sno: 4, program: "Civil Engineering", degree: "BTech" },
    { sno: 5, program: "Metallurgical Engineering and Materials Science", degree: "BTech" },
    { sno: 6, program: "Chemical Engineering", degree: "BTech" },
    { sno: 7, program: "Mathematics and Computing", degree: "BTech" },
    { sno: 8, program: "Engineering Physics", degree: "BTech" },
    { sno: 9, program: "Space Sciences and Engineering (SSE)", degree: "BTech" },
    { sno: 10, program: "Electrical Engineering with specialization in VLSI Design and Nanoelectronics", degree: "MTech" },
    { sno: 11, program: "Electrical Engineering with specialization in VLSI Design and Nanoelectronics", degree: "MTech" },
    { sno: 12, program: "Mechanical Engineering with specialization in Advanced Manufacturing (AM) (Formally Production and Industrial Engineering)", degree: "MTech"},
    { sno: 13, program: "Mechanical Engineering with specialization in Thermal Energy Systems (TES)", degree: "MTech" },
    { sno: 14, program: "Mechanical Engineering with specialization in Mechanical Systems Design", degree: "MTech" },
    { sno: 15, program: "Metallurgy Engineering and Materials Science with specialization in Materials Science and Engineering", degree: "MTech" },
    { sno: 16, program: "Metallurgy Engineering and Materials Science with specialization in Metallurgical Engineering", degree: "MTech" },
    { sno: 17, program: "M.Tech. in Electric Vehicle Technology from Center for Electric Vehicles Intelligent Transport Systems (CEVITS)", degree: "MTech" },
    { sno: 18, program: "M.Tech. in Space Engineering from Department of Astronomy, Astrophysics And Space Engineering (DAASE)", degree: "MTech" },
    { sno: 19, program: "Computer Science and Engineering with specialization in Computer Science and Engineering", degree: "MTech" },
    { sno: 20, program: "Civil Engineering with specialization in Water, Climate and Sustainability", degree: "MTech" },
    { sno: 21, program: "Biosciences and Biomedical Engineering with specialization in Biomedical Engineering", degree: "MTech" },
    { sno: 22, program: "Mechanical Engineering with specialization in Applied Optics and laser Technology", degree: "MTech" },
    { sno: 23, program: "Civil Engineering with specialization in Structural Engineering", degree: "MTech" },
    { sno: 24, program: "Center of Futuristic Defence and Space Technology with specialization in Defence Technology", degree: "MTech" },
    { sno: 25, program: "Chemistry", degree: "MSC" },
    { sno: 26, program: "Physics", degree: "MSC" },
    { sno: 27, program: "Mathematics", degree: "MSC" },
    { sno: 28, program: "Biotechnology", degree: "MSC" },
    { sno: 29, program: "Astronomy", degree: "MSC" },
    { sno: 30, program: "B. Tech in Electrical Engineering with MTech in Communication and Signal Processing", degree: "DUAL" },
    { sno: 31, program: "B. Tech in Electrical Engineering with MTech in VLSI Design and Nanoelectronics", degree: "DUAL" },
    { sno: 32, program: "B. Tech in Mechanical Engineering with MTech in Production and Industrial Engineering", degree: "DUAL" },
    { sno: 33, program: "B. Tech in Mechanical Engineering with MTech in Mechanical Systems Design", degree: "DUAL" },
    { sno: 34, program: "MS (Research) in Computer Science and Engineering", degree: "msResearch" },
    { sno: 35, program: "MS (Research) in Electrical Engineering", degree: "msResearch" },
    { sno: 36, program: "MS (Research) in Mechanical Engineering", degree: "msResearch" },
    { sno: 37, program: "M.S. (Research) in Space Science and Engineering from Department of Astronomy, Astrophysics And Space Engineering(DAASE)", degree: "msResearch" },
    { sno: 38, program: "M.S. (Research) in Humanities and Social Science from School of Humanities and Social Science (HSS)", degree: "msResearch" },
    { sno: 39, program: "Master of Science in Data Science and Management (MS-DSM)", degree: "msResearch" },

  ],
  intern: [
    { sno: 1, program: "Computer Science and Engineering", degree: "BTech" },
    { sno: 2, program: "Electrical Engineering", degree: "BTech" },
    { sno: 3, program: "Mechanical Engineering", degree: "BTech" },
    { sno: 4, program: "Civil Engineering", degree: "BTech" },
    { sno: 5, program: "Metallurgical Engineering and Materials Science", degree: "BTech" },
    { sno: 6, program: "Chemical Engineering", degree: "BTech" },
    { sno: 7, program: "Mathematics and Computing", degree: "BTech" },
    { sno: 8, program: "Engineering Physics", degree: "BTech" },
    { sno: 9, program: "Space Sciences and Engineering (SSE)", degree: "BTech" },
  ],
  

}

const tabNames = {
  placement: 'Placement Drive',
  intern: 'Internship Drive',
}

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState<keyof typeof courseData>("placement")

  interface Course {
    sno: number;
    program: string;
    degree: string;
  }

  const renderTable = (data: Course[]) => (
    <div className="overflow-x-auto bg-white rounded-b-lg shadow-md">
      <table className="min-w-full">
        <thead>
          <tr className="bg-sky-700 text-white">
            <th className="py-3 px-4 text-left rounded-tl-lg">S.NO</th>
            <th className="py-3 px-4 text-left">PROGRAM</th>
            <th className="py-3 px-4 text-left rounded-tr-lg">DEGREE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{item.sno}</td>
              <td className="py-2 px-4 border-b">{item.program}</td>
              <td className="py-2 px-4 border-b">{item.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="container mx-auto py-10 px-4">
      <div className=' flex flex-wrap justify-between mb-5'>
      <h1 className="header2">Course Details</h1>
      <Link href={"https://academic.iiti.ac.in/"} target="_blank">
            <Button
              color="primary"
              variant="flat"
              radius="full"
              className="bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow-lg text-[1.5rem] h-[4rem] uppercase font-bold"
            >
              VIEW MORE <LaunchIcon/>
            </Button>
          </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-wrap">
          {Object.entries(tabNames).map(([key, name]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key as keyof typeof courseData)}
              className={`cursor-pointer transition-all duration-300 px-6 py-4 text-center flex-grow ${
                activeTab === key
                  ? 'bg-sky-700 text-white font-semibold'
                  : 'bg-gray-100 text-sky-700 hover:bg-gray-200'
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="p-4">
          {renderTable(courseData[activeTab])}
        </div>
      </div>
    </div>
  )
}