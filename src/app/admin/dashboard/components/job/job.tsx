import React from "react";
import TableUI from "./components/table";
import styles from "./job.module.css";
import { Button, Input } from "@nextui-org/react";

export default function Job() {
  return (
    <>
      <TableUI></TableUI>

      <div className={styles.header2}> Post New Job</div>
      <div className=" flex w-[100%] justify-start gap-[1rem] align-middle">
        <Input
          isRequired
          type="job"
          label="Job"
          className="max-w-lg"
          isClearable
        />
        <Input
          isRequired
          type="date"
          label="Date"
          className="max-w-[13rem]"
          isClearable
        />
        <Input
          isRequired
          type="link"
          label="Link"
          className="max-w-md"
          isClearable
        />
        <div className=" flex align-middle flex-col justify-center">
          <Button color="success" variant="ghost" size="lg">
            Post Job
          </Button>
        </div>
      </div>
    </>
  );
}
