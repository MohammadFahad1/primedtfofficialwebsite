"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BrandSlider = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/messages/partnerbrands/")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brand data:", error));
  }, []);

  return (
    <section className="py-16 bg-orange-50 brand-swiper-container">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Trusted By Brands
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by {brands.length * 10}+ brands, buying houses, factories, and
          corporate clients all over Bangladesh.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 8 },
          }}
          className="mb-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-24">
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container to match your screenshot pill style */}
        <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 32px;
          height: 8px;
          border-radius: 4px;
          background: #d1d5db; /* gray-300 */
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #000000; /* black */
          width: 40px;
        }
      `}</style>
    </section>
  );
};

export default BrandSlider;
