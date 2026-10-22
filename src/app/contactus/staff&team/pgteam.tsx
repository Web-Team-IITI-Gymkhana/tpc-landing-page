import React from "react";
import styles from "./FacultyProfile.module.css";
import Image from "next/image";

interface PGTeamProps {
  name: string;
  email: string;
  phone: string;
  department: string;
  branch: string;
  course: string;
  img?: string;
}

const PGTeam: React.FC<PGTeamProps> = ({
  name,
  email,
  phone,
  department,
  branch,
  course,
  img,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={img || "/data/managers/default.jpg"}
        alt={name}
        className={styles.image}
        width={300}
        height={360}
      />

      <div className={styles.info}>
        <h2>{name}</h2>

        <p>
          <strong>{course}</strong>
        </p>

        <p>{department}</p>

        <p>{branch}</p>

        <p>
          <strong>Email:</strong>
        </p>
        <p>{email}</p>

        <p>
          <strong>Phone:</strong>
        </p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PGTeam;