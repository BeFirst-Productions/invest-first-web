import React from "react";

export default function CompanyFormation() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         <div className="relative group">
      {/* Outer glow */}
      <div
        className={`absolute -inset-1 rounded-[28px] blur-2xl opacity-70 `}
      />

      {/* Card */}
     <div className="flex w-full">
  <div className="flex-1  py-8 bg-black relative border-b-2  border-r-2 rounded-tr-none left-0.5   z-10 rounded-br-[28px]">
  </div>

  <div className="flex-1 border-2 py-8 border-b-0 rounded-tl-[28px] rounded-tr-[28px] z-20"></div>
</div>

      <div
        className={`z-0 relative h-full rounded-[28px] border-2 border-t-0
        bg-gradient-to-br from-[#08152b]/90 to-[#02050b]/95 rounded-tr-none
        backdrop-blur-2xl  flex flex-col justify-between
        transition-all duration-500 group-hover:scale-[1.03]
        shadow-[0_0_40px_rgba(0,0,0,0.8)]`}
      >
             {/* <button
          className={`mt-4 w-fit flex items-center gap-3 rounded-full px-6 py-2.5 text-sm font-medium transition-all
          ${
           
               "bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          }`}
        >
          Button
          <span className="text-lg">→</span>
        </button> */}
        <div className="p-4">

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Start your UAE mainland company setup, 
trade freely, partner with government 
entities, and enjoy full operational 
flexibility.
          </p>
          <h3
            className={`text-2xl font-semibold tracking-wide ${
              "text-white"
            }`}
          >
            Mainland
          </h3>
        </div>

   
      </div>
    </div>

       
      </div>
    </section>
  );
}
