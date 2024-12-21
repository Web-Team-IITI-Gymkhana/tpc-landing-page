import React from "react";
import styles from "./FacultyProfile.module.css";

interface FacultyProfileProps {
  name: string;
  email: string;
  phone: string;
}

const FacultyProfile: React.FC<FacultyProfileProps> = ({
  name,
  email,
  phone,
}) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.info} `}>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default FacultyProfile;
