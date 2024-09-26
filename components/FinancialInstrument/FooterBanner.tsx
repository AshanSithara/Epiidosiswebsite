"use client";
import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
    <section className="bg-black py-12 my-12  max-w-[1300px] mx-auto rounded">
      <div className="container  text-center mb-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Build a Brighter Future with Us
        </h2>
        <a
          href="/contact-us"
          className="bg-[#CB8511] text-white font-bold px-8 py-3 hover:bg-[#1A9548] transition duration-300 rounded"
        >
          Get in touch
        </a>
      </div>
    </section>
    </>
  );
};

export default FooterBanner;
