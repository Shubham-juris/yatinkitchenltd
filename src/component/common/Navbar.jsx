import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-sans">
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div className="text-orange-700 text-xl font-bold">
            Yatin's kitchen
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-2xl text-gray-700" />
              ) : (
                <HiMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-800 font-medium">
              <li>
                <Link to="/" className="hover:text-orange-700">
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
                <Link to="#" className="hover:text-orange-700">
                  Yatin's Gastropub
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm text-gray-700 hidden md:block">
            +1 (780)-312-2121
          </div>
        </header>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden px-6 py-4 bg-white shadow-md">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Menu" onClick={() => setIsOpen(false)} className="hover:text-orange-700">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setIsOpen(false)} className="hover:text-orange-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setIsOpen(false)} className="hover:text-orange-700">
                  Yatin's Gastropub
                </Link>
              </li>
              <li className="text-sm text-gray-700 mt-2">
                +1 (780)-312-2121
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
