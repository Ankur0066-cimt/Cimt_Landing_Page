import React from "react";
import { ArrowRight } from "lucide-react";
import CornerBrackets from "./CornerBrackets";
import HERO_IMG from "../../assets/Cimt-1/Image_Top.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F9F6F1] overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative">

          {/* Background */}
          <div
            className="relative h-[480px] sm:h-[520px] md:h-[900px] bg-cover md:bg-contain   bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >

            {/* Overlay FIXED */}
           
            <div className="absolute inset-50 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
<div className="block md:hidden">
  <CornerBrackets color="orange" size={28} thickness={12} inset={8} />
</div>

<div className="hidden md:block">
  <CornerBrackets color="orange" size={42} thickness={17} inset={20} />
</div>
            {/* Bottom Left Content */}
            <div className="z-50 font-archivo absolute bottom-6 md:bottom-12 left-5 sm:left-6 md:left-12 ">

              <div className="relative max-w-[720px] md:ml-40">

                {/* Corner Brackets */}
               
                {/* Heading */}
                <h1 className="text-white font-semibold tracking-tight 
                  text-4xl sm:text-5xl md:text-7xl 
                  leading-[1.15] md:leading-[1.05]"
                >
                  <span className="block font-archivo font-extrabold">Rural Advertising,</span>
                  <span className="block mb-4 md:mb-6 font-archivo font-extrabold">Reimagined.</span>
                </h1>

                {/* Paragraph */}
                <p className="text-white/90 text-sm md:text-lg max-w-[952px] leading-relaxed">
                  Can Image is a rural and large-scale execution partner, combining proprietary material technology with a process-driven on-ground network to deliver high-quality digital wall printing with unmatched consistency, speed, and transparency.
                </p>

                {/* Button */}
                <button className="mt-5 inline-flex items-center ml-20 md:ml-0 gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base px-6 py-2 rounded-full transition-all">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;