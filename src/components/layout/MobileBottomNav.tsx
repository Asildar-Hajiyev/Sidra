import React from "react";
import Link from "next/link";
import { Home, Search, Heart, User } from "lucide-react";

export const MobileBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ECE7DF] py-2 px-6 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-[#1A1A1A] hover:text-black transition-colors"
        >
          <Home className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </Link>

        <Link
          href="#search"
          className="flex flex-col items-center gap-1 text-[#78716C] hover:text-black transition-colors"
        >
          <Search className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px] font-medium tracking-wide">Search</span>
        </Link>

        <Link
          href="#wishlist"
          className="flex flex-col items-center gap-1 text-[#78716C] hover:text-black transition-colors"
        >
          <Heart className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px] font-medium tracking-wide">Wishlist</span>
        </Link>

        <Link
          href="#account"
          className="flex flex-col items-center gap-1 text-[#78716C] hover:text-black transition-colors"
        >
          <User className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px] font-medium tracking-wide">Account</span>
        </Link>
      </div>
    </nav>
  );
};
