import React from "react";
import { Phone } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-white py-14 md:py-20">
      <div className="font-geom max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F1] rounded-3xl p-8 md:p-6 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          <div className="grid grid-cols-1 gap-5">

            {/* CONTENT */}
            <div>

              {/* Heading */}
              <h2 className="font-geom font-extrabold text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-5">
                Be Part of the
                <span className="text-[#EF7F44]">
                  {" "}Next Material Shift.
                </span>
              </h2>

              {/* Row Layout */}
              <div className="font-geom font-light flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Left Text */}
                <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed max-w-3xl ">
                  From surface media to multi-industry applications, Advitta
                  is building the foundation for the next generation of
                  material solutions
                </p>

                {/* Right CTA */}
                <div className="flex flex-col md:items-end md:mr-20">

                  <p className="font-semibold text-[#EF7F44] text-sm  md:text-xl mb-2">
                    Speak to Our Team
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-3 text-[#2A3B7E] font-semibold text-base md:text-xl hover:text-[#EF7F44] transition"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#EF7F44]/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#EF7F44]" />
                    </span>
                    +91 98765 43210
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

export default CTA;