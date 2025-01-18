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
import Image from "next/image";

export default function Facilities() {
  return (
    <div className=" flex flex-col gap-[20px]">
      <div className="header2">Facilities</div>

      <div className="para">{data.starter}</div>

      {Object.entries(data.facilities).map(([key, val]) => (
        <>
          <Button color="danger" variant="light" size="lg">
            <div className={`para my-3 text-wrap`}>{key}</div>
          </Button>
          {val.map((item, index) => (
            <div key={index}>
              <div className="header3">{item.title}</div>
              <div className="para">{item.descp}</div>
            </div>
          ))}
        </>
      ))}

      <div className="para mt-[50px]">{data.end}</div>
    </div>
  );
}
