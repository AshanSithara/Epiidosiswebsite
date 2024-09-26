"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import Slider from "./Slider/Slider";
import InvestmentOpportunitiesSection from "./InvestmentOpportunitiesSection";
import TargetSectorsSection from "./TargetSectorsSection";
import FooterCarousel from "./FooterCarousel";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import Head from "next/head"



const Home = () => {


  return (
    <>
        <Head>
        <title>Epiidosis Investments | Innovative & Secure Investment Solutions</title>
        <meta
          name="description"
          content="Epiidosis Investments offers innovative, secure, and diversified investment solutions across asset classes. Maximize returns with expert guidance tailored to your financial goals."
        />
        <meta
          name="keywords"
          content="investment solutions, diversified investments, secure investments, innovative investment, maximize returns, Epiidosis Investments, financial growth, expert investment guidance"
        />
        <meta property="og:title" content="Epiidosis Investments | Innovative & Secure Investment Solutions" />
        <meta
          property="og:description"
          content="Epiidosis Investments offers innovative, secure, and diversified investment solutions across asset classes. Maximize returns with expert guidance tailored to your financial goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image.jpg" />
        {/* Additional meta tags can be added based on requirements */}
      </Head>

      <Navbar />
      <HeroSection/>
      <Slider/>
      <InvestmentOpportunitiesSection/>
      <TargetSectorsSection/>
      <FooterCarousel/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
