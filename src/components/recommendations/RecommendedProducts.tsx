import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface RecommendedProductsProps {
  products: Product[];
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  products,
}) => {
  return (
    <section className="mt-12 mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">
          You May Also Like
        </h3>
        <Link
          href="#recommendations"
          className="text-xs sm:text-sm text-[#78716C] hover:text-black font-medium flex items-center gap-1 transition-colors"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid: 2 columns on mobile/tablet (showing first 2), 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {products.map((product, index) => {
          // In the PDF, Tablet (768px) and Mobile (375px) show only the first 2 products
          const isExtraOnMobile = index >= 2;

          return (
            <div
              key={product.id}
              className={isExtraOnMobile ? "hidden lg:block" : "block"}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
