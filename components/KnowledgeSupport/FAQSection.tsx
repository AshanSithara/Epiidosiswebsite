import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, isActive, onClick }) => (
  <div 
    className={`w-full py-2 px-4 text-left cursor-pointer rounded-lg font-bold ${isActive ? 'bg-[#E8F6FC] text-black' : 'bg-white'}`}
    onClick={onClick}
  >
    {text}
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0 container">
    <div 
      className="py-3 flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <p className={`text-lg font-medium ${isOpen ? 'text-green-500' : 'text-gray-600'}`}>{question}</p>
      {isOpen ? <ChevronUp className="h-4 w-4 text-blue-500" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
    </div>
    {isOpen && (
      <div className="py-2 text-base text-gray-500 pb-3">
        {answer}
      </div>
    )}
  </div>
);

type FAQData = {
  [key: string]: { question: string; answer: string }[];
};

const FAQSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('Asset Monetization');
  const [openItem, setOpenItem] = useState<number | null>(null);
  const navItems: string[] = ['Asset Monetization', 'Structured Financing', 'Financial Instrument Investment'];

  const faqData: FAQData = {
    'Asset Monetization': [
      {
          "question": "What is Asset Monetization?",
          "answer": "Asset monetization is the process of converting tangible or intangible assets into cash or financial instruments to unlock their value."
        },
        {
          "question": "Who can participate in Epiidosis Investments LLC's Asset Monetization?",
          "answer": "Epiidosis Investments LLC offers its Asset Monetization services to asset owners seeking to unlock the value of their assets, including companies across various sectors."
        },
        {
          "question": "What are the prerequisites for onboarding?",
          "answer": "Prior to onboarding, users must register or log in to the Asset Monetization dashboard and complete KYC verification to ensure compliance with regulatory requirements."
        },
        {
          "question": "What information is required during the onboarding phase?",
          "answer": "Users are required to provide detailed information about the asset company, including title chain, company KYC, government registrations and approvals, financial statements, and existing loan details."
        },
        {
          "question": "How does Epiidosis extend a formal offer to the asset company?",
          "answer": "Epiidosis extends a formal offer to the asset company after reviewing the provided information and assessing the potential for engagement through its Investment Platform."
        },
        {
          "question": "Who conducts the due diligence process, and how is it carried out?",
          "answer": "Epiidosis conducts due diligence through a reputed audit company, with expenses related to due diligence borne by the asset company."
        },
        {
          "question": "What happens if due diligence is successful?",
          "answer": "If due diligence is successful, Epiidosis enters into an agreement with the asset company, locking in an initial commitment amount, and appoints its director while receiving an irrevocable power of attorney."
        },
        {
          "question": "What is the timeline for bank instrument monetization?",
          "answer": "The bank instrument monetization process typically takes between 20 to 30 days to complete."
        },
        {
          "question": "What is the process for discounting the instrument?",
          "answer": "The bank instrument is discounted to the platform within approximately 45 to 60 days, allowing for the conversion of the instrument into cash or financial assets."
        },
        {
          "question": "How are funds transferred to the asset owner?",
          "answer": "Epiidosis initiates fund transfers to the asset owner according to the agreed schedule, facilitating the monetization of the asset and enabling the asset owner to access the unlocked value."
        },
        {
          "question": "Is there real-time monitoring available for the asset monetization process?",
          "answer": "Yes, the dashboard dynamically updates based on the asset owner's progress, providing real-time status and instructions for each step in the asset monetization process."
        },
        {
          "question": "What are the benefits of participating in Epiidosis's Asset Monetization?",
          "answer": "Participating in Epiidosis's Asset Monetization process provides asset owners with the opportunity to unlock the value of their assets, access liquidity, and leverage Epiidosis's expertise and network for successful monetization."
        },
        {
          "question": "Are there any risks associated with asset monetization?",
          "answer": "While Epiidosis endeavors to mitigate risks through thorough due diligence and risk management processes, asset monetization, like any investment activity, carries inherent risks that asset owners should be aware of."
        },
        {
          "question": "Can asset owners choose the timing of fund transfers?",
          "answer": "Yes, asset owners can discuss and agree upon the timing of fund transfers with Epiidosis, ensuring alignment with their financial needs and preferences."
        },
        {
          "question": "Are there any limitations on the size of assets that can be monetized?",
          "answer": "Epiidosis offers monetization opportunities for assets ranging from USD 2 million to USD 150 million, catering to a wide range of asset owners and their diverse portfolios."
        },
        {
          "question": "What happens if the due diligence process uncovers issues with the asset?",
          "answer": "If due diligence uncovers issues with the asset, Epiidosis will work with the asset owner to address and resolve them, ensuring a successful monetization process."
        },
        {
          "question": "Is there a fee structure for participating in asset monetization?",
          "answer": "Epiidosis may charge fees for its services, which can vary depending on the complexity and scope of the monetization process. Asset owners should discuss fee structures with Epiidosis to understand the costs involved."
        },
        {
          "question": "Can asset owners track the progress of their monetization process?",
          "answer": "Yes, asset owners can track the progress of their monetization process through the dashboard, which provides real-time updates and status reports for each step in the process."
        },
        {
          "question": "What types of assets are eligible for monetization?",
          "answer": "Epiidosis considers a wide range of assets for monetization, including tangible assets such as real estate and infrastructure, as well as intangible assets such as intellectual property and financial instruments."
        },
        {
          "question": "How can asset owners get started with the asset monetization process?",
          "answer": "Asset owners interested in participating in Epiidosis's Asset Monetization process can reach out to the company to discuss their assets and explore potential monetization opportunities."
        },
    ],
    'Structured Financing': [
      {
          "question": "What types of projects does Epiidosis Investments fund?",
          "answer": "Epiidosis Investments funds projects across various sectors, including commercial enterprises, tourism, industry, agriculture, energy, education, and healthcare, both locally in the UAE and globally."
        },
        {
          "question": "How do I get started with the fundraising process?",
          "answer": "To initiate the fundraising process, simply register or log in to the fund seeker dashboard on our platform and follow the step-by-step instructions provided."
        },
        {
          "question": "What documents are required for the KYC verification process?",
          "answer": "For KYC verification, you'll need to provide identification documents such as a passport, driver's license, or national ID card, along with any additional company registration documents."
        },
        {
          "question": "What is the onboarding and administration fee for?",
          "answer": "The onboarding and administration fee covers the cost of verifying documents, processing applications, and providing support throughout the initial stages of the fundraising process."
        },
        {
          "question": "How long does it take for document verification?",
          "answer": "Document verification typically takes a few business days, depending on the volume of applications received."
        },
        {
          "question": "What happens after successful verification?",
          "answer": "After successful verification, you'll proceed to the next phase, which involves signing a service contract and MOU, followed by due diligence and investment agreement signing."
        },
        {
          "question": "Can I track the progress of my fundraising application?",
          "answer": "Yes, you'll have access to your fundraising dashboard, where you can track the progress of your application and receive updates on each stage of the process."
        },
        {
          "question": "What are the criteria for project assessment and risk underwriting?",
          "answer": "Project assessment and risk underwriting involve evaluating the feasibility, viability, and potential risks associated with the proposed project, considering factors such as market demand, financial projections, and regulatory compliance."
        },
        {
          "question": "Is there financial assistance available for processing fees?",
          "answer": "Epiidosis Investments does not provide financial assistance for processing fees; however, we offer support and guidance throughout the fundraising process to help facilitate successful fundraising."
        },
        {
          "question": "What happens if my project does not pass the risk underwriting process?",
          "answer": "If your project does not pass the risk underwriting process, we will work with you to identify any areas of concern and explore potential solutions to address them."
        },
        {
          "question": "How are funds deployed to the project?",
          "answer": "Funds are deployed to a Special Purpose Vehicle (SPV) established for the project, ensuring proper allocation and management of funds according to the project's needs."
        },
        {
          "question": "What is the role of Epiidosis during the project deployment phase?",
          "answer": "During the project deployment phase, Epiidosis oversees the setup of the SPV, ensures compliance with regulatory requirements, and provides ongoing support to project stakeholders."
        },
        {
          "question": "Can I leverage assets for better fund procurement?",
          "answer": "Yes, Epiidosis can create structures to leverage assets and lines of credit, enabling better fund procurement and optimizing financing options for your project."
        },
        {
          "question": "What happens if the project faces challenges after fund deployment?",
          "answer": "In the event of challenges or unforeseen circumstances post-fund deployment, Epiidosis works closely with project stakeholders to address issues and explore solutions to mitigate risks."
        },
        {
          "question": "What support is available during the fundraising process?",
          "answer": "Epiidosis provides dedicated support from experienced professionals, including account managers and advisors, who are available to assist you at every stage of the fundraising process."
        },
        {
          "question": "How long does the entire fundraising process take?",
          "answer": "The duration of the fundraising process can vary depending on factors such as document verification, due diligence, and project complexity. Typically, it may take several weeks to months to complete."
        },
        {
          "question": "Are there any restrictions on the size of projects Epiidosis funds?",
          "answer": "Epiidosis funds projects ranging from USD 2 million to USD 150 million, catering to a wide range of project sizes and requirements."
        },
        {
          "question": "What happens if my project requires additional funding beyond the initial amount raised?",
          "answer": "If your project requires additional funding beyond the initial amount raised, we can explore options for additional financing or restructuring to meet the project's evolving needs."
        },
        {
          "question": "Can I request changes to the terms of the investment agreement?",
          "answer": "While changes to the terms of the investment agreement may be possible under certain circumstances, any modifications would need to be mutually agreed upon by all parties involved."
        },
        {
          "question": "Is there ongoing support available after the fundraising process is completed?",
          "answer": "Yes, Epiidosis provides ongoing support and assistance to project stakeholders even after the fundraising process is completed, ensuring continued success and growth of the funded project."
        },
    ],
    'Financial Instrument Investment': [
       {
          "question": "What is Financial Instrument Investment?",
          "answer": "This type of investment allows individuals to leverage their existing listed stocks, debentures, bonds, ETFs, or any other financial holdings as collateral to secure funding. Essentially, it unlocks the value of their investment portfolio without the need to sell the stocks."
        },
        {
          "question": "How does Epiidosis facilitate financial instrument investment?",
          "answer": "Epiidosis provides a platform called InvestcoPortal where individuals can apply for investment using their listed stocks or financial instruments as collateral. The company evaluates the value of the financial asset and extends credit based on this assessment."
        },
        {
          "question": "What are the benefits of obtaining an investment through financial instruments?",
          "answer": "By obtaining a financial instrument investment, individuals can access liquidity without liquidating their stock positions or outright selling their financial assets, thus maintaining their investment exposure. Additionally, these investments often come with competitive interest rates and flexible repayment terms."
        },
        {
          "question": "What are the key advantages for individuals seeking loans against stocks?",
          "answer": "Individuals seeking loans against stocks benefit from the ability to access funds quickly, often with minimal paperwork. Additionally, they retain ownership of their stocks, allowing them to continue benefiting from potential market appreciation."
        },
        {
          "question": "Why choose Epiidosis for Stock-Backed Loans?",
          "answer": "Epiidosis Investments LLC offers a streamlined loan application process, competitive interest rates, and personalized service. With a track record of managing diverse portfolios, the company provides borrowers with confidence in their financial transactions."
        },
        {
          "question": "How does the investment process work for financial instruments?",
          "answer": "The funding process typically involves submitting an application, providing details about the listed stocks or other instruments to be used as collateral, and undergoing a valuation process. Once approved, funds are disbursed, and borrowers make repayments according to the agreed-upon terms."
        },
        {
          "question": "Who qualifies for Financial instrument investment?",
          "answer": "Eligibility criteria vary but generally include individuals with a substantial portfolio of listed stocks or any other instrument. Specific requirements may include the types of stocks accepted as collateral, minimum stock value thresholds, and creditworthiness assessments. Please check our website for complete eligibility requirements."
        },
        {
          "question": "What are the interest rates and terms associated with financing investment of financial instruments?",
          "answer": "Interest rates and terms vary depending on factors such as the value of the stocks, bonds, debentures, ETFs, or any other instrument used as collateral, loan amount, and repayment period. Epiidosis provides transparent information on these rates and terms to ensure borrowers understand their obligations."
        },
        {
          "question": "How can individuals estimate investment amounts and terms for financial instruments?",
          "answer": "Epiidosis Investments LLC offers an interactive loan calculator on its website. Users can input details such as the number and value of their stocks to receive an estimate of the loan amount and associated terms."
        },
        {
          "question": "Can you provide examples of success stories related to financial instrument investing?",
          "answer": "Epiidosis Investments LLC showcases success stories through real-life use cases on how we solve particular investor problems. On our website, we mention our clients and partners we have worked with. We cannot disclose any particular or detailed information about a case study due to signed NDAs with the respective parties."
        },
        {
          "question": "What support and assistance are available during the application process?",
          "answer": "Epiidosis Investments LLC provides dedicated support to borrowers throughout the loan application process. This includes assistance with document submission, clarification of eligibility criteria, and addressing any inquiries or concerns."
        },
        {
          "question": "How can individuals stay informed about updates and developments regarding their required investment?",
          "answer": "Epiidosis Investments LLC may offer a newsletter or subscription service to keep interested parties updated on news, promotions, and changes related to investment solutions."
        },
        {
          "question": "Is there a limit to the investment amount available through financial instruments?",
          "answer": "Investment amounts for financial instruments can vary depending on factors such as the value of the listed stocks, bonds, or debentures used as collateral and the borrower's creditworthiness. Epiidosis Investments LLC offers loan amounts ranging from USD 2 million to USD 150 million, catering to a wide range of financing needs."
        },
    ],
  };

  return (
    <>
    <div className="container flex flex-col rounded-lg mx-auto mt-8">
      <div className="flex h-full">
        {/* Sidebar: Hidden on small screens */}
        <nav className="w-64 pt-6 hidden md:block" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              isActive={activeNav === item}
              onClick={() => setActiveNav(item)}
            />
          ))}
        </nav>
        
        {/* Divider line: Hidden on small screens */}
        <hr className="mt-6 w-1 bg-[#095681] h-36 ml-4 hidden md:block" /> 
  
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <h1 className="text-4xl font-bold p-6 md:ml-14 text-[#2D3955]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            FAQs
          </h1>
          
          {/* FAQ content: Hides scrollbar on mobile */}
          <div className="w-full p-4 md:p-8 py-2 md:pr-3 items-center text-justify overflow-auto custom-scrollbar">
            <div className="content-wrapper h-full" style={{ fontFamily: "Lato, sans-serif" }}>
              {faqData[activeNav].map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItem === index}
                  onToggle={() => setOpenItem(openItem === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* "Can't find the answer?" section */}
      <section className="bg-cover bg-center bg-[#FAFAFA] h-56 flex items-center justify-start">
        <div className="mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <h1 className="text-xl md:text-2xl font-bold text-[#2D3955]" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Can't find the answer?
          </h1>
          <p className="mt-2 mb-2">
            Feel free to contact us, we are always ready to assist you with any 
            questions you may have in mind.
          </p>
          <a href="/contact-us" className="mb-4">
            <img src="/MediaAnnouncement/enquiry.png" alt="Enquiry" className="mx-auto md:mx-96" />
          </a>
        </div>
      </section>
    </div>
    </>
  );
  
};

export default FAQSection;
