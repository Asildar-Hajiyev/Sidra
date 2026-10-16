import React from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag } from "lucide-react";

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: "Jewellery", href: "#jewellery" },
    { label: "Collections", href: "#collections" },
    { label: "Brands", href: "#brands" },
    { label: "Gifts", href: "#gifts" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <header className="hidden lg:block bg-white border-b border-[#ECE7DF] sticky top-0 z-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo & Category Navigation */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex flex-col items-center">
              <span className="font-serif tracking-[0.25em] text-2xl font-normal text-[#1A1A1A] leading-none uppercase">
                SIDRA
              </span>
              <span className="text-[7.5px] tracking-[0.22em] text-[#8C8479] uppercase mt-1">
                JEWELLERY & LUXURY FINE OBJECTS
              </span>
            </Link>

            <nav className="flex items-center gap-7">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-wider text-[#4A453E] hover:text-black font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Bar & User Actions */}
          <div className="flex items-center gap-6 flex-1 max-w-xl justify-end">
            <div className="relative w-full max-w-xs">
              <Search className="w-3.5 h-3.5 text-[#9E978D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search for jewellery, trends or inspiration..."
                className="w-full bg-[#F7F5F1] text-xs text-[#2A2621] placeholder-[#9E978D] rounded-full pl-9 pr-4 py-2 border border-transparent focus:border-[#D4C8B8] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-5 text-[#2A2621]">
              <Link
                href="#wishlist"
                className="flex items-center gap-1.5 text-xs hover:text-black transition-colors"
              >
                <Heart className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden xl:inline">Wishlist</span>
              </Link>

              <Link
                href="#account"
                className="flex items-center gap-1.5 text-xs hover:text-black transition-colors"
              >
                <User className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden xl:inline">Account</span>
              </Link>

              <Link
                href="#cart"
                className="relative flex items-center gap-1.5 text-xs hover:text-black transition-colors"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                  <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
