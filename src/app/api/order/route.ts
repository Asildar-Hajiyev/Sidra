import { NextResponse } from "next/server";
import { initialOrderData } from "@/data/mockData";

export async function GET() {
  // Simulate network latency if needed, or return directly
  return NextResponse.json({
    success: true,
    data: initialOrderData,
  });
}
