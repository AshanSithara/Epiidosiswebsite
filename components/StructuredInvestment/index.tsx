"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import KeyFeatures from "./KeyFeatures";
import HowItWorks from "./HowItWorks"
import EmblaCarousel from "./Slider/Slider";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import ContactForm from "../Common/Contactform_Structured";
import Head from "next/head"

const Home = () => {


  return (
    <>
    <Head>
        <title>Structured Investment | Tailored Solutions for Optimal Growth</title>
        <meta
          name="description"
          content="Epiidosis Investments offers structured investment solutions designed to meet your unique financial goals. Benefit from tailored strategies for risk-adjusted returns and growth."
        />
        <meta
          name="keywords"
          content="structured investment, tailored investment solutions, financial growth, risk-adjusted returns, Epiidosis Investments, asset backed security, ROI"
        />
        <meta property="og:title" content="Structured Investment | Tailored Solutions for Optimal Growth" />
        <meta
          property="og:description"
          content="Epiidosis Investments offers structured investment solutions designed to meet your unique financial goals. Benefit from tailored strategies for risk-adjusted returns and growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/structured-investments" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-structured-investments.jpg" />
        {/* Add any additional meta tags as required */}
      </Head>
      <Navbar />
      <HeroSection/>
      <ContactForm/>
      <KeyFeatures/>
      <HowItWorks/>
      <EmblaCarousel/>
      <FooterBanner/>
      <Footer/>
    </>
  );
};

export default Home;
