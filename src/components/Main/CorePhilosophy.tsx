import React from "react";
import CornerBrackets from "./CornerBrackets";
import HAJMOLA from "../../assets/Cimt-1/image1.png";
import gulf from "../../assets/Cimt-1/image2.png";




const CorePhilosophy: React.FC = () => {
  return (
    <section id="core-philosophy" className="bg-white py-12 md:py-18">
  <div className="font-archivo max-w-8xl mx-auto px-6 md:px-10">

    <div className="relative bg-[#F9F6F1] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">

      {/* Corner Brackets */}
      <div className="pointer-events-none">
        <span className="absolute w-[42px] h-[42px] -top-[18px] -left-[18px] border-t-[17px] border-l-[17px] border-[#2A3B7E] rounded-tl-sm"></span>
        <span className="absolute w-[42px] h-[42px] -bottom-[18px] -right-[18px] border-b-[17px] border-r-[17px] border-[#2A3B7E] rounded-br-sm"></span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div className="relative">

          <p className="text-[#EF7F44] font-bold text-sm tracking-widest uppercase mb-2 ml-1">
            Core Philosophy
          </p>

          <div className="h-[3px] bg-[#2A3B7E] ml-1 w-full mb-3"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2A3B7E] leading-tight mb-6">
            From Visibility to <br />
            <span className="text-[#EF7F44]">Verifiable Impact.</span>
          </h2>

          <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed mb-4">
            At Can Image, execution is not just about presence — it's about precision, accountability, and scale. We believe rural and large-scale advertising requires more than intent; it demands a structured, process-driven approach that ensures every planned location is executed exactly as promised.
          </p>

          <p className="text-[#4A4A4A] text-base md:text-[17px] leading-relaxed">
            By combining proprietary material technology with on-ground expertise, we have redefined how brands achieve visibility by delivering not just reach, but verifiable on-ground data. This is not just execution — it is a shift from unstructured deployment to a system-led framework built for consistency and trust.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          <div className="rounded-2xl overflow-hidden shadow-lg md:shadow-none h-[200px] sm:h-[250px] md:w-[500px] sm:w-[600px]">
            <img
              src={HAJMOLA}
              alt="Hajmola rural wall advertisement"
              className="w-full h-full object-cover md:object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg md:shadow-none h-[200px] sm:h-[250px] md:w-[500px] sm:w-[600px]">
            <img
              src={gulf}
              alt="Gulf Oil rural wall advertisement"
              className="w-full h-full object-cover md:object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  </div>
</section>
  );
};

export default CorePhilosophy;
