"use client";

import styles from "./program.module.css";
import datacse from "./data/datacse.json";
import dataelec from "./data/dataelec.json";
import datamech from "./data/datamech.json";
import datacivil from "./data/datacivil.json";
import datametal from "./data/datametal.json";
import {
  Button,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Image from "next/image";

export default function AcademicPrograms() {
  let tabs = [
    {
      id: "btech",
      label: "B.Tech",
      content:
        "B.Tech projects involve practical applications in various fields such as machine learning, computer vision, blockchain, natural language processing etc.",
    },
    {
      id: "mtech",
      label: "M.Tech",
      content:
        "M.Tech projects deal with quantum networking, DNN optimizers, Multimodal Sentiment Analysis, anomaly detection using GAN and network optimisation.",
    },
    {
      id: "ms",
      label: "MS(R)",
      content:
        "MS(R) students conduct pioneering research involving AI/ML, computer vision, natural language processing, pattern recognition, reinforcement learning, cryptography, network security, cloud computing and Blockchain technologies.",
    },
  ];
  let tabs2 = [
    {
      id: "msd",
      label: "MSD",
      content:
        "Theory of Elasticity, Finite Element Methods, Fracture Mechanics, Dynamics and Control Systems, Vibration and Noise Control.",
    },
    {
      id: "tes",
      label: "TES",
      content:
        "Non-conventional Energy Resources, Thermal Energy Storage, IC Engine Technology, Solar Energy Technology, Alternative Cooling Technologies.",
    },
    {
      id: "am",
      label: "AM",
      content:
        "Mechatronics and Metrology, Micro Precision Manufacturing, Technology of Surface Coatings, Smart Manufacturing, Additive Manufacturing, Theory of Advanced Manufacturing Processes.",
    },
    {
      id: "aolt",
      label: "AOLT",
      content:
        "Laser Material Processing, Laser Micro Machining and Measurement Techniques, Laser Physics, Biophotonics, Advanced Optics, Multiphysics Modelling",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-[20px] items-center ">
        <div className=" flex justify-between w-[100%] ">
          <div className="header2">Academic Programs</div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-gray-700 text-left font-semibold">
                  B. Tech
                </th>
                <th className="px-4 py-2 border border-gray-300 text-gray-700 text-left font-semibold">
                  M. Tech
                </th>
                <th className="px-4 py-2 border border-gray-300 text-gray-700 text-left font-semibold">
                  MSc
                </th>
                <th className="px-4 py-2 border border-gray-300 text-gray-700 text-left font-semibold">
                  M.S (Research)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={2}>
                  Civil Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Water, Climate and Sustainability
                </td>
                <td className="px-4 py-2 border border-gray-300">Chemistry</td>
                <td className="px-4 py-2 border border-gray-300">
                  Computer Science & Engineering
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Structural Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">Physics</td>
                <td className="px-4 py-2 border border-gray-300">
                  Electrical Engineering
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={4}>
                  Mechanical Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Advanced Manufacturing
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Mathematics
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Mechanical Engineering
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Mechanical System Design
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Biotechnology
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Space Science and Engineering
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Applied Optics and Laser Technology
                </td>
                <td className="px-4 py-2 border border-gray-300">Astronomy</td>
                <td className="px-4 py-2 border border-gray-300">
                  Data Science and Management
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Thermal Energy Systems
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300">
                  Humanities and Social Science
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={2}>
                  Metallurgical Engineering & Materials Science
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Metallurgical Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Materials Science and Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={3}>
                  Electrical Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Communication and Signal Processing
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  VLSI Design and Nanoelectronics
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Electrical Vehicles Intelligent Transport System
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan={3}>
                  Computer Science & Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Computer Science & Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>

              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Space Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Biomedical Engineering
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
