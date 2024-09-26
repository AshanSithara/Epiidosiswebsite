"use client";
import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
    <section className="bg-black py-12 my-12  max-w-[1300px] mx-auto rounded" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div className="container  text-center mb-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
        Earn annual ROI up to 30% on <br /> your investments
        </h2>
        <a
          href="/Invest-with-us"
          className="bg-[#CB8511] text-white px-8 font-bold py-3 hover:bg-[#1A9548] transition duration-300 rounded"
        >
          Start Now
        </a>
      </div>
    </section>
    </>
  );
};

export default FooterBanner;
