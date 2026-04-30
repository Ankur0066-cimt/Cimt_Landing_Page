import React from "react";
import Header from "../components/Main/Header";
import Hero from "../components/Main/Hero";
import Stats from "../components/Main/Stats";
import CorePhilosophy from "../components/Main/CorePhilosophy";
import WhatWeDo from "../components/Main/WhatWeDo";
import CTASection from "../components/Main/CTASection";
import Footer from "../components/Main/Footer";
import Application from "@/components/Main/Application";
import Sustainability from "@/components/Main/Sustainability";
import ProductCategories from "@/components/Main/ProductCategories";
import HowItWorks from "@/components/Main/HowItWorks";



const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F1] text-[#4A4A4A] font-[Montserrat]">
      <Header />
      <Hero />
      <Stats />
       <WhatWeDo />
       <ProductCategories  />
      <CorePhilosophy />
     
      
      <HowItWorks />
      {/* <Application /> */}
      <Sustainability />
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;