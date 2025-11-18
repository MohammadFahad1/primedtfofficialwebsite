import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full md:py-20 md:px-10 py-5 px-4 bg-[#171717]">
      {/* Cards Header */}
      <div className="flex justify-around items-center max-w-[1000px] mx-auto gap-5">
        <Image
          src={"assets/star.svg"}
          height={50}
          width={50}
          alt="bg image"
          className="hidden md:block"
        />
        <div className="text-center text-white">
          <h3 className="text-md md:text-xl tracking-tighter leading-8 uppercase font-semibold">
            Why 80,000+ Creators Choose DTFSheet™
          </h3>
          <h2 className="font-bold text-3xl md:text-6xl uppercase">
            <span className="text-white relative top-0 left-0 z-10">
              <div className="absolute top-2 -left-1 md:top-3 min-h-3/4 w-[107%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              why
            </span>{" "}
            choose us?
          </h2>
        </div>
        <Image
          src={"assets/curvy-circle.svg"}
          height={50}
          width={50}
          alt="bg image"
          className="hidden md:block"
        />
      </div>
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-15">
        {/* Card 1 Starts */}
        <div className="card w-auto hover:scale-105 bg-[#f7f7f7] hover:bg-[#d8d5d5] transition-all cursor-pointer duration-300 card-xl shadow-lg rounded-md">
          <div className="card-body p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#D55027"
              className="size-10 md:size-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h2 className="card-title uppercase text-xl tracking-tighter leading-none mt-5 mb-2">
              Same-Day Ship Out
            </h2>
            <p className="text-[1rem] tracking-tight leading-6 text-justify">
              Your order prints today. Ships today. Place your order before noon
              and we’ll ship it the same day. No delays, no excuses.
            </p>
          </div>
        </div>
        {/* Card 1 Ends */}
        {/* Card 2 Starts */}
        <div className="card w-auto hover:scale-105 bg-[#f7f7f7] hover:bg-[#d8d5d5] transition-all cursor-pointer duration-300 card-xl shadow-lg rounded-md">
          <div className="card-body p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#D55027"
              className="size-10 md:size-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <h2 className="card-title uppercase text-xl tracking-tighter leading-none mt-5 mb-2">
              Zero-Doubt™ Quality Check
            </h2>
            <p className="text-[1rem] tracking-tight leading-6 text-justify">
              Checked by real humans, reprinted if needed. Every transfer is
              reviewed. We stand behind every print, no questions asked.
            </p>
          </div>
        </div>
        {/* Card 2 Ends */}
        {/* Card 3 Starts */}
        <div className="card w-auto hover:scale-105 bg-[#f7f7f7] hover:bg-[#d8d5d5] transition-all cursor-pointer duration-300 card-xl shadow-lg rounded-md">
          <div className="card-body p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#D55027"
              className="size-10 md:size-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            <h2 className="card-title uppercase text-xl tracking-tighter leading-none mt-5 mb-2">
              Any Design, Any Detail
            </h2>
            <p className="text-[1rem] tracking-tight leading-6 text-justify">
              No color limits. No size limits. Whether it’s text, full-color
              art, or fine detail, we print it exactly how you envision it.
            </p>
          </div>
        </div>
        {/* Card 3 Ends */}
        {/* Card 4 Starts */}
        <div className="card w-auto hover:scale-105 bg-[#f7f7f7] hover:bg-[#d8d5d5] transition-all cursor-pointer duration-300 card-xl shadow-lg rounded-md">
          <div className="card-body p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#D55027"
              className="size-10 md:size-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <h2 className="card-title uppercase text-xl tracking-tighter leading-none mt-5 mb-2">
              Skilled Designer Support
            </h2>
            <p className="text-[1rem] tracking-tight leading-6 text-justify">
              Have tweaks or edits? We’ve got you. Our team can adjust your
              artwork, just leave a note at checkout.
            </p>
          </div>
        </div>
        {/* Card 4 Ends */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
