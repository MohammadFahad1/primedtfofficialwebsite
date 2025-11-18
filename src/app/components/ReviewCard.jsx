import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReviewCard = ({
  profileImage,
  name,
  time,
  rating,
  review,
  photos,
  reviewKey,
}) => {
  return (
    <article className="relative max-w-3xl w-full bg-[#f5f5f5] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 min-h-56">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={profileImage}
            height={100}
            width={300}
            alt="Reviewer avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-400 mt-0.5">{time}</p>
          </div>
        </div>

        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          aria-hidden
          className="drop-shadow-sm mt-2"
        >
          <path
            fill="#4285F4"
            d="M43.6 20.2H42V20H24v8h11.3C34.6 32.1 29.9 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.4 0 6.4 1.3 8.6 3.4l6.1-6.1C36.8 2.8 30.7 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c12.4 0 22.7-9 23.9-20.8.1-1.2.1-2.4.1-3z"
          />
          <path
            fill="#34A853"
            d="M6.3 14.7l6.9 5c1.7-4.4 6-7.6 11-7.6 3.4 0 6.4 1.3 8.6 3.4l6.1-6.1C36.8 2.8 30.7 0 24 0 15.5 0 8.3 5.5 6.3 14.7z"
          />
          <path
            fill="#FBBC05"
            d="M24 48c6.7 0 12.8-2.8 17.2-7.3l-8.2-6.6c-2.4 2-5.6 3.2-9 3.2-7 0-12.9-4.9-14.9-11.6l-7 5.5C6.1 40.6 14.3 48 24 48z"
          />
          <path
            fill="#EA4335"
            d="M43.6 20.2H42V20H24v8h11.3c-1.1 3.4-3.4 6.3-6.6 8.3l8.2 6.6C40.9 39.6 46 31.7 46 24c0-1.2 0-2.4-.4-3.6z"
          />
        </svg>
      </div>

      <div className="text-[#f8aa00] text-lg font-semibold flex gap-2 items-center mt-2.5">
        <div className="rating">
          <input
            type="radio"
            name={reviewKey}
            disabled
            className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
            aria-label="1 star"
            defaultChecked={Math.round(rating) === 1}
          />
          <input
            type="radio"
            name={reviewKey}
            disabled
            className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
            aria-label="2 star"
            defaultChecked={Math.round(rating) === 2}
          />
          <input
            type="radio"
            name={reviewKey}
            disabled
            className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
            aria-label="3 star"
            defaultChecked={Math.round(rating) === 3}
          />
          <input
            type="radio"
            name={reviewKey}
            disabled
            className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
            aria-label="4 star"
            defaultChecked={Math.round(rating) === 4}
          />
          <input
            type="radio"
            name={reviewKey}
            disabled
            className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
            aria-label="5 star"
            defaultChecked={Math.round(rating) === 5}
          />
        </div>
        <div className="text-blue-500 -ml-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="None"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-4">
        <p className="text-gray-700 text-sm leading-relaxed max-w-[70%] line-clamp-3">
          {review.slice(0, 180)}
        </p>

        <div className="ml-auto flex items-center">
          <div className="flex -space-x-3">
            {photos?.slice(0, 2).map((photo, index) => (
              <Image
                key={index}
                src={photo.image_url}
                height={100}
                width={300}
                alt={`Review photo ${index + 1}`}
                className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Link
          href="https://maps.app.goo.gl/njWFZheoMyPMmY519"
          target="blank"
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Show more
        </Link>
      </div>
    </article>
  );
};

export default ReviewCard;
