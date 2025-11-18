import Image from "next/image";
import React from "react";

const ReadyToPrint = () => {
  return (
    <section className="w-full md:py-20 md:px-10 py-5 px-4 bg-[#171717]">
      <div className="max-w-[1000px] mx-auto mt-12">
        <div className="text-center">
          <h3 className="text-md md:text-xl leading-8 uppercase font-semibold text-white">
            Trusted by 80,000+ Creators · Same-Day Ship™
          </h3>
          <h2 className="font-bold text-3xl md:text-6xl  uppercase tracking-tighter text-white">
            ready to press
            <br /> wıthout{" "}
            <span className="text-white relative top-0 left-0 z-10">
              <div className="absolute top-2 -left-1 md:top-3 min-h-3/4 w-[105%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              stress?
            </span>
          </h2>
        </div>
      </div>

      <a
        href={"mailto:primedtf71@gmail.com"}
        className="uppercase cursor-pointer font-bold shadow-lg hover:shadow-xl bg-slate-50 text-black hover:scale-105 transition-transform p-2 md:px-12 md:py-4 rounded-md mx-auto my-12 block text-xl text-center w-full md:max-w-[500px]"
      >
        Send Through Email & Print
      </a>
    </section>
  );
};

export default ReadyToPrint;
