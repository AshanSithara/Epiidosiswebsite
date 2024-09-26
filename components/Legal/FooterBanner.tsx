"use client";
import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
    <section className="bg-black py-12 my-12  max-w-[1300px] mx-auto rounded">
      <div className="container  text-center mb-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
        Build a Brighter Future with Us
        </h2>
        <a
          href="/Contactus"
          className="bg-[#CB8511] text-white px-8 py-3 hover:bg-[#1A9548] transition font-bold duration-300 rounded" style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
    </>
  );
};

export default FooterBanner;
