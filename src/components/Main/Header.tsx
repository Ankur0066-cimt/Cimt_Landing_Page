import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../../src/assets/Cimt-1/Can Image_Logo_B.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 py-3 pt-4 md:pt-6">

      <div className="font-archivo max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 md:px-6 py-2 shadow-sm">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Logo"
            className="h-5 md:h-6 w-[150px] md:w-[240px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center md:gap-10">

          <nav className="flex items-center text-[#2A3B7E] md:text-sm font-semibold">
            <a
              href="#core-philosophy"
              className="px-4 border-l md:text-md first:border-none border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              Core Philosophy
            </a>

            <a
              href="#what-we-do"
              className="px-4 md:text-md hover:text-[#2A3B7E] transition-colors"
            >
              What We Do
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#cta"
            className="inline-flex items-center whitespace-nowrap bg-[#2A3B7E] hover:bg-[#1f2d62] transition-all text-white text-sm md:text-md font-semibold px-4 md:px-5 py-2 rounded-full shadow-md"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2A3B7E]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-3xl shadow-xl p-5 font-archivo">

          <nav className="flex flex-col gap-4 text-[#2A3B7E] font-semibold">

            <a
              href="#core-philosophy"
              onClick={() => setMenuOpen(false)}
            >
              Core Philosophy
            </a>

            <a
              href="#what-we-do"
              onClick={() => setMenuOpen(false)}
            >
              What We Do
            </a>

            <a
              href="#cta"
              className="bg-[#2A3B7E] text-white text-center py-2 rounded-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;