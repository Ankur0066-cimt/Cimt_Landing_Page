import React from "react";

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="bg-[#F9F6F1] py-12 md:py-18">
      <div className="font-geom max-w-8xl mx-auto px-6 md:px-10">

        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT */}
            <div>
              <p className="text-[#EF7F44] font-bold md:text-sm tracking-widest uppercase mb-2">
                Sustainability
              </p>

              <div className="h-[3px] bg-[#2A3B7E] w-full mb-2"></div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2A3B7E] leading-tight mb-6">
                Responsible Material <br />
                Innovation at Scale.
              </h2>

              <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed">
                <span className="font-geom font-light text-[#2A3B7E]">
                  Advitta
                </span>{" "}
                is built on the belief that the future of material science must
                be both high-performing and responsible.
              </p>
            </div>

            {/* RIGHT */}
            <div className=" font-geom font-light grid grid-cols-1 sm:grid-cols-1 gap-6 md:gap-8 md:mt-12">
              
              <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed">
                By enabling alternatives to conventional materials such as
                PVC, PP, and PE, Advitta opens the path toward cleaner,
                safer, and more sustainable material usage across
                industries.
              </p>

              <p className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed">
                Our focus is not just on reducing environmental impact — but
                on fundamentally rethinking how materials are designed,
                applied, and scaled.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;