"use client";
import React  from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";

const statusColorMap = {
  active: "success",
  expired: "danger",
  unknown: "warning",
};

const columns = [
  { name: "JOB", uid: "company" },
  { name: "LAST DATE", uid: "lastdate" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export default function TableUI({data}) {


  

  const renderCell = React.useCallback((job, columnKey) => {
    const cellValue = job[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <job
            avatarProps={{ radius: "lg", src: job.avatar }}
            description={job.email}
            name={cellValue}
          >
            {job.email}
          </job>
        );
      case "lastdate":
        return (
          <div>
                              {new Date(cellValue).toLocaleString("en-IN", {
                                dateStyle: "short",
                                timeStyle: "short",
                                timeZone: "Asia/Kolkata",
                              })}
                            </div>
        );
      case "status":
        const isExpired = new Date(job.lastdate) < new Date();
        const computedStatus = isExpired ? "expired" : "active";

        return (
          <Chip
            className="capitalize"
            color={statusColorMap[computedStatus]}
            size="sm"
            variant="flat"
          >
            {computedStatus}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells" className="min-h-[300px]">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
