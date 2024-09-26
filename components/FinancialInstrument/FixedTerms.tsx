"use client";
import React, { useState } from "react";

const FixedTerms: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "Competitive Rates",
      details:
        "Market-Linked: Interest rates are typically aligned with current market conditions, ensuring they are competitive relative to industry standards. Negotiated Terms: Rates can often be negotiated based on the borrower's credit profile, the value of the collateral, and the overall loan terms",
    },
    {
      title: "Flexibility in Rates",
      details:
        "Fixed vs. Variable: Epiidosis offers both fixed and variable interest rate options. Fixed rates provide stability with predictable payments, while variable rates can offer lower initial costs but may fluctuate with market conditions. Customizable Terms: The firm can tailor the rate structure to match your specific needs, including the loan term and repayment schedule",
    },
    {
      title: "Impact of Collateral Quality",
      details:
        "Higher Quality Collateral: The higher quality or less volatile stocks can result in more favorable interest rates due to lower risk for the lender. Diversified Portfolios: Well-diversified stock portfolios may also qualify for better rates as they spread risk across various investments",
    },
    {
      title: "Transparent Pricing",
      details:
        "No Hidden Fees: Epiidosis Investments is committed to transparency, providing clear information about interest rates and any associated fees, so you know exactly what to expect.",
    },
    {
      title: "Additional Factors",
      details:
        "Borrower’s Financial Profile: Your credit history, financial stability, and overall borrowing profile can influence the interest rate you receive. Loan Size and Term: Larger loan amounts and longer terms might come with different rate structures, potentially impacting the interest rates offered.",
    },
  ];

  return (
    <>
    <section className="py-4 bg-white"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Image Container */}
          <div className="flex items-start w-full mt-4">
            <img 
              src="/invest/fixed.svg" 
              alt="Value Image" 
              className="w-full h-full rounded-sm hidden md:block"
            />
          </div>
          
          {/* Text Content Container */}
          <div className="flex flex-col">
            <div>
              <h2 className=" textgold mb-4">
              Fixed Terms and ROI
              </h2>
              <p className="text-[#201E1F] mb-6"style={{
      fontFamily: "Lato, sans-serif",
    }}>
              By assessing the below criteria, Epiidosis ensures that it partners with clients who can manage the risks associated with financial instrument investment while maintaining ownership of their assets. Each investment product and client's circumstances may require different requirements
              </p>
            </div>
  
            <div>
              {items.map((item, index) => (
                <div key={index} className="mb-6 cursor-pointer group">
                  <div className="flex items-center font-medium text-gray-800 ml-8">
                    <span
                      className="inline-block h-0.5 w-3 bg-green-600 mr-3 transition-all duration-300 ease-in-out  group-hover:w-9"
                    ></span>
                    <span className="group-hover:font-bold">
                      {item.title}
                    </span>
                  </div>
                  {/* Details are shown on hover */}
                  <div className="ml-8 hidden group-hover:block transition-all duration-300 ease-in-out">
                    <p className="mt-2 text-[#56585C]">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  );
}  

export default FixedTerms;



