import React from "react";
import { Layers, MapPin, LineChart, ClipboardCheck, CheckCircle, MoveRightIcon, MoveRight } from "lucide-react";
import CornerBrackets from "./CornerBrackets";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-[#2A3B7E] mb-2">{title}</h4>
      <p className="text-sm md:text-[15px] text-[#4A4A4A] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Application: React.FC = () => {
  return (
    <section id="application" className="bg-white py-12 md:py-18">
      <div className=" font-geom max-w-8xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
         

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-[#EF7F44] font-bold md:text-md tracking-widest uppercase mb-2">
                Application
              </p>
               <div className=" h-[3px] bg-[#2A3B7E]  w-full mb-2"></div>
              <h2 className="font-geom font-extrabold text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-6">
             Designed for
Multi-Industry 
Application.

              </h2>
              <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed">
                Powered by{" "}
                <span className="font-light font-semibold text-[#2A3B7E]">Advitta </span>
                  is built as a foundational material technology that enables scalable applications across industries where performance, finish, and adaptability are critical.
              </p>
            </div>

            

<div className="font-geom font-light block grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8">

  {/* STARTING WITH */}
  <div className="rounded-2xl p-6  hover:shadow-md transition">
    
    <h2 className="text-lg md:text-xl font-semibold text-[#2A3B7E] mb-8">
      Starting with :
    </h2>

    <ul className="space-y-6">
      {[
        "Print & Signage",
        "Surface & Wall Applications",
        "Brand & Media Environments",
        "Architectural & Interior Surfaces",
      ].map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[#4A4A4A] text-sm md:text-base">
          <MoveRightIcon className="w-5 h-5 text-[#EF7F44] mt-[2px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

  </div>

  {/* EXPANDING INTO */}
  <div className=" rounded-2xl p-6  hover:shadow-md transition">
    
    <h2 className="text-lg md:text-xl font-semibold text-[#2A3B7E] mb-8">
      Expanding into :
    </h2>

    <ul className="space-y-8">
      {[
        "Consumer Applications",
        "Industrial Use Cases",
        "Large-Scale Material Substitution",
      ].map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[#4A4A4A] text-sm md:text-base">
          <MoveRightIcon className="w-5 h-5 text-[#EF7F44] mt-[2px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

  </div>

</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;


