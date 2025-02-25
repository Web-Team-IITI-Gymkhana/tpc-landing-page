"use client";

import React from "react";
import useState from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import styles from "./admin.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AdminLogin() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className={styles.backgroundmob}></div>

      <div className={styles.background}>
        <div className={styles.grid}>
          <Image
            src="/data/logo/iiti.png"
            height={80}
            width={80}
            alt="TPC IITI"
            className=" absolute top-[15px] left-[30px] z-99999"
          ></Image>

          <div className={styles.bganim}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>N</div>
          <div className={styles.gridblock}>E</div>
          <div className={styles.gridblock}>L</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>I</div>
          <div className={styles.gridblock}>N</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>P</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>N</div>
          <div className={styles.gridblock}>T</div>
          <div className={styles.gridblock}></div>

          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>L</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>G</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>T</div>
          <div className={styles.gridblock}>A</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>R</div>
          <div className={styles.gridblock}>C</div>
          <div className={styles.gridblock}>C</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>A</div>
          <div className={styles.gridblock}>E</div>
          <div className={styles.gridblock}>E</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>I</div>
          <div className={styles.gridblock}>M</div>
          <div className={styles.gridblock}>L</div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}></div>
          <div className={styles.gridblock}>T</div>
          <div className={styles.gridblock}>P</div>
          <div className={styles.gridblock}>C</div>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.header2}>Admin Login</div>
          </div>

          <div className={styles.form}>
            <Input
              type="username"
              isClearable
              label="Username"
              color="default"
              variant="flat"
              size="md"
              className="w-[80%] to-blue-500"
              radius="sm"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">
                    @iiti.ac.in
                  </span>
                </div>
              }
            />
            <Input
              label="Password"
              variant="flat"
              radius="sm"
              color="default"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className=" w-[80%]"
              size="md"
            />
          </div>

          <Link
            href="/admin/dashboard"
            className="w-[100%] flex justify-center"
          >
            <Button
              radius="sm"
              color="primary"
              variant="ghost"
              size="lg"
              className=" w-[80%]"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
