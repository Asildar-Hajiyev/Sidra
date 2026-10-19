// app/api/recommendations/route.ts
import { NextResponse } from "next/server";
import { recommendedProducts, trustBadges } from "@/data/mockData";

export async function GET() {
  let recommendations = recommendedProducts;

  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
      { next: { revalidate: 3600 } }
    );

    if (res.ok) {
      const items: { image: string }[] = await res.json();

      // Mock məhsulların şəkillərini FakeStore şəkilləri ilə əvəz et
      recommendations = recommendedProducts.map((product, i) => ({
        ...product,
        image: items[i % items.length]?.image ?? product.image,
      }));
    }
  } catch {
    // API işləməsə, mockData-dakı orijinal şəkillər qalır
  }

  return NextResponse.json({
    success: true,
    recommendations,
    trustBadges,
  });
}