import React from "react";
import Image from "next/image";

export const AccountPromoBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#F6F1EA] shadow-xs min-h-[220px] lg:min-h-[240px]">
      {/* Arxa fon şəkli: telefon + üzüklər + "A More Meaningful Tomorrow" şəklin içindədir */}
      <Image
           src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80"
        alt=""
        fill
        priority={false}
        className="object-cover object-right"
        sizes="(max-width: 1024px) 100vw, 700px"
        aria-hidden="true"
      />

      {/* Soldan krem rəngə keçid: mətn oxunaqlı qalır, sağda şəkil açıq görünür */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F6F1EA] from-35% via-[#F6F1EA]/70 via-55% to-transparent"
        aria-hidden="true"
      />

      {/* Məzmun */}
      <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-7">
        <div className="max-w-[55%] sm:max-w-[50%] lg:max-w-[48%]">
          <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] font-normal leading-snug">
            Save your order and <br className="hidden sm:inline" />
            track everything in one place
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6E6659] leading-relaxed">
            Create an account to view your orders, save your favourite items, and
            get personalised recommendations.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              className="bg-[#141414] hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-xl transition-all shadow-xs"
            >
              Create Account
            </button>
            <button
              type="button"
              className="text-xs sm:text-sm text-[#78716C] hover:text-black font-medium underline underline-offset-2 transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};