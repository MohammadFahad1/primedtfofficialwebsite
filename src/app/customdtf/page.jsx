"use client";
import React from "react";
import ButtonsAndSliders from "./components/ButtonsAndSliders";

const page = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ButtonsAndSliders />

        {/* FAQ Section */}
        <div className="bg-slate-100 p-5 rounded shadow-md my-5">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          {/* FAQ Item starts */}
          <div className="bg-[#f7b8c3] border-base-300 collapse collapse-arrow border mb-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
              Heat Press Instructions
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-[#ffedc8] peer-checked:text-secondary-content peer-checked:py-3">
              <h4 className="font-bold text-lg mb-2">
                Heat Press Instructions
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">Pressure Setting:</span> Set
                  the heat press to medium to firm pressure.
                </li>
                <li>
                  <span className="font-semibold">Temperature:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      For cotton and 50/50 blends, set the temperature to
                      320-350°F.
                    </li>
                    <li>
                      For synthetic or polyester fabrics, set the temperature to
                      280-300°F.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Press:</span> Press the
                  transfer to fabric for 10 to 15 seconds.
                </li>
                <li>
                  <span className="font-semibold">Hot Peel:</span> Peel while
                  still hot, in one continuous, smooth, rapid motion.
                </li>
                <li>
                  <span className="font-semibold">
                    For Enhanced Durability*:
                  </span>{" "}
                  Cover the image with parchment paper after peeling the film
                  off and press again for 5 seconds.
                </li>
              </ol>
              <h4 className="font-bold text-lg mt-4 mb-2">
                Iron On Instructions
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">Temperature:</span> Set the
                  temperature to the highest temperature setting on your iron.
                </li>
                <li>
                  <span className="font-semibold">Press:</span> Apply even
                  pressure to all of the design with the iron and press evenly
                  for 20 to 25 seconds onto the garment.
                </li>
                <li>
                  <span className="font-semibold">Hot Peel:</span> Peel
                  immediately while hot, in one continuous, smooth, rapid
                  motion.
                </li>
              </ol>
            </div>
          </div>
          {/* FAQ Item ends*/}
          {/* FAQ Item starts */}
          <div className="bg-[#f7b8c3] border-base-300 collapse collapse-arrow border mb-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
              Product Description
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-[#ffedc8] peer-checked:text-secondary-content peer-checked:py-3">
              <p className="mb-4">
                Use this product page if you have a pre-made gang sheet file.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Select the desired size for your gang sheet</li>
                <li>Adjust the quantity to get multiple sheets</li>
                <li>
                  Order your Custom DTF Gang Sheets with our simple process
                </li>
              </ul>
            </div>
          </div>
          {/* FAQ Item ends*/}
          {/* FAQ Item starts */}
          <div className="bg-[#f7b8c3] border-base-300 collapse collapse-arrow border mb-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-bold">
              Material Information
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-[#ffedc8] peer-checked:text-secondary-content peer-checked:py-3">
              <p>
                All orders will be printed on a direct to film material using
                our <span className="font-semibold">printers</span> and the best
                quality <span className="font-semibold">inks</span>.
              </p>
              <p className="mt-2">
                We will handle the entire production while carefully using the
                highest grade materials to ensure that the transfers can be
                pressed in the smoothest manner.
              </p>
              <p className="mt-2">
                Our <span className="font-semibold">DTF Transfers</span> can be
                transferred onto all clothing garments without issues, ensuring
                the best heat transfer method for a variety of needs.
              </p>
              <p className="mt-2">
                <span className="font-semibold">DTFSheet DTF Transfers</span>{" "}
                has a <span className="font-semibold">quality</span> guarantee
                and are safe for washers, ensuring there&apos;s no bleeding or
                cracking.
              </p>
            </div>
          </div>
          {/* FAQ Item ends*/}
        </div>
      </div>
    </section>
  );
};

export default page;
