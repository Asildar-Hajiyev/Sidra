"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { JewelleryGraphic } from "@/components/ui/JewelleryGraphic";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(
    product.isWishlisted ?? false
  );
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToBag = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  return (
    <div className="group bg-white border border-[#EBE6DE] rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300">
      <div>
        {/* Product Image & Wishlist Button */}
        <div className="relative aspect-square w-full bg-[#FAF7F2] rounded-xl overflow-hidden mb-3 border border-[#EFEAE2] flex items-center justify-center p-3 sm:p-4">
          {product.graphicType ? (
            <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <JewelleryGraphic
                type={product.graphicType}
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 280px"
            />
          )}

          <button
            type="button"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A453E] hover:text-black transition-colors shadow-xs"
            aria-label="Save to wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                isWishlisted ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </button>
        </div>

        {/* Product Meta */}
        <h4 className="text-xs sm:text-sm font-medium text-[#1A1A1A] line-clamp-1">
          {product.name}
        </h4>
        <p className="text-[11px] text-[#78716C] mt-0.5">{product.material}</p>
        <p className="text-xs sm:text-sm font-semibold text-[#1A1A1A] mt-1.5">
          ${product.price.toLocaleString()}
        </p>
      </div>

      {/* Add to Bag Button */}
      <div className="mt-3.5 pt-3 border-t border-[#F2ECE3]">
        <button
          type="button"
          onClick={handleAddToBag}
          className="w-full flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-xl border border-[#DCD5C9] bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5 stroke-[1.8]" />
          <span>{isAdding ? "Added!" : "Add to Bag"}</span>
        </button>
      </div>
    </div>
  );
};
