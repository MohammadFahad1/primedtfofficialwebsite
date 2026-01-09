"use client";
import React, { useEffect, useState } from "react";
import "glightbox/dist/css/glightbox.min.css";
import Image from "next/image";
function Gallery() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://prime-dtf-backend.vercel.app/api/v1/products/list/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [products]);

  useEffect(() => {
    const initLightbox = async () => {
      const GLightboxModule = await import("glightbox");
      const GLightbox = GLightboxModule.default;

      const lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
      });
    };

    initLightbox();
  }, [products]);

  if (!products.length) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold text-center mt-5 animate-pulse text-amber-600">
          Loading...
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {products?.map((product) => (
        <a
          href={product.image}
          className="glightbox"
          key={product.id}
          data-gallery="product-gallery" // Groups images into a single gallery
          data-title={product.title}
          data-description={`${product.title} - ${product.description} <hr><br> SM Size Price: $${product.smprice} <br> MD Size Price: $${product.mdprice} <br> LG Size Price: $${product.lgprice} <br> XL Size Price: $${product.xlprice} <br> XXL Size Price: $${product.xxlprice}<hr><br> Contact us to order!`}
        >
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={600}
            className="hover:scale-105 transition-transform duration-100 shadow-lg"
          />
        </a>
      ))}
    </div>
  );
}

export default Gallery;
