import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";
import { ChevronDown } from "lucide-react";

export const Footer: React.FC = () => {
  const helpLinks = [
    { label: "Contact Us", href: "#contact" },
    { label: "Shipping", href: "#shipping" },
    { label: "Returns", href: "#returns" },
    { label: "Size Guide", href: "#size-guide" },
    { label: "Jewellery Care", href: "#jewellery-care" },
  ];

  const storyLinks = [
    { label: "About Sidra", href: "#about" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Press", href: "#press" },
    { label: "Careers", href: "#careers" },
  ];

  const businessLinks = [
    { label: "Sell on Sidra", href: "#sell" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Affiliates", href: "#affiliates" },
  ];

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#ECE7DF] pt-12 pb-24 lg:pb-12 text-[#2A2621]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-[#ECE7DF]">
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-block">
              <span className="font-serif tracking-[0.25em] text-2xl font-normal text-[#1A1A1A] uppercase block">
                SIDRA
              </span>
              <span className="text-[7.5px] tracking-[0.22em] text-[#8C8479] uppercase block mt-1">
                JEWELLERY & LUXURY FINE OBJECTS
              </span>
            </Link>
            <p className="mt-4 text-xs text-[#78716C] leading-relaxed max-w-sm">
              Crafting timeless fine jewellery with ethically sourced materials and enduring craftsmanship for generations to come.
            </p>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#666057] hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Story Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-4">
              Our Story
            </h4>
            <ul className="space-y-2.5">
              {storyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#666057] hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] mb-4">
              For Businesses
            </h4>
            <ul className="space-y-2.5">
              {businessLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#666057] hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3.5 text-[#4A453E]">
              <a href="#instagram" aria-label="Instagram" className="hover:text-black transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="hover:text-black transition-colors">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#tiktok" aria-label="TikTok" className="hover:text-black transition-colors">
                <FaTiktok className="w-3.5 h-3.5" />
              </a>
              <a href="#pinterest" aria-label="Pinterest" className="hover:text-black transition-colors">
                <FaPinterestP className="w-3.5 h-3.5" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="hover:text-black transition-colors">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Settings */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#857E74]">
          <p>© 2026 Sidra. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="#privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="#cookies" className="hover:text-black transition-colors">
              Cookies
            </Link>
            <div className="flex items-center gap-3 border-l border-[#DFD8CC] pl-4">
              <button type="button" className="flex items-center gap-1 hover:text-black">
                <span>EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <button type="button" className="flex items-center gap-1 hover:text-black">
                <span>AZN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
