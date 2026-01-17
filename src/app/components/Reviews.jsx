"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ AllReviews }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        spaceBetween={20}
        freeMode={false}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {AllReviews &&
          AllReviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ReviewCard
                profileImage={review.profileImage}
                name={review.name}
                time={review.time}
                rating={review.rating}
                review={review.review}
                photos={review.photos}
                reviewKey={review.id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Reviews;
