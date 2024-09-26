"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import VisionMissionValues from "./VisionMissionValues";
import LatestArticles from "./LatestArticles";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import FAQSection from "./FAQSection"
import Head from "next/head"



const Home = () => {


  return (
    <>
    <Head>
        <title>Knowledge Base | Expert Resources for Investment Success</title>
        <meta
          name="description"
          content="Access Epiidosis Knowledge Base for valuable investment resources. Explore articles, guides, and research to enhance your financial knowledge and decision-making."
        />
        <meta
          name="keywords"
          content="investment resources, knowledge base, investment guides, financial research, Epiidosis knowledge base, investment articles"
        />
        <meta property="og:title" content="Knowledge Base | Expert Resources for Investment Success" />
        <meta
          property="og:description"
          content="Access Epiidosis Knowledge Base for valuable investment resources. Explore articles, guides, and research to enhance your financial knowledge and decision-making."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/knowledge-base" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-knowledge-base.jpg" />
        {/* Add any additional meta tags if needed */}
      </Head>
      <Navbar />
      <HeroSection/>
      <FAQSection/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
