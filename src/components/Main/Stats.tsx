import React from "react";
import { Smartphone } from "lucide-react";

import innovation from "../../assets/Cimt-1/Cred_01.png"
import techonology from '../../assets/Cimt-1/Cred_02.png';

import application from  '../../assets/Cimt-1/Cred_03.png';
import deployement from   '../../assets/Cimt-1/Cred_04.png';


const INDIA_MAP =
  "https://mgx-backend-cdn.metadl.com/generate/images/592788/2026-04-20/m6x7zwqaafgq/india-map-icon.png";

interface StatCardProps {
  title: string;
  
  icon?: React.ReactNode;
  isNumber?: boolean;
   iconBoxClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, icon }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-[#F0EBE0]
        shadow-[0_4px_20px_rgba(42,59,126,0.08)]
        hover:shadow-[0_8px_28px_rgba(42,59,126,0.12)]
        transition-all
        overflow-hidden
        h-[200px]
        flex
        flex-col
        justify-between
      "
    >
      {/* Image Area */}
      <div
        className="
          h-[120px]
          flex
          items-center
          justify-center
          
         
        "
      >
        <div className="w-full h-[120px] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Text Area */}
      <div
        className="
          min-h-[80px]
          flex
          items-center
          justify-center
          px-4
          text-center
          bg-white
        "
      >
       <p className="text-lg md:text-2xl font-semibold text-[#2A3B7E] leading-tight break-words">
  {title}
</p>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-[#F9F6F1] py-10 md:py-18">
      <div className="font-archivo max-w-8xl mx-auto px-10 md:px-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
  
         <StatCard
  
  title="Prints Executed"
 
  icon={
    <img
      src={innovation}
      alt="Innovation"
      className="h-full w-full object-contain md:object-contain p-8 md:p-8"
    />
  }
/>

<StatCard
  
  title="Daily Active Teams" 

  icon={
    <img
      src={techonology}
      alt="Teams"
      className="h-full w-full object-contain md:object-contain p-8 md:p-8"
    />
  }
/>

<StatCard
  icon={
    <img
      src={application}
      alt="India map"
      className="h-full w-full object-contain md:object-contain"
    />
  }
  title="Pan-India Last-Mile Network"

/>

<StatCard
 icon={
    <img
      src={deployement}
      alt="India map"
      className="h-full w-full object-contain md:object-contain"
    />
  }
 
  title="Tech-Enabled Exucution & Tracking"
  
/>



        </div>
      </div>
    </section>
  );
};

export default Stats;