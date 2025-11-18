import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

const ButtonsAndSliders = () => {
  const dtfSheets = [
    {
      id: 1,
      name: 'A5 (5" X 7")',
      images: [
        "/assets/dtfsheets/a5-dtf1.jpg",
        "/assets/dtfsheets/a5-dtf2.jpg",
      ],
      unitPrice: 25.0,
    },
    {
      id: 2,
      name: 'A4 (7.5" X 11")',

      images: [
        "/assets/dtfsheets/a4-dtf1.jpg",
        "/assets/dtfsheets/a4-dtf2.jpg",
      ],
      unitPrice: 45.0,
    },
    {
      id: 3,
      name: 'A3 (11" X 16")',
      images: [
        "/assets/dtfsheets/A3 size dtfsheet.jpg",
        "/assets/dtfsheets/A3-DTF-.jpg",
      ],
      unitPrice: 80.0,
    },
    {
      id: 4,
      name: 'A2 (16" X 24")',
      images: ["/assets/dtfsheets/a2-dtf1.jpg"],
      unitPrice: 160.0,
    },
    {
      id: 5,
      name: 'Label (2.5" X 2.5")',
      images: [
        "/assets/dtfsheets/level-dtf2.jpg",
        "/assets/dtfsheets/level-dtf1.jpg",
      ],
      unitPrice: 5.0,
    },
    {
      id: 6,
      name: 'Logo (3" X 3")',
      images: ["/assets/dtfsheets/logosize-dtf1.jpg"],
      unitPrice: 7.0,
    },
    {
      id: 7,
      name: 'Gang sheet (23" X 39") 1 meter',
      images: ["/assets/dtfsheets/gangsheet-dtf1.jpg"],
      unitPrice: 390.0,
    },
  ];

  const [CurrentSheet, setCurrentSheet] = useState(dtfSheets[0]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="sheetpreview"
        >
          {CurrentSheet.images.map((image, index) => (
            <SwiperSlide key={index}>
              <ImagePreview image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="max-w-prose md:max-w-none">
          <h1 className="text-2xl md:text-5xl font-extrabold text-center">
            Custom Image to DTFSheet™ Transfer
          </h1>
          <p className="md:text-lg text-sm text-center py-2">
            DTF transfers adhere to fabrics like cotton, polyester, and blends,
            delivering vibrant and durable prints perfect for apparel and
            textiles.
          </p>
          <div className="my-3 md:my-5 flex flex-wrap items-center justify-center gap-5">
            {dtfSheets.map((sheet) => {
              return (
                <button
                  key={sheet.id}
                  className={`border-2 border-gray-800 px-3 py-1 md:py-2 rounded-full text-gray-800 font-bold hover:bg-gray-800 hover:text-white hover:border-gray-900 transition-colors duration-300 cursor-pointer flex items-center gap-4 ${
                    CurrentSheet?.id === sheet.id
                      ? "bg-gray-800 text-white"
                      : ""
                  }`}
                  onClick={() => setCurrentSheet(sheet)}
                >
                  <Image
                    src={sheet.images[0]}
                    height={40}
                    width={40}
                    className="rounded w-10 h-10"
                    alt="Helo"
                  />
                  <b>{sheet.name}</b>
                </button>
              );
            })}
          </div>
          <p className="md:text-lg text-sm text-center py-2">
            Choose your preferred DTF sheet size above to see a preview of the
            design placement and quality.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-center mt-4">
            Unit Cost:{" "}
            <span style={{ fontFamily: "sutonnyOMJ" }} className="text-4xl">
              ৳
            </span>
            {CurrentSheet?.unitPrice}
          </h2>
          <h3 className="text-center mt-4 text-base md:text-lg">
            Send Your Pre-Made Gang Sheet through email to&nbsp;
            <a
              href="mailto:primedtf71@gmail.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              primedtf71@gmail.com
            </a>
            &nbsp; for ordering and further instructions.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ButtonsAndSliders;
