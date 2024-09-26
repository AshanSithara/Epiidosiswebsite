"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import GetInTouch from "../Common/GetInTouch"
import WhyChooseEpiidosis from "./WhyChooseEpiidosis";
import InvestmentProcess from "./InvestmentProcess";
import EmblaCarousel from "./Slider/Slider";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import ContactForm from "../Common/Contactform_Asset";
import Head from "next/head"



const Home = () => {


  return (
    <>
    <Head>
        <title>Monetize Your Assets & Unlock Capital | Epiidosis Investments</title>
        <meta
          name="description"
          content="Monetize your assets and unlock capital with Epiidosis Investments. Our expert strategies turn dormant assets into profit-generating resources, maximizing your financial potential."
        />
        <meta
          name="keywords"
          content="asset monetization, unlock capital, financial potential, dormant assets, monetize assets, Epiidosis Investments, asset backed security, ROI"
        />
        <meta property="og:title" content="Monetize Your Assets & Unlock Capital | Epiidosis Investments" />
        <meta
          property="og:description"
          content="Monetize your assets and unlock capital with Epiidosis Investments. Our expert strategies turn dormant assets into profit-generating resources, maximizing your financial potential."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/asset-monetization" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-monetization.jpg" />
        {/* Additional meta tags can be added if necessary */}
      </Head>
      <Navbar />
      <HeroSection/>
      <ContactForm/>
      <WhyChooseEpiidosis/>
      <InvestmentProcess/>
      <EmblaCarousel/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
