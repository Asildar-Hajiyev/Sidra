import React from "react";
import Image from "next/image";

export const AccountPromoBanner: React.FC = () => {
  return (
    <div className="bg-[#F6F1EA] border border-[#E8DFD3] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column Text Content */}
        <div className="md:col-span-7 z-10">
          <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] font-normal leading-snug">
            Save your order and <br className="hidden sm:inline" />
            track everything in one place
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6E6659] leading-relaxed max-w-md">
            Create an account to view your orders, save your favourite items, and
            get personalised recommendations.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              className="bg-[#141414] hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-xs"
            >
              Create Account
            </button>
            <button
              type="button"
              className="text-xs sm:text-sm text-[#78716C] hover:text-black font-medium transition-colors"
            >
              Not now
            </button>
          </div>
        </div>

        {/* Right Column Phone Mockup & Luxury Floating Tag */}
        <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-3 relative">
          {/* Phone Mockup */}
          <div className="relative w-28 sm:w-36 h-40 sm:h-48 bg-white rounded-xl sm:rounded-2xl shadow-md border-2 border-white overflow-hidden flex flex-col">
            <div className="bg-[#FAF8F5] py-1.5 px-2 text-center border-b border-[#EFEBE4]">
              <span className="text-[8px] uppercase font-serif tracking-widest text-[#736A5E]">
                Sidra
              </span>
            </div>
            <div className="relative flex-1 w-full bg-[#FAF7F2]">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80"
                alt="Ring preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 150px"
              />
            </div>
          </div>

          {/* Floating Card: A More Meaningful Tomorrow */}
          <div className="bg-white/95 backdrop-blur-xs border border-[#ECE5DB] p-3 sm:p-4 rounded-xl shadow-md max-w-[110px] sm:max-w-[130px]">
            <p className="font-serif italic text-xs sm:text-sm text-[#695F50] leading-tight font-light">
              A More
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#695F50] leading-tight font-light">
              Meaningful
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#695F50] leading-tight font-light">
              Tomorrow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
