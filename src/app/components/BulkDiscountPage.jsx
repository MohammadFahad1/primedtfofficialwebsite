import Image from "next/image";
import Link from "next/link";
import React from "react";

// Data structure for the discount tiers
const DISCOUNT_TIERS = [
  {
    tier: "Tier 1",
    quantity: "15+",
    discount: "35% OFF",
    bgColor: "bg-[#cd8239]",
  },
  {
    tier: "Tier 2",
    quantity: "50+",
    discount: "45% OFF",
    bgColor: "bg-[#fbbf24]",
  },
  {
    tier: "Tier 3",
    quantity: "150+",
    discount: "60% OFF",
    bgColor: "bg-[#f8aa00]",
  },
  {
    tier: "Tier 4",
    quantity: "250+",
    discount: "70% OFF",
    bgColor: "bg-[#f5945c]",
  },
];

/**
 * @param {object} props - Tier data.
 */
const TierCard = ({ tier, quantity, discount, bgColor }) => {
  const textColor = "text-gray-900";

  return (
    <div className="card w-full shadow-xl bg-base-100 border border-gray-100 transition-shadow duration-300 hover:shadow-2xl">
      <div className="card-body p-6 text-center">
        <h3 className="text-xl font-bold text-gray-700">{tier}</h3>
        <p className="text-3xl font-extrabold text-gray-900 mt-1 mb-4">
          {quantity} <span className="text-sm font-medium">QUANTITY</span>
        </p>
      </div>
      <div className={`py-4 ${bgColor} rounded-b-xl`}>
        <div className="text-center">
          <span
            className={`badge badge-lg font-extrabold text-lg ${textColor} bg-opacity-70 ${bgColor}`}
          >
            {discount}
          </span>
        </div>
      </div>
    </div>
  );
};

const BulkDiscountPage = () => {
  return (
    <div className="py-16 md:py-24 bg-[#fffaec] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5 mb-8 lg:mb-0">
            <div className="w-full aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/dtfsheets.jpg"
                alt="Bulk Transfer Sheets"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
              BULK PROGRAM
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              BULK DISCOUNT TIERS
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              Whether you&apos;re producing merch at scale, running a
              print-on-demand brand, or reselling transfers, our bulk program is
              tailored for serious creators and business operators.
            </p>

            {/* Tiers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {DISCOUNT_TIERS.map((tier, index) => (
                <TierCard key={index} {...tier} />
              ))}
            </div>

            {/* Order Now Button and Questions Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 border-t border-gray-200 pt-6">
              <p className="text-base font-bold text-gray-800 mb-4 sm:mb-0">
                Still have questions?
              </p>
              <Link
                href={"/contact-us"}
                className="btn btn-neutral border-[#d55027] rounded text-[#d55027] font-bold w-full sm:w-auto px-10 py-3 shadow-lg hover:bg-[#d55027] hover:text-white transition duration-150"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkDiscountPage;
