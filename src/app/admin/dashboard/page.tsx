"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@nextui-org/react";
import Contacts from "./components/contacts/contacts";
import Team from "./components/team/team";
import Job from "./components/job/job";
import Faculty from "./components/faculty/faculty";
import Password from "./components/pass/pass";
import Home from "./components/home/home";
import Link from "next/link";

export default function App() {
  let tabs = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "contacts",
      label: "Contacts",
    },
    {
      id: "team",
      label: "Placement Team",
    },
    {
      id: "job",
      label: "External Opportunities",
    },
    {
      id: "faculty",
      label: "Faculty Coordinators",
    },
    {
      id: "password",
      label: "Change Password",
    },
    {
      id: "exit",
      label: "Exit",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                <div className=" min-h-[25vh]">
                  {item.id === "home" ? (
                    <Home />
                  ) : item.id === "contacts" ? (
                    <Contacts />
                  ) : item.id === "team" ? (
                    <Team />
                  ) : item.id === "job" ? (
                    <Job />
                  ) : item.id === "faculty" ? (
                    <Faculty />
                  ) : item.id === "password" ? (
                    <Password />
                  ) : item.id === "exit" ? (
                    <div className=" flex flex-col justify-center h-[25vh]">
                      <Link href="/">
                        <Button
                          className="w-[100%] h-[25vh]"
                          variant="light"
                          color="danger"
                        >
                          Logout
                        </Button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
