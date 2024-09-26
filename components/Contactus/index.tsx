"use client";
import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import HeroSection from "./HeroSection";
import Contactus from "./ContactUs";
import FooterBanner from "./FooterBanner";
import Footer from "../Common/Footer";
import Head from "next/head"




const Home = () => {


  return (
    <>
    <Head>
        <title>Contact Epiidosis | Connect for Expert Investment Guidance</title>
        <meta
          name="description"
          content="Connect with Epiidosis Investments for personalized investment guidance. Our team is ready to assist you with secure, diversified solutions that align with your financial goals."
        />
        <meta
          name="keywords"
          content="contact Epiidosis, investment guidance, personalized investment, secure investments, financial solutions, connect with Epiidosis"
        />
        <meta property="og:title" content="Contact Epiidosis | Connect for Expert Investment Guidance" />
        <meta
          property="og:description"
          content="Connect with Epiidosis Investments for personalized investment guidance. Our team is ready to assist you with secure, diversified solutions that align with your financial goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epiidosisinvestments.com/contact" />
        <meta property="og:image" content="https://www.epiidosisinvestments.com/og-image-contact.jpg" />
        {/* Additional meta tags can be added if needed */}
      </Head>
      <Navbar />
      <HeroSection />
      <Contactus/>
      <FooterBanner/>
      <Footer/>
     

      
    </>
  );
};

export default Home;
