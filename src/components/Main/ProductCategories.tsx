// import React from 'react'

// const ProductCategories = () => {
//   return (

//   )
// }

// export default ProductCategories


import React from "react";
import {
  Layers,
  MapPin,
  LineChart,
  ClipboardCheck,
} from "lucide-react";

const ProductCategories: React.FC = () => {
  return (
    <section id="what-we-do" className="bg-[#F9F6F1] py-12 md:py-18">
      <div className="font-archivo max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          {/* Corner Brackets */}
          <div className="pointer-events-none">
            <span className="absolute w-[45px] h-[45px] -top-[14px] -left-[14px] border-t-[17px] border-l-[17px] border-[#EF7F44] rounded-tl-sm"></span>
            <span className="absolute w-[45px] h-[45px] -bottom-[14px] -right-[14px] border-b-[17px] border-r-[17px] border-[#EF7F44] rounded-br-sm"></span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT */}
            <div>
              <p className="text-[#EF7F44] font-bold text-sm tracking-widest uppercase mb-2">
                What We Do
              </p>

              <div className="h-[3px] bg-[#2A3B7E] w-full mb-3"></div>

              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#2A3B7E] leading-tight mb-6">
                Engineered for Scale. <br />
                Built for the Last Mile.
              </h2>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed">
                Powered by{" "}
                <span className="font-bold text-[#2A3B7E]">Advitta</span>, our
                proprietary material technology platform, we bring consistency,
                quality, and performance across every stage — from production,
                printing to last-mile print application.
              </p>
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

              {/* ITEM 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E]  mb-2">
                    Material to Execution
                  </h4>
                  <p className="text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                    We are a material science driven company that has evolved into a full-scale execution partner, ensuring complete control from material innovation to printing and final on-ground application.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                    Rural & Large-Scale Campaign Execution
                  </h4>
                  <p className="text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                    Our network enables seamless deployment across geographies, ensuring brands achieve deep market penetration with speed and accuracy.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                    Tech-Enabled Tracking & Transparency
                  </h4>
                  <p className="text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                    Every execution is backed by structured tracking systems, including location verification, geo tagging, and real-time visibility to ensure accountability.
                  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                    End-to-End Project Management
                  </h4>
                  <p className="text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                    From site identification and approvals to execution and reporting, we manage the entire lifecycle with a process-driven approach.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;