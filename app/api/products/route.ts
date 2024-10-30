import { ReadManyProductsScheme } from "@/lib/schemes";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rawProducts = await prisma.product.findMany();
    const products = ReadManyProductsScheme.parse(rawProducts);
    return NextResponse.json({ products });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
