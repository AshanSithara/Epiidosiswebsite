"use client";
import React from "react";

const SuccessPage: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center mb-20"
      style={{ backgroundImage: "url('/image.svg')" } } // replace with your image source
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1
          className="text-3xl md:text-4xl leading-tight font-bold mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Thank You!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are glad to receive your message. We'll be in touch with you soon.
        </p>
        <button
          onClick={() => window.location.href = '/'} // replace with your actual return URL
          className="bg-[#CB8511] hover:bg-[#1A9548] text-white font-bold py-2 px-4 rounded"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Return to page
        </button>
      </div>
    </section>
    </>
  );
};

export default SuccessPage;
