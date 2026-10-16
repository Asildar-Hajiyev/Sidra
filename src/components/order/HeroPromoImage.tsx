import React from "react";

export const HeroPromoImage: React.FC = () => {
  return (
    <div className="hidden lg:block relative h-full min-h-[240px] rounded-2xl overflow-hidden shadow-xs border border-[#EBE4DA] bg-[#EFE9DF]">
      {/* Background with luxury draped silk texture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80')",
          filter: "brightness(0.96) contrast(1.02)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#EBE4DA]/70 via-[#F7F2EA]/40 to-transparent" />

      {/* Decorative Stationary Envelope & Brand Card */}
      <div className="absolute right-8 bottom-7 bg-[#FCFBF8]/95 backdrop-blur-md px-7 py-6 rounded-xl shadow-xl border border-[#EDE5DA] max-w-[220px] transform rotate-[-2deg]">
        <div className="space-y-0.5">
          <p className="font-serif italic text-base text-[#615647] leading-tight font-light">
            A More
          </p>
          <p className="font-serif italic text-base text-[#615647] leading-tight font-light">
            Than
          </p>
          <p className="font-serif italic text-base text-[#615647] leading-tight font-light">
            A Purchase
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-[#ECE3D5]">
          <span className="font-serif tracking-[0.25em] text-[11px] font-semibold text-[#1A1A1A] uppercase block">
            SIDRA
          </span>
        </div>
      </div>
    </div>
  );
};
