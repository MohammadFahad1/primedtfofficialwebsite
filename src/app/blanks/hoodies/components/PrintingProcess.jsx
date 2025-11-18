import Image from "next/image";
import React from "react";

const PrintingProcess = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center h-96 text-white font-bold text-3xl my-5 rounded-lg overflow-hidden gap-3">
      <Image
        src="/assets/dtfgif.gif"
        alt="Printing Process"
        width={800}
        height={600}
        className="w-full h-auto sm:w-[80%] sm:h-full"
      />
      <h2 className="text-2xl sm:text-3xl md:text-6xl text-center font-normal mx-5 mb-3">
        Simple Printing Process
      </h2>
    </div>
  );
};

export default PrintingProcess;
