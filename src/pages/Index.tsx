import React from "react";
import Header from "../components/Main/Header";
import Hero from "../components/Main/Hero";
import Stats from "../components/Main/Stats";
import CorePhilosophy from "../components/Main/CorePhilosophy";

import CTASection from "../components/Main/CTASection";
import Footer from "../components/Main/Footer";

import ProductCategories from "@/components/Main/ProductCategories";
import Application from "@/components/Main/Application";
import Sustainability from "@/components/Main/Sustainability";

import '../App.css'


const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F1] text-[#4A4A4A] font-[Montserrat]">
        <div className="fade-down">
      <Header />
      <Hero />
      <Stats />
          <CorePhilosophy />
       <ProductCategories  />
   <Application />  
   

  <Sustainability />

     
      
     
      <CTASection />
      
      <Footer />
      </div>
    </div>
  );
};

export default Index;