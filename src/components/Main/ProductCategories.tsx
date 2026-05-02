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
      <div className="font-geom max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          {/* Corner Brackets */}


          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT */}
            <div>
              <p className="font-geom text-[#EF7F44] font-bold md:text-md tracking-widest uppercase mb-2">
                What We Do
              </p>

              <div className="h-[3px] bg-[#2A3B7E] w-full mb-3"></div>

              <h2 className=" font-geom font-extrabold text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-6">
                Engineered for Application. <br />
                Built for Scale.
              </h2>

              <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed">
                Powered by{" "}
                <span className="font-bold text-[#2A3B7E]">Advitta</span>,  our proprietary material technology platform, we bring consistency, quality, and performance across every stage — from production, printing to last-mile print application.
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
                    Material Technology Development
                  </h4>
                  <p className="font-geom font-light text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                  We develop proprietary material systems engineered to improve performance, durability, and finish across diverse applications — built from first principles, not iterations. </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                  Application-First Engineering
                  </h4>
                  <p className="font-geom font-light text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                   Every solution is designed with its end-use in mind, ensuring it performs consistently in real-world conditions, not just controlled environments.  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                   Integrated Systems & Processes </h4>
                  <p className="font-geom font-light text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                   Our technology integrates with application systems and structured workflows to ensure precision, repeatability, and consistency across deployment.  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#EF7F44]/10 text-[#EF7F44] flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-xl font-bold text-[#2A3B7E] mb-2">
                    Scalable Manufacturing
                  </h4>
                  <p className="font-geom font-light text-sm md:text-[17px] text-[#4A4A4A] leading-relaxed">
                   Advitta is engineered for production — enabling quality control, repeatability, and large-scale output across geographies. </p>
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