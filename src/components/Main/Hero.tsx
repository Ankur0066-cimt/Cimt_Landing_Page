import React from "react";
import { ArrowRight } from "lucide-react";
import HERO_IMG from "../../assets/Advitta/Image_01_Top.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F9F6F1] overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative overflow-hidden">

          {/* Background */}
          <div
            className="
              relative 
              h-[520px] sm:h-[600px] md:h-[970px] 
              bg-cover md:bg-cover   
              bg-center bg-no-repeat
            "
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >

            {/* Overlay FIX */}
            <div className="absolute 50 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            {/* CONTENT */}
            <div className="font-geom relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 h-full">

              <div className="w-full px-4 md:px-0 md:w-auto md:max-w-none">

  {/* Heading */}
  <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-center mt-10">
    <span className="block whitespace-nowrap text-[clamp(28px,8vw,140px)]">
      The Precision
    </span>

    <span className="block whitespace-nowrap text-[clamp(32px,9vw,160px)]">
      of Expression.
    </span>
  </h1>

  {/* Paragraph */}
  <p className="text-white/90 text-md sm:text-xl md:text-3xl max-w-6xl mx-auto leading-relaxed mt-8">
    Advitta is a proprietary material technology developed by Can Image Media Tech, creating next-generation water-based and water-activated solutions engineered for performance, scalability, and seamless real-world surface applications.
  </p>

  {/* CTA */}
  <div className="mt-6 flex justify-end">
    <a
      href="#cta"
      className="inline-flex items-center gap-6 bg-gradient-to-r from-[#1097C4] to-[#D6BD56] hover:opacity-90 text-white font-semibold text-sm md:text-xl px-5 py-2 rounded-full shadow-lg shadow-black/20 transition"
    >
      Get in Touch
      <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
    </a>
  </div>

</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;