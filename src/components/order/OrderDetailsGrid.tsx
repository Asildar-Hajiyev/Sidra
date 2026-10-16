import React from "react";
import {
  MapPin,
  Truck,
  CreditCard,
  Mail,
  Edit2,
  ChevronRight,
} from "lucide-react";
import { DeliveryAddress, DeliveryMethod, PaymentInfo } from "@/types/order";

interface OrderDetailsGridProps {
  address: DeliveryAddress;
  deliveryMethod: DeliveryMethod;
  payment: PaymentInfo;
  email: string;
}

export const OrderDetailsGrid: React.FC<OrderDetailsGridProps> = ({
  address,
  deliveryMethod,
  payment,
  email,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4">
      {/* 1. Delivery Address Card */}
      <div className="bg-white border border-[#EBE6DE] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <MapPin className="w-4 h-4 text-[#8A8174]" />
              <h3 className="text-xs uppercase tracking-wider font-semibold">
                Delivery Address
              </h3>
            </div>
            <button
              type="button"
              className="text-xs text-[#8A8174] hover:text-black font-medium transition-colors flex items-center gap-1"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>

          <div className="mt-3 space-y-0.5 text-xs text-[#4A443C] leading-relaxed">
            <p className="font-semibold text-[#1A1A1A]">{address.fullName}</p>
            <p className="text-[#666057]">{address.line1}</p>
            <p className="text-[#666057]">
              {address.line2}, {address.city} {address.postalCode}, {address.country}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Delivery Method Card */}
      <div className="bg-white border border-[#EBE6DE] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <Truck className="w-4 h-4 text-[#8A8174]" />
              <h3 className="text-xs uppercase tracking-wider font-semibold">
                Delivery Method
              </h3>
            </div>
            <ChevronRight className="w-4 h-4 text-[#A69E92] lg:hidden" />
          </div>

          <div className="mt-3 space-y-0.5 text-xs text-[#4A443C]">
            <p className="font-semibold text-[#1A1A1A]">
              {deliveryMethod.title}
            </p>
            <p className="text-[#696156] font-medium">
              {deliveryMethod.estimatedDate}
            </p>
            <p className="text-[11px] text-[#8C8479] mt-0.5">
              {deliveryMethod.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Payment Method Card */}
      <div className="bg-white border border-[#EBE6DE] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <CreditCard className="w-4 h-4 text-[#8A8174]" />
              <h3 className="text-xs uppercase tracking-wider font-semibold">
                Payment Method
              </h3>
            </div>
            <ChevronRight className="w-4 h-4 text-[#A69E92] lg:hidden" />
          </div>

          <div className="mt-3.5 flex items-center gap-2.5">
            {/* Authentic Mastercard circles */}
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-[#EB001B] inline-block -mr-1.5 opacity-90 shadow-2xs" />
              <span className="w-4 h-4 rounded-full bg-[#F79E1B] inline-block opacity-90 shadow-2xs" />
            </div>
            <span className="text-xs font-medium tracking-wider text-[#1A1A1A]">
              •••• {payment.last4}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Order Updates Card */}
      <div className="bg-white border border-[#EBE6DE] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <Mail className="w-4 h-4 text-[#8A8174]" />
              <h3 className="text-xs uppercase tracking-wider font-semibold">
                Order Updates
              </h3>
            </div>
          </div>

          <div className="mt-3 space-y-0.5 text-xs text-[#4A443C]">
            <p className="text-[#78716C]">We&apos;ll send all updates to</p>
            <p className="font-semibold text-[#1A1A1A]">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
