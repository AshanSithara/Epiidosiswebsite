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
          Our Process
        </h2>
        <p className="text-gray-700 mb-8 md:mx-60">
        Epiidosis Investments simplifies the investment process with a structured approach. From initial registration and documentation through fund deployment and project management, we ensure transparency and efficiency at every stage.
        </p>
        <div className="relative inline-block">
          <img
            src="/FinancialInstrument/financial.png"
            alt="Investment Process Diagram"
            className="mx-auto md:block hidden"
          />
          <img
            src="/FinancialInstrument/mobile.png" // Image for mobile screens
            alt="Investment Process Diagram"
            className="mx-auto md:hidden block" // Only visible on mobile screens
          />
          {/* Add dummy hover boxes for the 6 highlighted areas with text */}
          <div className="absolute top-[10%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Fill out the online application form with your personal and financial details.Provide information about the stocks you wish to leverage as collateral.
            </span>
          </div>
          <div className="absolute top-[10%] left-[42%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Our team reviews your application and assesses the value and risk associated with your listed stocks.We ensure compliance with regulatory requirements and internal risk management standards.
            </span>
          </div>
          <div className="absolute top-[10%] left-[80%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Upon approval, you will receive notification of your loan offer, detailing terms, interest rates, and repayment options.You may be required to provide additional documentation for verification purposes.
            </span>
          </div>
          <div className="absolute top-[50%] left-[83%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Transfer the listed stocks to our secure custody account as collateral.Our team ensures the proper handling and maintenance of your assets throughout the loan period.
            </span>
          </div>
          <div className="absolute top-[50%] left-[42%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            Once collateral is confirmed, we disburse the approved loan amount directly to your designated bank account.Funds are available for immediate use according to your financial needs.
            </span>
          </div>
          {/* <div className="absolute top-[50%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
            The bank instrument is discounted to the platform within approximately 45-60 days. Epiidosis initiates fund transfers to the asset owner according to the agreed schedule.
            </span>
          </div> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default InvestmentProcess;
