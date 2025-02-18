"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Tab,
} from "@nextui-org/react";
import styles from "./externalopportunities.module.css";

import TableUI from "./components/table";

import OpportunitiesData from "./opportunities.json";

export default function ExternalOpportunities() {
  return (
    <div>
      <div className={styles.title}>
        <div className="header2">External Job Opportunities</div>
      </div>

      <div className=" overflow-x-auto">
        <div className="min-w-[600px]"> <TableUI {...OpportunitiesData} /></div>
       
      </div>
    </div>
  );
} 