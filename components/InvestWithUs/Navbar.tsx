"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Memoize active link check function
  const isActive = useCallback(
    (path: string) =>
      pathname === path
        ? "w-full font-bold text-black" // Active link style: bold
        : "w-0",
    [pathname]
  );

  const handleDropdownMouseEnter = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  return (
    <nav className="bg-white w-full shadow-sm fixed top-0 left-0 z-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        <Link href="/" passHref>
          <img
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="w-[162px] h-[48px]"
            loading="lazy"
          />
        </Link>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-base text-black ml-2">
          <Link href="/Investwithus" className="relative pb-2 group">
            Invest with us
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${isActive(
                "/Investwithus"
              )}`}
            ></span>
          </Link>

          <div
            className="relative pb-2 group"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <Link href="/FundingSolution" className="relative pb-2">
              Funding solutions
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${isActive(
                  "/FundingSolution"
                )}`}
              ></span>
            </Link>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg p-4 space-y-2 z-50 transition-opacity duration-300 opacity-100 transform scale-100 w-96">
                <Link
                  href="/FundingSolution"
                  className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all"
                >
                  Asset Monetization
                </Link>
                <Link
                  href="/FinancialInstrument"
                  className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all"
                >
                  Financial Instrument Investment
                </Link>
                <Link
                  href="/StructuredInvestment"
                  className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all"
                >
                  Structured Investment
                </Link>
              </div>
            )}
          </div>

          <Link href="/Aboutus" className="relative pb-2 group">
            About us
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${isActive(
                "/Aboutus"
              )}`}
            ></span>
          </Link>
          <Link href="/Resources" className="relative pb-2 group">
            Blog
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${isActive(
                "/Resources"
              )}`}
            ></span>
          </Link>
          <Link href="/Contactus" className="relative pb-2 group">
            Contact
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${isActive(
                "/Contactus"
              )}`}
            ></span>
          </Link>
        </div>

        <div className="hidden md:block border-gray-300 h-8 mx-4"></div>

        <Link href="/login" className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-[#1A9548] transition-all duration-200">
            Login
          </button>
        </Link>

        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-lg text-gray-800 z-40 transition-opacity duration-300 ease-in-out">
          <Link
            href="/Investwithus"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-#CB8511"
          >
            Invest with us
          </Link>
          <Link
            href="/FundingSolution"
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
            href="/Resources"
            onClick={closeMenu}
            className="w-full text-center py-4 hover:bg-gray-200"
          >
            Blog
          </Link>
          <Link
            href="/Contactus"
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

export default React.memo(Navbar);
