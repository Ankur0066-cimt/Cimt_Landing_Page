

import React from "react";
import logoImg from "../../assets/Advitta/Advitta_Logo_WTL_Bottom_C.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A3B7E] text-white py-6 md:py-8">
      <div className="font-geom max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <img
            src={logoImg}
            alt="Logo"
            className="h-18 w-[300px] object-cover"
          />
        </div>

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