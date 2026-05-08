import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../../src/assets/Advitta/Advitta_Logo_C.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 py-3 pt-4 md:pt-6">
        <div className="font-geom max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 md:px-6 py-2 shadow-sm">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Logo"
              className="h-5 md:h-8 w-[150px] md:w-[230px] object-fill"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center text-[#2A3B7E] text-sm font-semibold">
              <a href="#core-philosophy" className="px-4 border-l md:text-base first:border-none border-orange-500">
                Core Philosophy
              </a>

              <a href="#what-we-do" className="px-4 md:text-base">
                What We Do
              </a>

              <a href="#application" className="px-4 md:text-base">
                Application
              </a>

              <a href="#sustainability" className="px-4 md:text-base">
                Sustainability
              </a>
            </nav>

            <a
              href="#cta"
              className="inline-flex items-center whitespace-nowrap bg-[#2A3B7E] hover:bg-[#1f2d62] text-white text-sm md:text-base font-semibold px-4 md:px-5 py-1 rounded-full shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2A3B7E]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-3xl shadow-xl border border-gray-200 p-5">
            <nav className="flex flex-col gap-4 text-[#2A3B7E] font-semibold">
              <a href="#core-philosophy">Core Philosophy</a>
              <a href="#what-we-do">What We Do</a>
              <a href="#application">Application</a>
              <a href="#sustainability">Sustainability</a>

              <a
                href="#cta"
                className="bg-[#2A3B7E] text-white text-center py-2 rounded-full mt-2"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;