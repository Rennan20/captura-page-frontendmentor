"use client";

import { Kumbh_Sans } from "@next/font/google";
import { useMediaQuery } from "react-responsive";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import CartLogo from "../../public/icon-cart.svg";
import { SetStateAction, useState } from "react";
import Cart from "../modals/Cart";
import { FaBars } from "react-icons/fa";
import HamburguerMenu from "./HamburguerMenu";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
});

const Header = () => {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const openCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };
  const handleMouseEnter = (index: number | null) => {
    setActiveElement(index);
  };

  const handleMouseLeave = () => {
    setActiveElement(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderBorder = (index: number | null) => {
    if (activeElement === index) {
      return (
        <>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-primary"></div>{" "}
        </>
      );
    }
  };
  return (
    <>
      {!isMobile && (
        <>
          <header className="relative flex flex-row justify-center items-center  ml-32 mr-32 pt-7 pb-7 border-b border-blue-grayish">
            <section className="mr-12">
              <div>
                <Image src={Logo} alt="logo" height={20} width={138} />
              </div>
            </section>
            <section className="flex flex-1">
              <div className="flex flex-row flex-1 justify-between items-center space-x-8">
                <div className="relative">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish text-base cursor-pointer hover:text-black`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Collections
                  </p>
                  {renderBorder(1)}
                </div>

                <div className="relative">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish text-base cursor-pointer hover:text-black`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Men
                  </p>
                  {renderBorder(2)}
                </div>

                <div className="relative">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish text-base cursor-pointer hover:text-black`}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Women
                  </p>
                  {renderBorder(3)}
                </div>

                <div className="relative">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish text-base cursor-pointer hover:text-black`}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                  >
                    About
                  </p>
                  {renderBorder(4)}
                </div>

                <div className="relative">
                  <p
                    className={`${kumbhSans.variable} font-kumbhSans text-blue-dark-grayish text-base cursor-pointer hover:text-black`}
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                  >
                    Contact
                  </p>
                  {renderBorder(5)}
                </div>
              </div>
            </section>
            <section className="flex flex-1 justify-end">
              <div className="flex flex-row justify-between space-x-8 items-center">
                <div>
                  <Image
                    className="cursor-pointer"
                    src={CartLogo}
                    alt="cart"
                    height={20}
                    width={22}
                    onClick={openCartModal}
                  />
                </div>
                <div>
                  <Image
                    className="cursor-pointer rounded-full hover:border-2 hover:border-orange-primary"
                    src="/image-avatar.png"
                    alt="avatar"
                    height={48}
                    width={48}
                  />
                </div>
              </div>
            </section>
          </header>
        </>
      )}

      {isMobile && (
        <>
          <header className=" flex flex-row items-center mr-2 ml-2 p-4">
            <section className="flex mr-4 ">
              <div className="relative">
                <FaBars
                  className="cursor-pointer"
                  size={20}
                  onClick={toggleMobileMenu}
                />
              </div>
            </section>
            <section className="mr-12">
              <div>
                <Image src={Logo} alt="logo" height={20} width={138} />
              </div>
            </section>
            <section className="flex flex-1 justify-end">
              <div className="flex flex-row justify-between space-x-8 items-center">
                <div>
                  <Image
                    className="cursor-pointer"
                    src={CartLogo}
                    alt="cart"
                    height={20}
                    width={22}
                    onClick={openCartModal}
                  />
                </div>
                <div>
                  <Image
                    className="cursor-pointer rounded-full hover:border-2 hover:border-orange-primary"
                    src="/image-avatar.png"
                    alt="avatar"
                    height={48}
                    width={48}
                  />
                </div>
              </div>
            </section>
          </header>
        </>
      )}
      {isMobileMenuOpen && <HamburguerMenu onClose={toggleMobileMenu} />}

      {isCartModalOpen && <Cart />}
    </>
  );
};

export default Header;
