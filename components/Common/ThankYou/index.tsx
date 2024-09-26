"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import FooterBanner from "./FooterBanner";
import Footer from "../Footer";
import ThankYou from "./ThankYou";


const Home = () => {


    return (
      <>
        <Navbar />
        <ThankYou/>
        <FooterBanner/>
        <Footer/>
  
        
      </>
    );
  };
  
  export default Home;
  