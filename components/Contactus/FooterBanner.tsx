"use client";
import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
    <section className="bg-black py-12 max-w-[1300px] mx-auto rounded">
      <div className="container  text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Build a Brighter Future with Us
        </h2>
        <a
          href="/Contactus"
          className="bg-[#CB8511] font-bold text-white px-8 py-3 hover:bg-[#1A9548] transition duration-300 rounded"
        >
          Get in touch
        </a>
      </div>
    </section>
    </>
  );
};

export default FooterBanner;
