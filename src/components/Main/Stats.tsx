import React from "react";
import { Smartphone } from "lucide-react";

import innovation from "../../assets/advitta/Cred_01.png"
import techonology from '../../assets/advitta/Cred_02.png';

import application from  '../../assets/advitta/Cred_03.png';
import deployement from   '../../assets/advitta/Cred_04.png';


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
       <p className="text-lg md:text-xl font-semibold text-[#2A3B7E] leading-tight break-words">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
  
         <StatCard
  
  title="R&D-Led Innovation"
 
  icon={
    <img
      src={innovation}
      alt="Innovation"
      className="h-full w-full object-contain md:object-contain p-4 md:p-4 "
    />
  }
/>

<StatCard
  
  title="Inventor-Driven Technology Platform" 

  icon={
    <img
      src={techonology}
      alt="Teams"
      className="h-full w-full object-contain md:object-contain p-4 md:p-4 "
    />
  }
/>

<StatCard
  icon={
    <img
      src={application}
      alt="India map"
      className="h-full w-full object-contain md:object-contain p-4 md:p-4"
    />
  }
  title="Scalable Material Applications"

/>

<StatCard
 icon={
    <img
      src={deployement}
      alt="India map"
      className="h-full w-full object-contain md:object-contain p-4 md:p-4"
    />
  }
 
  title="Built For Real-World Deployment"
  
/>

<StatCard
 icon={
    <img
      src={deployement}
      alt="India map"
      className="h-full w-full object-contain md:object-contain p-4 md:p-4"
    />
  }
 
  title="Worldwide Patented Technology"
  
/>


        </div>
      </div>
    </section>
  );
};

export default Stats;