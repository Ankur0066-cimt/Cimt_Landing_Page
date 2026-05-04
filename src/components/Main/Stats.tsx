import React from "react";
import { Smartphone } from "lucide-react";

import innovation from "../../assets/inkspire/Cred_01.png";
import techonology from '../../assets/inkspire/Cred_02.png';

import application from  '../../assets/inkspire/percent.png';
import deployement from   '../../assets/inkspire/Cred_04.png';
import zero from '../../assets/inkspire/Cred_05.png';


interface StatCardProps {
  title: string;
  
  icon?: React.ReactNode;
  isNumber?: boolean;
   iconBoxClassName?: string;
}
const StatCard: React.FC<StatCardProps> = ({ title, icon, isNumber ,iconBoxClassName = "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center", }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-2 shadow-[0_4px_20px_rgba(42,59,126,0.08)] border border-[#F0EBE0] flex flex-col items-center gap-4 hover:shadow-[0_8px_28px_rgba(42,59,126,0.12)] transition-shadow">
      
     
      <div className="h-[150px] w-[180px] flex items-center justify-center rounded-full  text-white">
        {icon && (
          <div
            className={`flex w-full h-full md:w-full md:h-full items-center justify-center overflow-hidden rounded-2xl  ${iconBoxClassName}`}
          >
            {icon}
          </div>
        )}
      </div>
     
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-[#F9F6F1] py-10 md:py-18">
      <div className="font-rubik max-w-9xl mx-auto px-10 md:px-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
  
         <StatCard
  
  title="Outdoor Media Delivered"
 
  icon={
    <img
      src={innovation}
      alt="Innovation"
      className="h-full w-[150px] object-contain"
    />
  }
/>

<StatCard
  
  title="Production Capacity Per Day" 

  icon={
    <img
      src={techonology}
      alt="Teams"
      className="h-full w-full object-contain"
    />
  }
/>

<StatCard
  icon={
    <img
      src={application}
      alt="India map"
      className="h-full w-full object-contain"
    />
  }
  title="Than Traditional Painting"

/>

<StatCard
 icon={
    <img
      src={deployement}
      alt="India map"
      className="h-full w-full object-contain"
    />
  }
 
  title="Best In-Class Warranty"
  
/>

<StatCard
  icon={
   
      <img
        src={zero}
        alt="India map"
        className="w-full h-full object-contain"
      />
  
  }
  title=""
/>


        </div>
      </div>
    </section>
  );
};

export default Stats;