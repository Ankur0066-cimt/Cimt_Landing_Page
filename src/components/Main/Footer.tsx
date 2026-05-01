import React from "react";
import logoImg from "../../assets/Cimt-1/Can Image_Logo_W.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A3B7E] text-white py-6 md:py-8">
  <div className="font-archivo max-w-7xl mx-auto px-6 md:px-10 text-center">

    {/* Logo */}
    <div className="flex items-center justify-center mb-5">
      <img
        src={logoImg}
        alt="Logo"
        className="h-10 w-[250px] object-contain"
      />
    </div>

    {/* Description (ADDED) */}
    <p className="text-white/75 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed ">
      Transforming rural advertising through technology, 
    </p>
    <p className="text-white/75 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-8">
      accountability, and sustainability.
    </p>

    {/* Divider */}
    <div className="w-full max-w-4xl mx-auto h-px bg-white/15 mb-6"></div>

    {/* Copyright */}
    <p className="text-white/60 text-xs md:text-sm">
      © 2026 Can Image. All rights reserved.
    </p>

  </div>
</footer>
  );
};

export default Footer;
