import React from 'react'

const ProductCategories = () => {
  return (
  <section id="product-categories" className="bg-[#F9F6F1] py-12 md:py-18">
      <div className=" font-rubik max-w-8xl mx-auto px-6 md:px-10">
        <div className="relative bg-[#F9F6F5] rounded-3xl p-8 md:p-14 shadow-[0_4px_24px_rgba(42,59,126,0.06)] border border-[#F0EBE0]">
          {/* <CornerBrackets
            color="orange"
            size={45}
            thickness={17}
            inset={-14}
            corners={["tl", "br"]}
          /> */}

         <div className="mb-8 md:mb-12">
      <p className="text-[#EF7F44] font-bold text-md tracking-[0.2em] uppercase mb-3">
        PRODUCT CATEGORIES
      </p>

      <div className="h-[2px] bg-[#EF7F44] w-full mb-6"></div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2A3B7E] leading-tight">
        Explore Our Range
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

      {/* CARD */}
      <div className="rounded-xl border-2 border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#EF7F44] text-white font-bold text-lg px-5 py-3">
          Classic Printed Paint
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
          Clean, modern finishes for everyday spaces
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl border-2 border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#EF7F44] text-white font-bold text-lg px-5 py-3">
          Designer Paint
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
          Elevated premium design looks
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl border-2 border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#EF7F44] text-white font-bold text-lg px-5 py-3">
          Aesthetic Paint Murals
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
          Custom-designed feature walls that make a statement
        </div>
      </div>

      {/* CARD */}
      <div className="rounded-xl border-2 border-[#2A3B7E] overflow-hidden">
        <div className="bg-[#EF7F44] text-white font-bold text-lg px-5 py-3">
          Functional Paint Murals
        </div>
        <div className="bg-[#F9F6F5] px-5 py-5 text-[#2A3B7E] text-base leading-relaxed">
          Purpose-driven designs for commercial and public spaces
        </div>
      </div>

    </div>


        </div>
      </div>
    </section>
  )
}

export default ProductCategories
