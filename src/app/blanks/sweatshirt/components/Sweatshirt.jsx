"use client";
import Image from "next/image";
import React, { useState } from "react";
import PrintingProcess from "./PrintingProcess";

const Tshirt = () => {
  const ALL_COLORS = [
    // Row 1
    { name: "Black", hex: "#1f2937" },
    { name: "White", hex: "#ffffff" },
    { name: "Deep Red", hex: "#881337" },
    { name: "Dark Pink", hex: "#be185d" },
    { name: "Teal", hex: "#0d9488" },
    { name: "Hot Pink", hex: "#db2777" },
    { name: "Maroon", hex: "#881337" },
    { name: "Sky Blue", hex: "#3b82f6" },
    { name: "Gray", hex: "#6b7280" },
    { name: "Crimson", hex: "#b91c1c" },
    { name: "Yellow", hex: "#facc15" },
    { name: "Bright Yellow", hex: "#eab308" },
    { name: "Dark Green", hex: "#166534" },
    { name: "Dark Gray", hex: "#374151" },
    { name: "Mustard", hex: "#ca8a04" },

    // Row 2
    { name: "Stone Gray", hex: "#6b7280" },
    { name: "Plum", hex: "#a855f7" },
    { name: "True Red", hex: "#991b1b" },
    { name: "Aqua", hex: "#06b6d4" },
    { name: "Magenta", hex: "#f97316" },
    { name: "Deep Blue", hex: "#1e3a8a" },
    { name: "Sage Green", hex: "#34d399" },
    { name: "Violet", hex: "#7c3aed" },
    { name: "Wine", hex: "#701a75" },
    { name: "Charcoal", hex: "#374151" },
    { name: "Peach", hex: "#fb923c" },
    { name: "Coral", hex: "#f87171" },
    { name: "Royal Purple", hex: "#4f46e5" },
    { name: "Vibrant Red", hex: "#dc2626" },
    { name: "Blue Sky", hex: "#2563eb" },
    { name: "Deep Teal", hex: "#0f766e" },

    // Row 3
    { name: "Light Pink", hex: "#f472b6" },
    { name: "Beige", hex: "#e5e7eb" },
    { name: "Slate Gray", hex: "#4b5563" },
    { name: "Forest Green", hex: "#16a34a" },
    { name: "Pine Green", hex: "#059669" },
    { name: "Emerald", hex: "#047857" },
    { name: "Olive Green", hex: "#65a30d" },
    { name: "Light Purple", hex: "#d8b4fe" },
    { name: "Pale Pink", hex: "#f9e7f8" },
    { name: "Lime Green", hex: "#a3e635" },
    { name: "Khaki", hex: "#e4e4e7" },
    { name: "Dusty Rose", hex: "#d946ef" },
    { name: "Moss Green", hex: "#3f6212" },
    { name: "Light Mint", hex: "#ccfbf1" },
    { name: "Pale Green", hex: "#d1fae5" },

    // Row 4
    { name: "Midnight Blue", hex: "#111827" },
    { name: "Bright Orange", hex: "#ea580c" },
    { name: "Navy", hex: "#1e3a8a" },
    { name: "Cherry Red", hex: "#b91c1c" },
    { name: "Dark Olive", hex: "#4f5e51" },
    { name: "Silver", hex: "#d1d5db" },
    { name: "Taupe", hex: "#a8a29e" },
    { name: "Ocean Blue", hex: "#0284c7" },
    { name: "Soft Blue", hex: "#93c5fd" },
    { name: "Light Gray", hex: "#9ca3af" },
    { name: "Faded Teal", hex: "#0d9488" },
  ];

  const ALL_SIZES = [
    { name: "Small", abbreviation: "S", price: 5.99 },
    { name: "Medium", abbreviation: "M", price: 7.99 },
    { name: "Large", abbreviation: "L", price: 9.99 },
    { name: "X-Large", abbreviation: "XL", price: 11.99 },
    { name: "XX-Large", abbreviation: "XXL", price: 13.99 },
    { name: "XXX-Large", abbreviation: "XXXL", price: 15.99 },
  ];

  const [CurrentSize, setCurrentSize] = useState(ALL_SIZES[0]);
  const [CurrentColor, setCurrentColor] = useState(ALL_COLORS[0]);

  return (
    <section>
      <div className="p-10 shadow flex flex-col md:flex-row md:justify-between md:items-start justify-center gap-5">
        {/* Tshirt */}
        <div className="md:w-[40%]">
          <Image
            src={"/assets/blank-sweatshirt.png"}
            alt="Blank Tshirt"
            width={400}
            height={400}
            className="mx-auto w-full"
            style={{ backgroundColor: CurrentColor.hex }}
          />
        </div>

        {/* Selectors and Pricing */}
        <div className="md:w-[60%] text-left">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Gildan-Heavy Blend™ Crewneck Sweatshirt-18000 - {CurrentColor.name}
          </h1>
          <p className="text-sm md:text-md my-5">
            <b>Size:</b> {CurrentSize.name} ( {CurrentSize.abbreviation} )
          </p>

          {/* Size Buttons */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
            {ALL_SIZES.map((size, index) => (
              <button
                key={index}
                className={`border px-4 py-2 rounded ${
                  CurrentSize.name === size.name ? "bg-gray-900 text-white" : ""
                } hover:bg-gray-900 hover:text-white cursor-pointer transition-colors duration-300`}
                onClick={() => setCurrentSize(size)}
              >
                {size.name}
              </button>
            ))}
          </div>
          {/* Color Buttons*/}
          <p className="text-sm md:text-md mb-3">
            <b>
              Colors:{" "}
              <span className="bg-amber-200 p-1">
                (Selected Color: {CurrentColor.name})
              </span>
            </b>
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
            {ALL_COLORS.map((color, index) => (
              <button
                key={index}
                className={`border px-4 py-4 rounded hover:ring-2 hover:ring-offset-2 cursor-pointer transition-all duration-300 ${
                  CurrentColor.name === color.name
                    ? "ring-2 ring-offset-2 ring-gray-900"
                    : ""
                }`}
                onClick={() => setCurrentColor(color)}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              ></button>
            ))}
          </div>

          {/* Calculated Price */}
          <h2 className="text-2xl md:text-3xl mt-5">
            Price:{" "}
            <span className="font-bold">
              <span style={{ fontFamily: "sutonnyOMJ" }} className="text-4xl">
                ৳
              </span>
              {CurrentSize.price.toFixed(2)}
            </span>
          </h2>
          <h3 className="text-center mt-4 text-base md:text-lg">
            Order your design through email to&nbsp;
            <a
              href="mailto:primedtf71@gmail.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              primedtf71@gmail.com
            </a>
            &nbsp; and mention your preferred DTF sheet size.
          </h3>
        </div>
      </div>
      {/* Important Shipping Info */}
      <div
        className="mt-10 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
        role="alert"
      >
        <p className="font-bold">Important Shipping Information</p>
        <p className="text-sm md:text-md">
          Please note that shipping costs are calculated separately based on
          your location and the total weight of your order. The prices listed
          here do not include shipping fees. For an accurate shipping quote,
          please contact us with your order details.
        </p>
      </div>
      <PrintingProcess />
    </section>
  );
};

export default Tshirt;
