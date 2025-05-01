"use client";
import React, { useEffect } from "react";
import styles from "./externalopportunities.module.css";
import qs from "qs";
import TableUI from "./components/table";

export default function ExternalOpportunities() {
  const [OpportunitiesData, setOpportunitiesData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = {
          q: {
            orderBy: {
              createdAt: "DESC",
            },
          }
        }
        const encodedQueryString = qs.stringify(query, {
          encodeValuesOnly: true,
          encode: false,
        });
        const response = await fetch(
          `api/v1/external-opportunities?${encodedQueryString}`,
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
