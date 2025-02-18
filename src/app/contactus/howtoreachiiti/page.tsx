"use client";

import { Plane, Train, Car } from "lucide-react";
import { useState } from "react";

export default function HowToReachIITI() {
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

  const transportInfo: { [key in "air" | "train" | "road"]: string } = {
    air: "The nearest airport is Devi Ahilyabai Holkar Airport (IDR), located about 25 km from the IIT Indore campus. Taxis and pre-paid cabs are available from the airport to reach the institute.",
    train:
      "Indore Junction (INDB) is the main railway station, approximately 20 km from the campus. You can take a taxi or use app-based cab services to reach IIT Indore from the station.",
    road: "Indore has a well-connected bus network. The nearest bus stop to IIT Indore is Simrol, from where you can take a local auto or taxi to reach the campus. IIT Indore is located on Khandwa Road (NH 59A). If you're driving, use GPS navigation and follow the signs to Simrol. The campus is well-marked and easy to locate.",
  };

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
                Indian Institute of Technology Indore
                <br />
                Khandwa Road, Simrol
                <br />
                Indore 453552
                <br />
                Madhya Pradesh, India
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6750421245495!2d75.91833661495544!3d22.520428585205823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1635774243689!5m2!1sen!2sin"
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
              href="tel:+917324306800"
              className="text-blue-500 hover:underline ml-1"
            >
              +91 732 4306 800
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
