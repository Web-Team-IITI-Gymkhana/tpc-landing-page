"use client";
import data from "./data.json";

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
import styles from "./about.module.css";

export default function AboutTPC() {
  return (
    <div className="flex flex-col gap-10">
      <div className="header2">Training And Placement Cell</div>

      <div className="para">{data.starter}</div>

      <div className="header3">{data.title1}</div>

      <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox className="overflow-visible" variant="faded">
          {data.objective.map((item, index) => (
            <ListboxItem description={item.description} key="1">
              <div className=" text-wrap">{item.title}</div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>

      <div className="header3">{data.title2}</div>

      <div className="para">{data.body2}</div>

      <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox className="overflow-visible" variant="faded">
          {data.train.map((item, index) => (
            <ListboxItem description={item.description} key="1">
              <div className=" text-wrap">{item.title}</div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>

      <div className="header3">{data.title3}</div>

      <div className="para">{data.body3}</div>

      <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox className="overflow-visible" variant="faded">
          {data.colab.map((item, index) => (
            <ListboxItem description={item.description} key="1">
              <div className=" text-wrap">{item.title}</div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>

      <div className="header3">{data.title4}</div>

      <div className="para">{data.body4}</div>

      <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox className="overflow-visible" variant="faded">
          {data.process.map((item, index) => (
            <ListboxItem description={item.description} key="1">
              <div className=" text-wrap">{item.title}</div>
            </ListboxItem>
          ))}
        </Listbox>
      </div>

      <div className="header3">Placement Statistics</div>
      <div className="para">{data.body5}</div>
      <div className={styles.grid}>
        {data.list.map((item, index) => (
          <div
            key={index}
            className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
          >
            {item}
          </div>
        ))}
        <Button
          color="danger"
          variant="light"
          className=" flex justify-center m-[5px] "
        >
          <div className={`para `}>etc</div>
        </Button>
      </div>

      <div className="questitle">conclusion</div>
      <div className="para">{data.conclusion}</div>
    </div>
  );
}
