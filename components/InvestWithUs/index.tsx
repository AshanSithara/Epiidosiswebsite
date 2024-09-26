"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import InvestmentCriterion from "./InvestmentCriterion";
import ChallengesInInvestment from "./ChallengesInInvestment";
import CuratedInvestmentSolution from "./CuratedInvestmentSolution";
import EmblaCarousel from "./Slider/Slider"
import InvestorExitStrategy from "./InvestorExitStrategy";
import TargetSectors from "./TargetSectors";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import ContactForm from "../Common/Contactform_invest"
import Head from "next/head"



const Home = () => {


  return (
    <>
    <Head>
        <title>Discover High-Potential Investment Opportunities | Epiidosis</title>
        <meta
          name="description"
          content="Discover high-potential investment opportunities at Epiidosis. We offer flexible, secure solutions that drive growth and financial security across multiple sectors."
        />
        <meta
          name="keywords"
          content="invest with Epiidosis, investment opportunities, secure investments, financial growth, flexible investment solutions, oil & gas, agriculture, tourism, energy, hospitality, industrial, manufacturing, health"
        />
        <meta property="og:title" content="Discover High-Potential Investment Opportunities | Epiidosis" />
        <meta
          property="og:description"
          content="Discover high-potential investment opportunities at Epiidosis. We offer flexible, secure solutions that drive growth and financial security across multiple sectors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/investment-opportunities" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-investments.jpg" />
        {/* Add additional meta tags as needed */}
      </Head>
      <Navbar />
      <HeroSection/>
      <ContactForm/>
      {/* <InvestmentCriterion/> */}
      <ChallengesInInvestment/>
      <CuratedInvestmentSolution />
      <EmblaCarousel />
      <InvestorExitStrategy />
      <TargetSectors/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
