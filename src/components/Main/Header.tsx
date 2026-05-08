import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../../src/assets/inkspire/Inkspire_Logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 py-3 pt-4 md:pt-6">

      <div className="font-rubik max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 md:px-6 py-2 shadow-sm">

        {/* Logo */}
        <div className="flex justify-start">
          <img
            src={logoImg}
            alt="Logo"
            className="h-5 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">

          <nav className="flex items-center text-[#2A3B7E] md:text-sm font-semibold text-center">

            <a
              href="#the-problem-we-solve"
              className="px-4 border-l first:border-none border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              THE PROBLEM WE SOLVE
            </a>

            <a
              href="#product-categories"
              className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              PRODUCT CATEGORIES
            </a>

            <a
              href="#who-is-inkspire-for"
              className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              WHO IS INKSPIRE FOR
            </a>

            <a
              href="#how-it-works"
              className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              HOW IT WORKS
            </a>

            <a
              href="#application-sectors"
              className="px-4 border-l border-orange-500 hover:text-[#2A3B7E] transition-colors"
            >
              APPLICATION SECTORS
            </a>

          </nav>

          {/* CTA */}
          <a
            href="#cta"
            className="inline-flex items-center whitespace-nowrap bg-[#2A3B7E] hover:bg-[#1f2d62] transition-all text-white text-sm font-semibold px-4 md:px-5 py-2 rounded-full shadow-md"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-3xl shadow-xl p-5 font-rubik">

          <nav className="flex flex-col gap-4 text-[#2A3B7E] font-semibold text-sm">

            <a
              href="#the-problem-we-solve"
              onClick={() => setMenuOpen(false)}
            >
              THE PROBLEM WE SOLVE
            </a>

            <a
              href="#product-categories"
              onClick={() => setMenuOpen(false)}
            >
              PRODUCT CATEGORIES
            </a>

            <a
              href="#who-is-inkspire-for"
              onClick={() => setMenuOpen(false)}
            >
              WHO IS INKSPIRE FOR
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
            >
              HOW IT WORKS
            </a>

            <a
              href="#application-sectors"
              onClick={() => setMenuOpen(false)}
            >
              APPLICATION SECTORS
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