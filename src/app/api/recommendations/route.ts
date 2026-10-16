import { NextResponse } from "next/server";
import { recommendedProducts, trustBadges } from "@/data/mockData";

export async function GET() {
  return NextResponse.json({
    success: true,
    recommendations: recommendedProducts,
    trustBadges: trustBadges,
  });
}
