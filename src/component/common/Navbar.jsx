import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-40 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center z-50">
      <div className="text-orange-500 text-3xl font-bold">
            Yatin's kitchen
          </div>

          <div className="md:hidden ">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-2xl text-gray-700" />
              ) : (
                <HiMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-800 font-medium ">
              <li>
                <Link to="/" className="hover:text-orange-700 ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Menu" className="hover:text-orange-700">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-orange-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Gastropub" className="hover:text-orange-700">
                  Yatin's Gastropub
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm text-gray-700 hidden md:block">
            +1 (780)-312-2121
          </div>
        </header>

        {isOpen && (
          <div className="md:hidden px-6 py-4 bg-white shadow-md mt-15">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-700"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Gastropub"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-700"
                >
                  Yatin's Gastropub
                </Link>
              </li>
              <li className="text-sm text-gray-700 mt-2">+1 (780)-312-2121</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
