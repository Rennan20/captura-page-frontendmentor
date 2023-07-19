"use client";

import products from "../helpers/products";
import { Kumbh_Sans } from "@next/font/google";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";
import { RootState } from "../../typings";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
});

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const priceWithoutSymbol = products[0].price.replace(/[^0-9.-]+/g, "");
  const price = parseFloat(priceWithoutSymbol);

  const handleRemove = () => {
    if (!Array.isArray(cartItems)) {
      return;
    }

    const index = cartItems.findIndex((item) => item.id === products[0].id);

    if (index !== -1) {
      dispatch(remove(products[0].id));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + price * (item.quantity ?? 0),
    0
  );

  if (cartItems.length === 0) {
    return (
      <>
        {isMobile && (
          <>
            <div
              className="flex p-2 absolute top-[10%] bg-transparent left-0 right-0 z-20
            "
            >
              <div className="h-[230px] w-full relative  shadow-lg  shadow-black rounded-lg flex items-center justify-center flex-col mr-2 ml-2 z-20 bg-white">
                <div className=" w-full border-b border-blue-grayish">
                  <h1
                    className={`${kumbhSans.variable} font-kumbhSans font-bold text-base mb-6 ml-4 mt-2 text-blue-very-dark`}
                  >
                    Cart
                  </h1>
                </div>

                <div className="flex flex-1 justify-center items-center">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans font-bold text-base text-blue-grayish `}
                  >
                    You cart is empty.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {!isMobile && (
          <div className="h-[230px] w-[360px] shadow-lg  shadow-black bg-white rounded-lg flex  flex-col absolute top-[30%] right-20 transform -translate-y-1/2 z-20 ">
            <div className=" w-full border-b border-blue-grayish">
              <h1
                className={`${kumbhSans.variable} font-kumbhSans font-bold text-base mb-6 ml-4 mt-2 text-blue-very-dark`}
              >
                Cart
              </h1>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <p
                className={`${kumbhSans.variable} font-kumbhSans font-bold text-base text-blue-grayish `}
              >
                You cart is empty.
              </p>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {isMobile && (
          <>
            <div
              className="flex p-2 absolute top-[10%] bg-transparent left-0 right-0 z-20
            "
            >
              <div className="h-[230px] w-full relative  shadow-lg  shadow-black rounded-lg flex items-center justify-center flex-col mr-2 ml-2 z-20 bg-white">
                <div className=" w-full border-b border-blue-grayish">
                  <h1
                    className={`${kumbhSans.variable} font-kumbhSans font-bold text-base mb-6 ml-4 mt-2 text-blue-very-dark`}
                  >
                    Cart
                  </h1>
                </div>

                <div className="flex mt-4 justify-center items-center">
                  <div className="flex items-center justify-center ml-4 mr-4">
                    <Image
                      src={products[0].thumb}
                      height={35}
                      width={40}
                      alt="product-image"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex  flex-col justify-center">
                    <p
                      className={`${kumbhSans.variable} font-kumbhSans  text-[15px] text-blue-dark-grayish `}
                    >
                      {products[0].name}
                    </p>
                    <p>
                      {cartItems.map((item) => (
                        <span
                          key={item.id}
                          className={`${kumbhSans.variable} font-kumbhSans text-[15px] text-blue-dark-grayish `}
                        >
                          ${priceWithoutSymbol} x {item.quantity}
                        </span>
                      ))}

                      <span
                        className={`${kumbhSans.variable} ml-2 font-kumbhSans font-bold text-[15px] text-blue-very-dark `}
                      >
                        $ {totalPrice.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="ml-4">
                    <button onClick={handleRemove}>
                      <Image
                        src="/icon-delete.svg"
                        alt="delete"
                        width={14}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex mt-4 items-center justify-center">
                  <button
                    className={`${kumbhSans.variable} font-kumbhSans px-28 py-4 bg-orange-primary rounded-md font-bold text-white text-center`}
                  >
                    Checkout
                  </button>
                </div>
              </div>{" "}
            </div>
          </>
        )}

        {!isMobile && (
          <div className="h-[230px] w-[360px] shadow-lg  shadow-black bg-white rounded-lg flex  flex-col absolute top-[30%] right-20 transform -translate-y-1/2 z-20 ">
            <div className=" w-full border-b border-blue-grayish">
              <h1
                className={`${kumbhSans.variable} font-kumbhSans font-bold text-base mb-6 ml-4 mt-2 text-blue-very-dark`}
              >
                Cart
              </h1>
            </div>

            <div className="flex mt-4 justify-center items-center">
              <div className="flex items-center justify-center ml-4 mr-4">
                <Image
                  src={products[0].thumb}
                  height={35}
                  width={40}
                  alt="product-image"
                  className="rounded-md"
                />
              </div>
              <div className="flex  flex-col justify-center">
                <p
                  className={`${kumbhSans.variable} font-kumbhSans  text-[15px] text-blue-dark-grayish `}
                >
                  {products[0].name}
                </p>
                <p>
                  {cartItems.map((item) => (
                    <span
                      key={item.id}
                      className={`${kumbhSans.variable} font-kumbhSans text-[15px] text-blue-dark-grayish `}
                    >
                      ${priceWithoutSymbol} x {item.quantity}
                    </span>
                  ))}
                  <span
                    className={`${kumbhSans.variable} ml-2 font-kumbhSans font-bold text-[15px] text-blue-very-dark `}
                  >
                    $ {totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="ml-4">
                <button onClick={handleRemove}>
                  <Image
                    src="/icon-delete.svg"
                    alt="delete"
                    width={14}
                    height={16}
                  />
                </button>
              </div>
            </div>
            <div className="flex mt-4 items-center justify-center">
              <button
                className={`${kumbhSans.variable} font-kumbhSans px-28 py-4 bg-orange-primary rounded-md font-bold text-white text-center`}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Cart;
