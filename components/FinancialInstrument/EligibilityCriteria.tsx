"use client";
import React from "react";

const EligibilityCriteria: React.FC = () => {
  const leftItems = [
    {
      title: "Asset Quality",
      details:
        "Financial Instruments: Clients must have high-quality financial instruments, such as blue-chip stocks, investment-grade bonds, or stable ETFs. The instruments should be liquid and have a reliable market value. Collateral Value: The value of the financial instruments must meet or exceed a minimum threshold to be considered as collateral for investment. This might involve a minimum portfolio value or loan-to-value (LTV) ratio.",
    },
    {
      title: "Creditworthiness",
      details:
        "Credit History: Epiidosis may require clients to have a strong credit history, with a record of timely payments and responsible credit usage. A high credit score could be essential for qualifying for favorable loan terms. Debt-to-Equity Ratio: For corporate clients, Epiidosis might assess the debt-to-equity ratio to ensure the company is not overly leveraged, which could pose a risk to loan repayment.",
    },
    {
      title: "Financial Stability",
      details:
        "Income or Revenue: Clients should demonstrate a stable income or revenue stream to ensure they can service the debt. This could be through regular earnings, dividends, or other income sources. Liquidity: The client should have sufficient liquidity to cover interest payments and potential margin calls if the value of the collateral declines.",
    },
    {
      title: "Purpose of Investment",
      details:
        "Use of Funds: The purpose of the investment should align with Epiidosis’s risk management and investment policies. Investment for speculative or high-risk activities might not be eligible, while funds used for business expansion, strategic investments, or other low-risk activities might be favored.",
    },
    {
      title: "Client Profile",
      details:
        "Net Worth: Epiidosis might require clients to have a minimum net worth, ensuring they have sufficient assets to manage potential risks associated with leveraged positions. Experience: The client’s experience in managing financial instruments and understanding the risks involved in leveraging assets could be a factor. Sophisticated or institutional investors may have different requirements compared to individual or retail clients.",
    },
  ];

  const rightItems = [
    {
      title: "Geographic & Regulatory Compliance",
      details:
        "Location: Epiidosis may have geographic restrictions, only offering services to clients in certain jurisdictions. Clients must comply with local regulations and provide necessary documentation. Regulatory Requirements: Clients must meet all regulatory requirements, including anti-money laundering (AML) and know your customer (KYC) checks. Proper identification and financial documentation are mandatory.",
    },
    {
      title: "Relationship with Epiidosis",
      details:
        "Existing Clients: Clients with an existing relationship with Epiidosis, such as those who already use its investment or advisory services, might have easier access to investment options. Reputation: A client’s reputation and standing in the market could also be considered, especially for corporate clients.",
    },
    {
      title: "Minimum Transaction Size",
      details:
        "Loan Amount: There may be a minimum loan or investment amount required to qualify for certain products. Smaller investment needs might not meet the threshold for Epiidosis’s offerings.",
    },
    {
      title: "Documentation and Due Diligence",
      details:
        "Required Documentation: Clients must provide comprehensive documentation, including financial statements, asset valuations, and legal documents. Due Diligence: Epiidosis will conduct thorough due diligence to assess the risk associated with the client’s financial instruments and overall financial situation.",
    },
  ];

  return (
    <>
    <section className="py-12 bg-white mt-28"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Centered Heading */}
        <div className="flex flex-col justify-center items-center">
          <h2
            className="textgold mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Eligibility Criterion
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl md:mx-60">
            By assessing the below criteria, Epiidosis ensures that it partners
            with clients who can manage the risks associated with financial
            instrument investment while maintaining ownership of their assets.
            Each investment product and client's circumstances may require
            different requirements
          </p>
        </div>

        {/* Centered Grid Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl text-left">
            {/* Left Column */}
            <div className="space-y-6">
              {leftItems.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center font-medium text-gray-800 ml-0 md:ml-8">
                    <span
                      className="inline-block h-0.5 w-3 bg-green-600 mr-3 transition-all duration-300 ease-in-out group-hover:w-9"
                    ></span>
                    <span className="group-hover:font-bold" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
                      {item.title}
                    </span>
                  </div>
                  <div
                    className="max-h-0 overflow-hidden group-hover:max-h-screen group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out"
                    style={{ width: "100%" }} 
                  >
                    <p className="mt-2 text-gray-600 ml-0 md:ml-6">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center font-medium text-gray-800">
                    <span
                      className="inline-block h-0.5 w-3 bg-green-600 mr-3 transition-all duration-300 ease-in-out group-hover:w-9"
                    ></span>
                    <span className="group-hover:font-bold" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
                      {item.title}
                    </span>
                  </div>
                  <div
                    className="max-h-0 overflow-hidden group-hover:max-h-screen group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out"
                    style={{ width: "100%" }} 
                  >
                    <p className="mt-2 text-gray-600 ml-0 md:ml-6">
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
};

export default EligibilityCriteria;
