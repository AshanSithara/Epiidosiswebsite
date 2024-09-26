"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook from next/navigation
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path using usePathname

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
    return pathname === path ? "w-full" : "w-0"; // Check if the current pathname matches the link
  };

  return (
    <nav
      className="bg-white w-full shadow-sm"
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <img
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="w-[162px] h-[48px]"
          />
        </Link>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-base text-gray-800 ml-2">
          <Link href="/invest" className="relative pb-2 group">
            Invest with us
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-all duration-100 group-hover:w-full ${isActive(
                "/invest"
              )}`}
            ></span>
          </Link>
          <Link href="/funding-solutions" className="relative pb-2 group">
            Funding solutions
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-all duration-100 group-hover:w-full ${isActive(
                "/funding-solutions"
              )}`}
            ></span>
          </Link>
          <Link href="/Aboutus" className="relative pb-2 group">
            About us
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-all duration-100 group-hover:w-full ${isActive(
                "/Aboutus"
              )}`}
            ></span>
          </Link>
          <Link href="/resources" className="relative pb-2 group">
            Resources
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-all duration-100 group-hover:w-full ${isActive(
                "/resources"
              )}`}
            ></span>
          </Link>
          <Link href="/contact" className="relative pb-2 group">
            Contact
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-all duration-100 group-hover:w-full ${isActive(
                "/contact"
              )}`}
            ></span>
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-gray-300 h-8 mx-4"></div>

        {/* Login Button */}
        <Link href="/login" className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-[#1A9548]">
            Login
          </button>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-lg text-gray-800 z-40">
          <Link
            href="/invest"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-#CB8511"
          >
            Invest with us
          </Link>
          <Link
            href="/funding-solutions"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            Funding solutions
          </Link>
          <Link
            href="/Aboutus"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            About us
          </Link>
          <Link
            href="/resources"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            <button className="bg-black text-white w-full py-2">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
