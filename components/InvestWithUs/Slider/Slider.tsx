import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const clientComments = [
 
  {
    title: "Return on Investment (ROI)",
    image: "/invest/icon/1.svg",
    desc: "Invest with us and earn a projected ROI of 24 to 30%, We offer an unparalleled risk-reward ratio while maintaining a focus on stability and strategic growth.",
  },
  {
    title: "Minimum Required Investment",
    image: "/invest/icon/2.svg",
    desc: "Investing with us requires a minimum investment amount of USD 25,000 or AED 100,000 which ensures effective resource allocation.",
  },
  {
    title: "Risk Management",
    image: "/invest/icon/Vector.svg",
    desc: "Minimized legal risks: Ensuring government compliance reduces legal issues. Enhanced Decision Making: Comprehensive data analysis and feasibility studies provide informed and low-risk investment choices.",
  },
  {
    title: "Lock-In Period",
    image: "/invest/icon/4.svg",
    desc: "A 1-year lock-in period ensures substantial returns and mitigates short-term market volatility. Better financial planning can be achieved during this period.",
  },
  {
    title: "Revenue Generation",
    image: "/invest/icon/5.svg",
    desc: "Fundraising Service Fees: Clients benefit from efficient and effective fundraising services at 6% success fees. Additional Revenue Streams:  Our platforms comprehensive services create opportunities for new revenue streams through successful project execution and investment management.",
  },
  {
    title: "Cost Efficiency",
    image: "/invest/icon/6.svg",
    desc: "Reduced Due Diligence Costs: Time and resources can be saved by automating and streamlining due diligence processes. Lower Compliance Costs: Our platform ensures compliance with minimal human intervention, reducing legal and administrative costs.",
  },
 
  // {
  //   title: "Another Service",
  //   image: "/home/icons/c2.png",
  //   desc: "In addition to competitive interest rates and flexible repayment options, Epiidosis offers personalized service for loans against listed stocks. You benefit from market growth while retaining stock ownership and leveraging your portfolio through our streamlined process.",
  // },
  // {
  //   title: "Yet Another Service",
  //   image: "/home/icons/c3.png",
  //   desc: "In addition to competitive interest rates and flexible repayment options, Epiidosis offers personalized service for loans against listed stocks. You benefit from market growth while retaining stock ownership and leveraging your portfolio through our streamlined process.",
  // },
];

const generateSlides = (times: any) => {
  const slides = [];
  for (let i = 0; i < times; i++) {
    slides.push(...clientComments);
  }
  return slides;
};

const Slider = () => {
  const slides = generateSlides(1000); // Repeat the clientComments 10 times

  return (
    <>
    <div className="h-[550px] slider_bg relative mt-9" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <span className="red_circle bg-liver absolute hidden lg:block"></span>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
    </>
  );
};

export default Slider;
