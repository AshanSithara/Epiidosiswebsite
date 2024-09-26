"use client";
import React from "react";

const FinancialInstrumentInvestment: React.FC = () => {
  return (
    <>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center" style={{
      fontFamily: "Lato, sans-serif",
    }}>
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl mb-2 textgold" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>What Makes Epiidosis Different</h2>
        <p className="text-gray-600 mb-8 md:mx-60">
        By using financial instruments, our team facilitates lending of funds. Our expertise in structured finance, asset management, and advisory services makes this possible. Here's what makes us stand out.</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise in Diversified Asset Classes */}
          <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
            <h3 className="text-xl font-bold mb-4"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Tailored financial solutions</h3>
            <p>
            We work closely with clients to understand their specific financial needs, risk tolerance, and long-term goals. This allows them to design customized investment solutions that leverage client assets as collateral.</p>
          </div>

          {/* Global Network */}
          <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
            <h2 className="text-xl font-bold mb-4"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Global Reach and Local Expertise</h2>
            <p>
            Clients have access to a wide range of investment options and markets through Epiidosis' global network. Our local expertise ensures compliance and optimized investment solutions for each client.</p>
          </div>

          {/* Strong Market Insights */}
          <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
            <h3 className="text-xl font-bold mb-4"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Asset Management and Advisory</h3>
            <p>
            Our portfolio management services optimize collateral management, aiming to maintain or enhance its value. We also provide guidance on mitigating potential losses or margin calls.</p>
          </div>

          {/* Innovative Financial Solutions */}
          <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
            <h3 className="text-xl font-bold mb-4"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Client Education and Support</h3>
            <p>
            We offer resources and guidance on financial instruments, enabling clients to make informed decisions. Our investment managers monitor collateral performance, provide market insights, and adjust strategies to optimize outcomes.</p>
          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="mt-8">
          <button className="bg-[#CB8511] text-white py-2 font-bold px-6 rounded-sm hover:bg-[#1A9548]" style={{
          fontFamily: "Montserrat, sans-serif",
        }}>
              <a href="/funding-solution/financial-instrument-investment/contact-us"> Get in touch</a>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default FinancialInstrumentInvestment;
