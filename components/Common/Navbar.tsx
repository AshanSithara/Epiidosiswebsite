import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // Add FaChevronDown

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [fundingDropdownOpen, setFundingDropdownOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const [mobileFundingDropdownOpen, setMobileFundingDropdownOpen] = useState(false);
  const [mobileResourceDropdownOpen, setMobileResourceDropdownOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return pathname === "/" ? "font-bold text-black" : "text-gray-800";
      }
      return pathname.startsWith(path) ? "font-bold text-black" : "text-gray-800";
    },
    [pathname]
  );

  const handleFundingDropdownToggle = useCallback(() => {
    setFundingDropdownOpen((prev) => !prev);
    setResourceDropdownOpen(false);
  }, []);

  const handleResourceDropdownToggle = useCallback(() => {
    setResourceDropdownOpen((prev) => !prev);
    setFundingDropdownOpen(false);
  }, []);

  const handleMobileFundingDropdownToggle = useCallback(() => {
    setMobileFundingDropdownOpen((prev) => !prev);
    setMobileResourceDropdownOpen(false);
  }, []);

  const handleMobileResourceDropdownToggle = useCallback(() => {
    setMobileResourceDropdownOpen((prev) => !prev);
    setMobileFundingDropdownOpen(false);
  }, []);

  return (
    <>
    <nav className="bg-white w-full shadow-sm fixed top-0 left-0 z-50" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <Link href="/" passHref>
          <img
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="w-[162px] h-[48px]"
            loading="lazy"
          />
        </Link>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-8 text-base">
          <Link href="/Invest-with-us" className={`relative pb-2 group ${isActive("/Invest-with-us")}`}>
            Invest with us
            <span className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${pathname.startsWith("/Invest-with-us") ? "w-full" : "w-0"}`}></span>
          </Link>

          {/* Funding solutions Dropdown Menu */}
          <div
            className="relative pb-2 group"
            onMouseEnter={handleFundingDropdownToggle}
            onMouseLeave={handleFundingDropdownToggle}
          >
            <Link href="" className={`relative pb-2 ${isActive("/funding-solution")}`}>
              Funding solutions
              <span className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${pathname.startsWith("/funding-solution") ? "w-full" : "w-0"}`}></span>
            </Link>

            {fundingDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg p-4 space-y-2 z-50 transition-opacity duration-300 opacity-100 transform scale-100 w-96">
                <Link href="/funding-solution/asset-monetization" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Asset Monetization
                </Link>
                <Link href="/funding-solution/financial-instrument-investment" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Financial Instrument Investment
                </Link>
                <Link href="/funding-solution/structured-investment" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Structured Investment
                </Link>
              </div>
            )}
          </div>

          <Link href="/about-us" className={`relative pb-2 group ${isActive("/about-us")}`}>
            About us
            <span className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${pathname.startsWith("/about-us") ? "w-full" : "w-0"}`}></span>
          </Link>

          {/* Resource Dropdown Menu */}
          <div
            className="relative pb-2 group"
            onMouseEnter={handleResourceDropdownToggle}
            onMouseLeave={handleResourceDropdownToggle}
          >
            <Link href="" className={`relative pb-2 ${isActive("/our-blogs")}`}>
              Resource
              <span className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${pathname.startsWith("/our-blogs") ? "w-full" : "w-0"}`}></span>
            </Link>

            {resourceDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg p-4 space-y-2 z-50 transition-opacity duration-300 opacity-100 transform scale-100 w-96">
                <Link href="/our-blogs" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Blog & Insight
                </Link>
                <Link href="/resources-media-announcement" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Media & Announcement
                </Link>
                <Link href="/Resources/knowledge-base" className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded transition-all">
                  Knowledge Base
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" className={`relative pb-2 group ${isActive("/contact-us")}`}>
            Contact
            <span className={`absolute left-0 bottom-0 h-[2px] bg-[#CB8511] transition-transform duration-100 group-hover:w-full ${pathname.startsWith("/contact-us") ? "w-full" : "w-0"}`}></span>
          </Link>
        </div>

        {/* Login Button (visible on both desktop and mobile) */}
        {/* <Link href="/login" className="mr-4 md:mr-0">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-[#1A9548] transition-all duration-200">
            Login
          </button>
        </Link> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-lg text-gray-800 z-40 transition-opacity duration-300 ease-in-out">
          {/* Close button */}
          <button 
            onClick={closeMenu}
            className="absolute top-4 right-6 text-gray-800 hover:text-black"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          <Link href="/Invest-with-us" onClick={closeMenu} className={`w-full text-center py-4 hover:bg-gray-200 ${isActive("/Invest-with-us")}`}>
            Invest with us
          </Link>

          {/* Mobile Funding solutions Dropdown */}
          <div className="w-full text-center py-4 relative">
            <button onClick={handleMobileFundingDropdownToggle} className="w-full text-center flex items-center justify-center hover:bg-gray-200">
              Funding solutions
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${mobileFundingDropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {mobileFundingDropdownOpen && (
              <div className="w-full bg-gray-100 text-center space-y-2 px-4 py-2">
                <Link href="/asset-monetization" onClick={closeMenu} className="block py-2">Asset Monetization</Link>
                <Link href="/asset-monetization/financial-instrument-investment" onClick={closeMenu} className="block py-2">Financial Instrument Investment</Link>
                <Link href="/asset-monetization/structured-investment" onClick={closeMenu} className="block py-2">Structured Investment</Link>
              </div>
            )}
          </div>

          <Link href="/about-us" onClick={closeMenu} className={`w-full text-center py-4 hover:bg-gray-200 ${isActive("/about-us")}`}>
            About us
          </Link>

          {/* Mobile Resource Dropdown */}
          <div className="w-full text-center py-4 relative">
            <button onClick={handleMobileResourceDropdownToggle} className="w-full text-center flex items-center justify-center hover:bg-gray-200">
              Resource
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${mobileResourceDropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {mobileResourceDropdownOpen && (
              <div className="w-full bg-gray-100 text-center space-y-2 px-4 py-2">
                <Link href="/our-blogs" onClick={closeMenu} className="block py-2">Blog & Insight</Link>
                <Link href="/resources-media-announcement" onClick={closeMenu} className="block py-2">Media & Announcement</Link>
                <Link href="/Resources/knowledge-base" onClick={closeMenu} className="block py-2">Knowledge Base</Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" onClick={closeMenu} className={`w-full text-center py-4 hover:bg-gray-200 ${isActive("/contact-us")}`}>
            Contact
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
