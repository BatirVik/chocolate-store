import prisma from "@/prisma/client";
import { ProductData, SortOption } from "@/lib/definitions";

interface Params {
  query?: string;
  page?: number;
  sort?: SortOption;
}

const PAGE_PRODUCT_COUNT = 24;

export async function getProductsPage({
  query,
  page = 1,
  sort = SortOption.NEW_TO_OLD,
}: Params): Promise<ProductData[]> {
  // eslint-disable-next-line
  const orderByOptions: any = {
    [SortOption.LOW_TO_HIGH]: { priceCents: "asc" },
    [SortOption.HIGH_TO_LOW]: { priceCents: "desc" },
    [SortOption.OLD_TO_NEW]: { createdAt: "asc" },
    [SortOption.NEW_TO_OLD]: { createdAt: "desc" },
  };

  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      priceCents: true,
    },
    where: {
      OR: !query
        ? undefined
        : [
            {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
    },
    orderBy: orderByOptions[sort],
    take: PAGE_PRODUCT_COUNT,
    skip: PAGE_PRODUCT_COUNT * (page - 1),
  });
}

export async function getTotalPages(query?: string): Promise<number> {
  const count = await prisma.product.count({
    where: {
      OR: !query
        ? undefined
        : [
            {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
    },
  });
  return Math.ceil(count / PAGE_PRODUCT_COUNT);
}
