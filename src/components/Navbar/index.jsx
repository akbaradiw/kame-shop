import React, { useState } from "react";
import "./style.css";
import { GiTurtle } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pb-14">
      <nav className="bg-white shadow-zinc-100 shadow-sm text-emerald-600 z-50 fixed w-full ">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <Link to={"/"}>
              <div className="flex gap-3 pt-4 pb-3 items-center">
                <GiTurtle className="text-4xl text-emerald-600" />
                <h1 className="font-bold text-lg text-emerald-600 pt-1 italic">
                  KAME SHOP
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 gap-3">
              <div className="pt-1">
                <Link to={"/"}>
                  <IoHomeOutline className="text-2xl shadow-sm hover:text-red-500  text-emerald-600" />
                </Link>
              </div>
              <div className="pt-1">
                <Link to={"/login"}>
                  <SlUser className="text-2xl shadow-sm hover:text-blue-600  text-emerald-600" />
                </Link>
              </div>
              <div className="p-1 hover:outline-1 hover:outline-black ">
                <Link to={"/products"}>
                  <p
                    href="#"
                    className="text-emerald-600 hover:text-black   font-semibold"
                  >
                    Products
                  </p>
                </Link>
              </div>
              <div className="pt-1">
                <Link to={"/cart"}>
                  <TiShoppingCart className="text-2xl shadow-sm hover:text-black  text-emerald-600" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bottom-0 sm:px-3">
            <Link
              to={"/"}
              className="block px-3 py-2 text-lg  hover:bg-gray-70 "
            >
              Home
            </Link>
            <Link
              to={"login"}
              className="block px-3 py-2 text-lg  hover:bg-gray-700 "
            >
              Login
            </Link>
            <Link
              to={"/products"}
              className="block px-3 py-2  text-lg  hover:bg-gray-700"
            >
              Products
            </Link>
            <Link
              to={"/cart"}
              className="block px-3 py-2 rounded-md text-base font-medium "
            >
              <TiShoppingCart className="text-3xl  hover:text-black  text-emerald-600" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
