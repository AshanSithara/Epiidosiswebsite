"use client";
import React from "react";

const VisionMissionValues: React.FC = () => {
  return (
    <>
    <section className="relative py-12 bg-white-100">
      {/* Title Section */}
      <div className="text-center mb-8">
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Background Image */}
        <div
          className="relative bg-cover bg-center rounded-lg overflow-hidden h-80 md:h-96"
          style={{ backgroundImage: "url('/Blog/FrameBlog.svg')" }}
        >
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

          {/* Card Overlay */}
          <div className="absolute bottom-10 left-8 bg-black text-white px-8 pt-16 rounded-lg w-[50vh] ">
  <div className="mb-4">
    <span className="bg-[#56585C] px-4 py-2 text-xs uppercase rounded-sm">
      Category
    </span>
  </div>
  <h3 className="text-4xl font-semibold mb-6 leading-tight">
    Title goes here of 2024
  </h3>
  <div className="flex items-center justify-between mt-12 mb-6 text-sm ">
  <div className="flex items-center space-x-2">
    <img
      src="/Blog/Circle Avatar.png"
      alt="User Icon"
      className="w-8 h-8 rounded-full"
    />
    <div className="flex flex-col">
      <p className="text-[#56585C] font-extrabold">Lina Hammoud</p>
      <p className="text-[#B4B9C9] text-xs">Aug 18, 2024</p>
    </div>
  </div>

  <button className="p-2 bg-[#56585C] rounded-sm">
    <img
      src={`/Blog/Arrow.svg`}
      alt="Arrow"
      className="w-6 h-6"
    />
  </button>
</div>

</div>

        </div>
      </div>
    </section>
    </>
  );
};

export default VisionMissionValues;
