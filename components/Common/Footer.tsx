"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
    <footer className="bg-white py-2" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="mb-4 md:mb-0 flex justify-center md:justify-start">
          <img
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="h-12"
          />
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-center md:text-left">
          <li>
            <a href="/" className="hover:text-[#CB8511] transition">
              Home
            </a>
          </li>
          <li>
            <a href="/Invest-with-us" className="hover:text-[#CB8511] transition">
              Invest with us
            </a>
          </li>
          <li>
            <a href="/asset-monetization" className="hover:text-[#CB8511] transition">
              Funding solutions
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:text-[#CB8511] transition">
              About us
            </a>
          </li>
          <li>
            <a href="/our-blogs" className="hover:text-[#CB8511] transition">
              Resources
            </a>
          </li>
          <li>
            <a href="/contact-us" className="hover:text-[#CB8511] transition">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-[#CB8511] transition bg-black w-7 h-7 flex items-center justify-center rounded text-white">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 mt-8 text-center text-gray-500 text-sm border-t pt-4">
        <p>
          Copyright © 2024 EPIIDOSIS Investments LLC | All Rights Reserved |{" "}
          <a href="/Legal" className="text-[#CB8511] transition underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="/Legal" className="text-[#CB8511] transition underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="https://erp.epiidosisinvestments.com/web/login" className="text-black transition underline">
            Employee Login
          </a>
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
