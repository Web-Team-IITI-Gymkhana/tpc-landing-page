"use client";
import React, { useEffect } from "react";
import styles from "./externalopportunities.module.css";

import TableUI from "./components/table";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ExternalOpportunities() {
  const [OpportunitiesData, setOpportunitiesData] = React.useState([]);

  useEffect(() => {
    console.log(baseUrl)
    const fetchData = async () => {
      try {
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
    <div className=" min-h-[70vh]">
      <div className={styles.title}>
        <div className="header2">External Job Opportunities</div>
      </div>

      {OpportunitiesData.length === 0 ? (
        <div></div>
      ) : (
        <div className=" overflow-x-auto">
          <div className="min-w-[600px]">
            {" "}
            <TableUI rows={OpportunitiesData} />
          </div>
        </div>
      )}
    </div>
  );
}
