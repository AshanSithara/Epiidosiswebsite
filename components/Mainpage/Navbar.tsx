"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <img
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="h-16"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-800">
          <Link href="/invest" className="hover:text-blue-600">
            Invest with us
          </Link>
          <Link href="/funding-solutions" className="hover:text-blue-600">
            Funding solutions
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About us
          </Link>
          <Link href="/resources" className="hover:text-blue-600">
            Resources
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-lg text-gray-800 z-40">
            <Link href="/invest" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              Invest with us
            </Link>
            <Link href="/funding-solutions" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              Funding solutions
            </Link>
            <Link href="/about" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              About us
            </Link>
            <Link href="/resources" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              Resources
            </Link>
            <Link href="/contact" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              Contact
            </Link>
            <Link href="/login" onClick={closeMenu} className="w-full text-center py-4 hover:bg-gray-200">
              <button className="bg-black text-white w-full py-2">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
