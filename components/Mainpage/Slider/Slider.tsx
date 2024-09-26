import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const clientComments = [
 
  {
    title: "Structured Finance",
    image: "/home/icons/c1.svg",
    desc: "Choose Epiidosis for Structured Finance Partnership for liquidity in your company & projects, our specified models bring you the capability as an investment partner to access funds by bringing assets on board, restructuring projects for easy access to our investment model, risk mitigation strategies, and a track record of delivering value, ensuring robust financial health and growth.",
    url: "/asset-monetization/structured-investment",
  },
  {
    title: "Financial Instrument Investment",
    image: "/home/icons/c3.svg",
    desc: "In addition to competitive interest rates and flexible repayment options, Epiidosis offers personalized service for loans against listed stocks. You benefit from market growth while retaining stock ownership and leveraging your portfolio through our streamlined process.",
    url: "/asset-monetization/financial-instrument-investment",
  },
  {
    title: "Asset Monetization",
    image: "/home/icons/c2.svg",
    desc: "Epiidosis Investments offers a clear, efficient path from registration to fund deployment, ensuring successful project execution and maximum returns. Through expert insights and innovative strategies, we excel in asset monetization, providing customized solutions for optimal returns and sustainable growth.",
    url: "/asset-monetization",
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
    <div className="h-[550px] slider_bg relative mt-9">
      <span className="red_circle bg-liver absolute hidden lg:block"></span>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
    </>
  );
};

export default Slider;
