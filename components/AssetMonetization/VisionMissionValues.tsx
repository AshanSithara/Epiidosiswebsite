"use client";
import React from "react";

const VisionMissionValues: React.FC = () => {
  return (
    <>
    <section className="py-12 bg-white" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-2 text-#CB8511" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Why Choose Epiidosis?</h2>
        <p className="text-gray-600 mb-8">
          Our track record of maximizing asset values is complemented by tailored strategies and expert financial insight.
          We optimize your assets for the best returns, making us a trusted financial partner.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise in Diversified Asset Classes */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Expertise in Diversified Asset Classes</h3>
            <p className="text-gray-600 hover:text-white">
              From real estate and equities to intellectual property and digital assets, our team has a deep understanding
              of various asset classes. Using this expertise, assets can be monetized across a wide range.
            </p>
          </div>

          {/* Global Network */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Global Network</h2>
            <p className="text-gray-600 hover:text-white">
              Epiidosis Investments has a large network of industry contacts and investors to connect clients with the right
              buyers, partners, or financiers. As a result of this global reach, investors have more opportunities to monetize assets.
            </p>
          </div>

          {/* Strong Market Insights */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Strong Market Insights</h3>
            <p className="text-gray-600 hover:text-white">
              We identify the best opportunities for asset monetization based on comprehensive market research.
              By understanding market dynamics, our team can time asset sales or leases to maximize profits.
            </p>
          </div>

          {/* Innovative Financial Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Innovative Financial Solutions</h3>
            <p className="text-gray-600 hover:text-white">
              We offer a range of innovative financial solutions, including securitization, sale-leasebacks, and asset-backed loans.
              In addition to allowing flexibility in unlocking liquidity from assets, these solutions also offer options that do not require selling the assets outright.
            </p>
          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="mt-8">
          <button className="bg-#CB8511 text-white py-2 px-6 hover:bg-yellow-700">
            Get in touch
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default VisionMissionValues;
