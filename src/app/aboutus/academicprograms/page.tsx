'use client'

import React, { useState } from 'react'

const courseData = {
  btech: [
    { sno: 1, program: "Computer Science and Engineering", yearStarting: "2009-10" },
    { sno: 2, program: "Electrical Engineering", yearStarting: "2009-10" },
    { sno: 3, program: "Mechanical Engineering", yearStarting: "2009-10" },
    { sno: 4, program: "Civil Engineering", yearStarting: "2016-17" },
    { sno: 5, program: "Metallurgical Engineering and Materials Science", yearStarting: "2016-17" },
    { sno: 6, program: "Chemical Engineering", yearStarting: "2023-24" },
    { sno: 7, program: "Mathematics and Computing", yearStarting: "2023-24" },
    { sno: 8, program: "Engineering Physics", yearStarting: "2023-24" },
    { sno: 9, program: "Space Sciences and Engineering (SSE)", yearStarting: "2023-24" },
  ],
  mtech: [
    { sno: 1, program: "Electrical Engineering with specialization in VLSI Design and Nanoelectronics", yearStarting: "2013-14" },
    { sno: 2, program: "Electrical Engineering with specialization in VLSI Design and Nanoelectronics", yearStarting: "2017-18" },
    { sno: 3, program: "Mechanical Engineering with specialization in Advanced Manufacturing (AM) (Formally Production and Industrial Engineering)", yearStarting: "2013-14" },
    { sno: 4, program: "Mechanical Engineering with specialization in Thermal Energy Systems (TES)", yearStarting: "2022-23" },
    { sno: 5, program: "Mechanical Engineering with specialization in Mechanical Systems Design", yearStarting: "2018-19" },
    { sno: 6, program: "Metallurgy Engineering and Materials Science with specialization in Materials Science and Engineering", yearStarting: "2015-16" },
    { sno: 7, program: "Metallurgy Engineering and Materials Science with specialization in Metallurgical Engineering", yearStarting: "2018-19" },
    { sno: 8, program: "M.Tech. in Electric Vehicle Technology from Center for Electric Vehicles Intelligent Transport Systems (CEVITS)", yearStarting: "2021-22" },
    { sno: 9, program: "M.Tech. in Space Engineering from Department of Astronomy, Astrophysics And Space Engineering (DAASE)", yearStarting: "2021-22" },
    { sno: 10, program: "Computer Science and Engineering with specialization in Computer Science and Engineering", yearStarting: "2023-24" },
    { sno: 11, program: "Civil Engineering with specialization in Water, Climate and Sustainability", yearStarting: "2023-24" },
    { sno: 12, program: "Biosciences and Biomedical Engineering with specialization in Biomedical Engineering", yearStarting: "2023-24" },
    { sno: 13, program: "Mechanical Engineering with specialization in Applied Optics and laser Technology", yearStarting: "2023-24" },
    { sno: 14, program: "Civil Engineering with specialization in Structural Engineering", yearStarting: "2023-24" },
    { sno: 15, program: "Center of Futuristic Defence and Space Technology with specialization in Defence Technology", yearStarting: "2023-24" },
  ],
  msc: [
    { sno: 1, program: "Chemistry", yearStarting: "2013-14" },
    { sno: 2, program: "Physics", yearStarting: "2013-14" },
    { sno: 3, program: "Mathematics", yearStarting: "2015-16" },
    { sno: 4, program: "Biotechnology", yearStarting: "2017-18" },
    { sno: 5, program: "Astronomy", yearStarting: "2018-19" },
  ],
  dualDegree: [
    { sno: 1, program: "B. Tech in Electrical Engineering with MTech in Communication and Signal Processing", yearStarting: "2014-15" },
    { sno: 2, program: "B. Tech in Electrical Engineering with MTech in VLSI Design and Nanoelectronics", yearStarting: "2017-18" },
    { sno: 3, program: "B. Tech in Mechanical Engineering with MTech in Production and Industrial Engineering", yearStarting: "2014-15" },
    { sno: 4, program: "B. Tech in Mechanical Engineering with MTech in Mechanical Systems Design", yearStarting: "2018-19" },
  ],
  msResearch: [
    { sno: 1, program: "MS (Research) in Computer Science and Engineering", yearStarting: "2018-19" },
    { sno: 2, program: "MS (Research) in Electrical Engineering", yearStarting: "2019-20" },
    { sno: 3, program: "MS (Research) in Mechanical Engineering", yearStarting: "2019-20" },
    { sno: 4, program: "M.S. (Research) in Space Science and Engineering from Department of Astronomy, Astrophysics And Space Engineering(DAASE)", yearStarting: "2021-22" },
    { sno: 5, program: "M.S. (Research) in Humanities and Social Science from School of Humanities and Social Science (HSS)", yearStarting: "2021-22" },
    { sno: 6, program: "Master of Science in Data Science and Management (MS-DSM)", yearStarting: "2021-22" },
  ],
}

const tabNames = {
  btech: 'B.Tech',
  mtech: 'M.Tech',
  msc: 'MSc',
  dualDegree: 'Dual Degree',
  msResearch: 'MS (Research)',
}

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState<keyof typeof courseData>("btech")

  interface Course {
    sno: number;
    program: string;
    yearStarting: string;
  }

  const renderTable = (data: Course[]) => (
    <div className="overflow-x-auto bg-white rounded-b-lg shadow-md">
      <table className="min-w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 text-left rounded-tl-lg">S.NO</th>
            <th className="py-3 px-4 text-left">PROGRAM</th>
            <th className="py-3 px-4 text-left rounded-tr-lg">YEAR STARTING</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{item.sno}</td>
              <td className="py-2 px-4 border-b">{item.program}</td>
              <td className="py-2 px-4 border-b">{item.yearStarting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">Course Details</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-wrap">
          {Object.entries(tabNames).map(([key, name]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key as keyof typeof courseData)}
              className={`cursor-pointer transition-all duration-300 px-6 py-4 text-center flex-grow ${
                activeTab === key
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
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