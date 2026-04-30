import React from "react";
import CornerBrackets from "./CornerBrackets";
import HAJMOLA from "../../assets/inkspire/Image_02.png";




const CorePhilosophy: React.FC = () => {
  return (
    <section id="core-philosophy" className="bg-white py-12 md:py-18">
      <div className="font-rubik max-w-8xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#F9F6F1] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
         {/* <CornerBrackets
                color="blue"
                size={42}
                thickness={17}
                inset={-18}
                corners={["tl", "br"]}
              /> */}
         
           
            <div className="relative">
              
              <p className="text-[#EF7F44] font-semibold text-md tracking-widest uppercase mb-2 m-2">
               Who Is Inkspire For
              </p>
              <div className=" h-[3px] bg-[#2A3B7E] ml-1  w-full mb-2"></div>
              <h2 className="flex  text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-6">
              Designed for  Every Space & Every Need

 <br />
                
              </h2>
            
              
              

            </div>
            

  <div className="flex justify-between grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
 <div className="flex flex-col gap-5">
                 <div className="rounded-xl  border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#2A3B7E] text-white font-bold text-lg px-5 py-1">
          HomeOwners
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
        Transform your home without the mess, delays, or stress of traditional painting
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl  border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#2A3B7E] text-white font-bold text-lg px-5 py-1">
         Interior Designers
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
         Bring your concepts and 3D renders to life — exactly as envisioned
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl  border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#2A3B7E] text-white font-bold text-lg px-5 py-1">
         Builders & Developers
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
         Finish faster, reduce site downtime, and deliver premium finishes at scale
        </div>
      </div>
               </div>

    {/* IMAGE */}
    <div className="relative rounded-2xl overflow-hidden shadow-lg 
                    h-[200px] md:h-[350px]
                    mx-4 sm:mx-6 md:mx-20">
      <img
        src={HAJMOLA}
        alt="Hajmola rural wall advertisement"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT */}
  
</div>



       
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;
