// components/chart.tsx
"use client";
import React, { useRef, useEffect } from "react";
import {
  Chart,
  ArcElement,
  ChartData,
  ChartOptions,
  Tooltip,
  Legend,
  Title,
  PieController,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title, PieController);

interface PieChartProps {
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"pie"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "pie",
        data: data,
        options: {
          maintainAspectRatio: true, // Disable the aspect ratio
          responsive: true, // Enable responsiveness
          ...options,
        },
      });
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default PieChart;
