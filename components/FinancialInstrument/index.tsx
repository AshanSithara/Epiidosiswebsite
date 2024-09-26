"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import RetainFlexibleEfficient from "./RetainFlexibleEfficient"
import FinancialInstrumentInvestment from "./FinancialInstrumentInvestment"
import OurProcess from "./OurProcess"
import EmblaCarousel from "./Slider/Slider";
import EligibilityCriteria from "./EligibilityCriteria"
import FixedTerms from "./FixedTerms"
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import ContactForm from "../Common/Contactform_Financial";
import Head from "next/head"

const Home = () => {


  return (
    <>
     <Head>
        <title>Financial Instrument Investment | Secure & Diversified Options</title>
        <meta
          name="description"
          content="Explore secure, diversified financial instrument investment options with Epiidosis. From bonds to equities, maximize returns with expert strategies and risk management."
        />
        <meta
          name="keywords"
          content="financial instrument investment, bonds, equities, diversified investments, secure investment options, risk management, Epiidosis Investments, asset backed security, ROI"
        />
        <meta property="og:title" content="Financial Instrument Investment | Secure & Diversified Options" />
        <meta
          property="og:description"
          content="Explore secure, diversified financial instrument investment options with Epiidosis. From bonds to equities, maximize returns with expert strategies and risk management."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/financial-instruments" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-financial-instruments.jpg" />
        {/* Add other relevant meta tags as needed */}
      </Head>
      <Navbar />
      <HeroSection/>
      <ContactForm/>
      <RetainFlexibleEfficient/>
      <FinancialInstrumentInvestment/>
      <OurProcess/>
      <EmblaCarousel/>
      <EligibilityCriteria/>
      <FixedTerms/>
      <FooterBanner/>
      <Footer/>
    </>
  );
};

export default Home;
