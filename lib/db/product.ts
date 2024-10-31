import prisma from "@/prisma/client";
import { ProductData, SortOption } from "@/lib/definitions";

interface Query {
  query?: string;
  page?: number;
  sort?: SortOption;
}

const PAGE_PRODUCT_COUNT = 24;

export async function getProductsPage(query?: Query): Promise<ProductData[]> {
  const page = query?.page || 1;
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      priceCents: true,
    },
    where: {
      OR: !query?.query
        ? undefined
        : [
            {
              name: {
                contains: query?.query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query?.query,
                mode: "insensitive",
              },
            },
          ],
    },
    orderBy: { priceCents: "desc" },
    take: PAGE_PRODUCT_COUNT,
    skip: PAGE_PRODUCT_COUNT * (page - 1),
  });
}

export async function getTotalPages(query?: Query): Promise<number> {
  const count = await prisma.product.count({
    where: {
      OR: !query?.query
        ? undefined
        : [
            {
              name: {
                contains: query?.query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query?.query,
                mode: "insensitive",
              },
            },
          ],
    },
  });
  return Math.ceil(count / PAGE_PRODUCT_COUNT);
}
