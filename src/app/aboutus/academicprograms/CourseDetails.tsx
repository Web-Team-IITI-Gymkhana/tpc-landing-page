'use client'

import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';
import type { LandingPageConfig } from "@/lib/landing-page-config";

export default function CourseDetails({ courseData, tabNames, website }: LandingPageConfig["academicPrograms"]) {
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
      <Link href={website} target="_blank">
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