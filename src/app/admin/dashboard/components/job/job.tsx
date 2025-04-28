import React, { useEffect } from "react";
import TableUI from "./components/table";
import styles from "./job.module.css";
import { Button, Input } from "@nextui-org/react";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export default function Job() {
  const [OpportunitiesData, setOpportunitiesData] = React.useState<{ id: string; company: string; lastdate: string; link: string }[]>([]);
  const [jobName, setJobName] = React.useState("");
  const [jobDate, setJobDate] = React.useState("");
  const [jobLink, setJobLink] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hello");
        const response = await fetch(
          `${baseUrl}/api/v1/external-opportunities`,
        );
        const data = await response.json();
        console.log(data);
        setOpportunitiesData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <TableUI data={OpportunitiesData}></TableUI>

      <div className={styles.header2}> Post New Job</div>
      <div className=" flex w-[100%] justify-start gap-[1rem] align-middle">
        <Input
          isRequired
          type="job"
          label="Job"
          className="max-w-lg"
          isClearable
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
        />
        <Input
          isRequired
          type="date"
          label="Date"
          className="max-w-[13rem]"
          isClearable
          value={jobDate}
          onChange={(e) => setJobDate(e.target.value)}
        />
        <Input
          isRequired
          type="link"
          label="Link"
          className="max-w-md"
          isClearable
          value={jobLink}
          onChange={(e) => setJobLink(e.target.value)}
        />
        <div className=" flex align-middle flex-col justify-center">
          <Button
            color="success"
            variant="ghost"
            size="lg"
            onPress={() => {
              const newJob = {
                id: crypto.randomUUID(),
                company: jobName,
                lastdate: jobDate,
                link: jobLink,
              };
              setOpportunitiesData((prev) => [...prev, newJob]);
            }}
          >
            Post Job
          </Button>
        </div>
      </div>
    </>
  );
}
