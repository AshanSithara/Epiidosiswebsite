"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import Sidebar from "./Legal"
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";



const Home = () => {


  return (
    <>
      <Navbar />
      <HeroSection/>
      <Sidebar/>
      <FooterBanner/>
      <Footer/>
      
    </>
  );
};

export default Home;
