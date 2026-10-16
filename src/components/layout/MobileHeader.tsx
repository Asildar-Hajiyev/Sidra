"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag, Heart, User, ChevronRight } from "lucide-react";

export const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { label: "Jewellery", href: "#jewellery" },
    { label: "Collections", href: "#collections" },
    { label: "Brands", href: "#brands" },
    { label: "Gifts", href: "#gifts" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <>
      <header className="lg:hidden bg-white border-b border-[#ECE7DF] sticky top-0 z-40">
        <div className="px-4 md:px-8 py-3.5 flex items-center justify-between">
          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 -ml-1.5 text-[#2A2621] hover:text-black focus:outline-none"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Centered Brand Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif tracking-[0.25em] text-xl font-normal text-[#1A1A1A] leading-none uppercase">
              SIDRA
            </span>
            <span className="text-[6.5px] tracking-[0.2em] text-[#8C8479] uppercase mt-0.5">
              JEWELLERY & LUXURY FINE OBJECTS
            </span>
          </Link>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="p-1.5 text-[#2A2621] hover:text-black"
              aria-label="Search"
            >
              <Search className="w-4 h-4 stroke-[1.8]" />
            </button>

            <Link
              href="#cart"
              className="relative p-1.5 text-[#2A2621] hover:text-black"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
              <span className="absolute top-0 right-0 bg-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Expandable Bar */}
        {showSearch && (
          <div className="px-4 py-2 bg-[#FBF9F5] border-t border-[#EFEBE4] animate-fadeIn">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#8C8479] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search jewellery, rings, necklaces..."
                className="w-full bg-white text-xs pl-8 pr-4 py-2 rounded-full border border-[#DFD8CC] focus:outline-none focus:border-black"
              />
            </div>
          </div>
        )}
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-5 border-b border-[#EFEBE4] flex items-center justify-between">
              <span className="font-serif tracking-[0.2em] text-lg uppercase">
                SIDRA
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#4A453E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-5 flex-1 divide-y divide-[#F0ECE5] overflow-y-auto">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 text-sm uppercase tracking-wider text-[#2A2621] hover:text-black"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#A8A196]" />
                </Link>
              ))}

              <div className="pt-4 mt-2 space-y-3">
                <Link
                  href="#wishlist"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-[#4A453E]"
                >
                  <Heart className="w-4 h-4" />
                  <span>My Wishlist</span>
                </Link>
                <Link
                  href="#account"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-[#4A453E]"
                >
                  <User className="w-4 h-4" />
                  <span>Account & Orders</span>
                </Link>
              </div>
            </nav>

            <div className="p-5 bg-[#FAF8F5] border-t border-[#EFEBE4] text-xs text-[#7A7369]">
              <p>Need assistance with your order?</p>
              <p className="font-medium text-black mt-1">support@sidra.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
