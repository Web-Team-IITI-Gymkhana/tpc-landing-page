"use client";
import React, { useState } from "react";
import PieChart from "./chart";
import { ChartData } from "chart.js";
import styles from "./page.module.css";
import departmentData from "./data.json";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const createChartData = (
  labels: string[],
  data: number[],
): ChartData<"pie"> => {
  return {
    labels,
    datasets: [
      {
        label: "Number of Students",
        data,
        backgroundColor: [
          "rgba(102, 102, 255, 1)", // Soft Yellow
          "rgba(0, 204, 204,1)", // Soft Red
          "rgba(51, 255, 255, 1)", // Soft Blue
          "rgba(75, 192, 192, 0.6)", // Soft Green
          "rgba(153, 102, 255, 0.6)", // Soft Purple
          "rgba(255, 159, 64, 0.6)", // Soft Orange
        ],

        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverBorderWidth: 4,
        hoverBorderColor: [
          "rgba(102, 102, 255, 1)",
          "rgba(0, 204, 204, 1)",
          "rgba(51, 255, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };
};

const Demographics: React.FC = () => {
  const [visible, setVisible] = useState("CSE");

  return (
    <div className="">
      <div className="header1">Demographics</div>
      <div className=" flex  flex-row  justify-around ">
        <div className=" flex flex-col  min-h-[100%]  justify-around ">
          {departmentData.departmentData.map((dept, index) => (
            <div
              key={index}
              onClick={() => setVisible(dept.short)}
              style={{
                backgroundColor: dept.short == visible ? "#0284c7" : "white",
                color: dept.short == visible ? "white" : "#0284c7",
              }}
              className=" flex items-center transition-all duration-300 justify-center  shadow-sm px-6 py-4 rounded-3xl text-white"
            >
              {dept.departmentName}
            </div>
          ))}
        </div>
        {departmentData.departmentData.map((dept, index) => (
          <div
            key={index}
            style={{ display: dept.short == visible ? "flex" : "none" }}
            className="  flex-col w-[450px] h-[750px] items-center justify-center "
          >
            <div className=" flex justify-between items-center">
              <h2 className=" questitle">{dept.departmentName}</h2>
              <div className=" flex ">
                {/* <Link href="/aboutus/achievements">
                  <Button
                    isIconOnly
                    className={` flex justify-center m-[5px] bg-transparent h-[3rem] w-[2rem] `}
                  >
                    <Image
                      src="/data/buttonspngs/medal.png"
                      width={30}
                      height={30}
                      alt="achievements"
                    />
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className=" scale-85  w-[450px] h-[500px]">
              <PieChart
                data={createChartData(
                  dept.pieLabels.labels,
                  dept.pieLabels.data,
                )}
              />
            </div>
            <div className=" p-3  text-center">
              {dept.labels.map((label, idx) => (
                <div key={idx}>
                  <span>{label}</span>: {dept.data[idx]}
                </div>
              ))}
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Demographics;
