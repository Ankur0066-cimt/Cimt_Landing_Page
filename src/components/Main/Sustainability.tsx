
import React from "react";
import { Layers, MapPin, LineChart, ClipboardCheck } from "lucide-react";
import CornerBrackets from "./CornerBrackets";
  // import { Home } from "lucide-react"; // or any icon library you use

  import home from '../../assets/inkspire/Residential.png';
import office from '../../assets/inkspire/Offices.png'
import school from '../../assets/inkspire/Schools.png'
import parking from '../../assets/inkspire/Parking.png'
import cafe from '../../assets/inkspire/Restaurants.png'
import retail from '../../assets/inkspire/Retail.png'
import publics from '../../assets/inkspire/public.png'
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const Sustainability: React.FC = () => {
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

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-[#EF7F44] font-semibold text-md tracking-widest uppercase mb-2">
               Application Sectors
              </p>
               <div className=" h-[3px] bg-[#2A3B7E]  w-full mb-2"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight mb-10">
            Where you Can Use Innovation 
 
              
              </h2>
             
            </div>
             </div>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 ">

<div className="flex flex-col text-[#2A3B7E] text-sm md:text-base font-medium md:ml-5 space-y-10">
          
<div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={home} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
    Residential Spaces
  </span>
</div>
           <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={school} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   School & Institutions 
  </span>
</div>
          <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={parking} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   Parking Lots
  </span>
</div>
           <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={office} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   Offices
  </span>
</div>
            
          </div>

          <div className="flex flex-col text-[#2A3B7E] text-sm md:text-base font-medium md:ml-5 space-y-10">
         <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={cafe} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   Restaurants & Cafes
  </span>
</div>
          <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={retail} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   Retail Stores
  </span>
</div>
           <div className="pb-2 mb-2 border-b border-[#2A3B7E]/20 flex items-center gap-2 sm:gap-3">
  <img src={publics} alt="home" className="w-8 h-9" />
  <span className="text-sm sm:text-base">
   Public Spaces
  </span>
</div>
           
          </div>
 </div>
                  
         
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
