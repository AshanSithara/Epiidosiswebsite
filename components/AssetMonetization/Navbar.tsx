"use client";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
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

        {/* Navbar Links */}
        <div className="flex space-x-8 text-sm text-gray-800">
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
        </div>

        {/* Login Button */}
        <Link href="/login">
          <button className="bg-black text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
