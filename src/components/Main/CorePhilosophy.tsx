import React from "react";
import HAJMOLA from "../../assets/Advitta/Image_02.png";

const CorePhilosophy: React.FC = () => {
  return (
    <section id="core-philosophy" className="bg-white py-12 md:py-18">
      <div className="font-geom max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F1] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <div className="relative">
              <p className="text-[#EF7F44] font-geom font-bold   font-bold text-sm md:text-base tracking-widest uppercase mb-2 m-2">
                Core Philosophy
              </p>

              <div className="font-geom font-light h-[3px] bg-[#2A3B7E] ml-1 w-full mb-2"></div>

              <h2 className="font-geom font-extrabold text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-6">
                From Material Innovation to <br />
                <span className="text-[#EF7F44]">
                  Industry Transformation.
                </span>
              </h2>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-4">
                Advitta is not just a product — it is a material technology
                platform developed by Can Image Media Tech, designed to
                redefine how materials are used across industries.
              </p>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-4">
                Operating at the intersection of material science,
                technology, and application, Advitta enables the development
                of advanced solutions engineered for consistency,
                manufacturability, and large-scale deployment.
              </p>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-4">
                At its core, Advitta is built as a starting point for a new
                generation of materials — designed to replace conventional
                options with significantly more sustainable alternatives
                across the print, signage, and décor industry, and beyond.
              </p>

              <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-4">
                Much like how foundational material technologies have
                historically transformed industries through wide-ranging
                applications, Advitta is engineered to do the same —
                beginning with surface media and expanding into multiple
                consumer and industrial use cases.
              </p>
            </div>

            {/* RIGHT */}
            <div className="font-geom font-light flex flex-col gap-5">
              <div className="block">

                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[200px] md:h-[350px] mx-4 sm:mx-6 md:mx-20">
                  <img
                    src={HAJMOLA}
                    alt="Hajmola rural wall advertisement"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative mt-6 md:mt-8 px-4 sm:px-6 md:px-20">
                  <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed">
                    For the first time, a material like Advitta challenges
                    the dominance of PVC, PP, and PE, offering a dynamic,
                    high-performance alternative built for real-world
                    scalability.
                  </p>

                  <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mt-4">
                    This is not just innovation — it is a shift in how
                    materials are designed, manufactured, and adopted
                    across industries.
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

export default CorePhilosophy;