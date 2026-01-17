"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PrintingProcess from "./PrintingProcess";

const Tshirt = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8000/api/v1/products/products/?product_type=Blank%20T-Shirts",
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ALL_SIZES = [
    { name: "Small", abbreviation: "S", price: product?.smprice },
    { name: "Medium", abbreviation: "M", price: product?.mdprice },
    { name: "Large", abbreviation: "L", price: product?.lgprice },
    { name: "X-Large", abbreviation: "XL", price: product?.xlprice },
    { name: "XX-Large", abbreviation: "XXL", price: product?.xxlprice },
    { name: "XXX-Large", abbreviation: "XXXL", price: product?.xxxlprice },
  ];

  const [CurrentSize, setCurrentSize] = useState(ALL_SIZES[0]);
  const [CurrentColor, setCurrentColor] = useState(ALL_COLORS[0]);

  return (
    <section>
      <div className="p-10 shadow flex flex-col md:flex-row md:justify-between md:items-start justify-center gap-5">
        {/* Tshirt */}
        <div className="md:w-[40%]">
          <Image
            src={"/assets/blank-tshirt.png"}
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
            Gildan-Softstyle® T-Shirt-64000 - {CurrentColor.name}
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
