import React from "react";
import Image from "next/image";
import { OrderItem } from "@/types/order";
import { JewelleryGraphic } from "@/components/ui/JewelleryGraphic";

interface OrderItemRowProps {
  item: OrderItem;
}

export const OrderItemRow: React.FC<OrderItemRowProps> = ({ item }) => {
  return (
    <div className="flex items-center gap-3.5 py-3.5 border-b border-[#F2ECE3] last:border-b-0">
      {/* Thumbnail */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#EAE4DA] flex items-center justify-center p-1.5 shadow-2xs">
        {item.graphicType ? (
          <JewelleryGraphic type={item.graphicType} className="w-full h-full object-contain" />
        ) : (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 pr-2">
        <h4 className="text-xs sm:text-[13px] font-medium text-[#1A1A1A] leading-snug">
          {item.name}
        </h4>
        <p className="text-[11px] text-[#78716C] mt-0.5">{item.material}</p>
        <div className="flex items-center gap-1.5 text-[11px] text-[#8C8479] mt-0.5">
          {item.size && <span>Size: {item.size}</span>}
          {item.length && <span>Length: {item.length}</span>}
          <span>•</span>
          <span>Qty: {item.quantity}</span>
        </div>
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0">
        <span className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A]">
          ${item.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
