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
    <div className="
      bg-white rounded-2xl 
      overflow-hidden
      h-[160px] md:h-[200px]
      shadow-[0_4px_20px_rgba(42,59,126,0.08)] 
      border border-[#F0EBE0] 
      hover:shadow-[0_8px_28px_rgba(42,59,126,0.12)] 
      transition-all
    ">
      
      {icon && (
        <div className="w-full h-full">
          {icon}
        </div>
      )}

    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-[#F9F6F1] py-10 md:py-18">
      <div className="font-archivo max-w-8xl mx-auto px-10 md:px-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
  
         <StatCard
  
  title="Outdoor Media Delivered"
 
  icon={
    <img
      src={innovation}
      alt="Innovation"
      className="h-full w-full object-contain p-8"
    />
  }
/>

<StatCard
  
  title="Production Capacity Per Day" 

  icon={
    <img
      src={techonology}
      alt="Teams"
      className="h-full w-full object-contain p-8"
    />
  }
/>

<StatCard
  icon={
    <img
      src={application}
      alt="India map"
      className="h-full w-full object-contain p-8"
    />
  }
  title="Than Traditional Painting"

/>

<StatCard
 icon={
    <img
      src={deployement}
      alt="India map"
      className="h-full w-full object-contain p-8f"
    />
  }
 
  title="Best In-Class Warranty"
  
/>



        </div>
      </div>
    </section>
  );
};

export default Stats;