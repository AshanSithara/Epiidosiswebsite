"use client";
import React from "react";
import Image from 'next/image'; // Import Image from next/image for better optimization
import logo from '../../public/companyLogo.png'; // Adjust the path to your logo
import Link from 'next/link'; // Import Link for navigation

export default function Custom404() {
  return (
    <>
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center p-4"
      style={{
        fontFamily: "Montserrat, sans-serif",
        backgroundImage: "url('/Group.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <h1 className="text-9xl font-bold text-black border-b-4 border-[#CB8511] pb-2 mb-4">
        404
      </h1>
      <p className="mt-2 text-4xl text-black tracking-tight mb-4">
        Page Not Found
      </p>
      <Link href="/" className="bg-[#000000] text-white md:w-72 py-2 mt-4 px-6 font-semibold text-lg">
         Home
      </Link>
    </div>
    </>
  );
}
