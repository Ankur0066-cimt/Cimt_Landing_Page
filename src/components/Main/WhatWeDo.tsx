import React from "react";
import { Layers, MapPin, LineChart, ClipboardCheck } from "lucide-react";
import CornerBrackets from "./CornerBrackets";




const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="bg-white py-12 md:py-18">
      <div className=" font-rubik max-w-8xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
          {/* <CornerBrackets
            color="orange"
            size={45}
            thickness={17}
            inset={-14}
            corners={["tl", "br"]}
          /> */}

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-6">
            {/* Left */}
            <div>
              <p className="text-[#EF7F44] font-bold text-md tracking-widest uppercase mb-2">
              The Problem We Solve
              </p>
               <div className=" h-[3px] bg-[#2A3B7E]  w-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-6">
              Why Switch from Traditional Paint?


              
              </h2>
             
            </div>

            {/* Right */}
            <div className="flex justify-between grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
             <div className="flex flex-col gap-4">
             <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-[#EF7F44] leading-tight ">
              TRADITIONAL PAINT PROBLEMS
 <br />
               
              
              </h2>
                <div className=" h-[3px] bg-[#2A3B7E]  w-full mb-4"></div>
               <div className="flex flex-col text-[#2A3B7E] text-sm md:text-base font-medium md:ml-5 md:space-y-5">
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              Dust, smell, multiple coats
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              Weeks of drying & disruption
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              Limited to solid colors
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              No real-time progress visibility
            </div>
            <div className="pb-2">
              Hidden material & labor costs
            </div>
          </div>
              </div> 
              <div className="flex flex-col gap-4">
               <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-[#EF7F44] leading-tight  ">
               INKSPIRE ADVANTAGE


              
              </h2>
                <div className=" h-[3px] bg-[#2A3B7E]  w-full mb-4"></div>
            <div className="flex flex-col text-[#2A3B7E] text-sm md:text-base font-medium md:ml-5 md:space-y-5">
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              No smell, Zero VOC, single application
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              50% faster with minimal disruption
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              Fully custom printed designs & murals
            </div>
            <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20">
              App-enabled project monitoring
            </div>
            <div className="pb-2">
              Transparent per sq. ft. pricing
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
