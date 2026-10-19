import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { HeroPromoImage } from "./HeroPromoImage";

interface OrderHeroProps {
  orderId: string;
  email: string;
  expectedDelivery: string;
}

export const OrderHero: React.FC<OrderHeroProps> = ({
  orderId,
  email,
  expectedDelivery,
}) => {
  return (
    <section className="bg-[#FAF8F5] pt-6 md:pt-10 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Side: Order Confirmation Content */}
        <div className="lg:col-span-7 lg:flex gap-8 ">
          {/* Checkmark icon */}
          <div className="w-15 h-15 rounded-full bg-[#f6dfd0] border border-[#DFD7CA] flex items-center justify-center text-[#5C5346] mb-5 shadow-xs">
            <Check className="w-7 h-7 stroke-[2.5] " />
          </div>

         <div>
           {/* Heading */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] font-normal tracking-tight leading-[1.2]">
            Thank You,
            <br />
            Your Order Is Confirmed
          </h1>

          {/* Subtitle details */}
          <div className="mt-3 text-xs sm:text-sm text-[#666057] leading-relaxed">
            <p>
              A confirmation email has been sent to{" "}
              <span className="font-medium text-[#1A1A1A]">{email}</span>.
            </p>
            <p className="text-[#807970] text-xs mt-0.5">
              We&apos;ll keep you updated on your order status.
            </p>
          </div>

          {/* Order Details box/meta */}
          <div className="mt-5 space-y-0.5">
            <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
              Order {orderId}
            </p>
            <p className="text-xs text-[#78716C]">
              Expected delivery: <span className="text-[#2C2722] font-medium">{expectedDelivery}</span>
            </p>
          </div>

          {/* Buttons: Track Order & Continue Shopping */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              className="bg-[#141414] hover:bg-black text-white text-xs sm:text-sm font-medium px-7 py-3 rounded-2xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group"
            >
              <span>Track Order</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
            <Link
              href="#shop"
              className="bg-white hover:bg-[#F5F2EB] text-[#1A1A1A] border border-[#D8D2C5] text-xs sm:text-sm font-medium px-6 py-3 rounded-2xl transition-all text-center"
            >
              Continue Shopping
            </Link>
          </div>
         </div>
        </div>

        {/* Right Side: Desktop Promo Image */}
        <div className="lg:col-span-5">
          <HeroPromoImage />
        </div>
      </div>
    </section>
  );
};
