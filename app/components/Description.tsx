"use client";
import { useState } from "react";
import products from "../helpers/products";
import { Kumbh_Sans } from "@next/font/google";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";
import { Product } from "@/typings";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
});

const Description = () => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAdd = () => {
    dispatch(add(quantity)); // Use the updated quantity state here
  };

  const priceWithoutSymbol = products[0].price.replace(/[^0-9.-]+/g, "");

  const price = parseFloat(priceWithoutSymbol);

  const fullPrice = price * 2;

  return (
    <>
      {!isMobile && (
        <section className="flex flex-col text-black flex-1  w-1/2 mt-32 ">
          <div className="flex flex-col space-y-6 w-1/2 mb-10">
            <h1
              className={`${kumbhSans.variable} font-kumbhSans text-orange-primary font-semibold tracking-[2px] uppercase text-[14px]`}
            >
              Sneaker Company
            </h1>
            <h1
              className={`${kumbhSans.variable}  font-kumbhSans text-4xl text-black/75 font-bold`}
            >
              {products[0].name}
            </h1>
          </div>

          <div className="flex mb-8 w-[65%] ">
            <p
              className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish font-[16px]`}
            >
              {products[0].about}
            </p>
          </div>

          <div className="flex flex-row space-x-8 items-center mb-2 ">
            <p
              className={`${kumbhSans.variable} font-kumbhSans text-2xl text-black/75 font-bold`}
            >
              {products[0].price}
            </p>
            <div className="flex bg-orange-pale rounded-md p-1">
              <p
                className={`${kumbhSans.variable} font-kumbhSans text-orange-primary font-bold text-base`}
              >
                50%
              </p>
            </div>
          </div>

          <div className="flex">
            <p
              className={`${kumbhSans.variable} font-kumbhSans text-blue-grayish font-bold text-sm `}
            >
              <del> ${fullPrice.toFixed(2)} </del>
            </p>
          </div>
          <div className="flex flex-row space-x-8 items-center">
            <div className="flex w-fit h-fit items-center flex-row justify-between space-x-12 bg-blue-light-grayish rounded-xl px-4 py-4 ">
              <Image
                onClick={decrementQuantity}
                src="/icon-minus.svg"
                alt="Minus"
                width={12}
                height={4}
                className="cursor-pointer"
              />{" "}
              <div>
                <p className={`text-black font-bold`}>{quantity}</p>{" "}
              </div>
              <Image
                onClick={incrementQuantity}
                src="/icon-plus.svg"
                alt="Minus"
                width={12}
                height={12}
                className="cursor-pointer"
              />{" "}
            </div>

            <div className="flex w-fit h-fit items-center flex-row justify-between space-x-12">
              <button
                onClick={() => handleAdd()}
                className="bg-orange-primary py-4 pl-16 pr-16 flex items-center space-x-2 rounded-xl shadow-2xl shadow-orange-primary hover:bg-opacity-50"
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="white"
                    fill-rule="nonzero"
                  />
                </svg>
                <span
                  className={`${kumbhSans.variable} font-kumbhSans text-white font-semibold text-sm`}
                >
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

      {isMobile && (
        <section className="flex flex-col text-black flex-1 w-full mt-4 p-4">
          <div className="flex flex-col space-y-6 w-full mb-10">
            <h1
              className={`${kumbhSans.variable} font-kumbhSans text-orange-primary font-semibold tracking-[2px] uppercase text-[14px] `}
            >
              Sneaker Company
            </h1>
            <h1
              className={`${kumbhSans.variable}  font-kumbhSans text-4xl text-black/75 font-bold `}
            >
              {products[0].name}
            </h1>
          </div>

          <div className="flex mb-8 w-full">
            <p
              className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish font-[16px] `}
            >
              {products[0].about}
            </p>
          </div>

          <div className="flex flex-col items-center w-full ">
            <div className="flex flex-row mb-2 items-center w-full">
              <p
                className={`${kumbhSans.variable} font-kumbhSans text-2xl text-black/75 font-bold mr-4`}
              >
                {products[0].price}
              </p>
              <div className="flex bg-orange-pale rounded-md p-1 mr-24">
                <p
                  className={`${kumbhSans.variable} font-kumbhSans text-orange-primary font-bold text-base`}
                >
                  50%
                </p>
              </div>
              <div className="flex">
                <p
                  className={`${kumbhSans.variable} font-kumbhSans text-blue-grayish font-bold text-sm `}
                >
                  <del> ${fullPrice.toFixed(2)} </del>
                </p>
              </div>
            </div>

            <div className="flex w-full ">
              <div className="flex w-full h-fit items-center flex-row justify-between space-x-12 bg-blue-light-grayish rounded-xl px-4 py-4 mx-auto">
                <Image
                  onClick={decrementQuantity}
                  src="/icon-minus.svg"
                  alt="Minus"
                  width={12}
                  height={4}
                  className="cursor-pointer"
                />
                <div>
                  <p className={`text-black font-bold`}>{quantity}</p>
                </div>
                <Image
                  onClick={incrementQuantity}
                  src="/icon-plus.svg"
                  alt="Minus"
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center mt-4">
              <button
                onClick={() => handleAdd()}
                className="bg-orange-primary py-4 justify-center flex items-center space-x-2 rounded-xl shadow-2xl shadow-orange-primary hover:bg-opacity-50 w-full"
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="white"
                    fill-rule="nonzero"
                  />
                </svg>
                <span
                  className={`${kumbhSans.variable} font-kumbhSans text-white font-semibold text-sm`}
                >
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Description;
