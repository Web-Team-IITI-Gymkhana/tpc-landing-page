import React from "react";
import styles from "./FacultyProfile.module.css";
import Image from "next/image";

interface FacultyProfileProps {
  name: string;
  email: string;
  phone: string;
  domain?: string;
  img?: string;
}

const FacultyProfile: React.FC<FacultyProfileProps> = ({
  name,
  email,
  phone,
  domain,
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

        {domain && (
          <p className={styles.domain}>
            <strong>{domain}</strong>
          </p>
        )}

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

export default FacultyProfile;