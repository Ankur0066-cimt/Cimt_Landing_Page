import React from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import CornerBrackets from "./CornerBrackets";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="bg-[#F9F6F1] py-14 md:py-20">
      <div className="font-rubik max-w-8xl mx-auto px-6 md:px-10">
        <div className="relative  bg-[#F9F6F1] rounded-3xl p-8 md:p-6 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
                      {/* <CornerBrackets color="blue" size={42} thickness={17} inset={-12} corners={["tl", "br"]} /> */}

         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

  {/* Left Content */}
  <div className="w-full">

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] mb-4 leading-tight">
      Ready to Elevate Your Spaces?
    </h2>

    <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-6">
      Experience a faster, cleaner, and smarter alternative to traditional painting.
    </p>

  </div>

  {/* Right CTA */}
 <div className="flex flex-col items-start lg:items-end gap-3 w-full">

  <span className="font-bold text-lg md:text-xl text-[#EF7F44] lg:text-right">
    Speak to our Team
  </span>

  <a
    href="tel:+919876543210"
    className="
      flex items-center gap-3
      text-[#2A3B7E]
      font-semibold
      text-base md:text-xl
      hover:text-[#EF7F44]
      transition-colors
    "
  >
    <span className="flex w-10 h-10 rounded-full bg-[#EF7F44]/10 items-center justify-center shrink-0">
      <Phone className="w-5 h-5 text-[#EF7F44]" />
    </span>

    <span className="whitespace-nowrap">
      +91 98765 43210
    </span>
  </a>

</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;