"use client";
import type { LandingPageConfig } from "@/lib/landing-page-config";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Recruiters({ recruiterLogos }: Pick<LandingPageConfig["home"], "recruiterLogos">) {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]">
        Our Recruiters
      </h2>
      <div className="h-[15rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={recruiterLogos}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
