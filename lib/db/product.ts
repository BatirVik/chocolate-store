import prisma from "@/prisma/client";

interface Product {
  id: string;
  name: string;
  description: string | null;
  priceCents: number;
}

export async function getManyProducts(): Promise<Product[]> {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      priceCents: true,
    },
  });
}
