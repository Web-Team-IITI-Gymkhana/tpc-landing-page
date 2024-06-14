"use client";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import styles from "./externalopportunities.module.css";


const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

export default function ExternalOpportunities() {


    return (
     <>

<div className={styles.wrapper}>

<div className={styles.unexpendable}>
     
     <div className={styles.title}>
        <div className={styles.header}>External Job Opportunities</div>
   
    </div>

   
    <Table 
    selectionMode="single" 
    aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    
    </div></div>
     </>
      
    );
  }     