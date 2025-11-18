import Image from "next/image";
import React from "react";

export default function HeroSection() {
  const VIDEO_URL = "/assets/hero-section-bg.mp4";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-section-bg.mp4"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative flex items-center justify-center min-h-screen text-neutral-content text-center z-20 p-4">
        <div className="bg-transparent p-4 rounded-xl md:my-16">
          <h3 className="md:text-xl font-bold uppercase text-white">
            Made for Creators
          </h3>
          <h1 className="mb-5 text-5xl md:text-8xl font-bold text-white tracking-tighter md:leading-none">
            CUSTOM{" "}
            <span className="text-[#19181E] relative top-0 left-0">
              <div className="absolute top-2 left-0 md:top-5 min-h-3/4 w-[105%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              DTF
            </span>
            <br />
            TRANSFERS
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-center gap-2">
            <button className="uppercase cursor-pointer font-bold flex items-center gap-1 shadow-lg hover:shadow-xl transition-shadow bg-cyan-300 text-black hover:text-white px-4 py-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              SHIP FAST
            </button>
            <button className="uppercase cursor-pointer font-bold flex items-center gap-1 shadow-lg hover:shadow-xl transition-shadow bg-[#d66b4a] text-black hover:text-white px-4 py-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 font-extrabold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              ORDER DTF PRINTS
            </button>
          </div>
          <p className="my-8 text-md md:text-2xl font-semibold text-gray-200 w-full md:max-w-3xl px-7 mx-auto">
            No more cracked prints or frustrating delays. DTFSheet delivers
            high-quality, press-ready DTF transfers that you can count on.
          </p>
          <button className="uppercase cursor-pointer font-bold flex items-center gap-2 shadow-lg hover:shadow-xl bg-slate-50 text-black hover:scale-105 transition-transform px-8 py-4 rounded-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 font-extrabold"
              style={{}}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Explore Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 font-extrabold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <h3 className="md:text-xl font-semibold uppercase text-white mt-7 flex items-center justify-center gap-2">
            <div className="avatar-group -space-x-2">
              <div className="avatar border-white border-2">
                <div className="w-5">
                  <Image
                    src="/assets/clent.jpg"
                    height={50}
                    width={50}
                    alt="Client Photo"
                  />
                </div>
              </div>
              <div className="avatar border-white border-2">
                <div className="w-5">
                  <Image
                    src="/assets/clent.jpg"
                    height={50}
                    width={50}
                    alt="Client Photo"
                  />
                </div>
              </div>
              <div className="avatar border-white border-2">
                <div className="w-5">
                  <Image
                    src="/assets/clent.jpg"
                    height={50}
                    width={50}
                    alt="Client Photo"
                  />
                </div>
              </div>
              <div className="avatar border-white border-2">
                <div className="w-5">
                  <Image
                    src="/assets/clent.jpg"
                    height={50}
                    width={50}
                    alt="Client Photo"
                  />
                </div>
              </div>
            </div>
            80K+ HAPPY CREATORS
          </h3>
        </div>
      </div>
    </div>
  );
}
