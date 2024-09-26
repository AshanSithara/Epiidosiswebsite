"use client";
import React from "react";

interface ButtonProps {
  text: string;
}

const CallToActionButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
    <a
      href="/contact-us"
      className="inline-block bg-yellow-500 hover:bg-[#1A9548] text-white font-bold py-3 px-8 rounded transition duration-300" style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {text}
    </a>
    </>
  );
};

export default CallToActionButton;
