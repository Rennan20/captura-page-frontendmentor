"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/typings";
import products from "../helpers/products";

type LightboxProps = {
  lightboxPhoto: string;
  onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ lightboxPhoto, onClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(products[0].image);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePhotoClick = (image: string) => {
    setSelectedPhoto(image);
  };

  const handleCloseLightbox = () => {
    onClose();
  };

  const goToPreviousPhoto = () => {
    // Find the index of the current selected photo
    const currentIndex = products.findIndex(
      (product) => product.image === selectedPhoto
    );

    // Find the index of the previous photo
    const previousIndex =
      (currentIndex - 1 + products.length) % products.length;

    // Set the selectedPhoto to the previous photo
    setSelectedPhoto(products[previousIndex].image);
  };

  const goToNextPhoto = () => {
    // Find the index of the current selected photo
    const currentIndex = products.findIndex(
      (product) => product.image === selectedPhoto
    );

    // Find the index of the next photo
    const nextIndex = (currentIndex + 1) % products.length;

    // Set the selectedPhoto to the next photo
    setSelectedPhoto(products[nextIndex].image);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75  flex justify-center items-center">
      <div>
        <div className=" mb-4 flex relative items-center justify-end">
          <button onClick={onClose}>
            <span className="group">
              {" "}
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-white group-hover:fill-orange-primary"
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill-rule="evenodd"
                />
              </svg>{" "}
            </span>
          </button>{" "}
        </div>

        <div className="relative">
          <Image
            className="rounded-xl"
            width={450}
            height={450}
            src={selectedPhoto}
            alt="Product"
          />

          <div className="flex flex-1  absolute top-[35%]  right-0 left-0 justify-between">
            {/* Previous Button */}
            <button
              className="bg-white p-6 rounded-full -translate-x-8"
              onClick={goToPreviousPhoto}
            >
              <svg
                width="12"
                height="18"
                className="stroke-[#1D2026] hover:stroke-orange-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            {/* Next Button */}
            <button
              className="bg-white p-6 rounded-full translate-x-8"
              onClick={goToNextPhoto}
            >
              <svg
                width="13"
                height="18"
                className="stroke-[#1D2026] hover:stroke-orange-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>{" "}
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            {products.map((product) => (
              <div
                key={product.thumb}
                className="relative rounded-xl cursor-pointer"
                onMouseEnter={() => handlePhotoClick(product.image)}
                onMouseLeave={() =>
                  selectedPhoto !== product.image &&
                  setSelectedPhoto(selectedPhoto)
                }
              >
                <Image
                  className="rounded-xl"
                  src={product.thumb}
                  alt="Thumbnail"
                  width={80}
                  height={80}
                />

                {selectedPhoto === product.image && (
                  <div className="absolute top-0 left-0 bg-gray-200 bg-opacity-50 w-full h-full rounded-xl hover:border-orange-primary hover:border-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
