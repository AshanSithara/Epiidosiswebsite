"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import VisionMissionValues from "./VisionMissionValues";
import InvestmentProcess from "./InvestmentProcess";
import ExpandableList from "./ExpandableList";
import LeadershipTeam from "./LeadershipTeam";
import LeadershipTeam2 from "./LeadershipTeam2";
import Investment_Team from "./Investment_Team";
import AdvisoryBoard from "./AdvisoryBoard";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import Head from "next/head"



const Home = () => {


  return (
    <>
    <Head>
        <title>About Epiidosis | Expert Investment Solutions & Global Presence</title>
        <meta
          name="description"
          content="Learn about Epiidosis Investments—your partner in financial growth. We offer expert investment solutions across diversified sectors, backed by a global presence and sustainable practices."
        />
        <meta
          name="keywords"
          content="about Epiidosis, expert investment solutions, financial growth, global presence, sustainable investments, diversified sectors"
        />
        <meta property="og:title" content="About Epiidosis | Expert Investment Solutions & Global Presence" />
        <meta
          property="og:description"
          content="Learn about Epiidosis Investments—your partner in financial growth. We offer expert investment solutions across diversified sectors, backed by a global presence and sustainable practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/about" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-about.jpg" />
        {/* Add other relevant meta tags if needed */}
      </Head>
      <Navbar />
      <HeroSection/>
      <VisionMissionValues/>
      <InvestmentProcess/>
      <ExpandableList/>
      <LeadershipTeam/>
      <LeadershipTeam2/>
      <Investment_Team/>
      <AdvisoryBoard/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
