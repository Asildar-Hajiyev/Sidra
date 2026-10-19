import React from "react";
import { ShieldCheck, Globe, RotateCcw, Award } from "lucide-react";
import { TrustBadgeItem } from "@/types/product";

interface TrustBadgesProps {
  badges: TrustBadgeItem[];
  variant?: "card" | "inline";
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({
  badges,
  variant = "card",
}) => {
  const getIcon = (name: TrustBadgeItem["iconName"]) => {
    const iconClass = "w-4 h-4 text-[#8C8479]";
    switch (name) {
      case "shield":
        return <ShieldCheck className={iconClass} />;
      case "globe":
        return <Globe className={iconClass} />;
      case "rotate-ccw":
        return <RotateCcw className={iconClass} />;
      case "award":
        return <Award className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  if (variant === "inline") {
    return (
      <div className="grid grid-cols-4 gap-2 py-4 my-2 text-center">
        {badges.map((badge) => (
          <div key={badge.id} className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EAE4D8] flex items-center justify-center mb-1.5">
              {getIcon(badge.iconName)}
            </div>
            <span className="text-[10px] font-medium text-[#1A1A1A] leading-tight">
              {badge.title.split(" ")[0]} <br className="sm:hidden" />
              {badge.title.split(" ").slice(1).join(" ")}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 pt-6 border-t border-[#F0EAE1] flex flex-col gap-4">
      {badges.map((badge) => (
        <div key={badge.id} className="flex items-start gap-2.5">
          <div className="mt-0.5 p-1.5 rounded-full bg-[#F7F5F0] border border-[#EAE4D8] flex-shrink-0">
            {getIcon(badge.iconName)}
          </div>
          <div>
            <h5 className="text-[11px] font-semibold text-[#1A1A1A] leading-tight">
              {badge.title}
            </h5>
            <p className="text-[10px] text-[#857E74] leading-tight mt-0.5">
              {badge.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
