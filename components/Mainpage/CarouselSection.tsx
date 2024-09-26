"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const fundingSolutions = [
  {
    id: 1,
    title: "Asset Monetization",
    description:
      "Epiidosis Investments offers a clear, efficient path from registration to fund deployment, ensuring successful project execution and maximum returns. Through expert insights and innovative strategies, we excel in asset monetization, providing customized solutions for optimal returns and sustainable growth.",
    icon: "/icons/asset-monetization-icon.png",
  },
  {
    id: 2,
    title: "Financial Instrument Investment",
    description:
      "In addition to competitive interest rates and flexible repayment options, Epiidosis offers personalized service for loans against listed stocks. You benefit from market growth while retaining stock ownership and leveraging your portfolio through our streamlined process.",
    icon: "/icons/financial-instrument-icon.png",
  },
  {
    id: 3,
    title: "Structured Finance",
    description:
      "Choose Epiidosis for Structured Finance Partnership for liquidity in your company & projects, our specified models bring you the capability as an investment partner to access funds by bringing assets on board, restructuring projects for easy access to our investment model, risk mitigation strategies, and a track record of delivering value, ensuring robust financial health and growth.",
    icon: "/icons/structured-finance-icon.png",
  },
];

const CarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? fundingSolutions.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === fundingSolutions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-4xl font-extrabold textgold mb-4">
          Our Funding Solutions
        </h2>
        <p className="textblack mb-12">
          Discover our curated funding solutions with assets backed securities, providing investors with higher yields and greater stability.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Carousel Content */}
          <div className="flex space-x-8">
            {fundingSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                  index === activeIndex ? "scale-100" : "scale-75 opacity-50"
                }`}
              >
                <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
                  <img
                    src={solution.icon}
                    alt={`${solution.title} Icon`}
                    className="h-12 mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">
                    {solution.title}
                  </h3>
                  <p className="textblack mb-6">
                    {solution.description}
                  </p>
                  <a
                    href="#"
                    className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-0 transform translate-x-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition duration-300"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CarouselSection;
