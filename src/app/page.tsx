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
import {
  initialOrderData,
  recommendedProducts,
  trustBadges,
} from "@/data/mockData";
import { OrderDetails } from "@/types/order";
import { Product, TrustBadgeItem } from "@/types/product";

async function getOrderData(): Promise<{
  order: OrderDetails;
  recommendations: Product[];
  trustBadges: TrustBadgeItem[];
}> {
  let recs = recommendedProducts;

  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const items: { image: string }[] = await res.json();
      recs = recommendedProducts.map((product, i) => ({
        ...product,
        image: items[i % items.length]?.image ?? product.image,
      }));
    }
  } catch {
    // API işləməsə və ya build zamanı internet olmasa mock məhsullar qalır
  }

  return {
    order: initialOrderData,
    recommendations: recs,
    trustBadges: trustBadges,
  };
}

export default async function OrderConfirmationPage() {
  const { order, recommendations, trustBadges: badges } = await getOrderData();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Desktop üçün üst mikro-panel */}
      <TopHeader />

      {/* Əsas naviqasiya başlığı */}
      <Navbar />
      <MobileHeader />

      {/* Əsas məzmun sahəsi */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        {/* Sifariş qarşılama (Hero) bölməsi */}
        <OrderHero
          orderId={order.orderId}
          email={order.email}
          expectedDelivery={order.expectedDelivery}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-stretch">
          {/* Sol sütun: Stepper + Details + Banner */}
          <div className="contents lg:flex lg:flex-col lg:gap-6 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            {/* Sifariş izləmə addımları */}
            <div className="order-1 lg:order-none">
              <OrderStepper
                steps={order.steps}
                statusNotice={order.statusMessage}
              />
            </div>

            {/* Çatdırılma və ödəniş məlumatları */}
            <div className="order-2 lg:order-none">
              <OrderDetailsGrid
                address={order.deliveryAddress}
                deliveryMethod={order.deliveryMethod}
                payment={order.payment}
                email={order.email}
              />
            </div>

            {/* Hesab təklifi bannerı: qalan boşluğu doldurur ki, sol sütun sağın hündürlüyünə çatsın */}
            <div className="order-4 lg:order-none lg:flex-1 [&>*]:h-full">
              <AccountPromoBanner />
            </div>
          </div>

          {/* Sağ sütun: Sifariş xülasəsi sütunun tam hündürlüyünü tutur */}
          <div className="mt-6 lg:mt-0 order-3 lg:order-none flex flex-col gap-2 lg:col-span-5 lg:col-start-8 lg:row-start-1">
            {/* Sifariş xülasəsi kartı */}
            <div className="lg:flex-1 [&>*]:h-full">
              <OrderSummaryCard
                items={order.items}
                subtotal={order.subtotal}
                deliveryFee={order.deliveryFee}
                estimatedTaxes={order.estimatedTaxes}
                total={order.total}
                currency={order.currency}
                trustBadges={badges}
              />
            </div>

            {/* Tablet və mobil üçün etibar nişanları (xülasənin altında) */}
            <div className="lg:hidden">
              <TrustBadges badges={badges} variant="inline" />
            </div>
          </div>
        </div>

        {/* Tövsiyə bölməsi: "Bunlar da xoşunuza gələ bilər" */}
        <RecommendedProducts products={recommendations} />

        {/* Rəy və xəbər bülleteni bölməsi (yalnız desktopda göstərilir) */}
        <div className="hidden lg:block">
          <FeedbackSection />
        </div>
      </main>

      {/* Çoxsütunlu footer */}
      <Footer />

      {/* Mobil üçün yapışqan alt naviqasiya */}
      <MobileBottomNav />
    </div>
  );
}