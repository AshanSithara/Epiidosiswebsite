"use client";
import React from "react";

// Updated teamMembers array with necessary changes
const teamMembers = [
  {
    name: "Geoffery Ganga",
    title: "With 22 years in Sub-Saharan Africa, Geoffrey has led $9bn in M&A and corporate finance transactions. Having worked in over 30 African countries, including South Africa, Nigeria, and Kenya, he excels in business strategy, development, and negotiation.",
    image: "/linkedin-icon/image1.png", // Replace with the actual image path
  },
  {
    name: "Jithendra Antonio",
    title: "His experience spans FMCG, Telecommunications, Media, Investment Banking, Real Estate, and Financial Services with 18+ years in senior management. He excels at strategic planning, brand management, stakeholder relations, and sales growth.",
    image: "/linkedin-icon/image2.png", // Replace with the actual image path
  },
  {
    name: "Anil Mittal",
    title: "Anil Mittal has over 40 years of experience in corporate finance, industrial credit, retail banking, IT implementation, risk management, and compliance. He has extensive experience in credit functions, financial analysis, and project finance.",
    image: "/linkedin-icon/image3.png", // Replace with the actual image path
  },
  {
    name: "K.N Suvarna",
    title: "K. N. Suvarna boasts over 50 years in banking and finance. At Brickwork Ratings India, he expanded operations nationwide. With a 40-year tenure at Bank of Baroda, he advanced from stenographer to General Manager.",
    image: "/linkedin-icon/image4.png", // Replace with the actual image path
  },
];

const InvestmentTeam: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Adjusted Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 text-center mb-16">
          Advisory Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap for more space between cards */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 flex relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover absolute -top-6  border-4 border-white" // Adjusted to move the image more to the right
              />
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <img src="/linkedin-icon/bi_linkedin.png" alt="LinkedIn" className="ml-2 w-4 h-4"/> {/* Replace with the LinkedIn icon path */}
                </div>
                <p className="text-gray-700 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTeam;
