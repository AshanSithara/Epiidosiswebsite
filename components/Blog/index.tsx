"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import VisionMissionValues from "./VisionMissionValues";
import LatestArticles from "./LatestArticles";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import Head from "next/head"



const Home = () => {


  return (
    <>
    <Head>
        <title>Epiidosis Blog | Insights & Market Analysis for Smart Investing</title>
        <meta
          name="description"
          content="Stay updated with Epiidosis Blogs! Explore expert insights, market trends, and tips for smarter investing across various asset classes and sectors."
        />
        <meta
          name="keywords"
          content="Epiidosis blog, investment insights, market analysis, smart investing, asset classes, investment trends, expert insights"
        />
        <meta property="og:title" content="Epiidosis Blog | Insights & Market Analysis for Smart Investing" />
        <meta
          property="og:description"
          content="Stay updated with Epiidosis Blogs! Explore expert insights, market trends, and tips for smarter investing across various asset classes and sectors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/blog" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-blog.jpg" />
        {/* Add any other relevant meta tags as needed */}
      </Head>
      <Navbar />
      <HeroSection/>
      <VisionMissionValues/>
      <LatestArticles/>
  
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
