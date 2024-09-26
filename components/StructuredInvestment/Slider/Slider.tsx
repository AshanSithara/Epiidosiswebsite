import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const clientComments = [
  {
    title: "Securitization of  Assets",
    image: "/StructuredInvestment/image01.png",
    desc: "A financial institution wants to securitize a portfolio of mortgages to raise capital and improve liquidity. Application Customized Structuring: Epiidosis Investments designs a securitization structure using an SPV to pool the  assets and issue asset-backed securities. Innovation: Utilizes cutting-edge financial technology to model and manage the securitization, optimizing the structure for both risk and return. Market Access: Leverages an extensive network to place the securities with institutional investors, ensuring successful capital raising.",
  },
  {
    title: "Project Finance for Infrastructure",
    image: "/StructuredInvestment/image02.png",
    desc: " A government agency needs to finance a large-scale infrastructure project, such as a bridge or renewable energy facility. Application Comprehensive Service: Epiidosis Investments provides end-to-end solutions, from structuring the financing to managing the project throughout its lifecycle. Financial Strength: Provides strong capital support and financial stability to underwrite the project, ensuring robust backing. Risk Management: Implements strategies to manage construction, operational, and market risks, including the creation of a dedicated SPV to handle project-specific liabilities.",
  },
  {
    title: "Corporate Acquisition Financing",
    image: "/StructuredInvestment/image03.png",
    desc: "A company is planning to acquire a target company and needs a structured financing solution to facilitate the transaction. Application Bespoke Solutions: Epiidosis Investments designs a financing structure that includes both debt and equity, optimized for the acquisition. Due Diligence: Conducts thorough due diligence to assess the financial health and risks associated with the target company, ensuring a sound investment decision. Client-Centric Focus: Works closely with the acquiring company to align the financing structure with its strategic goals and provide continuous support throughout the acquisition process.",
  },
  {
    title: "JV for Technology Development",
    image: "/StructuredInvestment/image04.png",
    desc: "Two companies wish to form a joint venture to develop a new technology but want to limit their individual risk exposure. Application SPV Creation: Epiidosis Investments sets up an SPV to house the joint venture, isolating the financial risks and operational activities related to the technology development. Governance: Establishes a joint management team and governance structure to oversee the venture, ensuring alignment between both companies. Operational Support: Provides ongoing support and guidance to ensure the successful execution and management of the joint venture.",
  },
  {
    title: "Tax-Efficient Investment Structuring",
    image: "/StructuredInvestment/image05.png",
    desc: "An investment fund aims to optimize its tax position while raising capital for a new fund. Application Tax Efficiency: Epiidosis Investments designs a tax-efficient investment structure using SPVs and other financial instruments to minimize tax liabilities. Regulatory Compliance: Ensures that the structure complies with all relevant tax regulations and reporting requirements. Investor Attraction: Structures the investment offering to appeal to investors by highlighting the tax benefits and potential returns.",
  },
  {
    title: "Secondary Market for Private Equity",
    image: "/StructuredInvestment/image06.png",
    desc: "Investors in a private equity fund wish to exit their positions before the fund’s maturity. Application Secondary Market Listing: Epiidosis Investments explores options for listing the fund or creating a secondary market for trading investor shares. Facilitated Transactions: Assists in matching buyers and sellers within the firm’s network, ensuring a smooth and efficient exit process for investors. Transparent Communication: Provides clear communication and support throughout the secondary market transaction process.",
  },
];

// Function to generate slides
const generateSlides = (times: number) => {
  const slides = [];
  for (let i = 0; i < times; i++) {
    slides.push(...clientComments);
  }
  return slides;
};

// Helper function to split description into separate lines
const formatDescription = (desc: string) => {
  return desc.split(". ").map((line, index) => (
    <p key={index}>
      {line.trim() + (index < desc.split(". ").length - 1 ? "." : "")}
    </p>
  ));
};

// Slider Component
const Slider = () => {
  const slides = generateSlides(1000); // Repeat the clientComments

  return (
    <>
    <div className="h-[550px] slider_bg relative mt-9"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <span className="red_circle bg-liver absolute hidden lg:block"></span>
      <EmblaCarousel 
        slides={slides.map(slide => ({
          ...slide,
          desc: formatDescription(slide.desc), // Format the description
        }))}
        options={OPTIONS}
      />
    </div>
    </>
  );
};

export default Slider;
