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
            src="/companyLogo.png"
            alt="Epiidosis Investments LLC Logo"
            className="h-12"
          />
        </div>
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#" className="hover:textgold transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:textgold transition">
              Invest with us
            </a>
          </li>
          <li>
            <a href="#" className="hover:textgold transition">
              Funding solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:textgold transition">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:textgold transition">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:textgold transition">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 text-gray-600 mt-4 md:mt-0">
          <a href="#" className="hover:textgold transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:textgold transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:textgold transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:textgold transition">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-6 text-center text-gray-500 text-sm border-t pt-4">
        <p>
          Copyright © 2024 EPIIDOSIS Investments LLC | All Rights Reserved |{" "}
          <a href="#" className="hover:textgold transition">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="hover:textgold transition">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
