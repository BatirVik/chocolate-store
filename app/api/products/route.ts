import { getManyProducts } from "@/lib/db/product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getManyProducts();
    return NextResponse.json({ products });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
