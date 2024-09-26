"use client";
import React, { useState } from "react";
import Navbar from "../../Common/Navbar";
import HeroSection from "./HeroSection";

import FooterBanner from "./FooterBanner";
import Footer from "../../Common/Footer";
import ContactUs from "./Contactus";




const Home = () => {


  return (
    <>
      <Navbar />
      <HeroSection/>
      <ContactUs/>
      <FooterBanner/>
      <Footer/>

      
    </>
  );
};

export default Home;
