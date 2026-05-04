import React from "react";
import { Phone, ArrowRight, Check } from "lucide-react";
import step1 from "../../assets/Cimt-1/image3.png";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-white py-14 md:py-20">
      <div className="font-archivo max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F1] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          {/* Corner Brackets */}
          <div className="pointer-events-none">
            <span className="absolute w-[42px] h-[42px] -top-[12px] -left-[12px] border-t-[17px] border-l-[17px] border-[#2A3B7E] rounded-tl-sm"></span>
            <span className="absolute w-[42px] h-[42px] -bottom-[12px] -right-[12px] border-b-[17px] border-r-[17px] border-[#2A3B7E] rounded-br-sm"></span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <div>

              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#2A3B7E] leading-tight mb-6">
                Bring Precision to Your <br />
                <span className="text-[#EF7F44]">Next Campaign.</span>
              </h2>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-8 max-w-[80f0px]">
                With Can Image, every wall is accounted for, every location is verified, and every campaign is delivered with precision by Advitta.
              </p>

              <p className="font-bold text-[#EF7F44] text-xl md:text-xl mb-3">
                Speak to Our Team
              </p>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 text-[#2A3B7E] font-extrabold text-xl md:text-xl hover:text-[#EF7F44] transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#EF7F44]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#EF7F44]" />
                </span>
                +91 98765 43210
              </a>

            </div>

            {/* RIGHT CARD */}
            <div className=" rounded-2xl text-white relative overflow-hidden">

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-auto h-auto rounded-full  blur-3xl"></div>

             <img src={step1} alt="step" className="w-full h-[340px] object-cover" />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;