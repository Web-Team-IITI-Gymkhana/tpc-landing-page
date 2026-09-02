"use client";
import Carousel from "../components/home/carousel/carousel";
import PortalForm from "../components/home/portalform/portalform";
import Recruiters from "../components/home/recruiters/recruiters";
import Messages from "../components/home/messages/messages";
import CarouselData from "../components/home/carousel/carousel.json";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950">

        <div className="absolute inset-0 z-0">
          <Carousel {...CarouselData} />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#032b4d]/95 via-[#032b4d]/85 to-transparent max-md:bg-[#032b4d]/90 pointer-events-none" />

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-24 pb-12 flex items-center h-full">
          <div className="w-full max-w-2xl">
            <PortalForm />
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-12 space-y-16">
        <Messages />
        <Recruiters />
      </div>
    </>
  );
}