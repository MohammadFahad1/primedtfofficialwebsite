"use client";
import React, { useEffect, useState } from "react";
// import lightgallery

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";

function Gallery() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://prime-dtf-backend.vercel.app/api/v1/products/list/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [products]);
  console.log(products);

  const onInit = () => {};

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {products.map((product) => {
          return (
            <Link href={product.image} key={product.id}>
              <Image
                alt={product.name}
                src={product.image}
                height={500}
                width={600}
              />
            </Link>
          );
        })}
      </LightGallery>
    </div>
  );
}

export default Gallery;
