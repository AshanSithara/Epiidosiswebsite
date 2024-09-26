import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const clientComments = [
  {
    title: "Listed Stocks",
    image: "/FinancialInstrument/image1.png",
    desc: "An institutional investor or high-net-worth individual has a substantial portfolio of listed stocks. They need liquidity for an investment but don’t want to sell their stocks, as they expect them to appreciate. Epiidosis arranges a margin loan using the client's listed stocks as collateral. The client can borrow a percentage of the portfolio’s value (loan-to-value ratio) and use the funds for their new investment. The client retains ownership of the stocks and benefits from capital appreciation or dividends. However, the client must manage the risk of a margin call if stock prices fall.",
  },
  {
    title: "Structured Debenture investment",
    image: "/FinancialInstrument/image2.png",
    desc: "As part of its capital structure, a company issues debentures. For a strategic acquisition, the company needs additional funding. Epiidosis structures an investment deal that uses its existing debentures as collateral. It allows the company to raise capital without selling assets or issuing more equity. The company continues to pay interest on the debentures and can focus on growth initiatives.",
  },
  {
    title: "Bond Collateral for Corporate Loans",
    image: "/FinancialInstrument/image3.png",
    desc: "A corporation holds a portfolio of investment-grade bonds and needs capital to fund a large project without liquidating them. As a solution, Epiidosis arranges a loan using the bonds as collateral. It retains ownership, earns interest income, and gains access to necessary funds. The company's investment strategy is preserved while liquidity is provided.",
  },
  {
    title: "ETF-Based Securities-Backed Lending",
    image: "/FinancialInstrument/image4.png",
    desc: "An investor holds a diversified portfolio of ETFs but needs cash to take advantage of an exciting investment opportunity. A loan is arranged using ETFs as collateral by Epiidosis. ETFs track the returns of underlying indexes or assets, while providing the investor access to funds. The investor maintains diversified exposure and benefits from market performance.",
  },
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
    <div className="h-[550px] slider_bg relative mt-9"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <span className="red_circle bg-liver absolute hidden lg:block"></span>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
    </>
  );
};

export default Slider;
