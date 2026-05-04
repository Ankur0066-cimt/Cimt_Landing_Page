import step1 from "../../assets/inkspire/step1.png";
import step2 from "../../assets/inkspire/step2.png";
import step3 from "../../assets/inkspire/step3.png";
import step4 from "../../assets/inkspire/step4.png";

const steps = [
  {
    no: "1",
    title: "CREATE YOUR OWN DESIGN",
    desc: "",
     img: step1,
  },
  {
    no: "2",
    title: "FREE SITE ASSESSMENT",
    desc: "Our team visits and evaluates your space",
    img: step2,
  },
  {
    no: "3",
    title: "EXECUTION WITH PRECISION",
    desc: "Installed by trained professionals with app-based monitoring",
     img: step3,
  },
  {
    no: "4",
    title: "INSTANT HANDOVER",
    desc: "Delivered with warranty documentation-ready to use immediately",
     img: step4,
  },
];

const StepCircle = ({ img }) => {
  return (
   
    
    <div className="w-[270px] h-[270px]">
  <img
    src={img}
    alt="step"
    className="w-full h-full object-contain"
  />
</div>


    
  );
};

const HowItWorks = () => {


 return (
  <section id="what-we-do" className="bg-[#F9F6F1] py-12 md:py-18">
      <div className=" font-rubik max-w-8xl mx-auto px-6 md:px-10">
                <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
     
        <div className="mb-6 md:mb-8">
          <p className="text-[#EF7F44] font-bold text-md tracking-[0.22em] uppercase">
            HOW IT WORKS
          </p>
          <div className="mt-3 h-[2px] w-full bg-[#EF7F44]" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-[#2A3B7E]">
            4 Simple Steps to Better Walls
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
         {steps.map(({ no, title, desc, img }) => (
  <div key={no} className="flex flex-col ">
    
    <StepCircle img={img} />

    <div className="mt-12">
      <div className="text-4xl font-bold text-[#EF7F44]">{no}</div>
      <h3 className="flex justify-start mt-2 text-lg  font-bold text-[#2A3B7E]">
        {title}
      </h3>
      {desc && (
        <p className="mt-3 text-[#2A3B7E]/90">{desc}</p>
      )}
    </div>

  </div>
))}
        </div>
        </div>
      </div>
    </section>
  )
};

export default HowItWorks;