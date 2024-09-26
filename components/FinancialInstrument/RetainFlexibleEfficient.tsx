"use client";
import React from "react";

const RetainFlexibleEfficient: React.FC = () => {
  return (
    <>
    <section className="py-12 bg-white-100" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl mb-2 textgold text-center" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Financial Instrument Investment</h2>
        <p className="text-gray-600 mb-8 md:mx-60 text-center" >
        Financial instruments (Listed Stocks, Bonds, Debentures, ETFs) investment is a method of raising and borrowing funds using financial assets as collateral.The underlying assets remain in its ownership. This can raise capital without selling assets outright.</p>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          
          {/* Vision Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/FinancialInstrument/abstrack1.svg" 
              alt="Our Vision Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Retain Portfolio Ownership</h3>
            <p className="text-gray-600 text-justify">
            Preserve your investment strategy without selling your assets. Our financial instrument investments allow you to access immediate funds while keeping full ownership of your securities and financial assets.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/FinancialInstrument/abstrack2.svg" 
              alt="Our Mission Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Flexible Fund Utilization</h3>
            <p className="text-gray-600 text-justify" >
            Whether you're looking to make new investments, consolidate debt, or cover personal expenses, our solution offers the flexibility to meet your diverse financial needs.
            </p>
          </div>
          
          {/* Core Values Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/FinancialInstrument/abstrack3.svg" 
              alt="Core Values Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Efficient and Competitive</h3>
            <p className="text-gray-600 text-justify" >
            Our streamlined process, combined with competitive rates, ensures that you can secure investment quickly and efficiently, with minimal impact on your existing investments.
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default RetainFlexibleEfficient;
