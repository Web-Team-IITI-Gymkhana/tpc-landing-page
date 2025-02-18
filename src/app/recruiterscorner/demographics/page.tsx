"use client";
import React, { useState, useEffect } from "react";
import PieChart from "./chart";
import { ChartData } from "chart.js";
import departmentData from "./data.json";
import styles from "./page.module.css";

const createChartData = (labels: string[], data: number[]) => {
  return {
    labels,
    datasets: [
      {
        label: "Number of Students",
        data,
        backgroundColor: [
          "rgba(102, 102, 255, 1)",
          "rgba(0, 204, 204,1)",
          "rgba(51, 255, 255, 1)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: Array(6).fill("rgba(255, 255, 255, 1)"),
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

const Demographics = () => {
  const [visible, setVisible] = useState("CSE");
  const [isColumn, setIsColumn] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsColumn(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4">
      <div className="header1">Demographics</div>

      {isColumn && (
        <div className="flex bg-sky-600 text-white w-full">
          {departmentData.departmentData.map((dept, index) => (
            <div
              key={index}
              onClick={() => setVisible(dept.short)}
              className={`flex-1 text-center py-2 cursor-pointer transition-all duration-300 text-sm sm:text-base ${
                visible === dept.short ? "bg-sky-700" : "bg-sky-500"
              }`}
            >
              {dept.short}
            </div>
          ))}
        </div>
      )}

      <div className={`flex ${isColumn ? "flex-col" : "flex-row justify-around"}`}>
        {!isColumn && (
          <div className="flex flex-col justify-around">
            {departmentData.departmentData.map((dept, index) => (
              <div
                key={index}
                onClick={() => setVisible(dept.short)}
                className="flex items-center justify-center shadow-sm px-6 py-4 rounded-3xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: dept.short === visible ? "#0284c7" : "white",
                  color: dept.short === visible ? "white" : "#0284c7",
                }}
              >
                {dept.departmentName}
              </div>
            ))}
          </div>
        )}

        {departmentData.departmentData.map((dept, index) => (
          <div
            key={index}
            style={{ display: dept.short === visible ? "flex" : "none" }}
            className="flex flex-col w-full md:w-[450px] h-[750px] items-center justify-center"
          >
            <h2 className="questitle">{dept.departmentName}</h2>
            <div className="scale-85 w-[450px] h-[500px]">
              <PieChart data={createChartData(dept.pieLabels.labels, dept.pieLabels.data)} />
            </div>
            <div className="p-3 text-center">
              {dept.labels.map((label, idx) => (
                <div key={idx}>
                  <span>{label}</span>: {dept.data[idx]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demographics;