import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const TopHeader: React.FC = () => {
  return (
    <div className="hidden lg:block border-b border-[#ECE7DF] bg-[#FAF8F5] text-xs text-[#6B655D]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-8 flex items-center justify-end gap-5">
        <Link
          href="#help"
          className="hover:text-black transition-colors text-xs"
        >
          Help
        </Link>
        <div className="flex items-center gap-1 border-l border-[#E2DDD4] pl-4">
          <button
            type="button"
            className="flex items-center gap-1 hover:text-black transition-colors text-xs"
          >
            <span>EN</span>
            <ChevronDown className="w-3 h-3 text-[#8A8174]" />
          </button>
        </div>
      </div>
    </div>
  );
};
