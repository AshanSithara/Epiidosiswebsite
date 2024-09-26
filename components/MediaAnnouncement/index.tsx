"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import VisionMissionValues from "./VisionMissionValues";
import LatestArticles from "./LatestArticles";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";




const Home = () => {


  return (
    <>
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
