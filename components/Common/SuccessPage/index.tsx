"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import FooterBanner from "./FooterBanner";
import Footer from "../Footer";
import SuccessPage from "./SuccessPage";


const Home = () => {


    return (
      <>
        <Navbar />
        <SuccessPage/>
        <FooterBanner/>
        <Footer/>
  
        
      </>
    );
  };
  
  export default Home;
  