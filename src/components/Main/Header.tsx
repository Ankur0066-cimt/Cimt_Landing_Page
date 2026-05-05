import React from "react";
import { ArrowRight } from "lucide-react";
import CornerBrackets from "./CornerBrackets";
import logoImg from "../../../src/assets/inkspire/Inkspire_Logo.png";

const Header: React.FC = () => {
  return (
   <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 py-3 pt-4 md:pt-6">
  <div className="font-rubik max-w-6xl mx-auto flex items-center justify-end bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 md:px-6 py-1 shadow-sm">

    {/* Logo - Left Most */}
  <div className="flex justify-start w-full md:w-[250px]">
  <img
    src={logoImg}
    alt="Logo"
    className="h-5 md:h-10 w-auto object-contain"
  />
</div>

    {/* Nav - pushed slightly right */}
    

    {/* Right Section */}
    <div className=" flex items-end gap-3  md:gap-5 ">
<div className="">
<nav className="hidden md:flex items-center text-[#2A3B7E] md:text-sm font-semibold ml-10 text-center">
  <a href="#the-problem-we-solve" className="px-4  border-l first:border-none items-center  border-orange-500 hover:text-[#2A3B7E] transition-colors">
   THE PROBLEM WE SOLVE
  </a>
  <a href="#product-categories" className="px-4 border-l border-orange-500 items-center  hover:text-[#2A3B7E] transition-colors">
  PRODUCT CATEGORIES
  </a>
  <a href="#who-is-inkspire-for" className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors">
   WHO IS INKSPIRE FOR
  </a>
  <a href="#how-it-works" className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors">
   HOW IT WORKS
  </a>
  <a href="#application-sectors" className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors">
    APPLICATION SECTORS
  </a>
</nav>
</div>
      {/* CTA */}
     <a
  href="#cta"
  className="inline-flex items-center whitespace-nowrap bg-[#2A3B7E] hover:bg-[#1f2d62] transition-all text-white text-sm font-semibold px-4 md:px-5 py-2  rounded-full shadow-md"
>
  <span className="sm:hidden flex justify-end">Contact Us</span>
  <span className="hidden sm:inline flex justify-end">Contact Us</span>
</a>
    </div>

  </div>
</header>
  );
};

export default Header;