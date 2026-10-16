import React from "react";
import { Check, Package, Truck, Bike, Gift } from "lucide-react";
import { OrderStep } from "@/types/order";

interface OrderStepperProps {
  steps: OrderStep[];
  statusNotice?: string;
}

export const OrderStepper: React.FC<OrderStepperProps> = ({
  steps,
  statusNotice = "Your order has been received and is being prepared. We'll notify you as soon as it ships.",
}) => {
  const renderIcon = (name: OrderStep["iconName"], status: OrderStep["status"]) => {
    const iconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5";
    switch (name) {
      case "check":
        return <Check className={`${iconClass} stroke-[2.5]`} />;
      case "package":
        return <Package className={iconClass} />;
      case "truck":
        return <Truck className={iconClass} />;
      case "bike":
        return <Bike className={iconClass} />;
      case "gift":
        return <Gift className={iconClass} />;
      default:
        return <Check className={iconClass} />;
    }
  };

  return (
    <div className="mt-6 mb-7 bg-white border border-[#EBE6DE] rounded-2xl p-4 sm:p-6 shadow-xs">
      {/* Horizontal Steps Bar */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-3.5 sm:top-4 left-[8%] right-[8%] h-[1.5px] bg-[#EAE4D8] -z-0" />

        <div className="grid grid-cols-5 gap-1 relative z-10 text-center">
          {steps.map((step, index) => {
            const isCompleted = step.status === "completed";
            const isCurrent = step.status === "current";

            return (
              <div
                key={step.id}
                className="flex flex-col items-center group relative"
              >
                {/* Step Circle */}
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                    isCompleted
                      ? "bg-black text-white shadow-xs"
                      : isCurrent
                      ? "bg-white text-black border-2 border-black font-semibold"
                      : "bg-[#FAF8F4] text-[#A69E93] border border-[#E8E2D7]"
                  }`}
                >
                  {renderIcon(step.iconName, step.status)}
                </div>

                {/* Step Title */}
                <span
                  className={`mt-2 text-[9px] sm:text-xs tracking-tight leading-tight font-medium ${
                    isCompleted || isCurrent ? "text-[#1A1A1A]" : "text-[#8E877C]"
                  }`}
                >
                  {step.label}
                </span>

                {/* Step Date */}
                {step.date && (
                  <span className="text-[8px] sm:text-[10px] text-[#8E877C] mt-0.5 whitespace-nowrap">
                    {/* Show full date on tablet/desktop, compact on mobile */}
                    <span className="sm:hidden">17 Sep</span>
                    <span className="hidden sm:inline">{step.date}</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Notice Pill / Callout (Visible on Desktop as in PDF) */}
      {statusNotice && (
        <div className="hidden lg:block mt-6 bg-[#FAF7F2] border border-[#EAE3D6] rounded-xl px-4 py-3 text-center">
          <p className="text-xs sm:text-[13px] text-[#635B4E] leading-relaxed">
            {statusNotice}
          </p>
        </div>
      )}
    </div>
  );
};
