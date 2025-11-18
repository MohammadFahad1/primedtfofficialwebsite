import Image from "next/image";
import React from "react";
import Tshirt from "./components/Tshirt";

const page = () => {
  return (
    <section className="p-10 md:px-20 md:py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center justify-center">
        <div>
          <Tshirt />
        </div>
      </div>
    </section>
  );
};

export default page;
