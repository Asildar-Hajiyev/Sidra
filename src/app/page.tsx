import React from "react";
import { TopHeader } from "@/components/layout/TopHeader";
import { Navbar } from "@/components/layout/Navbar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { OrderHero } from "@/components/order/OrderHero";
import { OrderStepper } from "@/components/order/OrderStepper";
import { OrderDetailsGrid } from "@/components/order/OrderDetailsGrid";
import { AccountPromoBanner } from "@/components/order/AccountPromoBanner";
import { OrderSummaryCard } from "@/components/summary/OrderSummaryCard";
import { TrustBadges } from "@/components/summary/TrustBadges";
import { RecommendedProducts } from "@/components/recommendations/RecommendedProducts";
import { FeedbackSection } from "@/components/feedback/FeedbackSection";
import { initialOrderData, recommendedProducts, trustBadges } from "@/data/mockData";
import { OrderDetails } from "@/types/order";
import { Product, TrustBadgeItem } from "@/types/product";

async function getOrderData(): Promise<{
  order: OrderDetails;
  recommendations: Product[];
  trustBadges: TrustBadgeItem[];
}> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const [orderRes, recsRes] = await Promise.all([
      fetch(`${baseUrl}/api/order`, { next: { revalidate: 60 } }),
      fetch(`${baseUrl}/api/recommendations`, { next: { revalidate: 60 } }),
    ]);

    if (orderRes.ok && recsRes.ok) {
      const orderJson = await orderRes.json();
      const recsJson = await recsRes.json();
      return {
        order: orderJson.data || initialOrderData,
        recommendations: recsJson.recommendations || recommendedProducts,
        trustBadges: recsJson.trustBadges || trustBadges,
      };
    }
  } catch {
    // Fallback gracefully during static build or offline mode
  }

  return {
    order: initialOrderData,
    recommendations: recommendedProducts,
    trustBadges: trustBadges,
  };
}

export default async function OrderConfirmationPage() {
  const { order, recommendations, trustBadges: badges } = await getOrderData();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Top micro-bar for desktop */}
      <TopHeader />

      {/* Main navigation header */}
      <Navbar />
      <MobileHeader />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        {/* Order Hero Section */}
        <OrderHero
          orderId={order.orderId}
          email={order.email}
          expectedDelivery={order.expectedDelivery}
        />

        {/* Order Stepper Tracker */}
        <OrderStepper
          steps={order.steps}
          statusNotice={order.statusMessage}
        />

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (Desktop 7 cols): Delivery/Payment Grid & Account Banner */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1">
            <OrderDetailsGrid
              address={order.deliveryAddress}
              deliveryMethod={order.deliveryMethod}
              payment={order.payment}
              email={order.email}
            />

            {/* Desktop Account Banner */}
            <div className="hidden lg:block">
              <AccountPromoBanner />
            </div>
          </div>

          {/* Right Column (Desktop 5 cols): Order Summary & Trust Badges */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col">
            <OrderSummaryCard
              items={order.items}
              subtotal={order.subtotal}
              deliveryFee={order.deliveryFee}
              estimatedTaxes={order.estimatedTaxes}
              total={order.total}
              currency={order.currency}
              trustBadges={badges}
            />

            {/* Tablet & Mobile Trust Badges row (under Order Summary) */}
            <div className="lg:hidden mt-2">
              <TrustBadges badges={badges} variant="inline" />
            </div>
          </div>

          {/* Mobile / Tablet Account Banner (placed below order summary as shown in 768px & 375px) */}
          <div className="lg:hidden col-span-1 order-3 mt-4">
            <AccountPromoBanner />
          </div>
        </div>

        {/* Recommendations Section: You May Also Like */}
        <RecommendedProducts products={recommendations} />

        {/* Feedback & Newsletter Section (Desktop only as shown in PDF) */}
        <div className="hidden lg:block">
          <FeedbackSection />
        </div>
      </main>

      {/* Multi-column Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
