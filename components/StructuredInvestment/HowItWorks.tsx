"use client";
import React from "react";

const InvestmentProcess: React.FC = () => {
  return (
    <>
    <section className="py-8 bg-white-100 relative"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl textgold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          How It Works?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 md:mx-60">
        We simplify investing with a structured, step-by-step approach. To maximize the success of your project, we ensure transparency, efficiency, and strategic execution
        </p>
        <div className="relative inline-block">
          <img
            src="/StructuredInvestment/structured.png"
            alt="Investment Process Diagram"
            className="mx-auto md:block hidden"
          />
          <img
            src="/StructuredInvestment/mobile.png" // Image for mobile screens
            alt="Investment Process Diagram"
            className="mx-auto md:hidden block" // Only visible on mobile screens
          />
          {/* Add hover boxes for the 9 highlighted areas with text */}
          
          <div className="absolute top-[10%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Sign up and complete KYC verification.Provide company information and upload necessary documents.
            </span>
          </div>
          <div className="absolute top-[10%] left-[35%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Documents undergo review and verification.Pay the onboarding fee upon successful verification.
            </span>
          </div>
          <div className="absolute top-[10%] left-[60%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left  text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Receive and review indicative term sheet and service contract.Sign the agreement to proceed with the investment process
            </span>
          </div>
          <div className="absolute top-[10%] left-[83%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Submit processing fee for legal and financial structuring.Sign the investment agreement for funding.
            </span>
          </div>
          <div className="absolute top-[60%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Funds become available for project management as per requirements.
            </span>
          </div>
          
          <div className="absolute top-[60%] left-[35%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Pledge required security and issue funded financial bank guarantee.Leverage assets for better fund procurement.
            </span>
          </div>
          <div className="absolute top-[60%] left-[60%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Project undergoes assessment and risk underwriting.
            </span>
          </div>
          <div className="absolute top-[60%] left-[83%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-left text-xs px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Funds are deployed to the project's Special Purpose Vehicle (SPV).Initiate SPV setup including legal documentation
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InvestmentProcess;
