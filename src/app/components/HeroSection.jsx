"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const VIDEO_URL = "/assets/hero-section-bg.mp4";

  const [Buttons, setButtons] = useState([]);

  useEffect(() => {
    fetch("https://prime-dtf-backend.vercel.app/api/v1/messages/herobuttons/")
      .then((res) => res.json())
      .then((data) => setButtons(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="relative md:min-h-screen overflow-hidden">
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

      <div className="relative flex items-center justify-center md:min-h-screen text-neutral-content text-center z-20 px-4 py-10 md:py-4">
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
            {Buttons.length > 0 &&
              Buttons.map((button) => (
                <Link
                  href={button.button_link}
                  key={button.id}
                  className="uppercase cursor-pointer font-bold flex items-center gap-1 shadow-lg hover:shadow-xl transition-shadow bg-[#d66b4a] text-black hover:text-white px-4 py-3 rounded-full"
                >
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
                  {button.button_text}
                </Link>
              ))}
          </div>
          <p className="my-8 text-md md:text-2xl font-semibold text-gray-200 w-full md:max-w-3xl px-7 mx-auto">
            No more cracked prints or frustrating delays. DTFSheet delivers
            high-quality, press-ready DTF transfers that you can count on.
          </p>
          <Link
            href="https://wa.me/+8801805123116"
            target="_blank"
            className="uppercase cursor-pointer font-bold flex items-center gap-2 shadow-lg hover:shadow-xl bg-slate-50 text-black hover:scale-105 transition-transform px-8 py-4 rounded-md mx-auto w-max"
          >
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
          </Link>
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
    </section>
  );
}
