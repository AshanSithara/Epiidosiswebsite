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
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img
            src="/path/to/your/logo.png" // Update this path to your logo
            alt="Epiidosis Investments LLC Logo"
            className="h-12"
          />
        </div>
        <ul className="flex space-x-6 textgray">
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              Invest with us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              Funding solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-#CB8511 transition">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="bg-black p-2 rounded-full text-white hover:bg-#CB8511 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-black p-2 rounded-full text-white hover:bg-#CB8511 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="bg-black p-2 rounded-full text-white hover:bg-#CB8511 transition duration-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-black p-2 rounded-full text-white hover:bg-#CB8511 transition duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-6 text-center text-gray-500 text-sm border-t pt-4">
        <p>
          Copyright © 2024 EPIIDOSIS Investments LLC | All Rights Reserved |{" "}
          <a href="#" className="hover:text-#CB8511 transition underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-#CB8511 transition underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
