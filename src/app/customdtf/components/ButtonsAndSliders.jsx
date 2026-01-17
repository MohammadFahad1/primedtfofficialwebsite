import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ImagePreview from "./ImagePreview";

const ButtonsAndSliders = () => {
  const [dtfSheets, setDtfsheets] = useState([]);
  const [CurrentSheet, setCurrentSheet] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/products/customdesign/")
      .then((res) => res.json())
      .then((data) => {
        setDtfsheets(data);
        setCurrentSheet(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (dtfSheets.length === 0) {
    return (
      <div className="text-5xl font-bold shadow-2xs shadow-amber-300 text-center text-amber-300">
        Loading...
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="sheetpreview"
        >
          {CurrentSheet.photos.map((image, index) => (
            <SwiperSlide key={image.id}>
              <ImagePreview image={image.photo} />
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

          <h2 className="text-4xl md:text-4xl font-bold text-center my-4">
            Unit Cost:{" "}
            <span style={{ fontFamily: "sutonnyOMJ" }} className="text-3xl">
              ৳
            </span>
            {CurrentSheet?.price}
          </h2>
          <div className="my-3 md:my-5 flex flex-wrap items-center justify-center gap-5">
            {dtfSheets?.map((sheet) => {
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
                    src={sheet.photos[0].photo}
                    height={40}
                    width={40}
                    className="rounded w-10 h-10"
                    alt="Helo"
                  />
                  <b>{sheet.title}</b>
                </button>
              );
            })}
          </div>
          <p className="md:text-lg text-sm text-center py-2">
            Choose your preferred DTF sheet size above to see a preview of the
            design placement and quality.
          </p>
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
