"use client";
import React from "react";

const LatestArticles: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h2
              className="text-4xl font-extrabold text-[#56585C]"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Latest articles
            </h2>
            {/* Category filters */}
            <div className="flex space-x-2">
              <button className="bg-[#56585C] text-white py-1 px-3 rounded-md font-bold">
                Latest
              </button>
              <button className="bg-[#F8FAFF] text-[#56585C] py-1 px-3 rounded-md font-bold">
                Category
              </button>
              <button className="bg-[#F8FAFF] text-[#56585C] py-1 px-3 rounded-md font-bold">
                Category
              </button>
              <button className="bg-[#F8FAFF] text-[#56585C] py-1 px-3 rounded-md font-bold">
                Category
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t pt-12">
          {/* Article Card */}
          {Array(6)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border-2 border-[#E1E4ED] overflow-hidden relative group"
              >
                <img
                  src={`/Blog/image${idx + 1}.png`}
                  alt="Article Image"
                  className="w-full h-48 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19213D] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="p-4 relative z-10">
                  <span className="bg-gray-200 text-gray-800 text-xs uppercase px-2 py-1 rounded-full mb-2 inline-block">
                    Personal Finance
                  </span>
                  <h3
                    className="text-lg text-[#56585C] font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Typography in web design: Enhancing UI/UX web apps
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit justo
                    quis odio sit sit at porttitor sit males dolor sit.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                      className="text-[#B4B9C9] font-bold"
                    >
                      Jan 24, 2024
                    </span>
                    <button className="">
                      <span className="material-icons text-gray-600">
                        <img
                          src={`/Blog/ButtonIcon.png`}
                          alt="Arrow"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
