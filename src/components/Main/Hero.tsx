import React from "react";
import { ArrowRight } from "lucide-react";
import CornerBrackets from "./CornerBrackets";
import HERO_IMG from "../../assets/inkspire/Image_01.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F9F6F1] overflow-hidden">
      <div className="max-w-full mx-auto ">
        <div className="relative overflow-hidden">
          {/* Background image */}
          <div
            className="relative h-[480px] sm:h-[520px] md:h-[900px] bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute  bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        
            {/* Text content */}
            <div className="font-rubik relative z-10 flex flex-col justify-start items-center md:items-start text-center md:text-left px-5 sm:px-6 h-full">
             <div className="relative w-full md:pl-10 mt-40">
<div className="w-full">
  <h1 className="text-white font-extrabold tracking-tight text-left 
    text-4xl sm:text-5xl md:text-8xl 
    leading-[1.2] sm:leading-[1.1] md:leading-[1.00]"
  >
    
    <span className="block sm:whitespace-nowrap">
      JUST LIKE&nbsp; edited&nbsp;
    </span>

    <span className="block mb-3 sm:mb-6 md:mb-20 sm:whitespace-nowrap">
      YOU IMAGINED IT!
    </span>

    <span className="block sm:whitespace-nowrap">
      WE'LL INKSPIRE IT.
    </span>

  </h1>
</div>

  <p className="font-bold text-white/90 text-base md:text-lg max-w-3xl leading-relaxed mt-4 text-left">
  Inkspire — Not Paint. Not Wallpaper. A new-age wall finish. </p>
  <p className="font-bold text-white/90 text-base md:text-lg max-w-3xl leading-relaxed text-left">Powered by Advitta — our proprietary material technology that enables a cleaner, faster, and more consistent alternative to traditional painting. this is also edited&nbsp;</p>
</div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
