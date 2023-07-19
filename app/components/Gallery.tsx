"use client";

import { useState } from "react";
import Image from "next/image";
import products from "../helpers/products";
import Lightbox from "./Lightbox";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(products[0].image);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const handlePhotoClick = (image: string) => {
    setSelectedPhoto(image);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
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
    <>
      {!isMobile && (
        <section className="flex flex-1 p-2 justify-center items-center w-1/2 flex-col mt-16">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-xl cursor-pointer"
              width={450}
              height={450}
              src={selectedPhoto}
              alt="Product"
              onClick={() => setIsLightboxOpen(true)}
            />

            <div className="hidden md:flex justify-center space-x-4 mt-8">
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

            {isLightboxOpen && (
              <Lightbox
                onClose={handleCloseLightbox}
                lightboxPhoto={selectedPhoto}
              />
            )}
          </div>
        </section>
      )}

      {isMobile && (
        <>
          <section className="relative flex flex-1 justify-center items-center w-full ">
            <div className="flex flex-col items-center">
              <div className="relative w-full">
                <Image
                  className="cursor-pointer z-1 "
                  width={450}
                  height={450}
                  src={selectedPhoto}
                  alt="Product"
                  onClick={() => setIsLightboxOpen(true)}
                />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
                  {/* Previous Button */}
                  <button
                    className="bg-white px-3.5  py-3 rounded-full translate-x-4"
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
                    className="bg-white  px-3.5  py-3 rounded-full -translate-x-4 "
                    onClick={goToNextPhoto}
                  >
                    <svg
                      width="12"
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
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Gallery;
