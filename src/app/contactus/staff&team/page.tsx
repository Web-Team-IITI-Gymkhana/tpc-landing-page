import React from "react";
import { Button } from "@nextui-org/react";
import data from "./Info.json";
import FacultyProfile from "./FacultyProfile";
import FacultyProfile2 from "./pgteam";
import styles from "./FacultyProfile.module.css";
import ContactCard from "./ContactCard";

const StaffTeam: React.FC = () => {
  return (
    <div className="flex flex-col gap-[35px]">
      <div className="questitle">CAMC staff</div>
      <ContactCard></ContactCard>
      <div className="questitle">placement team</div>
      <div className="header3">undergraduate</div>

      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>
          Computer Science and Engineering
        </div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[0].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Electrical Engineering</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[1].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Mechanical Engineering</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[2].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>
          Metallurgical Engineering and Materials Science
        </div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[3].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Civil Engineering</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[4].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
       <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Mathematics & Computing</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[5].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Engineering Physics</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[6].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
       <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Space Science & Engineering</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[7].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
       <Button color="danger" variant="light" size="lg">
        <div className={`para my-3 text-wrap`}>Chemical Engineering</div>
      </Button>
      <div className="flex flex-wrap gap-10 justify-between">
        {data.teamug[8].map((member: any, index: number) => (
          <FacultyProfile key={index} {...member} />
        ))}
      </div>
      <div className="header3">postgraduate</div>
      <div className={styles.cardContainer}>
        {data.teampg.map((item: any, index: number) => (
          <FacultyProfile2 key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StaffTeam;
