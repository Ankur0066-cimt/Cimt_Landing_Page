import React from "react";
import { ArrowRight } from "lucide-react";
import CornerBrackets from "./CornerBrackets";
import logoImg from "../../../src/assets/Advitta/Advitta_Logo_C.png";

const Header: React.FC = () => {
  return (
   <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 py-3 pt-4 md:pt-6">
<div className="font-geom max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 md:px-6 py-2 shadow-sm">

  {/* LEFT: Logo */}
  <div className="flex items-center">
    <img
      src={logoImg}
      alt="Logo"
      className="h-5 md:h-10 w-[150px] md:w-[280px] object-contain"
    />
  </div>

  {/* RIGHT: Nav + CTA */}
  <div className="flex items-center  md:gap-10">

    {/* Nav */}
    <nav className="hidden md:flex items-center text-[#2A3B7E] md:text-sm font-semibold">
      <a href="#core-philosophy" className="px-4 border-l md:text-lg first:border-none border-orange-500 hover:text-[#2A3B7E] transition-colors">
        Core Philosophy
      </a>
      <a href="#what-we-do" className="px-4  md:text-lg hover:text-[#2A3B7E] transition-colors">
        What We Do
      </a>
       <a href="#application" className="px-4  md:text-lg hover:text-[#2A3B7E] transition-colors">
       Application
      </a>
       <a href="#sustainability" className="px-4  md:text-lg hover:text-[#2A3B7E] transition-colors">
       Sustainability
      </a>
    </nav>

    {/* CTA */}
    <a
      href="#cta"
      className="inline-flex items-center whitespace-nowrap bg-[#2A3B7E] hover:bg-[#1f2d62] transition-all text-white text-sm md:text-xl font-semibold px-4 md:px-5 py-1 rounded-full shadow-md"
    >
      Contact Us
    </a>

  </div>

</div>
</header>
  );
};

export default Header;