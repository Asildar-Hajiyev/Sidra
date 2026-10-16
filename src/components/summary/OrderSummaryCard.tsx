import React from "react";
import { OrderItem } from "@/types/order";
import { TrustBadgeItem } from "@/types/product";
import { OrderItemRow } from "./OrderItemRow";
import { TrustBadges } from "./TrustBadges";

interface OrderSummaryCardProps {
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  estimatedTaxes: number;
  total: number;
  currency: string;
  trustBadges: TrustBadgeItem[];
}

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  items,
  subtotal,
  deliveryFee,
  estimatedTaxes,
  total,
  currency,
  trustBadges,
}) => {
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white border border-[#EBE6DE] rounded-2xl p-5 sm:p-7 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#F0EAE1]">
        <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-normal">
          Order Summary
        </h3>
        <span className="text-xs text-[#8A8174]">
          {totalItemCount} {totalItemCount === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Item List */}
      <div className="divide-y divide-[#F2ECE3]">
        {items.map((item) => (
          <OrderItemRow key={item.id} item={item} />
        ))}
      </div>

      {/* Price Calculations */}
      <div className="pt-4 mt-2 space-y-2.5 text-xs text-[#6B655C] border-t border-[#F0EAE1]">
        <div className="flex items-center justify-between">
          <span>Subtotal ({totalItemCount} items)</span>
          <span className="font-medium text-[#1A1A1A]">
            ${subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span>Delivery</span>
          <span className="font-semibold text-[#1A1A1A] tracking-wider uppercase text-[11px]">
            {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toLocaleString()}`}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span>Estimated taxes</span>
          <span className="font-medium text-[#1A1A1A]">
            ${estimatedTaxes.toLocaleString()}
          </span>
        </div>

        {/* Total Price Row */}
        <div className="pt-3 border-t border-[#EAE4D8] flex items-baseline justify-between">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
              Total ({currency})
            </span>
          </div>
          <span className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Desktop Trust Badges inside card */}
      <div className="hidden lg:block">
        <TrustBadges badges={trustBadges} variant="card" />
      </div>
    </div>
  );
};
