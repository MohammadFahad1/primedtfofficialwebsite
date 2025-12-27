import React from "react";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold tracking-tighter uppercase text-neutral-content mb-8">
        Ready to Press
      </h1>
      <Gallery></Gallery>
    </section>
  );
};

export default page;
