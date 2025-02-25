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
  Button,
} from "@nextui-org/react";
import styles from "./table.module.css";
import Link from "next/link";
import { AnchorIcon } from "./AnchorIcon";

export default function TableUI(props: any) {
  const columns = [
    {
      "key": "company",
      "label": "JOB"
    },
    {
      "key": "lastdate",
      "label": "LAST DATE"
    },
    {
      "key": "link",
      "label": "LINK"
    }
  ]
  return (
    <Table selectionMode="single" aria-label="External Job Opportunities">
      <TableHeader columns={columns}>
        {(column: any) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={props.rows}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "link" ? (
                  <Link href={getKeyValue(item, columnKey)} target="_blank">
                    {" "}
                    <Button
                      color="danger"
                      startContent={<AnchorIcon />}
                      isIconOnly={true}
                      variant="light"
                    ></Button>
                  </Link>
                ) : columnKey === "lastdate" ? (
                  <div>
                    {new Date(getKeyValue(item, columnKey)).toLocaleString("en-IN", {
                      dateStyle: "short",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    })}
                  </div>
                ) : (
                  <div>{getKeyValue(item, columnKey)}</div>
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
