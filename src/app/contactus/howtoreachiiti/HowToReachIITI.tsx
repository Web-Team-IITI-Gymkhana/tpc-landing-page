"use client";
import type { LandingPageConfig } from "@/lib/landing-page-config";

import { Plane, Train, Car } from "lucide-react";
import React, { useState } from "react";

export default function HowToReachIITI({ transportInfo, address, mapUrl, phoneLink, phone }: LandingPageConfig["directions"]) {
  const [activeTab, setActiveTab] = useState<"air" | "train" | "road">("air");

  const transportModes: {
    id: "air" | "train" | "road";
    icon: any;
    title: string;
  }[] = [
    { id: "air", icon: Plane, title: "By Air" },
    { id: "train", icon: Train, title: "By Train" },
    { id: "road", icon: Car, title: "By Road" },
  ];


  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center header2 mb-8">
          How To Reach IITI
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="flex border-b overflow-x-auto">
            {transportModes.map((mode) => (
              <button
                key={mode.id}
                className={`flex-1 py-4 px-6 text-center focus:outline-none transition-colors duration-200 whitespace-nowrap ${
                  activeTab === mode.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(mode.id)}
              >
                <mode.icon className="w-6 h-6 mx-auto mb-2" />
                <span className="font-medium">{mode.title}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">{transportInfo[activeTab]}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Campus Address
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {address.map((line, index) => (
                  <React.Fragment key={index}>{index > 0 && <br />}{line}</React.Fragment>
                ))}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-64 sm:h-80">
              <iframe
                src={mapUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                title="IIT Indore Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            For more information, please contact our helpdesk at:
            <a
              href={phoneLink}
              className="text-blue-500 hover:underline ml-1"
            >
              {phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
