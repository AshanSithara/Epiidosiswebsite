"use client";
import React from "react";

const ThankYou: React.FC = () => {
  return (
     <>
    <section className="py-12 bg-white" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
  <div className="container mt-20 mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left side (Image) */}
      <div className="flex justify-center">
        <img
          src="/contactus/image.svg"
          alt="Thank you"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right side (Thank you text) */}
      <div className="flex flex-col justify-center p-20 text-center md:text-left">
        <h1 className="text-4xl textgold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600"style={{
      fontFamily: "Lato, sans-serif",
    }}>
          We are glad to receive your message. We’ll be in touch with you soon.
        </p><br />
        <button
          onClick={() => window.location.href = '/'} // replace with your actual return URL
          className="bg-[#201E1F] hover:bg-[#1A9548] text-white font-bold md:w-40 py-2 px-4 rounded"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Return to page
        </button>
      </div>
    </div>
  </div>
</section>
</>

  );
};
export default ThankYou;
